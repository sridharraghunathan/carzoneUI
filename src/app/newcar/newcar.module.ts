import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewcarComponent } from './newcar.component';
import { NewcarRoutes } from './newcar.routing';
import { NgxEditorModule } from 'ngx-editor';



@NgModule({
  declarations: [NewcarComponent],
  imports: [
    CommonModule,
    NewcarRoutes,
    SharedModule,
    NgxEditorModule
  ]
})
export class NewcarModule { }
