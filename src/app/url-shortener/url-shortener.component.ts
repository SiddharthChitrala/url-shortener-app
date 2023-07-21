import { Component } from '@angular/core';
import { UrlShortenerService } from '../url-shortener.service';

@Component({
  selector: 'app-url-shortener',
  template: `
    <div>
      <h2>URL Shortener</h2>
      <input [(ngModel)]="longUrl" placeholder="Enter Long URL" />
      <button (click)="shortenUrl()">Shorten</button>
      <p *ngIf="shortUrl">Short URL: {{ shortUrl }}</p>
      <button (click)="showHistory()">Show History</button>
    </div>

    <div *ngIf="showingHistory">
      <h3>History</h3>
      <ul>
        <li *ngFor="let entry of history; let i = index">
          {{ entry.longUrl }} - {{ entry.shortUrl }}
          <button (click)="deleteEntry(i)">Delete</button>
        </li>
      </ul>
      <button (click)="hideHistory()">Close</button>
    </div>
  `,
})
export class UrlShortenerComponent {
  longUrl = '';
  shortUrl = '';
  showingHistory = false;
  history: { longUrl: string; shortUrl: string }[] = [];

  constructor(private urlShortenerService: UrlShortenerService) {}

  async shortenUrl() {
    try {
      this.shortUrl = await this.urlShortenerService.shortenUrl(this.longUrl);
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
  }

  showHistory() {
    this.history = this.urlShortenerService.getSavedUrls();
    this.showingHistory = true;
  }

  hideHistory() {
    this.showingHistory = false;
  }

  deleteEntry(index: number) {
    this.urlShortenerService.deleteUrl(index);
    this.history.splice(index, 1);
  }
}
