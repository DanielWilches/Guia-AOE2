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
  }
  ngOnInit(): void { }

}
interface Caracter {
  civilizations: boolean;
  units: boolean;
  structures: boolean;
  technilogies: boolean;
}
