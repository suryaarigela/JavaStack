import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRegisterationAddHouseholdMembersComponent } from './client-registeration-add-household-members.component';

describe('ClientRegisterationAddHouseholdMembersComponent', () => {
  let component: ClientRegisterationAddHouseholdMembersComponent;
  let fixture: ComponentFixture<ClientRegisterationAddHouseholdMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientRegisterationAddHouseholdMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientRegisterationAddHouseholdMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
