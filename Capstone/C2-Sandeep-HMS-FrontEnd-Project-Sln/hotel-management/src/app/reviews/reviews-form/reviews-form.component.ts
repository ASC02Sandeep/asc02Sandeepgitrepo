import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-reviews-form',
  templateUrl: './reviews-form.component.html',
  styleUrls: ['./reviews-form.component.css'],
})
export class ReviewsFormComponent implements OnInit {
  reviewForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private reviewService: ReviewService
  ) {
    this.reviewForm = this.fb.group({
      hotelName: ['', Validators.required],
      rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      comments: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  submitForm(): void {
    if (this.reviewForm.valid) {
      this.reviewService.addReview(this.reviewForm.value).subscribe(() => {
        this.router.navigate(['/reviews']);
      });
    }
  }
  cancel(): void {
    this.router.navigate(['/reviews']);
  }
}
