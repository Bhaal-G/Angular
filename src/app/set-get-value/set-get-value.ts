import { Component } from '@angular/core';

@Component({
  selector: 'app-set-get-value',
  imports: [],
  templateUrl: './set-get-value.html',
  styleUrl: './set-get-value.css',
})
export class SetGetValue {
  name: string = '';
  city: string = '';
  email: string = '';

  updateName(val:string){
    this.name = val;
  }

  getEmail(val:string){
    this.email = val;
  }


}
