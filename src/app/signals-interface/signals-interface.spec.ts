import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsInterface } from './signals-interface';

describe('SignalsInterface', () => {
  let component: SignalsInterface;
  let fixture: ComponentFixture<SignalsInterface>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsInterface],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalsInterface);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
