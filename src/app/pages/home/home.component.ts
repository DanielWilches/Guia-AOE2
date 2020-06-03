import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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
  nullItem = false;
  alertError = false;
  constructor(public conexionS: ConexionService, public iconS: IconServiceService, private router: Router) {
  }

  ngOnInit() {
    this.validations();
  }
  setBusqueda(form: FormGroup) {
    this.conexionS.getBusqueda(form);
  }
  validations() {
    this.forma = new FormGroup({
      search: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      selectedItem: new FormControl('', [Validators.required])
    });
  }
}
