import { Component, OnInit, Input } from '@angular/core';

import { ConexionService } from '../../services/conexion.service';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],

})
export class CardsComponent implements OnInit {
  @Input() items: any[] = [];
  @Input() id: string;
  tipoPage: Caracter = {
    civilizations: null,
    units: null,
    structures: null,
    technilogies: null
  };
  constructor(private ConexionS: ConexionService) {
    this.tipoPage = {
      civilizations: false,
      units: false,
      structures: false,
      technilogies: false
    };
    // console.log(this.id);
    // // this.id = this.id.toLowerCase();
    // this.setValidar(this.id);
  }
  ngOnInit(): void { }

  // setValidar(id: string) {
  //   switch (id) {
  //     case 'civilizations':
  //       this.tipoPage.civilizations = true;
  //       break;
  //     case 'units':
  //       this.tipoPage.units = true;
  //       break;

  //     default:
  //       this.tipoPage = {
  //         civilizations: false,
  //         units: false,
  //         structures: false,
  //         technilogies: false
  //       };
  //       break;
  //   }
  // }

}
interface Caracter {
  civilizations: boolean;
  units: boolean;
  structures: boolean;
  technilogies: boolean;
}
