import { TextInputComponent } from './components/text-input/text-input.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ExecutiveTeamComponent } from './components/executive-team/executive-team.component';

@NgModule({
  declarations: [SearchComponent, ExecutiveTeamComponent, TextInputComponent],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    FormsModule,
    NgxSliderModule,
    ReactiveFormsModule,
    FormsModule
  ], exports: [
    CarouselModule,
    NgxSliderModule,
    SearchComponent,
    ExecutiveTeamComponent,
    TextInputComponent,
    ReactiveFormsModule,
    FormsModule
      ]
})
export class SharedModule { }
