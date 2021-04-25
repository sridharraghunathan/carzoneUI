import { AppService } from './../../app.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  year: number;
  copyrightText = 'Carzone Corp. All Rights Reserved.';
  enableGetInTouch = false;
  constructor(private router: Router, private appService: AppService) {}

  ngOnInit(): void {
    this.year = new Date().getFullYear();

    // tslint:disable-next-line: deprecation
    this.appService.routeUrl.subscribe((route: string) => {
      route === '/home'
        ? (this.enableGetInTouch = true)
        : (this.enableGetInTouch = false);
    });
  }

  onContact(): void {
    /// Goto Contact
    this.router.navigateByUrl('/contacts');
  }
}
