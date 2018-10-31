import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input() leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;
  constructor() {   
    console.log('Leyenda', this.leyenda);
    console.log('Progreso', this.porcentaje);
  }

  ngOnInit() {
  }

  cambiarValor(value){
    this.porcentaje = this.porcentaje + value;
    if(this.porcentaje < 0){
      this.porcentaje=0;
    }
    if(this.porcentaje >100){
      this.porcentaje =100;
    }
  }

}
