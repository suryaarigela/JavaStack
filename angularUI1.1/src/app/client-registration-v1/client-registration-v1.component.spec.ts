import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRegistrationV1Component } from './client-registration-v1.component';

describe('ClientRegistrationV1Component', () => {
  let component: ClientRegistrationV1Component;
  let fixture: ComponentFixture<ClientRegistrationV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientRegistrationV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientRegistrationV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
