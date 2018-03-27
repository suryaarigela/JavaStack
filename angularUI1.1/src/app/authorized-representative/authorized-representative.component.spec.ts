import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedRepresentativeComponent } from './authorized-representative.component';

describe('AuthorizedRepresentativeComponent', () => {
  let component: AuthorizedRepresentativeComponent;
  let fixture: ComponentFixture<AuthorizedRepresentativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizedRepresentativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedRepresentativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
