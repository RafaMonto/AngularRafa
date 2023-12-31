import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerpointComponent } from './powerpoint.component';

describe('PowerpointComponent', () => {
  let component: PowerpointComponent;
  let fixture: ComponentFixture<PowerpointComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PowerpointComponent]
    });
    fixture = TestBed.createComponent(PowerpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
