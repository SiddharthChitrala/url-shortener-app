import { Component } from '@angular/core';
import { UrlShortenerComponent } from './url-shortener/url-shortener.component'; // Fix the import statement

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>URL Shortener App</h1>
      <app-url-shortener></app-url-shortener>
    </div>
  `
})
export class AppComponent { }
