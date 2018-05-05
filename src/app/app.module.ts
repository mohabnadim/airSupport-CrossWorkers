import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './main/pages/dashboard/dashboard.component';
import { HeaderComponent } from './main/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeDbService } from './services/fakeDB.service';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './components/dashboard/map/map.component';
import { FlightListComponent } from './components/dashboard/flight-list/flight-list.component';
import { ModalComponent } from './components/dashboard/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    NavigationComponent,
    MapComponent,
    FlightListComponent,
    ModalComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    InMemoryWebApiModule.forRoot(FakeDbService, {
      delay             : 0,
      passThruUnknownUrl: true
  }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
