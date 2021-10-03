import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../services/exchange.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css'],
})
export class ExchangeComponent implements OnInit {
  amount: number = 0.0;
  originCurrency: String = '';
  destinationCurrency: String = '';
  exchangeAmount: number = 0;
  exchangeRate: number = 0;

  constructor(private exchangeService: ExchangeService) {}

  ngOnInit(): void {}

  exchange() {
    this.exchangeService
      .exchange(this.amount, this.originCurrency, this.destinationCurrency)
      .subscribe((data: any) => {
        this.exchangeAmount = data.exchange_amount;
        this.exchangeRate = data.exchange_rate;
      });
  }
}
