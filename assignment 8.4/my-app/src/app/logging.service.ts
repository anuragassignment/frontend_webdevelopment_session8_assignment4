import { Injectable } from '@angular/core';
// Logging service with log warn clear and info methods
@Injectable()
export class LoggingService {

  log() {
    return console.log('Retreiving Data');
  }
  info() {
    return console.log('Adding Data');
  }
  warn() {
    return console.warn('No data is added');
  }
  clear() {
    return console.clear();
  }
  constructor() { }

}
