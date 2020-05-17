import { Component, OnInit, OnChanges } from '@angular/core';
import { IpApiService } from './ip-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProyectoFinal';

  constructor(private ip: IpApiService){}

  ngOnInit(){
    this.obtenerInfoIp();
    
  }
  load=false;

  CiudadInfo;
  ClimaInfo;

  obtenerInfoIp(){
    this.ip.ObtenerInfoApi().subscribe(
      DATOS => {
        console.log(DATOS.info);
        this.CiudadInfo = DATOS.info;
        this.ClimaInfo = DATOS.clima;
        this.load=true;
      },
      error =>{
        alert(error);
      }
    );
  }

  
}
