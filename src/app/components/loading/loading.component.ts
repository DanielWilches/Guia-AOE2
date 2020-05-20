import { Component, OnInit } from '@angular/core';
import { IconServiceService } from '../../services/icon-service.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor( public iconS: IconServiceService ) { }

  ngOnInit(): void {
  }

}
