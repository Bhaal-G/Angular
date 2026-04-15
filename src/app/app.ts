import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { SignInComponent } from './signinComponentPractise/signin';
import { LoginPropertyBinding } from './login-property-binding/login-property-binding';
import { Events } from './events/events';
import { EventHandling } from './event-handling/event-handling';
import { SetGetValue } from './set-get-value/set-get-value';
import { IfElseApp } from './if-else-app/if-else-app';

@Component({
  selector: 'app-root',
  imports: [Login, SignInComponent, LoginPropertyBinding, Events, EventHandling, SetGetValue, IfElseApp],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('my-angular-app');
  firstName = 'John';
  lastName = 'Doe';
  count=5;
  price=19.99;
}
