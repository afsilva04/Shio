import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppSettings } from './app.settings';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { FormsModule }  from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AuthGuard } from './auth.guard';
import { UserService } from './pages/user/user.service';
import { AuthGuardAdmin } from './auth-guard-admin';
import { AUTH_PROVIDERS } from 'angular2-jwt';


import { Http, RequestOptions } from '@angular/http';
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';

import { TicketInvoiceComponent } from './pages/invoice/ticket-invoice.component';
import { TicketComponent } from './pages/appointment/ticket.component'

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    TicketInvoiceComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    NgxChartsModule
  ],
  providers: [ AppSettings, AuthGuard, UserService, AuthGuardAdmin, 
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
