import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdCircumstancesComponent } from './household-circumstances.component';

describe('HouseholdCircumstancesComponent', () => {
  let component: HouseholdCircumstancesComponent;
  let fixture: ComponentFixture<HouseholdCircumstancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseholdCircumstancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholdCircumstancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
