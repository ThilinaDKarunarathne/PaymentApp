import { Component, OnInit } from '@angular/core';
import { PaymentDetailFormComponent } from "./payment-detail-form/payment-detail-form.component";
import { PaymentDedtailService } from '../shared/payment-dedtail.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [PaymentDetailFormComponent,NgFor],
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.css'
})
export class PaymentDetailsComponent implements OnInit{
  
  constructor (public service: PaymentDedtailService) {}

  ngOnInit(): void {
    this.service.refreshList();
  }

}
