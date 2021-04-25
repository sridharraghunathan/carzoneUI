import { ContactService } from './contact.service';
import { AppService } from './../app.service';
import { ICompanyWebsiteInfo } from './../shared/models/ICar';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contacts$: Observable<ICompanyWebsiteInfo> | undefined;
  contactForm: FormGroup;
  constructor(
    private appService: AppService,
    private contactService: ContactService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.contacts$ = this.appService.getCompanyWebSite();
    // tslint:disable-next-line: deprecation
    this.appService
      .getCompanyWebSite()
      // tslint:disable-next-line: deprecation
      .subscribe((data: any) => console.log(data));

    this.intiializeContactControl();
  }

  intiializeContactControl(): void {
    this.contactForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
      ]),
      subject: new FormControl('', Validators.required),
      contactNumber: new FormControl('', Validators.required),
      comments: new FormControl(''),
    });
  }

  onSubmit(): void {
    console.log(this.contactForm.value);
    // tslint:disable-next-line: deprecation
    this.contactService
      .onSubmitQuery(this.contactForm.value)
      .subscribe((data) => {
        this.toastr.success(Object.keys(data)[0]);
      });
  }
}
