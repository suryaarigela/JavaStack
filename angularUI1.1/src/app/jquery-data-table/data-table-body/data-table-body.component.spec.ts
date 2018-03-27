import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableBodyComponent } from './data-table-body.component';

describe('DataTableBodyComponent', () => {
  let component: DataTableBodyComponent;
  let fixture: ComponentFixture<DataTableBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
