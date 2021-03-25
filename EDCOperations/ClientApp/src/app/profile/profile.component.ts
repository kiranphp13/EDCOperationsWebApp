import { Component, OnInit, Inject } from '@angular/core';
import { Router } from "@angular/router";
import { User } from "src/app/models/user";
import { AuthService } from "src/app/auth.service";
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  profileForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private apiService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    if (localStorage.getItem("currentUser") === null) {
      this.router.navigate(['login'])
    }
   
    let userId = localStorage.getItem("currentUserId");
    if (!userId) {
      alert("Invalid action.")
      //this.router.navigate(['list-user']);
      return;
    }
    else {
      this.apiService.getUser(userId)
        .subscribe(data => {
          //this.user = data;
          this.profileForm.setValue(data);

        });
    }
    this.profileForm = this.formBuilder.group({
      id: userId,
      userName: ['', Validators.required],
      fullName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      status: ['', Validators.required],
      role: ['', Validators.required],
      phone: ['', Validators.required],
      token: ['', Validators.required]
    });
  }

  onSubmit() {
    this.apiService.updateProfile(this.profileForm.value)

      .subscribe(
        data => {
          if (data.Status === "Success") {
            alert('Profile updated successfully.');
            //this.router.navigate(['listuser']);
          } else {
            this.errorMessage = data.Message;
          }
        },
        error => {
          this.errorMessage = error.Message;
        });
  }
  onCancel() {
    this.router.navigate(['dashboard']);
  }

}
