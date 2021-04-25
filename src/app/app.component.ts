import { AppService } from './app.service';
import { NavigationEnd, Router } from '@angular/router';
import {
  Component,
  HostListener,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';
// tslint:disable-next-line: no-submodule-imports
import { filter } from 'rxjs/operators';
import { AccountService } from './account/account.service';
import { IUser } from './shared/models/IUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'carOne';
  isSticky = false;
  hideScrollButton = true;
  @ViewChild('scrollTopBtn', { read: ElementRef }) public scrollTopBtn:
    | ElementRef<any>
    | undefined;

  constructor(
    private router: Router,
    private appService: AppService,
    private accountService: AccountService
  ) {
    // General Router Events call for the footer change.
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      // tslint:disable-next-line: deprecation
      .subscribe((event: any) => this.appService.routerInfo(event.url));
  }
  ngOnInit(): void {

    this.getCurrentUser();
  }

  @HostListener('window:scroll', ['$event'])
  stickyHeader(): void {
    if (window.pageYOffset > 42) {
      this.isSticky = true;
      this.hideScrollButton = false;
    } else {
      this.isSticky = false;
      this.hideScrollButton = true;
    }
  }

  onScroll(): void {
    this.hideScrollButton = true;
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  getCurrentUser(): void {
    const token = localStorage.getItem('token');
    // tslint:disable-next-line: deprecation
    this.accountService.loadCurrentUser(token).subscribe(
      (user: IUser) => {
        console.log('current User Intialized');
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
