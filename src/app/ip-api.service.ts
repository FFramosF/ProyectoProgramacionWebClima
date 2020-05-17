import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { from,observable,concat,of,pipe } from 'rxjs';
import {flatMap, map, mergeMap, concatMap, concatAll} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IpApiService {

  baseUrl='http://api.ipstack.com/check?access_key=4eabcd3fe35d9077b9be283eeb518b89';

  constructor(private http: HttpClient) { }

  ObtenerInfoApi(){
    
    return this.http.get(this.baseUrl).pipe(
      mergeMap(
        (info: any) => {
          const params = {
            lon: info.longitude,
            lat: info.latitude,
            product: 'civillight',
            output: 'json'
          };
          return this.http.get('http://www.7timer.info/bin/api.pl',{params})
          .pipe( map(clima => ({info,clima})))
        }
      )
    )
  }
}
//civillight
//http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=xml