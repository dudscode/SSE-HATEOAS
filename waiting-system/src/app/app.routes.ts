import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreatedTicketComponent } from './pages/created-ticket/created-ticket.component';
import { CallTicketComponent } from './pages/call-ticket/call-ticket.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'create',
        component: CreatedTicketComponent
    },
    {
        path: 'ticket',
        component: CallTicketComponent
    }
];
