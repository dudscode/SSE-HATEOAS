import { Component, OnInit } from '@angular/core';
import { CardActionComponent } from '../../shared/components/card-action/card-action.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarAnnotatedComponent } from '../../shared/components/snack-bar-annotated/snack-bar-annotated.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { TicketService } from '../../core/services/tickets/ticket.service';
import { IPayloadTicket, ITicket } from '../../core/interface/ticket.interface';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-created-ticket',
  standalone: true,
  imports: [CardActionComponent,FormsModule, MatFormFieldModule, MatInputModule,MatProgressSpinnerModule, MatListModule, ReactiveFormsModule],
  templateUrl: './created-ticket.component.html',
  styleUrl: './created-ticket.component.scss'
})
export class CreatedTicketComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required)
  });
  showLoading = false;
  showGetTicket = true;
  isMyTurn = false;
  myTicket : ITicket = {id: 0, name: '', preferredTicket: false};
  lastTickets : ITicket[] = [{id: 0, name: '', preferredTicket: false}];

  constructor(
    private _snackBar: MatSnackBar,
    private ticketService: TicketService
  ) {}

  ngOnInit() {
    this.getTickets();
  }

  action(typeTicket: string) {
    if(!this.profileForm.valid) {
      this._snackBar.openFromComponent(SnackBarAnnotatedComponent);
      return;
    }
    this.createTicket(typeTicket==='preferred');
  
  }
  createTicket(typeTicket: boolean = false) {
    this.showLoading = true;
    const payload : IPayloadTicket = {
      name: this.profileForm.value.name || '',
      preferredTicket: typeTicket
    }
    this.ticketService.createTicket(payload).pipe(
      finalize(() => {
        this.showLoading = false;
      })
    ).subscribe(
    {
      next: (ticket) => {
        this.myTicket = ticket;
        this.showGetTicket = false;
        this.getMyTicket();
      },
      error: (error) => {
        this._snackBar.open('Error creating ticket', 'Close');
      }
    }
    );
  }
  getTickets() {
    this.ticketService.getLastTickets().subscribe({
      next: (tickets) => {
        this.lastTickets = tickets;
      },
      error: (_) => {
        this._snackBar.open('Error getting tickets', 'Close');
      }
    });
  }
  getMyTicket() {
    this.ticketService.getMessages(this.myTicket.id).subscribe({
      next: (message) => {
        if(message?.isMyTicket){
          this.isMyTurn =true
          this._snackBar.open('Sua vez chegou', 'Close')
        }
        this.getTickets();
        console.log('chamou')
        
      },
      error: (_) => {
        this._snackBar.open('Error getting messages', 'Close');
      }
    });
  }
}
