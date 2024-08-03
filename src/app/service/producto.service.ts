import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }

  private API_PRODUCTO = "http://localhost:3000/producto"

  getProductos(): Observable<any> {
    return this.http.get(this.API_PRODUCTO);
  }

  postProducto(item: any):Observable<any>{
    return this.http.post(this.API_PRODUCTO, item)
  }

}
