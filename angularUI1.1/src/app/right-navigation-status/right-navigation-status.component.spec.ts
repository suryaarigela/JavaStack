import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightNavigationStatusComponent } from './right-navigation-status.component';

describe('RightNavigationStatusComponent', () => {
  let component: RightNavigationStatusComponent;
  let fixture: ComponentFixture<RightNavigationStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightNavigationStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightNavigationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
