import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// interfaces
import { Civilization, } from '../interfaces/civilizations.inteface';
import { Units } from '../interfaces/units.interface';
import { Structures } from '../interfaces/strucres.interface';
import { Technologies } from '../interfaces/technologies.interface';


@Injectable({
  providedIn: 'root',
})
export class ConexionService {
  url: string;
  api: string;
  public civilizations: Civilization[] = [];
  public units: Units[] = [];
  public structures: Structures[] = [];
  public technologies: Technologies[] = [];
  public error: any[] = [];
  public loading: boolean;
  public err: boolean;
  public seletedGroup: boolean;
  constructor(private http: HttpClient, private router: Router) {
    this.api = 'apwi/v1';
  }
  // https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations
  getCivilizations() {
    if (this.civilizations.length === 0) {
      this.loading = true;
      return this.http.get(`${this.api}/civilizations`).subscribe((data) => {
        this.civilizations = data[`civilizations`];
        this.loading = false;
      },
        err => {
          this.loading = false;
          this.err = true;
          this.error = err;
        });
    } else {
      this.loading = false;
    }
  }
  //  https://age-of-empires-2-api.herokuapp.com/api/v1/units
  getUnits() {
    if (this.units.length === 0) {
      this.loading = true;
      return this.http.get(`${this.api}/units`).subscribe((data) => {
        this.units = data[`units`];
        this.loading = false;
      }, err => {

        this.loading = false;
        this.err = true;
        this.error = err;
      });
    } else {
      this.loading = false;
    }
  }
  // https://age-of-empires-2-api.herokuapp.com/api/v1/structures
  getStructures() {
    if (this.structures.length === 0) {
      this.loading = true;
      return this.http.get(`${this.api}/structures`).subscribe((data) => {
        this.structures = data[`structures`];
        this.loading = false;
      }, err => {

        this.loading = false;
        this.err = true;
        this.error = err;
      });

    } else {
      this.loading = false;
    }
  }
  // https://age-of-empires-2-api.herokuapp.com/api/v1/technologies
  getTechnologies() {
    if (this.technologies.length === 0) {
      this.loading = true;
      return this.http.get(`${this.api}/technologies`).subscribe((data) => {
        this.technologies = data[`technologies`];
        this.loading = false;
      },
        err => {

          this.loading = false;
          this.err = true;
          this.error = err;
        });
    } else {
      this.loading = false;
    }
  }
  // Busquedas
  // https://age-of-empires-2-api.herokuapp.com/api/v1/la_seccion_donde_vas_buscar/tu_busqueda
  getSearch(type: string, search: string) {
    return this.http.get(`${this.api}/${type}/${search}`);
  }

  getBusqueda(form: FormGroup) {
    if (form.controls.selectedItem.value === 'select item') {
      this.seletedGroup = true;
    } else {
      return this.http.get(`${this.api}/${form.controls.selectedItem.value}/${form.controls.search.value}`)
        .subscribe((data: any) => {
          console.log(data);
          this.router.navigate(['card/', form.controls.selectedItem.value, data.id]);
        }, err => {
          this.err = true;
          console.log(err);
        });
    }
  }
}
