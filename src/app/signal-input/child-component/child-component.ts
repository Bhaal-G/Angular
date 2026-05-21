import { Component, EventEmitter, input, Output } from '@angular/core';
import{ signal } from '@angular/core';
@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css',
})
export class ChildComponent {
  // name=input<string>();

  // @Output() notify= new EventEmitter<string>();

  // sendToParent(){
  //   this.notify.emit("Hello from Child Component")
  // }

  message= signal('Hello Parent');

  updateMessage(){
    this.message.set("Hello from Child Component ");
  }



}
