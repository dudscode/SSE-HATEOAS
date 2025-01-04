import { Component, Inject } from '@angular/core';
import { CardActionComponent } from '../../shared/components/card-action/card-action.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardActionComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) {}

  action(url: string) {
    this.router.navigate([url]);
  }
}
