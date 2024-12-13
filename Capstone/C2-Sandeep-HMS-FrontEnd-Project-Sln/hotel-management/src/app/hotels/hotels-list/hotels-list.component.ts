import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from '../../services/hotel.service';
import { Hotel } from '../../models/hotel.model';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css'],
})
export class HotelsListComponent implements OnInit {
  hotels: Hotel[] = [];
  filteredHotels: Hotel[] = [];
  searchText: string = '';

  constructor(private hotelService: HotelService, private router: Router) {}

  ngOnInit(): void {
    this.loadHotels();
  }

  loadHotels(): void {
    this.hotelService.getHotels().subscribe((data) => {
      this.hotels = data;
      this.filteredHotels = [...this.hotels];
    });
  }

  filterHotels(): void {
    const lowerCaseSearch = this.searchText.toLowerCase();
    this.filteredHotels = this.hotels.filter((hotel) =>
      Object.values(hotel).some((value) =>
        value?.toString().toLowerCase().includes(lowerCaseSearch)
      )
    );
  }

  deleteHotel(id: string): void {
    this.hotelService.deleteHotel(id).subscribe(() => {
      this.hotels = this.hotels.filter((hotel) => hotel.id !== id);
      this.filterHotels();
    });
  }

  editHotel(id: string): void {
    this.router.navigate(['/hotels/edit', id]);
  }
}
