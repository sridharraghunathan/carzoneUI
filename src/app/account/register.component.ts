import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import {
  AsyncValidatorFn,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AccountService } from './account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errors: string[];
  returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private accountService: AccountService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.returnUrl =
    this.activatedRoute.snapshot.queryParams.returnUrl || '/home';
    this.createRegisterForm();
  }

  createRegisterForm(): void {
    this.registerForm = this.fb.group({
      displayName: [null, Validators.required],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [
        null,
        [
          Validators.required,
          Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
        ],
         // [this.emailExistCheck()]
      ],
      password: [null, Validators.required],
    });
  }

  onSubmit(): void {
    // tslint:disable-next-line: deprecation
    this.accountService.register(this.registerForm.value).subscribe(
      (Response) => {
        this.router.navigateByUrl(this.returnUrl);
      },
      (error) => {
        console.log(error);
        if (error.error?.errors ){
          this.toastr.error(error.error.errors);
        } else if (error.error?.message) {
          this.toastr.error(error.error.message, 'display Name already exists');
        } else {
          this.toastr.error('Unknown Error Occured, Please verify input fields values are mentioned correctly');
        }
      }
    );
  }

  /*

  emailExistCheck(): AsyncValidatorFn {
    return control => {
      return timer(500).pipe(
        switchMap( (val : any) => {
          if (!control.value){
              return null;
          }
          //call the service to check email exist or not
          return  this.accountService.emailExistCheck(control.value).pipe(
            map ((res : any) => {
              return res ? {emailExists: true} : null;
            })
          );
        })
      );
    };
  }
*/
}



