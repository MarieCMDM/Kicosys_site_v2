import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestpointComponent } from './testpoint.component';

describe('TestpointComponent', () => {
  let component: TestpointComponent;
  let fixture: ComponentFixture<TestpointComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestpointComponent]
    });
    fixture = TestBed.createComponent(TestpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
