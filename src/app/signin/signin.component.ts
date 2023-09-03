import { User } from './../model/User.model';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  isLoggedIn: boolean = false;
  show: boolean = true;
  addFrom: any;
  email: string = '';
  password: string = '';

  user: User = new User();
  serverErrorMessages: string = '';
  loginForm: any;
  FormControl = new FormControl('', Validators.required);

  constructor(
    public userService: UserService,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }
  

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),

      password: new FormControl('', [
        Validators.required
      ])
    });
  }

  loginUser(form: NgForm) {
    this.userService.login(this.user).subscribe(
      (res: any) => {
        let token = res.jwtToken;
        const role = res.role;
        this.isLoggedIn = true;

        if (token != null) {
          this.userService.setRoles(role);
          this.userService.setToken(token);

          this.getUser();

          if (res.role == "ADMIN") {
            this.router.navigateByUrl("/admin")
          } else {
            this.router.navigateByUrl("/employee")
          }
        }
      },
      (err: any) => {
        if (err.status === 403) {
          this.serverErrorMessages = "Incorrect password"
        } else {
          console.log(err);
          this.serverErrorMessages = err.error.message;
          alert("Error in login :" + JSON.stringify(err))
        }
      }
    );
  }

  // fetching user details and setting in localstorage
  getUser() {
    this.userService.getUserDetails(this.user.email).subscribe(
      (resp: any) => {
        this.userService.setUserDetails(resp);
      },
      (error: any) => {
        console.log("Error in fetching user details");
      }
    )
  }

}
