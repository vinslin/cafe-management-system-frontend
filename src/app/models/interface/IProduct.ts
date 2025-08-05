export interface GetProductCountRes {
  count: number;
  message: string;
}

export interface GetAllProductsRes {
  id: number;
  name: string;
  categoryId: number;
  description: string;
  price: number;
  status: string;
  categoryName: string;
}

export interface AddProductReq {
  name: string;
  categoryId: number;
  description: string;
  price: number;
}

export interface AddProductRes {
  name: string;
  message: string;
}
