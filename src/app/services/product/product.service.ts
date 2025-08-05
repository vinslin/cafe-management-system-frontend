import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';
import {
  GetProductCountRes,
  GetAllProductsRes,
  AddProductReq,
  AddProductRes,
} from 'src/app/models/interface/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<GetAllProductsRes> {
    return this.httpClient.get<GetAllProductsRes>(
      environment.API_URL + 'product/get-all-products'
    );
  }

  getProductCount(): Observable<GetProductCountRes> {
    return this.httpClient.get<GetProductCountRes>(
      environment.API_URL + 'product/get-product-count'
    );
  }

  addProduct(product: AddProductReq): Observable<AddProductRes> {
    return this.httpClient.post<AddProductRes>(
      environment.API_URL + 'product/add-product',
      product
    );
  }
}
