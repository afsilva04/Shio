import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from './pages.component';
import { BlankComponent } from './blank/blank.component';
import { SearchComponent } from './search/search.component';
import { UserCreateComponent } from './user/user-create.component';
import { UserListComponent } from './user/user-list.component';
import { UserUpdateComponent } from './user/user-update.component';
import { TransactionOutCreateComponent } from './transaction/transaction-out-create.component';
import { TransactionOutUpdateComponent } from './transaction/transaction-out-update.component';
import { TransactionListComponent} from './transaction/transaction-list.component';
import { SimulateInvoiceComponent } from './invoice/simulate-invoice.component';
import { AppointmentCreateComponent } from './appointment/appointment-create.component';
import { AppointmentUpdateComponent } from './appointment/appointment-update.component';
import { AppointmentListComponent } from './appointment/appointment-list.component';
import { ClientCreateComponent } from './client/client-create.component';
import { ClientUpdateComponent } from './client/client-update.component';
import { ClientListComponent } from './client/client-list.component';
import { TicketComponent } from './appointment/ticket.component'
import { TicketInvoiceComponent } from './invoice/ticket-invoice.component';


import { AuthGuard } from '../auth.guard';

export const routes: Routes = [
    {
        path: '', 
        component: PagesComponent,
        children:[
            { path:'', redirectTo:'dashboard', pathMatch:'full' },
            { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard] },          
            { path: 'blank', component: BlankComponent, data: { breadcrumb: 'Blank page' } },
            { path: 'search', component: SearchComponent, data: { breadcrumb: 'Search' } },
            { path: 'user-create', component: UserCreateComponent, data: { breadcrumb: 'Crear Usuario' } },
            { path: 'user-list', component: UserListComponent, data: { breadcrumb: 'Ver Usuarios' } },
            { path: 'user-update/:id', component: UserUpdateComponent, data: { breadcrumb: 'Actualizar Usuario' } },
            { path: 'client-create', component: ClientCreateComponent, canActivate: [AuthGuard] },
            { path: 'client-update/:id', component: ClientUpdateComponent },
            { path: 'client-list', component: ClientListComponent },            
            { path: 'transaction-out-create', component: TransactionOutCreateComponent },
            { path: 'transaction-out-update/:id', component: TransactionOutUpdateComponent },
            { path: 'transaction-list', component: TransactionListComponent },
            { path: 'simulate-invoice/:id/:sub', component: SimulateInvoiceComponent },
            { path: 'appointment-create', component: AppointmentCreateComponent },
            { path: 'appointment-update/:id', component: AppointmentUpdateComponent },            
            { path: 'appointment-list', component: AppointmentListComponent },
            { path: 'ticket/:id', component: TicketComponent },
            { path: 'ticket-invoice/:id', component: TicketInvoiceComponent }
       ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);