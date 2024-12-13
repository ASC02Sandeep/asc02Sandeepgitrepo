import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuestService } from '../../services/guest.service';
import { Guest } from '../../models/guest.model';

@Component({
  selector: 'app-guests-list',
  templateUrl: './guests-list.component.html',
  styleUrls: ['./guests-list.component.css'],
})
export class GuestsListComponent implements OnInit {
  guests: Guest[] = [];
  filteredGuests: Guest[] = [];
  searchText: string = '';

  constructor(private guestService: GuestService, private router: Router) {}

  ngOnInit(): void {
    this.loadGuests();
  }

  loadGuests(): void {
    this.guestService.getGuests().subscribe((data) => {
      this.guests = data;
      this.filteredGuests = [...this.guests];
    });
  }

  filterGuests(): void {
    const lowerCaseSearch = this.searchText.toLowerCase();
    this.filteredGuests = this.guests.filter((guest) =>
      Object.values(guest).some((value) =>
        value?.toString().toLowerCase().includes(lowerCaseSearch)
      )
    );
  }

  deleteGuest(id: string): void {
    this.guestService.deleteGuest(id).subscribe(() => {
      this.guests = this.guests.filter((guest) => guest.id !== id);
      this.filterGuests();
    });
  }

  editGuest(id: string): void {
    this.router.navigate(['/guests/edit', id]);
  }
}
