import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HomeService } from '../home/home.service';
import { ICarInfo } from '../shared/models/ICar';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  carData$: Observable<ICarInfo[]> | undefined;
  progress: number | undefined;
  message: string | undefined;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.carData$ = this.homeService.getCarData().pipe(
      // Excluding the records which are not featured
      map((carinfo: any) => {
        return carinfo
          .filter((v: any) => v.saleType === 'Sale')
          .map((v: any) => v);
      })
    );
  }
}
