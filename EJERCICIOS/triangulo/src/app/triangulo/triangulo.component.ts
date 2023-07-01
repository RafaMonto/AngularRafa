import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.css']
})
export class TrianguloComponent implements OnInit {
  color1 = "";
  color2 = "";
  color3 = "";
  colorName1 = "";
  colorName2 = "";
  colorName3 = "";

  ngOnInit() {
    this.color1 = 'yellow';
    this.color2 = 'blue';
    this.color3 = 'red';
    this.colorName1 = 'Amarillo';
    this.colorName2 = 'Azul';
    this.colorName3 = 'Rojo';

    setInterval(() => {
      this.color1 = this.getRandomColor();
      this.color2 = this.getRandomColor();
      this.color3 = this.getRandomColor();
      this.colorName1 = this.color1;
      this.colorName2 = this.color2;
      this.colorName3 = this.color3;
    }, 1000);
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
