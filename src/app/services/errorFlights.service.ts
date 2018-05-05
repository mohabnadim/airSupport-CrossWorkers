import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { FlightErrorModel } from '../models/flightError.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FlightErrorService {
    private url = 'http://localhost:3000/errorFlights';  // URL to web api


    constructor(private http: Http) { }

    get() {
        return this.http.get(this.url)
    .map((res: Response) => res.json());
      }

      private getHeaders() {
        // I included these headers because otherwise FireFox
        // will request text/html instead of application/json
        const headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
      }

}
