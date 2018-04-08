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
            { path: 'ticket-invoice/:id', component: TicketInvoiceComponent },
            { path: 'employee-list', component: EmployeeListComponent },   
            { path: 'subsidiary-list', component: SubsidiaryListComponent } ,  
            { path: 'product-list', component: ProductListComponent },
            { path: 'product-create', component: ProductCreateComponent },    
            { path: 'product-update/:id', component: ProductUpdateComponent },                
            { path: 'service-list', component: ServiceListComponent },
            { path: 'service-create', component: ServiceCreateComponent },    
            { path: 'service-update/:id', component: ServiceUpdateComponent },    
            { path: 'company-list', component: CompanyListComponent },
            { path: 'report-inventory', component: InventoryReportComponent },
            { path: 'entry-create', component: EntryCreateComponent },        
            { path: 'entry-list', component: EntryListComponent },
            { path: 'entry-update/:id', component: EntryUpdateComponent },
            { path: 'report-sales', component: SalesReportComponent },           
            { path: 'report-appointments', component: AppointmentsReportComponent },           
            { path: 'report-appointments-in-progress', component: AppointmentsInProgressReportComponent },                      
            { path: 'report-close', component: CloseReportComponent },
            { path: 'report-day', component: DayReportComponent },
            { path: 'report-coupons', component: CouponsReportComponent }                                  
            
            
       ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);