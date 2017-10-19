import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from './pages.component';
import { BlankComponent } from './blank/blank.component';
import { SearchComponent } from './search/search.component';
import { UserCreateComponent } from './user/user-create.component';
import { UserListComponent } from './user/user-list.component';
import { UserUpdateComponent } from './user/user-update.component';
import { TransactionOutComponent } from './transaction/transaction-out.component';

export const routes: Routes = [
    {
        path: '', 
        component: PagesComponent,
        children:[
            { path:'', redirectTo:'dashboard', pathMatch:'full' },
            { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule', data: { breadcrumb: 'Dashboard' }  },          
            { path: 'blank', component: BlankComponent, data: { breadcrumb: 'Blank page' } },
            { path: 'search', component: SearchComponent, data: { breadcrumb: 'Search' } },
            { path: 'user-create', component: UserCreateComponent, data: { breadcrumb: 'Crear Usuario' } },
            { path: 'user-list', component: UserListComponent, data: { breadcrumb: 'Ver Usuarios' } },
            { path: 'user-update/:id', component: UserUpdateComponent, data: { breadcrumb: 'Actualizar Usuario' } },
            { path: 'transaction-out', component: TransactionOutComponent, data: { breadcrumb: 'Crear Salida' } }
       ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);