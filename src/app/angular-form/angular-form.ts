import { Component, signal } from '@angular/core';
// import { FormsModule } from '@angular/forms';

import{FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-angular-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './angular-form.html',
  styleUrl: './angular-form.css',
})
export class AngularForm {
  // name=signal('');
  // email=signal('');

  // submitForm(){
  //   console.log(`Name: ${this.name()},Email: ${this.email()}`);
  // }

  userSignal=signal({
    name:'',
    email:''
  });
  form:any;
  constructor(private fb:FormBuilder){
    this.form=this.fb.group({
      name:[''],
      email:['']
    })

    this.form.valueChanges.subscribe((value: any)=>{
      this.userSignal.set(value);
    });
  }
  submitForm(){
    console.log(this.userSignal());
  }
}
