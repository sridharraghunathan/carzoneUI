import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from './account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: UntypedFormGroup;
  returnUrl!: string;

  constructor(
    private accountService: AccountService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.returnUrl =
      this.activatedRoute.snapshot.queryParams.returnUrl || '/home';

    this.createLoginForm();
  }

  createLoginForm(): void {
    this.loginForm = new UntypedFormGroup({
      email: new UntypedFormControl('', [
        Validators.required,
        Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
      ]),
      password: new UntypedFormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    // tslint:disable-next-line: deprecation
    this.accountService.login(this.loginForm.value).subscribe(
      (data: any) => {
      this.router.navigateByUrl(this.returnUrl);
    },
    error =>{
      this.toastr.error(error.error.message);
    });
  }
}
