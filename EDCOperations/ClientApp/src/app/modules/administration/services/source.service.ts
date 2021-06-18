import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const baseUrl = `${environment.apiUrl}`;

@Injectable({ providedIn: 'root' })
export class SourceService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl + '/source');
  }

  getById(id: string) {
    return this.http.get(baseUrl + '/source/' + id );
  }

  create(params: any) {
    return this.http.post(baseUrl + '/source', params);
  }

  update(id: string, params: any) {
    return this.http.put(baseUrl + '/source/' + id, params);
  }

  delete(id: string) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
