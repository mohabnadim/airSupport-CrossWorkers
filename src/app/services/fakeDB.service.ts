import { InMemoryDbService } from 'angular-in-memory-web-api';
import {FlightFakeDb} from '../fakeDB/flights';

export class FakeDbService implements InMemoryDbService {

    createDb() {
        return {
            'flight-flights'                 : FlightFakeDb.flights,
            'flight-errorFlights'            : FlightFakeDb.errorFlights,


        };

    }

}
