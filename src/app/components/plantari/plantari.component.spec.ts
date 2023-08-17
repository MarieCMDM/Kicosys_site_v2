import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantariComponent } from './plantari.component';

describe('PlantariComponent', () => {
  let component: PlantariComponent;
  let fixture: ComponentFixture<PlantariComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantariComponent]
    });
    fixture = TestBed.createComponent(PlantariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
