import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ConexionService } from '../../services/conexion.service';
import { createAotUrlResolver } from '@angular/compiler';

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
    this.title = itmesGroup;
    this.ConexionS.getSearch(itmesGroup, id)
      .subscribe((data: any) => {
        this.loading = true;
        return this.item = data;
      }, (err: any) => {
        console.log(err);
      });
    // switch (itmesGroup) {
    //   case 'civilization':
    //     this.ConexionS.getSearch(itmesGroup, id)
    //       .subscribe((data: any) => {
    //         this.loading = true;
    //         return this.item = data;
    //       }, (err: any) => {
    //         console.log(err);
    //       });
    //     break;
    //   case 'unit':
    //     this.ConexionS.getSearch(itmesGroup, id)
    //       .subscribe((data: any) => {
    //         this.loading = true;
    //         return this.item = data;
    //       }, (err: any) => {
    //         console.log(err);
    //       });
    //     break;
    //   case 'structure':
    //     this.ConexionS.getSearch(itmesGroup, id)
    //       .subscribe((data: any) => {
    //         this.loading = true;
    //         return this.item = data;
    //       }, (err: any) => {
    //         console.log(err);
    //       });
    //     break;
    //   case 'technology':
    //     this.ConexionS.getSearch(itmesGroup, id)
    //       .subscribe((data: any) => {
    //         this.loading = true;
    //         return this.item = data;
    //       }, (err: any) => {
    //         console.log(err);
    //       });
    //     break;
    //   default:
    //     console.log('error');
    //     break;
    // }
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
