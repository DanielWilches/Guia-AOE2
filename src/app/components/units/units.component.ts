import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {
  units: any[] = [];
  identificacion = 'units';
  constructor(private conexionS: ConexionService) {
    this.getUnits();
  }

  ngOnInit(): void {
  }

  getUnits() {
    console.log('espere que esta cargando... ');
    this.conexionS.getUnits()
    .subscribe((resul: any) => {
      console.log('cargado');
      console.log(resul);
      this.units = resul;
    },
    (error: any) => {
      console.log(error);
    });
  }

}
