import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewcarService {
  constructor(private http: HttpClient) {}

  UploadService(formData: FormData): Observable<any> {
    return this.http.post(environment.apiUrl + 'Car/upload', formData, {
      reportProgress: true,
      observe: 'events',
    });
  }

  newCar(carObject: any): Observable<any> {
    return this.http.post(environment.apiUrl + 'Car/carinfo', carObject);
  }
}
