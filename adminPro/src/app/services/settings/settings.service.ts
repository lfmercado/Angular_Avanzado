import { Injectable, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default-dark.css',
    tema: 'default'
  }
           //De esta manera podemos acceder a TODO EL DOM para realizar las respectivas modificacion
  constructor(@Inject(DOCUMENT) private _document) { 
    this.cargarAjustes();
  }
  guardarAjustes(){
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }
  
  cargarAjustes(){
    if(localStorage.getItem('ajustes')){
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
    }

    this.aplicarTema(this.ajustes.tema);
  }


  aplicarTema(tema: string){
                                //de esta manera se cambia un caracter en una cadena
    let url =`assets/css/colors/${ tema }.css`;
    //Lo que se hace aqui es buscar en todo el DOM un id llamado 'tema' le agregamos un atributo 'href' y le damos a donde apunta
    //de esta manera podemos cabiar el color del sidebar
    this._document.getElementById('tema').setAttribute('href', url );

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();
  }
}

interface Ajustes{
  temaUrl:string;
  tema: string;
}