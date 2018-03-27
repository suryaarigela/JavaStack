import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleStripComponent } from './title-strip.component';

describe('TitleStripComponent', () => {
  let component: TitleStripComponent;
  let fixture: ComponentFixture<TitleStripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleStripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
