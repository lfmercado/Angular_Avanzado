import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../../services/index.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [],
  providers: [SettingsService]
})
export class AccountSettingsComponent implements OnInit {
 
  constructor(private _ajustes: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(value : string, link: any){
    console.log(value);
    this.aplicarCheck(link);
    this._ajustes.aplicarTema(value);
    
  }

  aplicarCheck(link: any){
    let selectores:any = document.getElementsByClassName('selector');
    for (let ref of selectores) {
        ref.classList.remove('working');
    }
    link.classList.add('working');
  }
  colocarCheck(){
    let selectores:any = document.getElementsByClassName('selector');
    let tema = this._ajustes.ajustes.tema;    
    for (let ref of selectores) {
        if(ref.getAttribute('data-theme') === tema){
          ref.classList.add('working');
          break;
        }
    }
  }
}
