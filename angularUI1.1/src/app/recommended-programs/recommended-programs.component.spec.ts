import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedProgramsComponent } from './recommended-programs.component';

describe('RecommendedProgramsComponent', () => {
  let component: RecommendedProgramsComponent;
  let fixture: ComponentFixture<RecommendedProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
