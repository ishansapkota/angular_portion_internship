import { Component, numberAttribute } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AddProductRequest } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import { ViewproductComponent } from '../viewproduct/viewproduct.component';


@Component({
  selector: 'app-listproduct',
  standalone: true,
  imports: [RouterModule,CommonModule,MatButtonModule,MatIconModule,ViewproductComponent],
  templateUrl: './listproduct.component.html',
  styleUrl: './listproduct.component.css'
})
export class ListproductComponent {
  products:AddProductRequest[] = [];

  constructor(private service:ProductService,private router:Router)
  {

  }

  ngOnInit():void{
    this.service.listProduct().subscribe(
      {
        next:(data)=>{
          this.products=data;
          console.log(this.products)
        }
      }
    );
  }

  onDelete(id:number):void
  {
    console.log("here")
    this.service.deleteProduct(id).subscribe(
      {
        next:(response)=>
          {
            console.log("Data has been deleted!")
            // this.router.navigateByUrl('product/list/add', { skipLocationChange: true }).then(() => {
            //   this.router.navigate(['product/list']);
            // });

            this.ngOnInit();
            // this.router.navigate(['product/list'])
          }
      }
    )
  }
}
