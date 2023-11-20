import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environments } from 'src/environments/environments';
import Login from '../models/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: String = environments.baseApiUrl;

  constructor(private http: HttpClient) { }

  login(userLogin: any):Observable<Login>{
    const url = `${this.baseUrl}/api/Auth`; 
    return this.http.post<Login>(url, userLogin)
    .pipe(
      tap({
       
        next: p => this.setToken(p.token)
        
        
      }
      )
    );
  }

  private setToken(token: string){
    localStorage.setItem('token', token);
  }

  ifLoggedIn(){
    return localStorage.getItem('token') !=null;
  }

  logout(){
    localStorage.removeItem('token');
  }
}
