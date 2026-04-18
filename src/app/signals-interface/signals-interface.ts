import { Component, signal } from '@angular/core';


interface User{
  name:string;
  age:number;
}

@Component({
  selector: 'app-signals-interface',
  imports: [],
  templateUrl: './signals-interface.html',
  styleUrl: './signals-interface.css',
})
export class SignalsInterface {

  count=signal<number>(10);
  name=signal<string>('Angular');
  isAdmin=signal<boolean>(true);
  
  numbers=signal<number[]>([1,2,3,4,5]);

  user=signal<{name:string,age:number}>({name:'John',age:30});
  
  student=signal<User>({name:'ELLEN',age:22});

  directUpdate(){
    this.numbers.set([100,200,300]);

  }

  addNumber(){
    this.numbers.update(nums=>[...nums,nums.length*100]);
  }


}
