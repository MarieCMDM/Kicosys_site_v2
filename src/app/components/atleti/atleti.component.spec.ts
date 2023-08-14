import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtletiComponent } from './atleti.component';

describe('AtletiComponent', () => {
  let component: AtletiComponent;
  let fixture: ComponentFixture<AtletiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtletiComponent]
    });
    fixture = TestBed.createComponent(AtletiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
