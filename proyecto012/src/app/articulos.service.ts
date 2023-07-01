import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor() { }

  retornar(){
    return [
      {
        codigo: 1,
        descripcion: "papas",
        precio: 12.33
      },
      {
        codigo: 2,
        descripcion: "Manzanas",
        precio: 54
      },
      {
        codigo: 3,
        descripcion: "sandia",
        precio: 14
      }
    ]
  }
}
