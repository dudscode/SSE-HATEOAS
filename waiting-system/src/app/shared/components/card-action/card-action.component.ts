import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card-action',
  standalone: true,
  imports: [MatIconModule, MatCardModule],
  templateUrl: './card-action.component.html',
  styleUrl: './card-action.component.scss'
})
export class CardActionComponent {
  @Input() title: string = '';
  @Input() icon: string = '';
  @Output() clickAction: EventEmitter<any> = new EventEmitter();

  action() {
    this.clickAction.emit();
  }
}
