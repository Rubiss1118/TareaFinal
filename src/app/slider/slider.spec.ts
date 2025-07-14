import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SLIDER } from './slider';

describe('SLIDER', () => {
  let component: SLIDER;
  let fixture: ComponentFixture<SLIDER>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SLIDER]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SLIDER);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
