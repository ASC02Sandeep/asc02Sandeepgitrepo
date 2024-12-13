import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Guest } from '../models/guest.model';

@Injectable({
  providedIn: 'root',
})
export class GuestService {
  private dbUrl = 'http://localhost:3000/guests';

  constructor(private http: HttpClient) {}

  getGuests(): Observable<Guest[]> {
    return this.http.get<Guest[]>(this.dbUrl);
  }

  getGuestById(id: string): Observable<Guest> {
    return this.http.get<Guest>(`${this.dbUrl}/${id}`);
  }

  addGuest(guest: Guest): Observable<any> {
    return this.getGuests().pipe(
      map((guests) => {
        const newId = `G${(guests.length + 1).toString().padStart(4, '0')}`;
        return this.http.post(this.dbUrl, { ...guest, id: newId }).subscribe();
      })
    );
  }

  updateGuest(id: string, guest: Guest): Observable<any> {
    return this.http.put(`${this.dbUrl}/${id}`, guest);
  }

  deleteGuest(id: string): Observable<any> {
    return this.http.delete(`${this.dbUrl}/${id}`);
  }
}
