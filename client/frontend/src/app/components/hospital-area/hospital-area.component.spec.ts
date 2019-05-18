import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalAreaComponent } from './hospital-area.component';

describe('HospitalAreaComponent', () => {
  let component: HospitalAreaComponent;
  let fixture: ComponentFixture<HospitalAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
