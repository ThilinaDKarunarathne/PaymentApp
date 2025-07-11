import { Component, NgModule } from '@angular/core';
import { PaymentDedtailService } from '../../shared/payment-dedtail.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-payment-detail-form',
  standalone: true,
  imports: [],
  templateUrl: './payment-detail-form.component.html',
  styleUrl: './payment-detail-form.component.css'
})
export class PaymentDetailFormComponent {

  constructor (public service: PaymentDedtailService) {}
  
}
