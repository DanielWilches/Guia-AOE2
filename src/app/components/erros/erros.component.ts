import { Component, OnInit } from '@angular/core';
import { IconServiceService } from '../../services/icon-service.service';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-erros',
  templateUrl: './erros.component.html',
  styleUrls: ['./erros.component.css']
})
export class ErrosComponent implements OnInit {

  constructor( public iconS: IconServiceService, public conexionS: ConexionService) { }

  ngOnInit(): void {
  }

}
