import { Component, OnInit, HostListener } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-civilizations',
  templateUrl: './civilizations.component.html',
  styleUrls: ['./civilizations.component.css']
})
export class CivilizationsComponent implements OnInit {
  @HostListener('scroll', ['$event'])
  civilizacion: any[] = [];
  identificacion = 'civilizations';
  constructor(private conexionS: ConexionService) {
    this.setCivilizations();
  }

  ngOnInit(): void { }
  setCivilizations() {
    console.log('espere que esta cargando... ');
    this.conexionS.getCivilizations()
    .subscribe((resul: any) => {
      console.log('cargado');
      console.log(resul);
      return this.civilizacion = resul;
    },
    (err: any) => { });
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    console.log('mira daniel');
  }


}
