import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';
import {
  GetProductCountRes,
  GetAllProductsRes,
  AddProductReq,
  AddProductRes,
  UpdateStatusReq,
  UpdateProductReq,
  UpdateProductRes,
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

  updateStatus(updateData: UpdateStatusReq): Observable<UpdateStatusReq> {
    return this.httpClient.patch<UpdateStatusReq>(
      environment.API_URL + 'product/update-product-status',
      updateData
    );
  }

  deleteProduct(id: number): Observable<void> {
    return this.httpClient.delete<void>(
      environment.API_URL + `product/delete-product/${id}`
    );
  }

  getProductById(id: number): Observable<GetAllProductsRes> {
    return this.httpClient.get<GetAllProductsRes>(
      environment.API_URL + `product/get-by-id/${id}`
    );
  }
  updateProduct(product: UpdateProductReq): Observable<UpdateProductRes> {
    return this.httpClient.patch<UpdateProductRes>(
      environment.API_URL + 'product/update-product',
      product
    );
  }
}
