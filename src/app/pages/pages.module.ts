import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { FormsModule }  from '@angular/forms';

import { routing } from './pages.routing';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from '../theme/components/header/header.component';
import { FooterComponent } from '../theme/components/footer/footer.component';
import { SidebarComponent } from '../theme/components/sidebar/sidebar.component';
import { VerticalMenuComponent } from '../theme/components/menu/vertical-menu/vertical-menu.component';
import { HorizontalMenuComponent } from '../theme/components/menu/horizontal-menu/horizontal-menu.component';
import { BreadcrumbComponent } from '../theme/components/breadcrumb/breadcrumb.component';
import { BackTopComponent } from '../theme/components/back-top/back-top.component';
import { UserMenuComponent } from '../theme/components/user-menu/user-menu.component';
import { BlankComponent } from './blank/blank.component';
import { SearchComponent } from './search/search.component';
import { UserCreateComponent } from './user/user-create.component';
import { UserListComponent } from './user/user-list.component';
import { UserUpdateComponent } from './user/user-update.component';
import { ClientCreateComponent } from './client/client-create.component';
import { ClientUpdateComponent } from './client/client-update.component';
import { ClientListComponent } from './client/client-list.component';
import { TransactionOutCreateComponent } from './transaction/transaction-out-create.component';
import { TransactionOutUpdateComponent } from './transaction/transaction-out-update.component';
import { TransactionListComponent} from './transaction/transaction-list.component';
import { SimulateInvoiceComponent } from './invoice/simulate-invoice.component';
import { AppointmentCreateComponent } from './appointment/appointment-create.component';
import { AppointmentUpdateComponent } from './appointment/appointment-update.component';
import { AppointmentListComponent } from './appointment/appointment-list.component';
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

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ToastrModule } from 'ngx-toastr';

import { NgSelectModule } from '@ng-select/ng-select/ng-select';


@NgModule({
  imports: [
    CommonModule,
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
    routing,
    FormsModule,
    Ng2SmartTableModule,
    NgbModule.forRoot(),
    NgxChartsModule,
    ToastrModule.forRoot(),
    NgSelectModule
  ],
  declarations: [
    PagesComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent,
    BreadcrumbComponent,
    BackTopComponent,
    UserMenuComponent,
    BlankComponent,
    SearchComponent,
    UserCreateComponent,
    UserListComponent,
    UserUpdateComponent,
    TransactionOutCreateComponent,
    TransactionOutUpdateComponent,
    TransactionListComponent,
    SimulateInvoiceComponent,
    AppointmentCreateComponent,
    AppointmentUpdateComponent,
    AppointmentListComponent,
    ClientCreateComponent,
    ClientUpdateComponent,
    ClientListComponent,
    TicketComponent,
    TicketInvoiceComponent,
    EmployeeListComponent,
    SubsidiaryListComponent,
    ProductListComponent,
    ServiceListComponent,
    CompanyListComponent,
    InventoryReportComponent,
    EntryCreateComponent,
    EntryListComponent,
    EntryUpdateComponent,
    SalesReportComponent
  ]
})
export class PagesModule { }
