import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInfoV1Component } from './contact-info-v1.component';

describe('ContactInfoV1Component', () => {
  let component: ContactInfoV1Component;
  let fixture: ComponentFixture<ContactInfoV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactInfoV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInfoV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
