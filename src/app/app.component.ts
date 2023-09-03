import { Router } from '@angular/router';
import { UserService } from './service/user.service';
import { Component } from '@angular/core';
import { User } from './model/User.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  user2: User = {} as User;
  // isLoggedInnn:boolean = false;

  constructor(
    public userService: UserService,
    private router: Router
  ) { }

  public isLoggedIn() {
    // this.isLoggedInnn = true;
    const storedUser = localStorage.getItem('user');
    this.user2 = storedUser ? JSON.parse(storedUser) : new User();
    return this.userService.isLogedIn();
  }

  public logOut() {
    console.log("id : " + this.user2.id);
    
    this.userService.logout(this.user2.id).subscribe(
      (resp:any) => {
        console.log(resp);
        this.userService.clear();
        this.router.navigate(['/']);
        
      },
      (error:any) => {
        console.log(error);
      }
    )
  }

  isHomePage(): boolean {
    return this.router.url === '/';
  } 
  
}
