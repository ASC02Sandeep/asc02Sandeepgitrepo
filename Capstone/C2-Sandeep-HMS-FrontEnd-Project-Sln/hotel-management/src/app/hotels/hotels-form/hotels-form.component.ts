import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-hotels-form',
  templateUrl: './hotels-form.component.html',
  styleUrls: ['./hotels-form.component.css'],
})
export class HotelsFormComponent implements OnInit {
  public hotelForm: FormGroup;
  public editingId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private hotelService: HotelService
  ) {
    this.hotelForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      roomsAvailable: ['', [Validators.required, Validators.min(1)]],
      rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
    });
  }

  ngOnInit(): void {
    this.editingId = this.route.snapshot.paramMap.get('id');
    if (this.editingId) {
      this.hotelService.getHotelById(this.editingId).subscribe((data) => {
        this.hotelForm.patchValue(data);
      });
    }
  }

  submitForm(): void {
    if (this.hotelForm.valid) {
      const formData = this.hotelForm.value;
      if (this.editingId) {
        // Update hotel
        this.hotelService.updateHotel(this.editingId, formData).subscribe(() => {
          this.router.navigate(['/hotels']);
        });
      } else {
        // Add new hotel
        this.hotelService.addHotel(formData).subscribe(() => {
          this.router.navigate(['/hotels']);
        });
      }
    }
  }

  cancel(): void {
    this.router.navigate(['/hotels']);
  }
}
