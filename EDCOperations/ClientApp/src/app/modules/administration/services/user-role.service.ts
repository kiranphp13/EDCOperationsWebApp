import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const baseUrl = `${environment.apiUrl}`;

@Injectable({ providedIn: 'root' })
export class UserRoleService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl + '/userrole');
  }

  getById(id: string) {
    return this.http.get(baseUrl + '/userrole/' + id );
  }

  create(params: any) {
    return this.http.post(baseUrl + '/userrole', params);
  }

  update(id: string, params: any) {
    return this.http.put(baseUrl + '/userrole/' + id, params);
  }

  delete(id: string) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
