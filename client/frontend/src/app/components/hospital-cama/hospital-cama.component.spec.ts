import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalCamaComponent } from './hospital-cama.component';

describe('HospitalCamaComponent', () => {
  let component: HospitalCamaComponent;
  let fixture: ComponentFixture<HospitalCamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalCamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalCamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
