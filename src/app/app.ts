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
import { StoreExample } from './store-example/store-example';
import { AngularForm } from './angular-form/angular-form';
import { Card } from './card/card';
import { ButtonCard } from './button-card/button-card';
import { FormField } from './form-field/form-field';
@Component({
  selector: 'app-root',
  imports: [Login, SignInComponent, LoginPropertyBinding, Events, EventHandling, SetGetValue, IfElseApp,ForLoop,Signals,SignalsInterface,ComputedSignals
     ,Effects,PipesBasic,PipeShortNamePipe, ConvertPipePipe,CommonModule,SignalDeepDive,TwoWayBinding,SignalTemplateBinding,
     SignalInput,ChildComponent,StoreExample,AngularForm,Card,ButtonCard,FormField
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

  // saveData(){
  //   console.log("Data saved successfully!");
  // }

  email="";
  onEmailChange(value:string){
    console.log("Email changed:",value);
    this.email=value;
  }


  message="";
  onSave(msg:string){
    console.log("Data saved successfully!"+msg);
    this.message=msg;
  }


}
