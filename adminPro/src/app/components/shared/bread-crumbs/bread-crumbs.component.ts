import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, ActivationEnd } from '@angular/router';
import { retry, map, filter} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './bread-crumbs.component.html',
  styles: []
})
export class BreadCrumbsComponent implements OnInit {

  public data:string;
  constructor(private _router:Router,
              private title:Title,
              private meta: Meta) { 
    this.getDataRoute().subscribe(
        data =>{ 
          this.data = data.titulo;
          this.title.setTitle(this.data);
          const metaTag:MetaDefinition = {
            name :'Description',
            content: this.data 
          }
          this.meta.updateTag(metaTag);
      })
    
     
     
  }

  ngOnInit() {
  }
  getDataRoute(){
    return this._router.events.pipe(
        filter(event => event instanceof ActivationEnd ),
        filter((event:ActivationEnd) => event.snapshot.firstChild == null ),
        map( (resp:ActivationEnd) => resp.snapshot.data)
    );

      }
    
  

}
