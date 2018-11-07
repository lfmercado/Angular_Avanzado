import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [],
  providers: [SettingsService]
})
export class AccountSettingsComponent implements OnInit {
 es
  constructor(
              private _ajustes: SettingsService) { }

  ngOnInit() {
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
}
