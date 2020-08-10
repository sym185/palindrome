import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get("./assets/flux.json");
  }

}
