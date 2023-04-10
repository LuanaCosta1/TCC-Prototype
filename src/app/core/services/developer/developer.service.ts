import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DeveloperModel } from '../../models/developer.model';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  mainUrl = 'http://localhost:3000/tasks'

  constructor(private http: HttpClient) { }

  getDeveloperList(): Observable<DeveloperModel[]> {
    return this.http.get<DeveloperModel[]>(this.mainUrl);
  }
}
