import { Component, OnInit } from '@angular/core';
import { error } from 'util';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    let contador= 0;

    let promesa = new Promise((resolve, reject) =>{
      let interval = setInterval(()=>{
        contador+=1;
        console.log(contador);
        
        if(contador==3){
          reject('Se ha cumplido el tiempo esperado');
          clearInterval(interval);
        }
      }, 1000);
    });
    promesa.then(
     ()=> console.log("Promesa funcionó")
      
    ).catch(
    error => console.error("Promesa No Funcionó, ", error)
      
    )
   }

  ngOnInit() {
  }

}
