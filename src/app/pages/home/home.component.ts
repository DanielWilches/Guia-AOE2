import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router} from '@angular/router';

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
  nullAlert = false;
  alertError = false;
  constructor(private conexionS: ConexionService, public iconS: IconServiceService, private router: Router) {
  }

  ngOnInit() {
    this.validations();
  }

  getSearch(forma: FormGroup) {

    if (forma.controls[`selectedItem`].value === '' || forma.controls[`selectedItem`].value === 'select item') {
      this.vistaCard(this.nullAlert);
      setTimeout(() => {
        return this.nullItem = false;
      }, 5000);
      return this.nullItem = true;
    } else {
      this.conexionS.getSearch(forma.controls[`selectedItem`].value, forma.controls[`search`].value)
        .subscribe((data: any) => {
          this.vistaCard(true);
          this.router.navigate(['card/', forma.controls[`selectedItem`].value, data.id]);
        }, (error) => {
          this.alertError = true;
          setTimeout(() => {
            this.alertError = false;
          }, 5000);
          console.log(error);
        });
    }
  }

  vistaCard(arg: boolean) {
    this.nullAlert = arg;
  }
  validations() {
    this.forma = new FormGroup({
      search: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      selectedItem: new FormControl('', [Validators.required])
    });
  }
}
