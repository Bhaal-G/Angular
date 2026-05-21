import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-template-binding',
  imports: [],
  templateUrl: './signal-template-binding.html',
  styleUrl: './signal-template-binding.css',
})
export class SignalTemplateBinding {

  count=signal(0);

  isLoggedIn=signal(false);




}
