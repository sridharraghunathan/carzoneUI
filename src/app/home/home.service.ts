import { IExecutiveTeam, ISearch } from './../shared/models/ICar';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICarInfo, ICarHomeCarousel } from '../shared/models/ICar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getHomeCarousel(): Observable<ICarHomeCarousel[]> {
    return this.http.get<ICarHomeCarousel[]>(this.url + 'OneTimeSeed/carousel');
  }

  getCarData(): Observable<ICarInfo[]> {
    return this.http.get<ICarInfo[]>(this.url + 'Car/carinfo');
  }

  getExecutiveTeam(): Observable<IExecutiveTeam[]> {
    return this.http.get<IExecutiveTeam[]>(this.url + 'OneTimeSeed/companyexecutive');
  }

  getFilterData(searchRequest: any): Observable<ICarInfo[]>{
    return this.http.get<ICarInfo[]>(this.url + 'Car/carinfo/search',
     {params : searchRequest});
  }

}
