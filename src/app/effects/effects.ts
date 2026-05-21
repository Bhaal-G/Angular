import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effects',
  imports: [],
  templateUrl: './effects.html',
  styleUrl: './effects.css',
})
export class Effects {
  // count=signal<number>(0);
  
  // constructor() {
  //   effect(()=>{
  //     console.log(`Count value: ${this.count()}`);
  //   });
  // }

  // increment(){
  //   this.count.update(c=>c+1);
  // }

  // isDarkMode=signal<boolean>(false);

  // constructor() {
  //   effect(()=>{
  //     if(this.isDarkMode()){
  //       document.body.style.backgroundColor='black';
  //       document.body.style.color='white';
  //     }else{
  //       document.body.style.backgroundColor='white';
  //       document.body.style.color='black';
  //     }
  //   });
  // }

  // toggleMode(){
  //   this.isDarkMode.update(mode=>!mode);
  // }

  message=signal<string>('');
  constructor() {
    effect(()=>{
      if(this.message()){
        setTimeout(()=>{
          this.message.set('');
        },2000)
      }
    });
  }

  showMessage(){
    this.message.set('Hello, this is a temporary message!');
  }


}
