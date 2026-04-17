import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {

  count = signal(10);
  val=20;

  onclick(value: number){
    this.val=value;
  }

  increment(){
    this.count.update(count=>count+1);
  }
  decrement(){
    this.count.update(count=>count-1);
  }
  reset(){
    this.count.set(0);
  }



}
