import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Case19Component } from './case19.component';

describe('Case19Component', () => {
  let component: Case19Component;
  let fixture: ComponentFixture<Case19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Case19Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Case19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
