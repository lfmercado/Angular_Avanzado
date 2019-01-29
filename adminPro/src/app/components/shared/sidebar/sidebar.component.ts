import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/index.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
  providers: [SidebarService]
})
export class SidebarComponent implements OnInit {

  constructor( private _sidebarService: SidebarService) { }

  ngOnInit() {
  }

}
