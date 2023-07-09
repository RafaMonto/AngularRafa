import { Component, OnInit } from '@angular/core';
import { CrudserviceService } from '../crudservice.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit {
  ciudadanos: any;

  ciudadano = {
    nombre: '',
    apellido: '',
    cedula: 0,
    fecha_nac: Date,
    categoria: '',
    fecha_expedicion: Date,
  };

  constructor(private crudService: CrudserviceService) {}

  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.crudService
      .recuperarTodos()
      .subscribe((result: any) => (this.ciudadanos = result));
  }

  agregar() {
     this.crudService.agregar(this.ciudadano).subscribe((datos: any) => {
       if (datos['resultado'] == 'Ok') {
         alert(datos['mensaje']);
         this.recuperarTodos();
       }
    });
  }

  borrar(cedula:number){
    this.crudService.borrar(cedula).subscribe((datos: any) => {
      if (datos['resultado'] == 'Ok') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  seleccionar(cedula:number){
    this.crudService
    .seleccionar(cedula)
    .subscribe((result: any) => (this.ciudadano = result[0]));
  }

  modificar(){
    this.crudService.modificar(this.ciudadano).subscribe((datos: any) => {
      if (datos['resultado'] == 'Ok') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }
}
