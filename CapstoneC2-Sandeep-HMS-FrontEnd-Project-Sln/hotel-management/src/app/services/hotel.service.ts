import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hotel } from '../models/hotel.model';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  private dbUrl = 'http://localhost:3000/hotels';

  constructor(private http: HttpClient) {}

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.dbUrl);
  }

  getHotelById(id: string): Observable<Hotel> {
    return this.http.get<Hotel>(`${this.dbUrl}/${id}`);
  }

  addHotel(hotel: Hotel): Observable<any> {
    return this.getHotels().pipe(
      map((hotels) => {
        const newId = `H${(hotels.length + 1).toString().padStart(4, '0')}`;
        return this.http.post(this.dbUrl, { ...hotel, id: newId }).subscribe();
      })
    );
  }

  updateHotel(id: string, hotel: Hotel): Observable<any> {
    return this.http.put(`${this.dbUrl}/${id}`, hotel);
  }

  deleteHotel(id: string): Observable<any> {
    return this.http.delete(`${this.dbUrl}/${id}`);
  }
}
