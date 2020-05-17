import { Component, OnInit, Input } from '@angular/core';
import {observable, interval, Observable} from 'rxjs';

@Component({
  selector: 'app-texto-arriba',
  templateUrl: './texto-arriba.component.html',
  styleUrls: ['./texto-arriba.component.css']
})
export class TextoArribaComponent implements OnInit {

  constructor() { }

  @Input() Info;
  today= new Date();
  hora = this.today.getHours();
  minutosOb: Observable<number> = interval(1000);
  minutos = this.today.getMinutes();

  ngOnInit() {
    //this.minutos = this.today.getMinutes();
  }

}
