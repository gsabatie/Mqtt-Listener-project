import { Injectable } from '@angular/core';
import { LIGTH } from './mock.ligth';

@Injectable()
export class LigthService {

  constructor() { }

  getLightdata() {
    return LIGTH;
  }

}
