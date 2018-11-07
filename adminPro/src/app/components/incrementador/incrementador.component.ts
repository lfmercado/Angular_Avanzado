import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input() leyenda: string = 'Leyenda'; //Entrada 
  @Input() porcentaje: number = 50;     //Entrada 
  @ViewChild('txtporcentaje') txtporcentaje: ElementRef   //Hacer Referencia a un elemento HTML
  @Output() cambioValor: EventEmitter<number> = new EventEmitter(); //Salida
  constructor() {   
    console.log('Leyenda', this.leyenda);
    console.log('Progreso', this.porcentaje);
  }

  ngOnInit() {
  }

  onChange(event){
    //let element:any  = document.getElementsByName('porcentaje')[0];
  
    if(event > 100 ) this.porcentaje = 100;
    if(event < 0 ) this.porcentaje = 0;
    if(event == null || event == undefined ) this.porcentaje = 0;
    this.txtporcentaje.nativeElement.value = this.porcentaje;

        this.cambioValor.emit(this.porcentaje);
  }

  cambiarValor(value){
    this.porcentaje = this.porcentaje + value;
    if(this.porcentaje < 0){
      this.porcentaje=0;
    }
    if(this.porcentaje >100){
      this.porcentaje =100;
    }

    this.cambioValor.emit(this.porcentaje);
  }
  cambiarValor2(value){
    this.porcentaje = this.porcentaje + value;
    if(this.porcentaje < 0){
      this.porcentaje=0;
    }
    if(this.porcentaje >100){
      this.porcentaje =100;
    }

    this.cambioValor.emit(this.porcentaje);
  }

}
