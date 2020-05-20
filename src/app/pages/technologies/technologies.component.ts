import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';


@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  arryTechnologies: any[] = [];
  technologies = 'technologies';
  loading: boolean;
  constructor( private conexionS: ConexionService ) {
    this.getTechnologies();
   }

  ngOnInit(): void {
  }
  getTechnologies() {
    this.loading = true;
    this.conexionS.getTechnologies()
    .subscribe((resul) => {
      this.loading = false;
      console.log(resul);
      return this.arryTechnologies = resul;
    }, (err) => {
      console.log(err);
    });
  }

}
