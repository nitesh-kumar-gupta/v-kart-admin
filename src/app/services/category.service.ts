import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService {
  protected category: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private httpClient: HttpClient) {
    super();
  }
  retrieveCategory(id) {
    const url = `${this.apiUrl}/category/${id}`;
    return this.httpClient.get(url, this.getOptions()).pipe(map(this.extractData), catchError(this.handleError));
  }
  setCategory(category) {
    this.category.next(category);
  }
  getCategory() {
    return this.category.asObservable();
  }
  addCategory(category) {
    const url = `${this.apiUrl}/category/add`;
    return this.httpClient.post(url, category, this.postOptions()).pipe(map(this.extractData), catchError(this.handleError));
  }
}
