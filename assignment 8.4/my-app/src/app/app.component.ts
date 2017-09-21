import { Component, OnInit } from '@angular/core';
// DataService imported from respective file
import { DataService } from './data.service';
// CouplesService impoerted from respective file
import { CouplesService } from './couples.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})

export class AppComponent implements OnInit {
  dataArr = [];
  cpArr = [];
  added = false;

  constructor(public dataService: DataService, public couplesService: CouplesService) { }
  // dependency dataService and CouplesService injected in the class constructor
  getValues(event: Event, name: HTMLInputElement, email: HTMLInputElement) {
    event.preventDefault();
    // adds user defined values to array
    if (name.value !== '' && email.value !== '') {
      this.dataService.addData({ name: name.value, email: email.value });
    }
    // sets ngIf value based on array length
    if (this.dataArr.length > 0) {
      this.added = true;
    }
  }

  ngOnInit() {
    // adds the data array value from the dataService
    this.dataArr = this.dataService.getData();
    // adds the data array value from the Couples data service
    this.cpArr = this.couplesService.getCpData();
  }
}
