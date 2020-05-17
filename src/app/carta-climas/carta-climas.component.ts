import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carta-climas',
  templateUrl: './carta-climas.component.html',
  styleUrls: ['./carta-climas.component.css']
})
export class CartaClimasComponent implements OnInit {

  constructor(private http: HttpClient) { }

  imagenes : Array<string> = [
    "http://www.7timer.info/img/misc/about_two_clear.png",
    "http://www.7timer.info/img/misc/about_two_pcloudy.png",
    "http://www.7timer.info/img/misc/about_two_cloudy.png",
    "http://www.7timer.info/img/misc/about_two_rain.png",
    "http://www.7timer.info/img/misc/about_two_snow.png",
    "http://www.7timer.info/img/misc/about_two_ts.png",
    "http://www.7timer.info/img/misc/about_two_tsrain.png"
  ];

  DiasSem : Array<string> = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

  @Input() Clima;

  datos : Array<object> = [];

  LlenaDatos(){
    for(let i=0; i<5; i++){
      let Climaaux = this.Clima.dataseries[i];
      let weather = Climaaux.weather ;
      let weatherImg :string;

      switch(weather){
        case 'clear': 
          weatherImg = this.imagenes[0];
        break;
        case 'pcloudy':
          weatherImg = this.imagenes[1];
        break;
        case 'cloudy':
          weatherImg = this.imagenes[2];
        break;
        case 'rain':
          weatherImg = this.imagenes[3];
        break;
        case 'snow':
          weatherImg = this.imagenes[4];
        break;
        case 'ts':
          weatherImg = this.imagenes[5];
        break;
        case 'tsrain':
          weatherImg = this.imagenes[6];
        break;
      }
      let año, mes, dia;
      
      if(Climaaux && Climaaux.date){
        let fecha = Climaaux.date.toString();
        año = fecha.substring(0, 4);
        mes = fecha.substring(4, 6);
        dia = fecha.substring(6, 8);
     }
      let TextoDia = this.DiasSem[new Date(`${mes}-${dia}-${año}`).getDay()];

      console.log(TextoDia);
      let object = {
        Dia: TextoDia,
        fecha: `${dia}/${mes}/${año}`,
        max:Climaaux.temp2m.max,
        min:Climaaux.temp2m.min,
        tiempo:weatherImg
      }
      this.datos.push(object);
    }
  }
 
  ngOnInit() {
    this.LlenaDatos();
  }

}
