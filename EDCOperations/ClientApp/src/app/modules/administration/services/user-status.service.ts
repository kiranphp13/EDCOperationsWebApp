import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const baseUrl = `${environment.apiUrl}`;

@Injectable({ providedIn: 'root' })
export class UserStatusService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl + '/userstatus');
  }

  getById(id: string) {
    return this.http.get(baseUrl + '/userstatus/' + id );
  }

  create(params: any) {
    return this.http.post(baseUrl + '/userstatus', params);
  }

  update(id: string, params: any) {
    return this.http.put(baseUrl + '/userstatus/' + id, params);
  }

  delete(id: string) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
