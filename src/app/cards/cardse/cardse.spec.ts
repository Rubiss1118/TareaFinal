import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardse } from './cardse';

describe('Cardse', () => {
  let component: Cardse;
  let fixture: ComponentFixture<Cardse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cardse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cardse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
