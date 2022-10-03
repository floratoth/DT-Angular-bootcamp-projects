import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-coupon-form',
  templateUrl: './coupon-form.component.html',
  styleUrls: ['./coupon-form.component.scss'],
})
export class CouponFormComponent implements OnInit {
  couponForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.couponForm = fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.pattern(/xy/)],
      couponCode: ['', Validators.pattern(/s345/)],
    });
  }

  ngOnInit(): void {}
}
