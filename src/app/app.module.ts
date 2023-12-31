import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UrlShortenerComponent } from './url-shortener/url-shortener.component';
import { UrlFooterComponent } from './url-footer/url-footer.component';

@NgModule({
  declarations: [AppComponent, UrlShortenerComponent, UrlFooterComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
