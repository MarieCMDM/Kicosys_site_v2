import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoorCyclingComponent } from './indoor-cycling.component';

describe('IndoorCyclingComponent', () => {
  let component: IndoorCyclingComponent;
  let fixture: ComponentFixture<IndoorCyclingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndoorCyclingComponent]
    });
    fixture = TestBed.createComponent(IndoorCyclingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
