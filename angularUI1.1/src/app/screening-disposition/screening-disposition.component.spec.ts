import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningDispositionComponent } from './screening-disposition.component';

describe('ScreeningDispositionComponent', () => {
  let component: ScreeningDispositionComponent;
  let fixture: ComponentFixture<ScreeningDispositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreeningDispositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreeningDispositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
