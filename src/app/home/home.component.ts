import { Router } from '@angular/router';
import { HomeService } from './home.service';
import { ICarHomeCarousel, ICarInfo, IExecutiveTeam } from './../shared/models/ICar';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
// tslint:disable-next-line: no-submodule-imports
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any> | undefined;
  carousel$: Observable<ICarHomeCarousel[]> | undefined;
  carData$: Observable<ICarInfo[]> | undefined;
  carDataSale$: Observable<ICarInfo[]>| undefined;

  constructor(private homeService: HomeService ,
              private router: Router
    ) {
  }

  ngOnInit(): void {
    this.carousel$ = this.homeService.getHomeCarousel();
    this.carData$ =  this.homeService.getCarData()
    .pipe(
      // Excluding the records which are not featured
      map((carinfo: any) => {
        return carinfo.filter((v: any) => v.featured)
        .map((v: any) => v);
      })
    );

    this.carDataSale$ =  this.homeService.getCarData()
    .pipe(
      // Excluding the records which are not featured
      map((carinfo: ICarInfo[] ) => {
        return carinfo.filter((v: any) => v.saleType === 'Sale')
        .slice(0, 6)
        .map((v: ICarInfo) => v);
      })
    );

  }

   onscrollLeft(): void{
     // SCROLL CONTENT FOR LEFT CAROUSEL
    this.widgetsContent?.nativeElement.scrollTo({ left:
      (this.widgetsContent.nativeElement.scrollLeft - (293 * 3 + 30 )), behavior: 'smooth' });
  }

  onscrollRight(): void{
      // SCROLL CONTENT FOR RIGHT CAROUSEL
    this.widgetsContent?.nativeElement.scrollTo({
       left: (this.widgetsContent.nativeElement.scrollLeft + (293 * 3 + 30 )), behavior: 'smooth' });
  }

  onReadMore(): void{
    // Move to services
    this.router.navigateByUrl('/services');
  }

}
