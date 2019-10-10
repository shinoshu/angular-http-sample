/* tslint:disable:no-string-literal */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  get options(): {} {
    const options = {};

    if (!environment.production) {
      // options['withCredentials'] = true;
    }

    return options;
  }

  constructor(private http: HttpClient) {}

  create<T>(resourceName: string, param: any): Observable<T> {
    return this.http.post<T>(this.apiPath(resourceName), param, this.options);
  }

  get<T>(resourceName: string, id: string): Observable<T> {
    return this.http.get<T>(`${this.apiPath(resourceName)}/${id}`, this.options);
  }

  getWithoutId<T>(resourceName: string, params?: any): Observable<T> {
    const options = this.options;
    options['params'] = params;

    return this.http.get<T>(this.apiPath(resourceName), options);
  }

  list<T>(resourceName: string, params?: any): Observable<T[]> {
    const options = this.options;
    options['params'] = params;

    return this.http.get<T[]>(this.apiPath(resourceName), this.options);
  }

  update<T>(resourceName: string, id: string, param: any): Observable<T> {
    return this.http.put<T>(`${this.apiPath(resourceName)}/${id}`, param);
  }

  updateWithoutId<T>(resourceName: string, param: any): Observable<T> {
    return this.http.put<T>(this.apiPath(resourceName), param, this.options);
  }

  delete(resourceName: string, id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiPath(resourceName)}/${id}`, this.options);
  }

  private apiPath(resourceName: string): string {
    return `${environment.apiUrl}/${resourceName}`;
  }
}
