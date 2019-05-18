import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { HospitalRegComponent } from './components/hospital-reg/hospital-reg.component';
import { HospitalAreaComponent } from './components/hospital-area/hospital-area.component';
import { HospitalCamaComponent } from './components/hospital-cama/hospital-cama.component';
import { HospitalPacienteComponent } from './components/hospital-paciente/hospital-paciente.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {DataService} from './services/data.service';
@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    HospitalRegComponent,
    HospitalAreaComponent,
    HospitalCamaComponent,
    HospitalPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
