import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './articulos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'proyecto012';
  articulos :any;

  constructor(private articulosServicio: ArticulosService) {    
  }

  ngOnInit(): void {
      this.articulos=this.articulosServicio.retornar();
  }
}
