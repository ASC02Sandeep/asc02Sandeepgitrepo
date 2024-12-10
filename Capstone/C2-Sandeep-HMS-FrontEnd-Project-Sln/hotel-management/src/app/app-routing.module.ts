import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'bookings', component: BookingsListComponent, canActivate: [AuthGuard] },
  { path: 'bookings/add', component: BookingsFormComponent, canActivate: [AuthGuard] },
  { path: 'bookings/edit/:id', component: BookingsFormComponent, canActivate: [AuthGuard] },
  { path: 'hotels', component: HotelsListComponent, canActivate: [AuthGuard] },
  { path: 'hotels/add', component: HotelsFormComponent, canActivate: [AuthGuard] },
  { path: 'hotels/edit/:id', component: HotelsFormComponent, canActivate: [AuthGuard] },
  { path: 'reviews', component: ReviewsListComponent, canActivate: [AuthGuard] },
  { path: 'reviews/add', component: ReviewsFormComponent, canActivate: [AuthGuard] },
  { path: 'guests', component: GuestsListComponent, canActivate: [AuthGuard] },
  { path: 'guests/add', component: GuestsFormComponent, canActivate: [AuthGuard] },
  { path: 'guests/edit/:id', component: GuestsFormComponent, canActivate: [AuthGuard] },
  { path: 'facilities', component: FacilitiesListComponent, canActivate: [AuthGuard] },
  { path: 'facilities/add', component: FacilitiesFormComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
