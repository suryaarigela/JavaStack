import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningBodyComponent } from './screening-body.component';

describe('ScreeningBodyComponent', () => {
  let component: ScreeningBodyComponent;
  let fixture: ComponentFixture<ScreeningBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreeningBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreeningBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
