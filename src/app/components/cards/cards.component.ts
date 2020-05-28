import { Component, OnInit, Input } from '@angular/core';

import { ConexionService } from '../../services/conexion.service';
import { Civilization } from '../../interfaces/civilizations.inteface';
import { Units } from '../../interfaces/units.interface';
import { Structures } from '../../interfaces/strucres.interface';
import { Technologies } from '../../interfaces/technologies.interface';
import { Router } from '@angular/router';






@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],

})
export class CardsComponent implements OnInit {
  @Input() items: ( Civilization | Units | Structures | Technologies)[] = [];
  @Input() id: string;

  constructor(private ConexionS: ConexionService, private router: Router) {

  }
  ngOnInit(): void { }

  setItem( item: ( Civilization | Units | Structures | Technologies) ){
    this.router.navigate(['card/', this.id, item.id]);
  }

}

