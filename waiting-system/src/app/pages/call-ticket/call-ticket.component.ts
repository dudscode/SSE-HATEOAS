import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { IHateoas, ITicket } from '../../core/interface/ticket.interface';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { TicketService } from '../../core/services/tickets/ticket.service';
@Component({
  selector: 'app-call-ticket',
  standalone: true,
  imports: [MatListModule,MatButtonModule,MatIconModule],
  templateUrl: './call-ticket.component.html',
  styleUrl: './call-ticket.component.scss'
})
export class CallTicketComponent implements OnInit {
  lastTicket: ITicket = {id: 0, name: '', preferredTicket: false};
  ticketNormalList: ITicket[] = [];
  ticketPreferredList: ITicket[] = [];

  constructor(
    private ticketService: TicketService
  ) {
    
  }
  ngOnInit(): void {
    this.getTicketsNormal();
    this.getTicketsPreferred();
  }
  callNextTicket(ticket: ITicket) {
    if(!ticket.links[2]) {
      return;
    }
    this.ticketService.postHatetoas(ticket.links[2].href, {}).subscribe(
      (_) => {
        this.lastTicket = ticket
        this.getTicketsNormal();
        this.getTicketsPreferred();
      }
    );
     
  }
  getTicketsNormal() {
    this.ticketService.getTicketsNormal().subscribe(
      (tickets: ITicket[]) => {
        this.ticketNormalList = tickets;
      }
    )
  }
  getTicketsPreferred() {
    this.ticketService.getTicketsPreferred().subscribe(
      (tickets: ITicket[]) => {
        this.ticketPreferredList = tickets;
      }
    )
  }
}
