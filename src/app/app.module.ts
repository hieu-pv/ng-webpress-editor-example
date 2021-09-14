import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgWebpressEditorModule } from '@vicoders/ng-webpress-editor';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgWebpressEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
