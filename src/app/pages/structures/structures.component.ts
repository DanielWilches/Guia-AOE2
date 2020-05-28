import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';


@Component({
  selector: 'app-structures',
  templateUrl: './structures.component.html',
  styleUrls: ['./structures.component.css']
})
export class StructuresComponent implements OnInit {
  structures = 'structure';
  constructor(public conexionS: ConexionService ) {
  }
  ngOnInit(): void {
    this.conexionS.getStructures();
  }
  // ngOnDestroy() {
  //   this.conexionS.getStructures().unsubscribe();
  // }
}

