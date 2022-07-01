import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextualEscapingComponent } from './contextual-escaping.component';

describe('ContextualEscapingComponent', () => {
  let component: ContextualEscapingComponent;
  let fixture: ComponentFixture<ContextualEscapingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContextualEscapingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContextualEscapingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
