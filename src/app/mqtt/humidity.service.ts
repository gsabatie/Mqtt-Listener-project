import { Injectable } from '@angular/core';
import { HUMIDITY } from './mock.humidity';
@Injectable()
export class HumidityService {

  constructor() { }
  gethumiditydata() {
    return HUMIDITY;
  }
}
