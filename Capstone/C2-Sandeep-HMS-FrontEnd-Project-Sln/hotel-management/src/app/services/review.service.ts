import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../models/review.model';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private dbUrl = 'http://localhost:3000/reviews';

  constructor(private http: HttpClient) {}

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.dbUrl);
  }

  addReview(review: Review): Observable<any> {
    return this.http.post(this.dbUrl, review);
  }
}
