import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto002';

  articulos: any[] = [
    {codigo:1, descripcion:'papas', precio:10.55},
    {codigo:2, descripcion:'manzanas', precio:12.10},
    {codigo:3, descripcion:'melon', precio:52.30},
    {codigo:4, descripcion:'cebollas', precio:17},
    {codigo:5, descripcion:'calabaza', precio:20}
  ]

  valorCodigo = 0; 
  valorDescripcion = '';
  valorPrecio = 0;

  borrar(index: number){
    this.articulos.splice(index, 1);
  }

  agregar(){
    const nuevaFila = {codigo: this.valorCodigo, descripcion: this.valorDescripcion, precio: this.valorPrecio};
    this.articulos.push(nuevaFila);
  }
  
  modificar(){
    for(var i = 0; i <= this.articulos.length; i++){
      if(this.articulos[i].codigo === this.valorCodigo){
        this.articulos[i] = {codigo: this.valorCodigo, descripcion: this.valorDescripcion, precio: this.valorPrecio}
      }
    }
  }

  seleccionar(valor: any){
    this.valorCodigo = valor.codigo;
    this.valorDescripcion = valor.descripcion;
    this.valorPrecio = valor.precio;
  }
}
