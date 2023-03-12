import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  
  hoy!:string;

  constructor(
    private datePipe: DatePipe
  ){
    this.hoy=datePipe.transform(new Date(), "YYYY")||"";
  }
}
