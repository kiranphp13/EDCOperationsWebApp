import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {Register} from '../register';
import {environment} from '../../environments/environment';
import {UserService} from '../shared/user.service';

const baseUrl = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  Url: string;
  token: string;
  header: any;

  constructor(private http: HttpClient, private userService: UserService) {
    const headerSettings: { [name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  Login(model: any) {
    return this.http.post<any>(baseUrl + '/UserLogin', model, {headers: this.header});
  }

  CreateUser(model: any) {
    return this.http.post<any>(baseUrl + '/User/CreateUser', model, {headers: this.header});
  }

  Reset(model: any) {
    return this.http.post<any>(baseUrl + 'ForgotPassword', model, {headers: this.header});
  }

  Logout() {
    this.userService.clearUserData();
  }
}

