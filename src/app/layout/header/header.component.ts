import { AppService } from './../../app.service';
import { Component, Input, OnInit } from '@angular/core';
import { ICompanyWebsiteInfo } from './../../../../src/app/shared/models/ICar';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/models/IUser';
import { AccountService } from 'src/app/account/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  enableSearch  = false;
  @Input() sticky: boolean | undefined;
  enableCarPic = false;
  contacts$: Observable<ICompanyWebsiteInfo> | undefined;
  currentUser$: Observable<IUser| null> | undefined;


  constructor(private appService: AppService, private accountService: AccountService) { }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.appService.routeUrl.subscribe((route: string) => {
        (route !== '/home' && route !== '/') ? this.enableCarPic = true : this.enableCarPic = false;
    });

    this.contacts$ = this.appService.getCompanyWebSite();
    this.currentUser$ = this.accountService.currentUser$;

  }
  onSearchClickHeader(): void{
    this.enableSearch = true;
  }
  onSearchClick(): void {
    this.enableSearch = false;
  }

  
  logout(): void{
    console.log('testing');
    this.accountService.logout();
  }
}
