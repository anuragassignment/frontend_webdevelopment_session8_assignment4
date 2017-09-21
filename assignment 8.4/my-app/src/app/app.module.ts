import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CouplesService } from './couples.service';
import { LoggingService } from './logging.service'; // LoggingService imported

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CouplesService, LoggingService], // Second CouplesService & LoggingService called
  bootstrap: [AppComponent]
})
export class AppModule { }
