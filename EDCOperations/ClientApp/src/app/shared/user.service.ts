import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment';

const baseUrl = `${environment.apiUrl}`;

@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private http: HttpClient) {
  }

  storeUserData(data) {
    //TODO Decode JWT Token
    localStorage.setItem('currentUser', data.user);
    localStorage.setItem('token', data.token);
    localStorage.setItem('currentUserFullName', data.user.fullName);
    localStorage.setItem('currentUserRole', data.user.role);
    localStorage.setItem('currentUserId', data.user.id);
  }

  clearUserData() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    localStorage.removeItem('currentUserFullName');
    localStorage.removeItem('currentUserRole');
    localStorage.removeItem('currentUserId');
  }

  getUserFullName(){
    return localStorage.getItem('currentUserFullName')
  }

  getloggedUserRole(){
    return localStorage.getItem('currentUserRole');
  }
}
