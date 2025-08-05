import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';
import { GetProductCountRes } from 'src/app/models/interface/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProductCount(): Observable<GetProductCountRes> {
    return this.httpClient.get<GetProductCountRes>(
      environment.API_URL + 'product/get-product-count'
    );
  }
}
