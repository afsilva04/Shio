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
// import { TicketComponent } from './appointment/ticket.component'
// import { TicketInvoiceComponent } from './invoice/ticket-invoice.component';
import { EmployeeListComponent } from './employee/employee-list.component'
import { SubsidiaryListComponent } from './subsidiary/subsidiary-list.component'
import { ProductListComponent } from './product/product-list.component';
import { ServiceListComponent } from './service/service-list.component';
import { CompanyListComponent } from './company/company-list.component';
import { InventoryReportComponent } from './reports/inventory/inventory-report.component';
import { EntryCreateComponent } from './entry/entry-create.component';
import { EntryListComponent } from './entry/entry-list.component';
import { EntryUpdateComponent } from './entry/entry-update.component';
import { SalesReportComponent } from './reports/sales/sales-report.component';
import { AppointmentsReportComponent } from './reports/appointments/appointments-report.component';
import { AppointmentsInProgressReportComponent } from './reports/appointments-in-progress/appointments-in-progress.component';
import { CloseReportComponent } from './reports/close/close-report.component';
import { DayReportComponent } from './reports/day/day-report.component';
import { CouponsReportComponent } from './reports/coupons/coupons-report.component';
import { ProductCreateComponent } from './product/product-create.component';
import { ProductUpdateComponent } from './product/product-update.component';
import { ServiceCreateComponent } from './service/service-create.component';
import { ServiceUpdateComponent } from './service/service-update.component';

import { AuthGuard } from '../auth.guard';
import { AuthGuardAdmin } from '../auth-guard-admin';

export const routes: Routes = [
    {
        path: '', 
        component: PagesComponent,
        children:[
            { path:'', redirectTo:'dashboard', pathMatch:'full' },
            { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard] },          
            { path: 'blank', component: BlankComponent, canActivate: [AuthGuard] },
            { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
            { path: 'user-create', component: UserCreateComponent, canActivate: [AuthGuard, AuthGuardAdmin] },
            { path: 'user-list', component: UserListComponent, canActivate: [AuthGuard, AuthGuardAdmin] },
            { path: 'user-update/:id', component: UserUpdateComponent, canActivate: [AuthGuard, AuthGuardAdmin] },
            { path: 'client-create', component: ClientCreateComponent, canActivate: [AuthGuard] },
            { path: 'client-update/:id', component: ClientUpdateComponent, canActivate: [AuthGuard] },
            { path: 'client-list', component: ClientListComponent, canActivate: [AuthGuard] },            
            { path: 'transaction-out-create', component: TransactionOutCreateComponent, canActivate: [AuthGuard] },
            { path: 'transaction-out-update/:id', component: TransactionOutUpdateComponent, canActivate: [AuthGuard] },
            { path: 'transaction-list', component: TransactionListComponent, canActivate: [AuthGuard] },
            { path: 'simulate-invoice/:id/:sub', component: SimulateInvoiceComponent, canActivate: [AuthGuard] },
            { path: 'appointment-create', component: AppointmentCreateComponent, canActivate: [AuthGuard] },
            { path: 'appointment-update/:id', component: AppointmentUpdateComponent, canActivate: [AuthGuard] },            
            { path: 'appointment-list', component: AppointmentListComponent, canActivate: [AuthGuard] },
            // { path: 'ticket/:id', component: TicketComponent, canActivate: [AuthGuard] },
            // { path: 'ticket-invoice/:id', component: TicketInvoiceComponent, canActivate: [AuthGuard] },
            { path: 'employee-list', component: EmployeeListComponent, canActivate: [AuthGuard] },   
            { path: 'subsidiary-list', component: SubsidiaryListComponent, canActivate: [AuthGuard, AuthGuardAdmin] } ,  
            { path: 'product-list', component: ProductListComponent, canActivate: [AuthGuard] },
            { path: 'product-create', component: ProductCreateComponent, canActivate: [AuthGuard, AuthGuardAdmin] },    
            { path: 'product-update/:id', component: ProductUpdateComponent, canActivate: [AuthGuard, AuthGuardAdmin] },                
            { path: 'service-list', component: ServiceListComponent, canActivate: [AuthGuard] },
            { path: 'service-create', component: ServiceCreateComponent, canActivate: [AuthGuard, AuthGuardAdmin] },    
            { path: 'service-update/:id', component: ServiceUpdateComponent, canActivate: [AuthGuard, AuthGuardAdmin] },    
            { path: 'company-list', component: CompanyListComponent, canActivate: [AuthGuard, AuthGuardAdmin] },
            { path: 'report-inventory', component: InventoryReportComponent, canActivate: [AuthGuard] },
            { path: 'entry-create', component: EntryCreateComponent, canActivate: [AuthGuard] },        
            { path: 'entry-list', component: EntryListComponent, canActivate: [AuthGuard] },
            { path: 'entry-update/:id', component: EntryUpdateComponent, canActivate: [AuthGuard] },
            { path: 'report-sales', component: SalesReportComponent, canActivate: [AuthGuard] },           
            { path: 'report-appointments', component: AppointmentsReportComponent, canActivate: [AuthGuard] },           
            { path: 'report-appointments-in-progress', component: AppointmentsInProgressReportComponent, canActivate: [AuthGuard] },                      
            { path: 'report-close', component: CloseReportComponent, canActivate: [AuthGuard] },
            { path: 'report-day', component: DayReportComponent, canActivate: [AuthGuard] },
            { path: 'report-coupons', component: CouponsReportComponent, canActivate: [AuthGuard] }                                  
            
            
       ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);