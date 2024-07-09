import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddProductRequest } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  addProduct(model:AddProductRequest) : Observable<void>
  {
   return this.http.post<void>('https://localhost:7259/api/Product/add-product',model); 
  }

  listProduct() : Observable<AddProductRequest[]>
  {
    return this.http.get<AddProductRequest[]>('https://localhost:7259/api/Product/list-products');
  }

  updateProduct(model:AddProductRequest): Observable<void>
  {
    return this.http.put<void>('https://localhost:7259/api/Product/update-product',model);
  }

  listaProduct(id:number):Observable<AddProductRequest>
  {
    return this.http.get<AddProductRequest>(`https://localhost:7259/api/Product/list-product/${id}`)
  }

  deleteProduct(id:number):Observable<void>
  {
    return this.http.delete<void>(`https://localhost:7259/api/Product/delete-product/${id}`);
  }
}

