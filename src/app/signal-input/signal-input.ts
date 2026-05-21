import { Component } from '@angular/core';
import { ChildComponent } from './child-component/child-component';

@Component({
  selector: 'app-signal-input',
  imports: [ChildComponent],
  templateUrl: './signal-input.html',
  styleUrl: './signal-input.css',
})
export class SignalInput {

username:string="Angular";

message:string="";

onMessage(msg:string){
  this.message=msg; 

}
}
