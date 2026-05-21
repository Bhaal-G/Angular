import { Component, effect, input, signal, twoWayBinding } from '@angular/core';
import { Login } from './login/login';
import { SignInComponent } from './signinComponentPractise/signin';
import { LoginPropertyBinding } from './login-property-binding/login-property-binding';
import { Events } from './events/events';
import { EventHandling } from './event-handling/event-handling';
import { SetGetValue } from './set-get-value/set-get-value';
import { IfElseApp } from './if-else-app/if-else-app';
import { ForLoop } from './for-loop/for-loop';
import { Signals } from './signals/signals';
import { SignalsInterface } from './signals-interface/signals-interface';
import { ComputedSignals } from './computed-signals/computed-signals';
import { Effects } from './effects/effects';
import { PipesBasic } from './pipes-basic/pipes-basic';
import { PipeShortNamePipe } from './pipe/pipe-short-name-pipe';
import { ConvertPipePipe } from './pipe/convert-pipe-pipe';
import { CommonModule } from '@angular/common';
import { SignalDeepDive } from './signal-deep-dive/signal-deep-dive';
import { TwoWayBinding } from './two-way-binding/two-way-binding';
import { SignalTemplateBinding } from './signal-template-binding/signal-template-binding';
import { ChildComponent } from './signal-input/child-component/child-component';
import { SignalInput } from './signal-input/signal-input';

@Component({
  selector: 'app-root',
  imports: [Login, SignInComponent, LoginPropertyBinding, Events, EventHandling, SetGetValue, IfElseApp,ForLoop,Signals,SignalsInterface,ComputedSignals
     ,Effects,PipesBasic,PipeShortNamePipe, ConvertPipePipe,CommonModule,SignalDeepDive,TwoWayBinding,SignalTemplateBinding,
     SignalInput,ChildComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  // protected readonly title = signal('my-angular-app');
  // firstName = 'John';
  // lastName = 'Doe';
  // count=5;
  // price=19.99;

  // fullName="Mohit Kumar";

  // usd=10;
  // usdToInrRate=93;



}
