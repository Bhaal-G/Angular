import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { SignInComponent } from './signinComponentPractise/signin';
import { LoginPropertyBinding } from './login-property-binding/login-property-binding';
import { Events } from './events/events';

@Component({
  selector: 'app-root',
  imports: [Login,SignInComponent,LoginPropertyBinding,Events],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
  firstName = 'John';
  lastName = 'Doe';
  count=5;
  price=19.99;
}
