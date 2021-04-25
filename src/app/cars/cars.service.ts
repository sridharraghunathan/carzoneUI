import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICarInfo } from '../shared/models/ICar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  url = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getCarData(): Observable<ICarInfo[]> {
    return this.http.get<ICarInfo[]>(this.url + 'Car/carinfo');
  }

}
