import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//bootstrap 4.0
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//ANGULAR MAPS
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY' //TODO ADD YOUR OWN Google Maps Api Key
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
