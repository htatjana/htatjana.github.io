import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Case17Component } from './case17.component';

describe('Case17Component', () => {
  let component: Case17Component;
  let fixture: ComponentFixture<Case17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Case17Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Case17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
