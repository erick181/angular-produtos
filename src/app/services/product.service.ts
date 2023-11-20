import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import { Observable } from 'rxjs';
import Product from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: String = environments.baseApiUrl;

  constructor(private http: HttpClient) { }

getAll(): Observable<Product[]>{
var token = localStorage.getItem('token');
  const url = `${this.baseUrl}/api/Product`;

  return this.http.get<Product[]>(url, {headers: {['Authorization']: `Bearer  ${token}`}});

}



}
