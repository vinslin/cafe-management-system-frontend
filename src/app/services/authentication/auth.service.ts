import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment.prod';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILoginRes, ILoginReq } from '../../models/interface/ILogin';
import { IRegisterReq, IRegisterRes } from 'src/app/models/interface/IRegister';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  userDetais(): any {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const name = payload?.username;
      const email = payload?.email;
      const role = payload?.role;
      if (!name || !email || !role) throw new Error('Invalid token payload');
      const userDetails = {
        name: name,
        email: email,
        role: role,
      };
      return userDetails;
    } catch (error) {
      console.error('Failed to parse token:', error);
      return null;
    }
  }

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

  register(credentials: IRegisterReq): Observable<IRegisterRes> {
    return this.http.post<IRegisterRes>(
      environment.API_URL + 'user/register',
      credentials
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('expired_at');
  }
}
