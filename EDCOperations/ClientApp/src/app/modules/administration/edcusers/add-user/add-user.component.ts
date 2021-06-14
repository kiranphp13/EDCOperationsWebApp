import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {LoginService} from 'src/app/services/login.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';
import {FormGroup, ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';
import {User} from 'src/app/models/user';
import {PasswordStrengthBarComponent} from 'src/app/shared/password-strength-bar/password-strength-bar.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  model: any = {};
  user: User;
  roles: [];
  status: [];
  addForm: FormGroup;
  errorMessage: string;
  public account = {
    password: null
  };
  public barLabel: string = 'Password strength: ';

  constructor(private router: Router, private apiService: AuthService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.apiService.getRoles()
      .subscribe(data => {
        this.roles = data;
      });
    this.apiService.getStatus()
      .subscribe(data => {
        this.status = data;
      });
    if (localStorage.getItem('currentUser') === null) {
      this.router.navigate(['login']);
    } else if (localStorage.getItem('currentUserRole') !== 'Admin') {
      this.router.navigate(['notauthorized']);
    }
    this.addForm = this.formBuilder.group({
      id: ['1'],
      userName: ['', Validators.required],
      fullName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      status: ['', Validators.required],
      role: ['', Validators.required],
      phone: ['', Validators.required],
      token: ['', Validators.required],
      statusId: ['', Validators.required],
      roleId: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.addForm.value.userName === '' || this.addForm.value.fullName === '' || this.addForm.value.password === '' ||
      this.addForm.value.email === '' || this.addForm.value.statusId === '' || this.addForm.value.roleId === '' ||
      this.addForm.value.phone === '') {
      this.errorMessage = 'Please fill and validate all required fields.';
      return;
    }
    this.apiService.createUser(this.addForm.value)

      .subscribe(
        data => {
          if (data.Status === 'Success') {
            alert('User created successfully.');
            this.router.navigate(['aggriduser']);
          } else {
            this.errorMessage = data.Message;
          }
        },
        error => {
          this.errorMessage = error.Message;
        });
  }

  onCancel() {
    this.router.navigate(['administration/edc-users']);
  }

}
