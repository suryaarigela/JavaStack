import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiateScreeningComponent } from './initiate-screening.component';

describe('InitiateScreeningComponent', () => {
  let component: InitiateScreeningComponent;
  let fixture: ComponentFixture<InitiateScreeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitiateScreeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiateScreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
