import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetGetValue } from './set-get-value';

describe('SetGetValue', () => {
  let component: SetGetValue;
  let fixture: ComponentFixture<SetGetValue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetGetValue],
    }).compileComponents();

    fixture = TestBed.createComponent(SetGetValue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
