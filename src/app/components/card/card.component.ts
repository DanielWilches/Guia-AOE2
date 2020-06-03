import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ConexionService } from '../../services/conexion.service';
import { createAotUrlResolver } from '@angular/compiler';
import { Unsubscribable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // @Input() item: any;
  // @Input() id: string;
  item: object = {};
  identificacion: string;
  title: string;
  loading: boolean;
  constructor(private router: Router, private activated: ActivatedRoute, private ConexionS: ConexionService) {
    // this.item = this.activated.snapshot.params.objectSelccionado;
  }
  ngOnInit(): void {
    this.activated.params.subscribe((data: Params) => {
      this.getItem(data.itmesGroup, data.id);
    });
  }
  getItem(itmesGroup: string, id: string) {
    this.loading  = true;
    this.title = itmesGroup;
    this.ConexionS.getSearch(itmesGroup, id)
    .subscribe((data: any) => {
      setTimeout(() => {
        this.loading = false;
      }, 5000);
      return this.item = data;
    }, (err: any) => {
      console.log(err);
    });
  }
  // dejo constancia que en algunos elementos que se obtienen como respuesta
  // son de tipo array con mas de un indice
  setUrl(url: string) {
    const URLARRAY = this.desintegracionArray(url);
    this.ConexionS.getSearch(URLARRAY[0], URLARRAY[1])
    .subscribe((data: any) => {
      this.sizeResult(URLARRAY, data);
    }, (err => {
      console.log(err);
    }));
  }
  desintegracionArray(url: string): string[] {
    const URL: string[] = url.split('/');
    URL.splice(0, URL.length - 2);
    return URL;
  }
  sizeResult(urlArray: string[], data: any) {
    if (data.length > 0) {
      this.router.navigate(['card/', urlArray[0], data[0].id]);
    } else {
      this.router.navigate(['card/', urlArray[0], data.id]);
    }
  }
}
