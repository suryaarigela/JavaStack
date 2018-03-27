import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramSelectionComponent } from './program-selection.component';

describe('ProgramSelectionComponent', () => {
  let component: ProgramSelectionComponent;
  let fixture: ComponentFixture<ProgramSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
