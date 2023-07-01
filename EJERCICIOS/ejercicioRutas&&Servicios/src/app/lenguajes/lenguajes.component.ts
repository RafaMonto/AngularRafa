import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LenguajeService } from './lenguaje.service';

@Component({
  selector: 'app-lenguajes',
  templateUrl: './lenguajes.component.html',
  styleUrls: ['./lenguajes.component.css']
})
export class LenguajesComponent implements OnInit{

  lenguajes: any;

  constructor(private lenService: LenguajeService) {}

  ngOnInit(){
    this.lenService.retornar().subscribe(result => this.lenguajes = result);
  }
}
