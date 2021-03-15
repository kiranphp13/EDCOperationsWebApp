import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  model: any = {};

  errorMessage: string;
  constructor(private router: Router, private LoginService: LoginService) { }

  ngOnInit() {
  }
  reset() {
    debugger;
    if (confirm("Will send email now?")) {
      this.LoginService.Reset(this.model).subscribe(
        data => {
          debugger;
          if (data.Status == "Success") {
            //  localStorage.setItem('currentUser', JSON.stringify(data.user));
            //this.router.navigate(['login']);
            //  debugger;

            this.errorMessage = data.Message;
          }
          else {
            this.errorMessage = data.Message;
          }
        },
        error => {
          this.errorMessage = error.message;
        });
    }
   
  }
}
