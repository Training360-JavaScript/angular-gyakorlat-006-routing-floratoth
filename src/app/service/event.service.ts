import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../model/event';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor() {}

  getAll() {
    return [
      {
        name: 'Lily',
        date: '01.20.2022',
        time: '23:06',
        location: {
          address: 'Ady Street',
          city: 'Budapest',
          country: 'Hungary',
        },
      },
      {
        name: 'Dosztojevszkij',
        date: '10.07.2011',
        time: '23:06',
        location: {
          address: 'Lenin Square',
          city: 'Moscow',
          country: 'Russia',
        },
      },
      {
        name: 'Benjamin',
        date: '01.09.2022',
        time: '23:06',
        location: {
          address: 'Big Street',
          city: 'London',
          country: 'England',
        },
      },
    ];
  }
}
