import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {
  identificacion = 'unit';
  constructor(public conexionS: ConexionService) {
    this.conexionS.getUnits();
  }

  ngOnInit(): void {
  }

}
