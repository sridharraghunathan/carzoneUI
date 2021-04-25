import { Observable } from 'rxjs';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewcarService {
  constructor(private http: HttpClient) {}

  UploadService(formData: FormData): Observable<any> {
    return this.http.post('https://localhost:5001/api/Car/upload', formData, {
      reportProgress: true,
      observe: 'events',
    });
    
  }
}
