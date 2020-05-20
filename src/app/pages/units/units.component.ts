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
  loading: boolean;
  error: boolean;
  errs: any;
  constructor(private conexionS: ConexionService) {
    this.getUnits();
  }

  ngOnInit(): void {
  }

  getUnits() {
    this.error = false;
    this.loading =  true;
    this.conexionS.getUnits()
    .subscribe((resul: any) => {
      this.loading = false;
      this.units = resul;
    },
    (error: any) => {
      this.loading = false;
      this.error = true;
      return this.errs = error;
      // statusText
    });
  }

}
