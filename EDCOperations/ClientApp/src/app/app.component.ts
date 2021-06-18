import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from './models/role';
import { AuthService } from './services/auth.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  loggedUserRole = null;
  currentUser: any;
  constructor(private router: Router, private authService: AuthService, private userService: UserService) {
    this.userService.currentUser.subscribe(x => this.currentUser = x);
    console.log(this.currentUser);
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === 'Admin';
  }
}
