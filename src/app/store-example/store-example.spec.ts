import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreExample } from './store-example';

describe('StoreExample', () => {
  let component: StoreExample;
  let fixture: ComponentFixture<StoreExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreExample],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
