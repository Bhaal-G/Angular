import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login-property-binding',
  imports: [],
  templateUrl: './login-property-binding.html',
  styleUrl: './login-property-binding.css',
})
export class LoginPropertyBinding {
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  isDisabled = true;
  isActive = true;
  count=signal(0);
}
