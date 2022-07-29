import { ContactService } from './contact.service';
import { AppService } from './../app.service';
import { ICompanyWebsiteInfo } from './../shared/models/ICar';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contacts$: Observable<ICompanyWebsiteInfo> | undefined;
  contactForm: UntypedFormGroup;
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
    this.contactForm = new UntypedFormGroup({
      fullName: new UntypedFormControl('', Validators.required),
      email: new UntypedFormControl('', [
        Validators.required,
        Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
      ]),
      subject: new UntypedFormControl('', Validators.required),
      contactNumber: new UntypedFormControl('', Validators.required),
      comments: new UntypedFormControl(''),
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
