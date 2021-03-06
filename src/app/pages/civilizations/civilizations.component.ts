import { Component, OnInit, HostListener } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-civilizations',
  templateUrl: './civilizations.component.html',
  styleUrls: ['./civilizations.component.css']
})
export class CivilizationsComponent implements OnInit {
  @HostListener('scroll', ['$event'])
  identificacion = 'civilization';
  loading: boolean;
  constructor(public conexionS: ConexionService) {
    this.conexionS.getCivilizations();
  }
  ngOnInit(): void { }
}
