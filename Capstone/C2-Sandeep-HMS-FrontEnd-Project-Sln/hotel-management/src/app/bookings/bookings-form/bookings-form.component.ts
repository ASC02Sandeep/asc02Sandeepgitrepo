import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-bookings-form',
  templateUrl: './bookings-form.component.html',
  styleUrls: ['./bookings-form.component.css'],
})
export class BookingsFormComponent implements OnInit {
  public bookingForm: FormGroup;
  public editingId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private bookingService: BookingService
  ) {
    this.bookingForm = this.fb.group({
      guestName: ['', Validators.required],
      hotel: ['', Validators.required],
      roomNumber: ['', Validators.required],
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.editingId = this.route.snapshot.paramMap.get('id');
    if (this.editingId) {
      this.bookingService.getBookingById(this.editingId).subscribe((data) => {
        this.bookingForm.patchValue(data);
      });
    }
  }

  submitForm(): void {
    if (this.bookingForm.valid) {
      const formData = this.bookingForm.value;
      if (this.editingId) {
        this.bookingService.updateBooking(this.editingId, formData).subscribe(() => {
          this.router.navigate(['/bookings']);
        });
      } else {
        this.bookingService.addBooking(formData).subscribe(() => {
          this.router.navigate(['/bookings']);
        });
      }
    }
  }

  cancel(): void {
    this.router.navigate(['/bookings']);
  }
}
