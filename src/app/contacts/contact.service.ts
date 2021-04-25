import { environment } from '../../../src/environments/environment';
import { Observable } from 'rxjs';
// tslint:disable-next-line: no-submodule-imports
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICompanyService, IGeneralEnquiryMessage, IResponse } from '../shared/models/ICar';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
   url = environment.apiUrl;
  constructor( private http: HttpClient) { }


  onSubmitQuery(userEnquiryObject: IGeneralEnquiryMessage ): Observable<IResponse> {
    return this.http.post<IResponse>(this.url + 'Car/generalenquiry', userEnquiryObject);
  }

}
