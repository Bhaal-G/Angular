import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else-app',
  imports: [],
  templateUrl: './if-else-app.html',
  styleUrl: './if-else-app.css',
})
export class IfElseApp {
  isLoggedIn: boolean = true;
  showBox=true;

  toggleBox(){
    this.showBox=!this.showBox;
  }

  age=0;

  updateAge(val:string){
    this.age=Number(val);
  }

  section="home";
}
