import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValBaropodometricheComponent } from './val-baropodometriche.component';

describe('ValBaropodometricheComponent', () => {
  let component: ValBaropodometricheComponent;
  let fixture: ComponentFixture<ValBaropodometricheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValBaropodometricheComponent]
    });
    fixture = TestBed.createComponent(ValBaropodometricheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
