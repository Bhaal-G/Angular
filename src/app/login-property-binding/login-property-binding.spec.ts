import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPropertyBinding } from './login-property-binding';

describe('LoginPropertyBinding', () => {
  let component: LoginPropertyBinding;
  let fixture: ComponentFixture<LoginPropertyBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPropertyBinding],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPropertyBinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
