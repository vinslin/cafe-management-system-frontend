import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment.prod';
import { Observable } from 'rxjs';
import {
  getAllUserRes,
  UserStatusReq,
  UserStatusRes,
} from 'src/app/models/interface/IUsers';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<getAllUserRes[]> {
    return this.http.get<getAllUserRes[]>(
      environment.API_URL + 'user/get-all-user'
    );
  }

  updateUserStatus(userStatusReq: UserStatusReq): Observable<UserStatusRes> {
    return this.http.patch<UserStatusRes>(
      environment.API_URL + 'user/update-user-status',
      userStatusReq
    );
  }
}
