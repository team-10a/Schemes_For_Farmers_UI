import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment as env } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }
  registerAsFarmer(data : any){
    return this.http.post<any>(`${env.apiUrl}Auth/register-farmer`,data)
  }
  registerAsBidder(data : any){
    return this.http.post<any>(`${env.apiUrl}Auth/register-bidder`,data)
  }
  loginAsFarmer(data : any){
    return this.http.post<any>(`${env.apiUrl}Auth/login-farmer`,data)
  }
  loginAsBidder(data : any){
    return this.http.post<any>(`${env.apiUrl}Auth/login-bidder`,data)
  }
}
