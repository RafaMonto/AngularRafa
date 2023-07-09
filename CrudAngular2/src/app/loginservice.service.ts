import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  url='http://localhost/Transit_Api/';

  constructor(private http: HttpClient) { }

  loginUsuario(datos:any){
    return this.http.post(`${this.url}Api.php?id=login`, JSON.stringify(datos));
  }
}
