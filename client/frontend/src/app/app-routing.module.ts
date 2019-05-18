import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HospitalRegComponent} from './components/hospital-reg/hospital-reg.component';
import { HospitalAreaComponent } from './components/hospital-area/hospital-area.component';
import {HospitalCamaComponent} from './components/hospital-cama/hospital-cama.component';
import {HospitalPacienteComponent} from './components/hospital-paciente/hospital-paciente.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/reg',
    pathMatch:'full'
  },
  {
    path:'reg',
    component:HospitalRegComponent
  },
  {
    path:'area',
    component:HospitalAreaComponent
  },
  {
    path:'cama',
    component:HospitalCamaComponent
  },
  {
    path:'paciente',
    component:HospitalPacienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
