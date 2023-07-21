import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container-fluid">
      <p class="fs-5">URL Shortener App</p>
      <app-url-shortener></app-url-shortener>
    </div>
  `,
  styles: [`
    .container-fluid {
      background-image: url('bg.jpg');
      background-size: cover;
      height: 100vh;
    }
  `]
})
export class AppComponent { }
