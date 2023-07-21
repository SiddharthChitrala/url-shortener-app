import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="bg">
      <p class="fs-2 text-center">URL Shortener App</p>
      <p class="height">
        <app-url-shortener></app-url-shortener>
      </p>
      <p class="bh ">
        <app-url-footer></app-url-footer>
      </p>
    </div>
  `,
  styles: [
    `
      .bg {
        background-image: url('bg.jpg');
        background-size: cover;
      }
      .height {
        height: 100vh;
      }
      .bh{
        margin-top:0px;
        margin-bottom:0px;
        background-color:black;
      }
    `,
  ],
})
export class AppComponent {}
