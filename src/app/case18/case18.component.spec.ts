import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Case18Component } from './case18.component';

describe('Case18Component', () => {
  let component: Case18Component;
  let fixture: ComponentFixture<Case18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Case18Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Case18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
