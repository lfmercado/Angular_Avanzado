import { Component, OnInit } from '@angular/core';
import { error } from 'util';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.contarTres().then(
      mensaje => console.log("Promesa funcionó", mensaje)   
    ).catch(
    error => console.error("Promesa No Funcionó, ", error)
      
    )
   }

  ngOnInit() {
  }

  contarTres():Promise<boolean>{

    return new Promise((resolve, reject) =>{
        let contador= 0;
        let interval = setInterval(()=>{
          contador+=1;
          console.log(contador);
          
          if(contador==3){
            resolve(true);
            clearInterval(interval);
          }
        }, 1000);
      });
  }

}
