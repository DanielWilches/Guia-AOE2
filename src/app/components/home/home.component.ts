import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
// servicios
import { IconServiceService } from '../../services/icon-service.service';
import { ConexionService } from '../../services/conexion.service';
import { faClosedCaptioning } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  forma: FormGroup;
  group: string[] = ['select item', 'civilization', 'unit', 'structure', 'technology'];
  selectedItem: string;
  nullItem = false;
  constructor(public iconS: IconServiceService, private conexionS: ConexionService) {
    console.log(this.group);

  }
  ngOnInit() {
    this.validations();
  }

  getSearch(forma: FormGroup) {
    if (forma.controls['selectedItem'].value === 'select item' || forma.controls['selectedItem'].value === '') {
      return this.nullItem = true;
    } else {
      this.conexionS.getSearch(forma.controls['selectedItem'].value, forma.controls['search'].value)
        .subscribe((data) => {
          console.log(data);
        }, (error) => {
          console.log(error);
        });
    }
  }

  focusFunction() {
    console.log('funcion focus');
  }
  validations() {
    this.forma = new FormGroup({
      search: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      selectedItem: new FormControl('', [Validators.required])
    });
  }

}
