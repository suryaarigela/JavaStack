import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialBudgetComponent } from './trial-budget.component';

describe('TrialBudgetComponent', () => {
  let component: TrialBudgetComponent;
  let fixture: ComponentFixture<TrialBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
