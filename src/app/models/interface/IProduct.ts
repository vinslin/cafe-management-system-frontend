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

export interface UpdateStatusReq {
  id: number;
  status: string;
}

export interface UpdateStatusRes {
  id: number;
  status: string;
  message: string;
}

export interface UpdateProductReq {
  id: number;
  name: string;
  categoryId: number;
  description: string;
  price: number;
}

export interface UpdateProductRes {
  id: number;
  message: string;
}
