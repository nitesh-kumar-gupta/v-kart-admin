import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ImageCloudService extends BaseService {
  constructor(private httpClient: HttpClient) {
    super();
  }
  getAuthLink(type: string) {
    const url = `${this.apiUrl}/imagecloud/get-auth-link/${type}`;
    return this.httpClient.get(url, this.getOptions()).pipe(map(this.extractData), catchError(this.handleError));
  }
  authorize(data: Object, type: string) {
    const url = `${this.apiUrl}/authorize/${type}`;
    return this.httpClient.post(url, data, this.postOptions()).pipe(map(this.extractData), catchError(this.handleError));
  }
  create(data: Object, type: string) {
    const url = `${this.apiUrl}/create/${type}`;
    return this.httpClient.post(url, data, this.postOptions()).pipe(map(this.extractData), catchError(this.handleError));
  }
}
