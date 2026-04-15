import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfElseApp } from './if-else-app';

describe('IfElseApp', () => {
  let component: IfElseApp;
  let fixture: ComponentFixture<IfElseApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfElseApp],
    }).compileComponents();

    fixture = TestBed.createComponent(IfElseApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
