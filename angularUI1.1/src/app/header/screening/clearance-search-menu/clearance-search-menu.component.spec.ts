import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearanceSearchMenuComponent } from './clearance-search-menu.component';

describe('ClearanceSearchMenuComponent', () => {
  let component: ClearanceSearchMenuComponent;
  let fixture: ComponentFixture<ClearanceSearchMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearanceSearchMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearanceSearchMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
