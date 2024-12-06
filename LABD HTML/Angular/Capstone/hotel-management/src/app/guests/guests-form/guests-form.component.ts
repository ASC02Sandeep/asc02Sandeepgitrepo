import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GuestService } from '../../services/guest.service';

@Component({
  selector: 'app-guests-form',
  templateUrl: './guests-form.component.html',
  styleUrls: ['./guests-form.component.css'],
})
export class GuestsFormComponent implements OnInit {
  guestForm: FormGroup;
  editingId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private guestService: GuestService
  ) {
    this.guestForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      roomNumber: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.editingId = this.route.snapshot.paramMap.get('id');
    if (this.editingId) {
      this.guestService.getGuestById(this.editingId).subscribe((data) => {
        this.guestForm.patchValue(data);
      });
    }
  }

  submitForm(): void {
    if (this.guestForm.valid) {
      const formData = this.guestForm.value;
      if (this.editingId) {
        this.guestService.updateGuest(this.editingId, formData).subscribe(() => {
          this.router.navigate(['/guests']);
        });
      } else {
        this.guestService.addGuest(formData).subscribe(() => {
          this.router.navigate(['/guests']);
        });
      }
    }
  }

  cancel(): void {
    this.router.navigate(['/guests']);
  }
}
