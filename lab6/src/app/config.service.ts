import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  url: string = 'https://jsonplaceholder.typicode.com/albums/';
  constructor(private http: HttpClient) {

  }
  getData() : Observable<any> {
    return this.http.get(this.url);
  }
  getDataDetails(id: number) : Observable<any> {
    return this.http.get(this.url + id);
  }
  getDataDetailsPhotos(id: number) : Observable<any> {
    return this.http.get(this.url + id + 'photos');
  }
}
