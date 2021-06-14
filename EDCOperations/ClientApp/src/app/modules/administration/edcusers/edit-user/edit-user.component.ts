import {Component, OnInit, Inject} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from 'src/app/models/user';
import {AuthService} from 'src/app/services/auth.service';
import {FormGroup, ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';
import {ModalService} from 'src/app/_modal';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User;
  editForm: FormGroup;
  roles: [];
  status: [];
  errorMessage: string;
  initPassword: string;
  public barLabel = 'Password strength: ';
  userID;

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute,
              private router: Router,
              private apiService: AuthService,
              private formBuilder: FormBuilder,
              private modalService: ModalService) {

  }

  ngOnInit() {
    this.userID = this.route.snapshot.params['id'];

    this.apiService.getUser(this.userID)
      .subscribe(data => {
        this.user = data;
        this.editForm.setValue(data);

      });

    this.apiService.getRoles()
      .subscribe(data => {
        this.roles = data;
      });

    this.apiService.getStatus()
      .subscribe(data => {
        this.status = data;
      });


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
      token: ['', Validators.required],
      createdDate: ['', Validators.required],
      statusId: ['', Validators.required],
      roleId: ['', Validators.required],
    });
  }

  openModal(id: string) {
    this.modalService.open(id);
    return false;
  }

  closeModal(id: string, status: string) {
    if (status === 'Ok') {
      this.modalService.close(id);
    } else {
      this.editForm.setValue(this.user);
      this.modalService.close(id);
    }
  }

  onSubmit() {
    if (this.editForm.value.userName === '' || this.editForm.value.fullName === '' || this.editForm.value.password === '' ||
      this.editForm.value.email === '' || this.editForm.value.statusId === '' || this.editForm.value.roleId === '' ||
      this.editForm.value.phone === '') {
      this.errorMessage = 'Please fill and validate all required fields.';
      return;
    }
    this.apiService.updateUser(this.editForm.value)
      .subscribe(
        data => {
          if (data.Status === 'Success') {
            alert('User updated successfully.');
            this.router.navigate(['administration/edc-users']);
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
