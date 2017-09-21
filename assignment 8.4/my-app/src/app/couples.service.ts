import { Injectable } from '@angular/core';
// service which provides data for the Mr. and Mrs. dropdown
@Injectable()
export class CouplesService {
  couplesData: { man: string, woman: string }[] = [
    {
      man: 'John Doe',
      woman: 'Mary Doe'
    },
    {
      man: 'Bob Doe',
      woman: 'Mary Doe'
    }
  ];
  // makes the service data available to component using this service
  getCpData() {
    return this.couplesData;
  }
  constructor() { }
}
