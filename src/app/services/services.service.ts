import { Observable } from 'rxjs';
// tslint:disable-next-line: no-submodule-imports
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { ICompanyService } from '../shared/models/ICar';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
  url = environment.apiUrl;

  getCompanyServices(): Observable<ICompanyService[]> {
    return this.http.get<ICompanyService[]>(this.url + 'OneTimeSeed/companyservices');
  }
}
