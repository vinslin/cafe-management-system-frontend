export interface ILoginRes {
  token: string;
  request: string;
  message: string | any;
  statusCode: number;
}

export interface ILoginReq {
  email: string;
  password: string;
}
