import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BookingsListComponent } from './bookings/bookings-list/bookings-list.component';
import { BookingsFormComponent } from './bookings/bookings-form/bookings-form.component';
import { HotelsListComponent } from './hotels/hotels-list/hotels-list.component';
import { HotelsFormComponent } from './hotels/hotels-form/hotels-form.component';
import { ReviewsListComponent } from './reviews/reviews-list/reviews-list.component';
import { ReviewsFormComponent } from './reviews/reviews-form/reviews-form.component';
import { GuestsListComponent } from './guests/guests-list/guests-list.component';
import { GuestsFormComponent } from './guests/guests-form/guests-form.component';
import { FacilitiesListComponent } from './facilities/facilities-list/facilities-list.component';
import { FacilitiesFormComponent } from './facilities/facilities-form/facilities-form.component';

import { BookingService } from './services/booking.service';
import { HotelService } from './services/hotel.service';
import { ReviewService } from './services/review.service';
import { GuestService } from './services/guest.service';
import { FacilityService } from './services/facility.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BookingsListComponent,
    BookingsFormComponent,
    HotelsListComponent,
    HotelsFormComponent,
    ReviewsListComponent,
    ReviewsFormComponent,
    GuestsListComponent,
    GuestsFormComponent,
    FacilitiesListComponent,
    FacilitiesFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    BookingService,
    HotelService,
    ReviewService,
    GuestService,
    FacilityService,
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
