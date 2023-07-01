import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articulos: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("https://rickandmortyapi.com/api/character")
    .subscribe(
      (resultado: any) => {
        this.articulos = resultado.results;
      }
    );
  }
}
