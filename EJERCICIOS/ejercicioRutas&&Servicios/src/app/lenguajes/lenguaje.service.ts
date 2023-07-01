import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LenguajeService {

  constructor(private http: HttpClient) { }

  retornar(){
    return this.http.get("https://api.github.com/languages");
  }
}
