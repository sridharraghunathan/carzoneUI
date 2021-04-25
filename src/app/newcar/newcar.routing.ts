import { Routes, RouterModule } from '@angular/router';
import { NewcarComponent } from './newcar.component';

const routes: Routes = [
  { path : '', component : NewcarComponent },
];

export const NewcarRoutes = RouterModule.forChild(routes);
