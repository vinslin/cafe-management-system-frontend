import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment.prod';
import { Observable } from 'rxjs';
import {
  GetAllCategoriesRes,
  AddCategoryReq,
  AddCategoryRes,
  UpdateCategoryReq,
  UpdateCategoryRes,
  GetCategoryCountRes,
} from 'src/app/models/interface/ICategory';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private httpClient: HttpClient) {}

  getAllCategories(): Observable<GetAllCategoriesRes> {
    return this.httpClient.get<GetAllCategoriesRes>(
      environment.API_URL + 'category/get-all-categaories'
    );
  }
  addCategory(category: AddCategoryReq): Observable<AddCategoryRes> {
    return this.httpClient.post<AddCategoryRes>(
      environment.API_URL + 'category/add-category',
      category
    );
  }

  updateCategory(category: UpdateCategoryReq): Observable<UpdateCategoryRes> {
    return this.httpClient.patch<UpdateCategoryRes>(
      environment.API_URL + 'category/update-category',
      category
    );
  }

  getCategoryCount(): Observable<GetCategoryCountRes> {
    return this.httpClient.get<GetCategoryCountRes>(
      environment.API_URL + 'category/get-category-count'
    );
  }
}
