import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computed-signals',
  imports: [],
  templateUrl: './computed-signals.html',
  styleUrl: './computed-signals.css',
})
export class ComputedSignals {
  count=signal<number>(10);

  doubleCount=computed<number>(()=>this.count()*2);
  tripleCount=computed<number>(()=>this.count()*3);


  firstName=signal<string>('Ellen');
  lastName=signal<string>('klein');


  fullName=computed<string>(()=>`${this.firstName()} ${this.lastName()}`);

  increment(){
    this.count.update(c=>c+1);
  }

}
