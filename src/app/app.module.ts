import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
