import { Component, OnInit, OnDestroy} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {
  public contador;
  public subscription:Subscription;
  constructor() {
//por medio del pipe se puede utilizar el metodo retry
//este le indica a angular que intente completar el observer la cantidad de veces definidas cuando este tenga algun posible error.
   this.subscription = this.FuncObservable().pipe(
       retry(2)
     ).subscribe(
       response => {
        console.log(this.contador = response);
        
       },
       error =>{
        console.error(error);  
       },
       ()=>{
         console.log('El observador termino');
         
       }
     );     
   }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

  FuncObservable():Observable<any>{
    return new Observable( observer =>{
      let contador = 0;
      let intervalo = setInterval(() =>{
        contador ++;

        const salida = {
          valor : contador
        }
       observer.next(salida);
       
    //  if(contador === 3){
    //     clearInterval(intervalo);
    //     observer.complete();  
    //    }
      //  if(contador === 2 ){
      //    clearInterval(intervalo);
      //    observer.error('Error en el conteo');
      //  }
      }, 1000  );
    }).pipe(
      map((resp: any) => {
        return resp.valor; 
      }),
      filter((valor, index) =>{
//          console.log('Filtro',valor, index);
          if((valor % 2)  === 1) /** numero impar*/   return true;
          else/**numero par */  return false;
        })
    );
  }
}
