import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningHeaderComponent } from './screening.component';

describe('ScreeningHeaderComponent', () => {
  let component: ScreeningHeaderComponent;
  let fixture: ComponentFixture<ScreeningHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreeningHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreeningHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
