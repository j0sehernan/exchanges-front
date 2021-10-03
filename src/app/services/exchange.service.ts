import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  private url: String = '/api/bcp/exchanges';

  constructor(private http: HttpClient) {}

  exchange(
    amount: number,
    originCurrency: String,
    destinationCurrency: String
  ) {
    //return this.http.get(`${this.url}`);

    return this.http.post(`${this.url}`, {
      amount: amount,
      origin_currency: originCurrency,
      destination_currency: destinationCurrency,
    });
  }
}
