export interface getAllUserRes {
  id: number;
  name: string;
  contactNumber: string;
  status: string;
  email: string;
}

export interface UserStatusReq {
  id: number;
  status: string;
}
export interface UserStatusRes {
  id: number;
  message: string;
}
