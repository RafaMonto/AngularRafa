import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './articulos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  articulos: any;

  art = {
    codigo:0,
    descripcion:"",
    precio:0
  }

  constructor(private articulosServicios: ArticulosService){}

  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos(){
    this.articulosServicios.recuperarTodos().subscribe((result:any) => this.articulos = result);
  }

  alta(){
    this.articulosServicios.alta(this.art).subscribe((datos:any) => {
      if (datos['resultado'] =='OK'){
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  baja(codigo:number){
    this.articulosServicios.baja(codigo).subscribe((datos:any) => {
      if (datos['resultado'] == 'OK'){
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  modificar(){
    this.articulosServicios.modificar(this.art).subscribe((datos:any) => {
      if (datos['resultado'] == 'OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  seleccionar(codigo:number){
    this.articulosServicios.seleccionar(codigo).subscribe((result:any) => this.art = result[0]);
  }

  hayRegistros(){
    return true;
  }
}
