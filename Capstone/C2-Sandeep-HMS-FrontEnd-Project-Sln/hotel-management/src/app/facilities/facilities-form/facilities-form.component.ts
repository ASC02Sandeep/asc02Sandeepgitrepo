import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacilityService } from '../../services/facility.service';

@Component({
  selector: 'app-facilities-form',
  templateUrl: './facilities-form.component.html',
  styleUrls: ['./facilities-form.component.css'],
})
export class FacilitiesFormComponent implements OnInit {
  facilityForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private facilityService: FacilityService
  ) {
    this.facilityForm = this.fb.group({
      hotelName: ['', Validators.required],
      facilityType: ['', Validators.required],
      availability: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  submitForm(): void {
    if (this.facilityForm.valid) {
      this.facilityService.addFacility(this.facilityForm.value).subscribe(() => {
        this.router.navigate(['/facilities']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/facilities']);
  }
}
