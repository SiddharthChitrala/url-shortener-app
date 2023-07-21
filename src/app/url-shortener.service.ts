import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class UrlShortenerService {
  private readonly LOCAL_STORAGE_KEY = 'shortenedUrls';

  async shortenUrl(url: string): Promise<string> {
    const encodedParams = new URLSearchParams();
    encodedParams.set('url', url);

    const options = {
      method: 'POST',
      url: 'https://url-shortener-service.p.rapidapi.com/shorten',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'd73283ca42msh25142662f0dd1eap11bde4jsnbe1a5c63f516',
        'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com',
      },
      data: encodedParams,
    };

    try {
      const response = await axios.request(options);
      const shortUrl = response.data.result_url;
      this.saveToLocalStorage(url, shortUrl);
      return shortUrl;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  private saveToLocalStorage(longUrl: string, shortUrl: string): void {
    const data = this.getSavedUrls();
    data.push({ longUrl, shortUrl });
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(data));
  }

  getSavedUrls(): { longUrl: string; shortUrl: string }[] {
    const data = localStorage.getItem(this.LOCAL_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  deleteUrl(index: number): void {
    const data = this.getSavedUrls();
    data.splice(index, 1);
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(data));
  }
}
