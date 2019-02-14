import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {
  protected user: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private httpClient: HttpClient) {
    super();
  }
  login(credentials: Object) {
    const url = `${this.apiUrl}/user/signin`;
    return this.httpClient.post(url, credentials, this.postOptions()).pipe(map(this.extractData), catchError(this.handleError));
  }
  resetPassword(email: Object) {
    const url = `${this.apiUrl}/user/password/reset`;
    return this.httpClient.post(url, email, this.postOptions()).pipe(map(this.extractData), catchError(this.handleError));
  }
  retriveUser() {
    const url = `${this.apiUrl}/user`;
    return this.httpClient.get(url, this.getOptions()).pipe(map(this.extractData), catchError(this.handleError));
  }
  setUser(user) {
    this.user.next(user);
  }
  getUser() {
    return this.user.asObservable();
  }
}
