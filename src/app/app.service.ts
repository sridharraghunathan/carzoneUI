import { Observable } from 'rxjs';
// tslint:disable-next-line: no-submodule-imports
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../../src/environments/environment';
import { ICompanyWebsiteInfo } from './shared/models/ICar';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  routeUrl = new Subject<string>();
  url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  routerInfo(routerpath: string): void {
    this.routeUrl.next(routerpath);
  }

  getCompanyWebSite(): Observable<ICompanyWebsiteInfo> {
    return this.http.get<ICompanyWebsiteInfo>(this.url + 'OneTimeSeed/companywebsiteinfo');
  }
}
