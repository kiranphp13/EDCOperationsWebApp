import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from 'src/app/services/login.service';
import {AuthService} from 'src/app/services/auth.service';
import {UserService} from 'src/app/shared/user.service';

document.addEventListener('DOMContentLoaded', function () {
  // make it as accordion for smaller screens
  if (window.innerWidth < 992) {
    // close all inner dropdowns when parent is closed
    document.querySelectorAll('.navbar .dropdown').forEach(function (everydropdown) {
      everydropdown.addEventListener('hidden.bs.dropdown', function () {
        // after dropdown is hidden, then find all submenus
        this.querySelectorAll('.submenu').forEach(function (everysubmenu) {
          // hide every submenu as well
          everysubmenu.style.display = 'none';
        });
      });
    });

    document.querySelectorAll('.dropdown-menu a').forEach(function (element) {
      element.addEventListener('click', function (e) {
        let nextEl = this.nextElementSibling;
        if (nextEl && nextEl.classList.contains('submenu')) {
          // prevent opening link if link needs to open dropdown
          e.preventDefault();
          if (nextEl.style.display == 'block') {
            nextEl.style.display = 'none';
          } else {
            nextEl.style.display = 'block';
          }

        }
      });
    });
  }
  // end if innerWidth
});

// DOMContentLoaded  end

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  username = '';
  loggedUserRole;
  currentUser: any;

  constructor(private router: Router, private loginService: LoginService, private authService: AuthService, private userService: UserService) {
    this.userService.currentUser.subscribe(x => this.currentUser = x);

    this.loggedUserRole = this.userService.getloggedUserRole();
    // if(this.loggedUserRole === null || this.loggedUserRole.length === 0 || this.loggedUserRole === undefined){
    //   this.router.navigate(['/login']);
    // }
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === 'Admin';
  }

  get isReader() {
    return this.currentUser && this.currentUser.role === 'Reader';
  }

  get isEditor() {
    return this.currentUser && this.currentUser.role === 'Editor';
  }

  collapse() {
    this.isExpanded = false;
  }


  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  get isAuthorized() {
    if (this.authService.isAuthorized()) {
      this.username = this.userService.getUserFullName();
    }
    return this.authService.isAuthorized();
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    // if (!this.isAuthorized) {
    //   this.router.navigate(['login']);
    // }
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
