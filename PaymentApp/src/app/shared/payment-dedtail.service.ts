import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { PaymentDetail } from './payment-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentDedtailService {

  url : string = environment.apiBaseUrl+ '/PaymentDetail';
  list: PaymentDetail[] = [];
 formData: PaymentDetail  = new PaymentDetail();
  constructor(private http: HttpClient) { }

  refreshList() {
    this.http.get(this.url).subscribe({
      next: res => {
        this.list = res as PaymentDetail[];
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
