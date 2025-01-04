import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarAction, MatSnackBarActions, MatSnackBarLabel, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar-annotated',
  standalone: true,
  imports: [MatButtonModule, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction],
  templateUrl: './snack-bar-annotated.component.html',
  styleUrl: './snack-bar-annotated.component.scss'
})
export class SnackBarAnnotatedComponent {
  snackBarRef = inject(MatSnackBarRef);
}
