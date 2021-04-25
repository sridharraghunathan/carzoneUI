import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutes } from './about.routing';



@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutes,
    SharedModule

  ]
})
export class AboutModule { }
