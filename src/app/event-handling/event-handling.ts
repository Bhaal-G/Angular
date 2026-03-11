import { Component } from '@angular/core';

@Component({
  selector: 'app-event-handling',
  imports: [],
  templateUrl: './event-handling.html',
  styleUrl: './event-handling.css',
})
export class EventHandling {

  handleClick(){
    console.log('Button clicked!');
  }

  onTyping(e:any){
    console.log('User is typing: ', e.target.value);
  }

  onKeyUp(e:any){
    console.log('Key Pressed: ', e.key);
  }

  onHover(){
    console.log('Mouse hovered!');
  }

  onLeave(){
    console.log('Mouse left!');
  }

  onFocus(){
    console.log('Input focused!');
  }

  onBlur(){
    console.log('Input blurred!');
  } 

}
