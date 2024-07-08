import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddProductRequest } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {

  model:AddProductRequest;
  constructor(private service:ProductService){
    this.model={
      id:NaN,
      name:'',
      price:NaN
    }

  }
onFormSubmit()
{
    this.service.addProduct(this.model).subscribe(
      {
        next:(response)=>{
          console.log("Data sent successfully");
        }
      }
    )
}
}
