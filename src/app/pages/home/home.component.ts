import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
// servicios
import { IconServiceService } from '../../services/icon-service.service';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  forma: FormGroup;
  group: string[] = ['select item', 'civilization', 'unit', 'structure', 'technology'];
  Civilizations: any[] = [];
  selectedItem: string;
  nullItem = false;
  nullAlert = false;
  alertError = false;
  constructor(private conexionS: ConexionService, public iconS: IconServiceService) {
  }

  ngOnInit() {
    this.getCivilizations();
    this.validations();
  }

  getSearch(forma: FormGroup) {
    console.log(forma);
    if ( forma.controls['selectedItem'].value === '' || forma.controls['selectedItem'].value === 'select item' ) {
      this.vistaCard(this.nullAlert);
      setTimeout(() => {
        return this.nullItem = false;
      }, 5000);
      return this.nullItem = true;
    } else {
      this.conexionS.getSearch(forma.controls['selectedItem'].value, forma.controls['search'].value)
      .subscribe((data) => {
        this.vistaCard(true);
        console.log(data);
      }, (error) => {
        this.alertError = true;
        setTimeout(() => {
          this.alertError = false;
        }, 5000);
        console.log(error);
      });
    }
  }

  vistaCard(arg: boolean ) {
    this.nullAlert = arg;
  }
  getCivilizations() {
    this.conexionS.getCivilizations().subscribe(
      (data: any) => {
        return this.Civilizations = data;
      }, (error: any) => {
        console.log(error);
      });
  }
  validations() {
    this.forma = new FormGroup({
      search: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      selectedItem: new FormControl('', [Validators.required])
    });
  }
}
