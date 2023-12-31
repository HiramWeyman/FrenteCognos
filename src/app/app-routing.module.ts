import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  {
    path: 'dashboard',component:PagesComponent,
    children: [
      {
        path: 'expediente',
        loadChildren: () => import('./expediente/expediente.module').then(m => m.ExpedienteModule)
      }
    ]
  },
   { path: '**', redirectTo: 'login', pathMatch: 'full' } 
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
