import { HttpClientModule } from '@angular/common/http';

import {RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ExtratoComponent } from '../extrato/extrato.component';



import { Routes } from '@angular/router';
import { NovaTransferenciaComponent } from '../nova-tranferencia/nova-transferencia.component';

export const routes: Routes = [
  {path:'extrato', component:ExtratoComponent},
  {path:'nova-transferencia', component: NovaTransferenciaComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
})

export class AppRoutingModule{}
