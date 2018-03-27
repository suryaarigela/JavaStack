import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqueryDataTableComponent } from './jquery-data-table.component';

describe('JqueryDataTableComponent', () => {
  let component: JqueryDataTableComponent;
  let fixture: ComponentFixture<JqueryDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqueryDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqueryDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
