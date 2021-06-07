import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent {
  product_id: string;
  product_name: string;

  constructor(private actRoute: ActivatedRoute) {
    this.product_id = this.actRoute.snapshot.params.id;
    this.product_name = this.actRoute.snapshot.params.name;
    
  }
}