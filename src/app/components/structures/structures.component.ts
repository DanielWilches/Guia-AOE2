import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';


@Component({
  selector: 'app-structures',
  templateUrl: './structures.component.html',
  styleUrls: ['./structures.component.css']
})
export class StructuresComponent implements OnInit {
  arrayStructures: any[] = [];
  structures = 'structures';
  constructor( private conexionS: ConexionService ) {
    this.getStructures();
   }

  ngOnInit(): void {
  }

  getStructures() {
    this.conexionS.getStructures()
    .subscribe((resul) => {
      console.log(resul);
      return this.arrayStructures = resul;
    }, (err) => {
      console.log(err);
    });
  }

}

