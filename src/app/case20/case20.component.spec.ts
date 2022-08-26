import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Case20Component } from './case20.component';

describe('Case20Component', () => {
  let component: Case20Component;
  let fixture: ComponentFixture<Case20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Case20Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Case20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
