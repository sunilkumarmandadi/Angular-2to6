import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdgridComponent } from './curdgrid.component';

describe('CurdgridComponent', () => {
  let component: CurdgridComponent;
  let fixture: ComponentFixture<CurdgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurdgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurdgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
