import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  count=signal(0);
  increment(){
    this.count.update(c => c + 1);
  }
  showEvent(e:any){
    console.log(e);
  }

  username = '';
  updateUsername(e:any){
    this.username = e;
  }

  handleSubmit(e:any){
    e.preventDefault();
    console.log('Form submitted!');
  }

  handleClick(){
    console.log('Button clicked!');
  }


}
