import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ConexionService } from '../../services/conexion.service';

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
  constructor(private activated: ActivatedRoute, private ConexionS: ConexionService) {
    // this.item = this.activated.snapshot.params.objectSelccionado;
  }
  ngOnInit(): void {
    this.activated.params.subscribe((data: Params) => {
      this.getItem(data.itmesGroup, data.id);
    });
  }
  getItem(itmesGroup: string, id: string) {
    switch (itmesGroup) {
      case 'civilization':
        this.title = itmesGroup;
        this.ConexionS.getSearch(itmesGroup, id)
          .subscribe((data: any) => {
            console.log(data['civilization_bonus']);
            this.loading = true;
            return this.item = data;
          }, (err: any) => {
            console.log(err);
          });
        break;
      case 'unit':
        this.ConexionS.getSearch(itmesGroup, id)
          .subscribe((data: any) => {
            console.log(Object.keys(data).length);
            return this.item = data;
          }, (err: any) => {
            console.log(err);
          });
        break;
      case 'structure':
        this.ConexionS.getSearch(itmesGroup, id)
          .subscribe((data: any) => {
            console.log(Object.keys(data).length);
            return this.item = data;
          }, (err: any) => {
            console.log(err);
          });
        break;
      case 'technology':
        this.ConexionS.getSearch(itmesGroup, id)
          .subscribe((data: any) => {
            console.log(Object.keys(data).length);
            return this.item = data;
          }, (err: any) => {
            console.log(err);
          });
        break;
      default:
        console.log('error');
        break;
    }
  }
}

