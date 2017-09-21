import { Injectable, OnInit } from '@angular/core';
// Logging service imported to be injected in this service
import { LoggingService } from './logging.service';
// @injectable allows other services to be injected into this service
@Injectable()
export class DataService {
  data: { name: string, email: string }[] = [];
  // logging service dependecy injected through constructor
  constructor(public logService: LoggingService) { }
  // makes the component using service able to get the data
  getData() {
    this.logService.log();
    this.logService.warn();
    // methods from logging service called
    return this.data;
  }
  // adds user data to array in service
  addData(obj: { name: string, email: string }) {
    this.logService.clear();
    this.logService.info();
    // methods from logging service called
    this.data.unshift(obj);
  }
}