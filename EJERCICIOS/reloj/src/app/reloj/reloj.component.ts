import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit{
  segundo=0;
  minuto=0;
  hora=0;
  @Input() inicio1:number=0;
  @Input() inicio2:number=0;
  @Input() inicio3:number=0;
  @Output() multiplo10 = new EventEmitter();
  constructor(){}

  ngOnInit(){
    this.segundo = this.inicio1;
    this.minuto = this.inicio2;
    this.hora = this.inicio3;
      setInterval(() =>{
        this.segundo++;
        if (this.segundo==60) {
          this.segundo=0;
          this.minuto++;
        }
        if (this.minuto==60) {
          this.minuto=0;
          this.hora++;
        }
        if (this.hora==12) {
          this.hora=0;
        }
        if (this.segundo % 10==0) {
          this.multiplo10.emit(this.segundo)
        }
        
    },1000);
  }
}