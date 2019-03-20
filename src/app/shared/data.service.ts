import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Studio } from './studio';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  http: HttpClient = null;
  url: string = "https://ghibliapi.herokuapp.com/films/";

  constructor(http: HttpClient) { this.http = http }

  getGhibli(): Observable<Studio> {
    return this.http.get<Studio>(this.url)
  }
}
