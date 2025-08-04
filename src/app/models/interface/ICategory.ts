export interface GetAllCategoriesRes {
  id: number;
  name: string;
}

export interface AddCategoryReq {
  name: string;
}

export interface AddCategoryRes {
  name: string;
  message: string;
}

export interface UpdateCategoryReq {
  id: number;
  name: string;
}

export interface UpdateCategoryRes {
  id: number;
  name: string;
  message: string;
}

export interface GetCategoryCountRes{
    count : number;
    message : string;
}