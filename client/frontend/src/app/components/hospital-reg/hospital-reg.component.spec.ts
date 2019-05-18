import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalRegComponent } from './hospital-reg.component';

describe('HospitalRegComponent', () => {
  let component: HospitalRegComponent;
  let fixture: ComponentFixture<HospitalRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
