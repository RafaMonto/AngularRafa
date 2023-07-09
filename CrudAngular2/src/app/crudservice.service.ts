import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {

  url='http://localhost/Transit_Api/';

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}Api.php?id=get`);
  }

  agregar(ciudadano:any) {
    return this.http.post(`${this.url}Api.php?id=set`, JSON.stringify(ciudadano));
  }

  seleccionar(cedula:number) {
    return this.http.get(`${this.url}Api.php?id=select&cedula=${cedula}`);
  }

  borrar(cedula:number){
    return this.http.get(`${this.url}Api.php?id=delete&cedula=${cedula}`);
  }

  modificar(ciudadano:any){
    return this.http.post(`${this.url}Api.php?id=edit`, JSON.stringify(ciudadano));
  }

}
