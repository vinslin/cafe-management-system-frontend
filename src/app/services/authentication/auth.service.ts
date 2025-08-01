import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment.prod';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {
  ILoginRes,
  ILoginReq,
  ILoginReturn,
} from '../../models/interface/ILogin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  storeLoginCredentials(token: string): boolean {
    try {
      console.log('hit');
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expiry = payload?.exp;
      if (!expiry) throw new Error('Invalid token');

      localStorage.setItem('token', token);
      localStorage.setItem('expired_at', expiry.toString());
      return true;
    } catch (error) {
      console.error('Failed to store token:', error);
      return false;
    }
  }

  login(credentials: ILoginReq): Observable<ILoginRes> {
    //const  token = this.http.post<haha>
    //console.log('hited the ', credentials);
    return this.http.post<ILoginRes>(
      environment.API_URL + 'user/login',
      credentials
    );
  }
  
}
