import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facility } from '../models/facility.model';

@Injectable({
  providedIn: 'root',
})
export class FacilityService {
  private dbUrl = 'http://localhost:3000/facilities';

  constructor(private http: HttpClient) {}

  getFacilities(): Observable<Facility[]> {
    return this.http.get<Facility[]>(this.dbUrl);
  }

  addFacility(facility: Facility): Observable<any> {
    return this.http.post(this.dbUrl, facility);
  }
}
