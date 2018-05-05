import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { NavigationComponent } from './components/navigation/navigation.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MapComponent } from './components/dashboard/map/map.component';
import { FlightListComponent } from './components/dashboard/flight-list/flight-list.component';
import { ModalComponent } from './components/dashboard/modal/modal.component';
import { FlightService } from './services/flights.service';
import { HttpModule } from '@angular/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FlightErrorService } from './services/errorFlights.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    MapComponent,
    FlightListComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,

  ],
  entryComponents: [FlightListComponent],
  providers: [FlightService, FlightErrorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
