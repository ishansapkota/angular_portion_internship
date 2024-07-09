import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { AddProductRequest } from '../models/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewproduct',
  standalone: true,
  imports: [],
  templateUrl: './viewproduct.component.html',
  styleUrl: './viewproduct.component.css'
})
export class ViewproductComponent {

  model:AddProductRequest;
  constructor(private service:ProductService,private route:ActivatedRoute)
  {
      this.model={
        id:NaN,
        name:'',
        price:NaN
      }

      
  }

  ngOnInit():void
  {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.listaProduct(Number(id)).subscribe({
        next: (data) => {
          this.model= data;
        }
      });
    }
  }
}
