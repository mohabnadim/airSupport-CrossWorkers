import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../../services/flights.service';
import { FlightErrorService } from '../../../services/errorFlights.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss'],
})
export class FlightListComponent implements OnInit {
  flightInfo: any[] = [];
  errorFlightInfo: any[] = [];

  constructor(private flights: FlightService, private errorFlights: FlightErrorService) {

   }

  ngOnInit() {
    this.getErrorFlights();
    this.getFlight();

  }
getFlight() {
  this.flights.get().subscribe(data => this.flightInfo = data);
}
getErrorFlights() {
  this.errorFlights.get().subscribe(de => this.errorFlightInfo = de);
}
}
