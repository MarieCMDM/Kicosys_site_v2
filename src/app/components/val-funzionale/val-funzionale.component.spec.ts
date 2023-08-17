import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValFunzionaleComponent } from './val-funzionale.component';

describe('ValFunzionaleComponent', () => {
  let component: ValFunzionaleComponent;
  let fixture: ComponentFixture<ValFunzionaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValFunzionaleComponent]
    });
    fixture = TestBed.createComponent(ValFunzionaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
