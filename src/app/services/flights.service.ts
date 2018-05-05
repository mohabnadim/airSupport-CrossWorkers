import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {Http, Response, RequestOptions, Headers} from '@angular/http';

import { FlightModel } from '../models/flight.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FlightService {

    private url = 'http://localhost:3000/flights';  // URL to web api
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

