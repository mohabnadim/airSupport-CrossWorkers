import { Component, OnInit, Input, Output } from '@angular/core';
import { FlightService } from '../../../services/flights.service';
import { FlightErrorService } from '../../../services/errorFlights.service';
import { EventEmitter } from 'events';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss'],
})
export class FlightListComponent implements OnInit {
  flights: any[] = [];
  flightinf: any[] = [];
  errorFlights: any[] = [];
  @Input() name;
  // @Output() value: EventEmitter<any> = new EventEmitter();
  constructor(private flightsServ: FlightService, private errorFlightsServ: FlightErrorService) {

   }

  ngOnInit() {
    this.getErrorFlights();
    this.getFlight();

  }
  getFlightInf(e) {
    this.flightinf = e ;
    console.log( this.flightinf);

  }
getFlight() {
  this.flightsServ.get().subscribe(data => this.flights = data);
}
getErrorFlights() {
  this.errorFlightsServ.get().subscribe(de => this.errorFlights = de);
}
}
