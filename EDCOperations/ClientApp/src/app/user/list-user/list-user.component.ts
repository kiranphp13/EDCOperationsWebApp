import { Component, OnInit, Inject } from '@angular/core';
import { Router } from "@angular/router";
import { User } from "src/app/models/user";
import { AuthService } from "src/app/auth.service";



@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private apiService: AuthService) { }

  ngOnInit() {
    //if (!window.localStorage.getItem('token')) {
    //  this.router.navigate(['login']);
    //  return;
    //}
    if (localStorage.getItem("currentUser") === null) {
      this.router.navigate(['login'])
    }
    else if (localStorage.getItem("currentUserRole") !== "Admin") {
      this.router.navigate(['notauthorized'])
    }
    this.apiService.getUsers()
      .subscribe(data => {
        this.users = data;
      });
  }

  deleteUser(userid: string): void {
    this.apiService.deleteUser(userid)
      .subscribe(data => {
        //this.users = this.users.filter(u => u.id !== userid);
      })
  };

  editUser(user: User): void {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edituser']);
  };

  addUser(): void {
    this.router.navigate(['adduser']);
  };
}
