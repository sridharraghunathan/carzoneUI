import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceRoutingModule } from './service.routing';
import { ServicesComponent } from './services.component';



@NgModule({
  declarations: [ServicesComponent ],
  imports: [
    CommonModule,
    ServiceRoutingModule
  ]
})
export class ServicesModule { }
