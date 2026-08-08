import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-component',
  imports: [],
  templateUrl: './products-component.html',
  styleUrl: './products-component.css',
})
export class ProductsComponent {
  category:string | null = null;
  sort:string | null = null;

  constructor(private route:ActivatedRoute){
    this.route.queryParamMap.subscribe(params=>{
      this.category=params.get('category');
      this.sort=params.get('sort');
    })
  }
}
