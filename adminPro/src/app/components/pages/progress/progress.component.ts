import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  public porcentaje: number = 50;
  constructor() { }

  ngOnInit() {
  }
}
