import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  imports: [],
  templateUrl: './two-way-binding.html',
  styleUrl: './two-way-binding.css',
})
export class TwoWayBinding {

  name=signal('Nipurn');

  user=signal<{name:string,age:number}>({name:'Nipurn',age:23});


  updateName(value:string){
    this.user.update((u)=>({...u,name:value}));
  }

  updateAge(){
    this.user.update((u)=>({...u,age:u.age+1}));
  }

}
