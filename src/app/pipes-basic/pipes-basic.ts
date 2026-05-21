import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-basic',
  imports: [CommonModule],
  templateUrl: './pipes-basic.html',
  styleUrl: './pipes-basic.css',
})
export class PipesBasic {
  lName="mohit";
  uName="MOHIT";
}
