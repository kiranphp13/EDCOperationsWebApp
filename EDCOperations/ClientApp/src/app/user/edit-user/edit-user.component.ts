import { Component, OnInit, Inject } from '@angular/core';
import { Router } from "@angular/router";
import { User } from "src/app/models/user";
import { AuthService } from "src/app/auth.service";
import { FormGroup, ReactiveFormsModule, FormBuilder,  Validators } from '@angular/forms'

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User;
  editForm: FormGroup;
    errorMessage: string;  

  constructor(private router: Router, private apiService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    if (localStorage.getItem("currentUser") === null) {
      this.router.navigate(['login'])
    }
    else if (localStorage.getItem("currentUserRole") !== "Admin") {
      this.router.navigate(['notauthorized'])
    }
    let userId = localStorage.getItem("editUserId");
    if (!userId) {
      alert("Invalid action.")
      this.router.navigate(['list-user']);
      return;
    }
    else {
      this.apiService.getUser(userId)
        .subscribe(data => {
          //this.user = data;
          this.editForm.setValue(data);

        });
    }
    this.editForm = this.formBuilder.group({
      id: [''],
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
    this.apiService.updateUser(this.editForm.value)
       
      .subscribe(
        data => {
          if (data.Status === "Success") {
            alert('User updated successfully.');
            this.router.navigate(['listuser']);
          } else {
              this.errorMessage = data.Message;
          }
        },
        error => {
            this.errorMessage = error.Message;
        });
  }
    onCancel() {
        this.router.navigate(['listuser']);
    }
}
