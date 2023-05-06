import { HomeService } from './../../../home/home.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IExecutiveTeam } from '../../models/ICar';

@Component({
  selector: 'app-executive-team',
  templateUrl: './executive-team.component.html',
  styleUrls: ['./executive-team.component.scss']
})
export class ExecutiveTeamComponent implements OnInit {

  @ViewChild('executiveContent', { read: ElementRef }) public executiveContent: ElementRef<any>;
  executiveTeam$: Observable<IExecutiveTeam[]> ;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {

    this.executiveTeam$ = this.homeService.getExecutiveTeam();
  }



  onscrollExecutiveLeft(): void{
    this.executiveContent.nativeElement.scrollTo({left :
    (this.executiveContent.nativeElement.scrollLeft - 290), behaviour: 'smooth'});
  }

  onscrollExecutiveRight(): void{
    this.executiveContent.nativeElement.scrollTo({left :
       (this.executiveContent.nativeElement.scrollLeft + 290), behaviour : 'smooth' });
  }
}
