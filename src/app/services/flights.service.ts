import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { FlightModel } from '../models/index';



@Injectable()
export class FlightService {

    flights: FlightModel[];

    constructor(private http: Http) { }

    get(): Observable<any> {
        return this.http.get('api/flights-flights')
        .map((res: Response) => res)
        .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }
}
