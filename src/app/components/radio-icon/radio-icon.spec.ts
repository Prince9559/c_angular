import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioIcon } from './radio-icon';

describe('RadioIcon', () => {
  let component: RadioIcon;
  let fixture: ComponentFixture<RadioIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioIcon],
    }).compileComponents();

    fixture = TestBed.createComponent(RadioIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
