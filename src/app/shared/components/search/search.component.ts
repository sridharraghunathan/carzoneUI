import { HomeService } from '../../../home/home.service';
import { Component, OnInit } from '@angular/core';
import { ISearch } from '../../models/ICar';
import { Options } from '@angular-slider/ngx-slider';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  constructor(private homeService: HomeService){
  }
  value = 10000;
  highValue = 250000;
  options: Options = {
    floor: 0,
    ceil: 250000
  };
 sliderValue = 0;

  carSearchData: ISearch = {
    CarName : null ,
    Model : null,
    YearMake : 0,
    Location : null,
    BodyStyle : null,
    Price : [ 0, null]
  };

  carSearch: ISearch  = {
    CarName : null,
    Model : 'Model',
    YearMake : 'Year',
    Location : 'Location',
    BodyStyle : 'Select Type of Car'
  };


  ngOnInit(): void {
  }

  sliderEvent(): void {
      console.log(this.sliderValue);
      // call your api for fetching data
      // this.sliderValue will be updated as it's
      // already 2 way binded
  }
  onSearchClick(): void{
    // CODE TO FETCH THE CAR DATA FROM BACKEND
    this.carSearchData.CarName =    this.carSearch.CarName === null ? '' :  this.carSearch.CarName;
    this.carSearchData.Model =      this.carSearch.Model === 'Model' ? '' :  this.carSearch.Model;
    this.carSearchData.YearMake =   this.carSearch.YearMake === 'Year' ? 0 :  this.carSearch.YearMake;
    this.carSearchData.Location =   this.carSearch.Location === 'Location' ? '' :  this.carSearch.Location;
    this.carSearchData.BodyStyle =  this.carSearch.BodyStyle === 'Select Type of Car' ? '' :  this.carSearch.BodyStyle;
    this.carSearchData.Price   =    [this.value  , this.highValue ];

    console.log(this.carSearchData);
    console.log(this.sliderValue, this.value, this.highValue);

    // tslint:disable-next-line: deprecation
    this.homeService.getFilterData(this.carSearchData).subscribe(
      (data: any) =>
    { console.log(data);
    },
    (error: any) => {
      console.log(error); });

  }

}
