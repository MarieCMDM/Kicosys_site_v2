import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBarComponent } from './address-bar.component';

describe('AddressBarComponent', () => {
  let component: AddressBarComponent;
  let fixture: ComponentFixture<AddressBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressBarComponent]
    });
    fixture = TestBed.createComponent(AddressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
