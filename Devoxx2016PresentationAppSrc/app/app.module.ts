import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MaterialModule} from "@angular/material";
import { StartpageComponent } from './startpage/startpage.component';
import { PresentationsComponent } from './presentations/presentations.component';
import {RouterModule} from "@angular/router";
import {PresentationService} from "./presentation.service";

@NgModule({
  declarations: [
    AppComponent,
    StartpageComponent,
    PresentationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: StartpageComponent},
      {path: 'presentations', component: PresentationsComponent}
    ])
  ],
  providers: [PresentationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
