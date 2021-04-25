import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars.component';
import { CarRoutes } from './car.routing';

@NgModule({
  declarations: [CarsComponent],
  imports: [
    CommonModule,
    CarRoutes,
    SharedModule
  ]
})
export class CarsModule { }
