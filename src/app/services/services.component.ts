import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';
import { ICompanyService } from '../shared/models/ICar';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services$: Observable<ICompanyService[]> | undefined;
  constructor(private servicesCar: ServicesService) { }

  ngOnInit(): void {
    this.services$ = this.servicesCar.getCompanyServices();
  }


}
