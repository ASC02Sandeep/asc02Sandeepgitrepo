import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../../services/booking.service';
import { Booking } from '../../models/booking.model';

@Component({
  selector: 'app-bookings-list',
  templateUrl: './bookings-list.component.html',
  styleUrls: ['./bookings-list.component.css'],
})
export class BookingsListComponent implements OnInit {
  bookings: Booking[] = [];
  filteredBookings: Booking[] = [];
  searchText: string = '';

  constructor(private bookingService: BookingService, private router: Router) {}

  ngOnInit(): void {
    this.loadBookings();
  }

  loadBookings(): void {
    this.bookingService.getBookings().subscribe((data) => {
      this.bookings = data;
      this.filteredBookings = [...this.bookings];
    });
  }

  filterBookings(): void {
    const lowerCaseSearch = this.searchText.toLowerCase();
    this.filteredBookings = this.bookings.filter((booking) =>
      Object.values(booking).some((value) =>
        value?.toString().toLowerCase().includes(lowerCaseSearch)
      )
    );
  }

  deleteBooking(id: string): void {
    this.bookingService.deleteBooking(id).subscribe(() => {
      this.bookings = this.bookings.filter((booking) => booking.id !== id);
      this.filterBookings();
    });
  }

  editBooking(id: string): void {
    this.router.navigate(['/bookings/edit', id]);
  }
}
