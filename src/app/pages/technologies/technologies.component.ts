import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';


@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  technologies = 'technology';

  constructor( public conexionS: ConexionService ) {
    this.conexionS.getTechnologies();
   }

  ngOnInit(): void {
  }
}
