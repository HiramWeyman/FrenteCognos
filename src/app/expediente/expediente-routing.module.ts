import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesComponent } from './pacientes/pacientes.component';
import { HomeComponent } from './home/home.component';
import { DatosexpComponent } from './datosexp/datosexp.component';


const routes: Routes = [
  {path:'pacientes',component:PacientesComponent},
  {path:'home',component:HomeComponent},
  {path:'exp/:id', component: DatosexpComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpedienteRoutingModule { }
