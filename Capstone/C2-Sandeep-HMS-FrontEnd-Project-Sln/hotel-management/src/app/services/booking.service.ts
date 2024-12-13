import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private dbUrl = 'http://localhost:8080/api/v1/booking';

  constructor(private http: HttpClient) {}

  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.dbUrl);
  }

  getBookingById(id: string): Observable<Booking> {
    return this.http.get<Booking>(`${this.dbUrl}/${id}`);
  }

  addBooking(booking: Booking): Observable<any> {
    return this.getBookings().pipe(
      map((bookings) => {
        const newId = `B${(bookings.length + 1).toString().padStart(4, '0')}`;
        return this.http.post(this.dbUrl, { ...booking, id: newId });
      }),
      // Flatten the nested Observable created by `this.http.post`
      map((httpCall: Observable<any>) => httpCall.toPromise())
    );
  }

  updateBooking(id: string, booking: Booking): Observable<any> {
    return this.http.put(`${this.dbUrl}/${id}`, booking);
  }

  deleteBooking(id: string): Observable<any> {
    return this.http.delete(`${this.dbUrl}/${id}`);
  }
}
