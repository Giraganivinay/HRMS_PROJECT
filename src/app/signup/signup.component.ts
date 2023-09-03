import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  showSucessMessage: boolean = false;
  serverErrorMessages: string = '';
  signUpForm: any;
  constructor(
    public userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {

  }
  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      firstname: new FormControl('', [
        Validators.required
      ]),
      lastname: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      role: new FormControl('', [
        Validators.required
      ])
    });
  }

  onSubmit(form: NgForm) {
    this.userService.register(form.value).subscribe(
      (res: any) => {
        alert("new user registered..")
        this.resetForm(form);
        this.router.navigateByUrl("/signin");
      },
      (error: any) => {
        const m = JSON.parse(error.error);
        this.serverErrorMessages = m.message;
        console.log(this.serverErrorMessages);

      }
    );
  }

  resetForm(form: NgForm) {
    form.resetForm();
    this.serverErrorMessages = '';
  }
}
