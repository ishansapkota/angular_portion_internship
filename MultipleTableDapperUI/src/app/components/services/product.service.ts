import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddProductRequest } from '../models/add-product.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient)
  {
  }

  addCategory(model:AddProductRequest):Observable<void>
  {
    return this.http.post<void>(`https://localhost:7259/api/Product/add-product`,model)
  }
}
