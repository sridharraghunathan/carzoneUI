import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'home', component : HomeComponent},
  {path : 'services', loadChildren : () => import ('./services/services.module').then( m => m.ServicesModule)},
  {path : 'contacts', loadChildren : () => import ('./contacts/contact.module').then( m => m.ContactModule)},
  {path : 'about', loadChildren : () => import ('./about/about.module').then( m => m.AboutModule)},
  {path : 'account', loadChildren : () => import ('./account/account.module').then( m => m.AccountModule)},
  {path : 'cars', loadChildren : () => import ('./cars/cars.module').then( m => m.CarsModule)},
  {path : 'createcar', loadChildren: () => import ('./newcar/newcar.module').then(m => m.NewcarModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

