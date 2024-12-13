import { Component, OnInit } from '@angular/core';
import { FacilityService } from '../../services/facility.service';
import { Facility } from '../../models/facility.model';

@Component({
  selector: 'app-facilities-list',
  templateUrl: './facilities-list.component.html',
  styleUrls: ['./facilities-list.component.css'],
})
export class FacilitiesListComponent implements OnInit {
  facilities: Facility[] = [];

  constructor(private facilityService: FacilityService) {}

  ngOnInit(): void {
    this.loadFacilities();
  }

  loadFacilities(): void {
    this.facilityService.getFacilities().subscribe((data) => {
      this.facilities = data;
    });
  }
}
