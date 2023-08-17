import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiomeccanicaComponent } from './biomeccanica.component';

describe('BiomeccanicaComponent', () => {
  let component: BiomeccanicaComponent;
  let fixture: ComponentFixture<BiomeccanicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiomeccanicaComponent]
    });
    fixture = TestBed.createComponent(BiomeccanicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
