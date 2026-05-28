import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button-card',
  imports: [],
  templateUrl: './button-card.html',
  styleUrl: './button-card.css',
})
export class ButtonCard {
  label=input<string>();
  // clicked=output<void>();
  clicked=output<string>();

  onClick(){
    console.log("Button clicked! by child");
    this.clicked.emit('Button was clicked!');
  }
}
