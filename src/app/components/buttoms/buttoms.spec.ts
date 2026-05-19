import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Buttoms } from './buttoms';

describe('Buttoms', () => {
  let component: Buttoms;
  let fixture: ComponentFixture<Buttoms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Buttoms],
    }).compileComponents();

    fixture = TestBed.createComponent(Buttoms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
