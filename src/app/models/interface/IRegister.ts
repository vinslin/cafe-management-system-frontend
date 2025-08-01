export interface IRegisterReq {
  name: string;
  contactNumber: string;
  email: string;
  password: string;
}

export interface IRegisterRes {
  statusCode: number;
  message: string;
  request: string;
}
