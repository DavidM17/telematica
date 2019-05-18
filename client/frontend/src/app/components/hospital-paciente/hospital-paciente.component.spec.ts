import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalPacienteComponent } from './hospital-paciente.component';

describe('HospitalPacienteComponent', () => {
  let component: HospitalPacienteComponent;
  let fixture: ComponentFixture<HospitalPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
