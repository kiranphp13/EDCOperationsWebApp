import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

const baseUrl = `${environment.apiUrl}`;

@Injectable({providedIn: 'root'})
export class UserService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {
    // this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

  }

  public checkUser() {
    if (this.currentUser) {
      this.router.navigate(['dashboard']);
    }
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }


  storeUserData(data) {
    // const userObj = {
    //   uid: data.user.id,
    //   name: data.user.fullNam,
    //   role: data.user.role,
    // };

    // this.currentUserSubject = new BehaviorSubject<any>('');
    // this.currentUser = this.currentUserSubject.asObservable();

    // this.currentUserSubject.next(data.user);
    // TODO Decode JWT Token
    // Currently Backend API Token don't have any user information
    // localStorage.setItem('currentUser', JSON.stringify(data.user));
    // localStorage.setItem('token', data.token);
    // localStorage.setItem('currentUserFullName', data.user.fullName);
    // localStorage.setItem('currentUserRole', data.user.role);
    // localStorage.setItem('currentUserId', data.user.id);
  }

  clearUserData() {
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    localStorage.removeItem('currentUserFullName');
    localStorage.removeItem('currentUserRole');
    localStorage.removeItem('currentUserId');
  }

  getUserFullName() {
    return localStorage.getItem('currentUserFullName');
  }

  getloggedUserRole() {
    //return this.currentUser.role;
  }

  login(model: any) {
    return this.http.post<any>(`${baseUrl}/UserLogin`, model)
      .pipe(map(data => {
        if (data.user && data.token) {
          localStorage.setItem('currentUser', JSON.stringify(data.user));
          this.currentUserSubject.next(data.user);
        }
        return data;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  saveUserSetting(settingName, settingValue) {
    localStorage.setItem(settingName, settingValue);
  }

  getUserSetting(settingName) {
    return localStorage.getItem(settingName);
  }
}
