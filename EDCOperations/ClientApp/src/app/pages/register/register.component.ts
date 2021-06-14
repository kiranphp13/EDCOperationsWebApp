import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Register } from '../../register';
import { Observable } from 'rxjs';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};

  errorMessage: string;
  constructor(private router: Router, private LoginService: LoginService) { }

  ngOnInit() {
    //this.UserForm = this.formbulider.group({
    //  UserName: ['', [Validators.required]],
    //  LoginName: ['', [Validators.required]],
    //  Password: ['', [Validators.required]],
    //  Email: ['', [Validators.required]],
    //  ContactNo: ['', [Validators.required]],
    //  Address: ['', [Validators.required]],
    //});
    if (localStorage.getItem("currentUser") === null) {
      this.router.navigate(['login'])
    }
    else if (localStorage.getItem("currentUserRole") !== "Admin") {
      this.router.navigate(['notauthorized'])
    }

  }
  register() {
    debugger;
    this.LoginService.CreateUser(this.model).subscribe(
      data => {
        debugger;
        //if (data.Status == "Success") {
        //  localStorage.setItem('currentUser', JSON.stringify(data.user));
        //  this.router.navigate(['register']);
        //  debugger;
        //}
        //else {
        //  this.errorMessage = data.Message;
        //}
      },
      error => {
        this.errorMessage = error.message;
      });
  };
}
