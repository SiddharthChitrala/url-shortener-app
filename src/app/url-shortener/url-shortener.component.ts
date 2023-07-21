import { Component } from '@angular/core';
import { UrlShortenerService } from '../url-shortener.service';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html', // Use 'templateUrl' for the template file URL
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
