import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // @Input() item: any;
  // @Input() id: string;
  items: any [] = [];
  identificacion: string;
  constructor(  private activated: ActivatedRoute  ) {
    // this.item = this.activated.snapshot.params.objectSelccionado;
  }
  ngOnInit(): void {
    this.activated.params.subscribe((data: Params) => {
      this.items.push(JSON.parse(data.civilization));
      this.identificacion =  data.identificacion;
      console.log(this.identificacion);
    });
  }

}
