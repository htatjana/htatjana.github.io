import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalStorageXssComponent } from './local-storage-xss.component';

describe('LocalStorageXssComponent', () => {
  let component: LocalStorageXssComponent;
  let fixture: ComponentFixture<LocalStorageXssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalStorageXssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalStorageXssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
