import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { TicketInvoiceComponent } from './pages/invoice/ticket-invoice.component';
import { TicketComponent } from './pages/appointment/ticket.component'

import { AuthGuard } from '../app/auth.guard';
import { AuthGuardAdmin } from '../app/auth-guard-admin';

export const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  { path: 'login', loadChildren: 'app/pages/login/login.module#LoginModule' },
  { path: 'register', loadChildren: 'app/pages/register/register.module#RegisterModule' },
  { path: 'ticket-invoice/:id', component: TicketInvoiceComponent, canActivate: [AuthGuard] },
  { path: 'ticket/:id', component: TicketComponent , canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
   // useHash: true
});