import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeestartComponent } from './employeestart.component';

describe('EmployeestartComponent', () => {
  let component: EmployeestartComponent;
  let fixture: ComponentFixture<EmployeestartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeestartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeestartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
