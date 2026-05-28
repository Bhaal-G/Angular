import { Component } from '@angular/core';
import { CounterStore } from './core/store/counter';
import { UserStore } from './core/store/user';



@Component({
  selector: 'app-store-example',
  imports: [],
  templateUrl: './store-example.html',
  styleUrl: './store-example.css',
})
export class StoreExample {

  // constructor(public counterStore:CounterStore){}
  constructor(public userStore:UserStore){}

}
