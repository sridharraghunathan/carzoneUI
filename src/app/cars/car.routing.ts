import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars.component';

const routes: Routes = [
  { path : '', component: CarsComponent },
];

export const CarRoutes = RouterModule.forChild(routes);
