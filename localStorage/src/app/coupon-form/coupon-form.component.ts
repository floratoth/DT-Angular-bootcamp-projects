import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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

  ngOnInit(): void {
    this.fullName.setValue(this.setInputValue('fullName'));
    this.email.setValue(this.setInputValue('email'));
    this.phoneNumber.setValue(this.setInputValue('phoneNumber'));
    this.couponCode.setValue(this.setInputValue('couponCode'));
  }

  get fullName(): FormControl {
    return this.couponForm.get('fullName') as FormControl;
  }

  get email(): FormControl {
    return this.couponForm.get('email') as FormControl;
  }

  get phoneNumber(): FormControl {
    return this.couponForm.get('phoneNumber') as FormControl;
  }

  get couponCode(): FormControl {
    return this.couponForm.get('couponCode') as FormControl;
  }

  setLocalStorage(from: string, to: string): void {
    localStorage.setItem(from, to);
  }

  getItemFromLocalStorage(key: string): string | null {
    return localStorage.getItem(key);
  }

  setInputValue(key: string): any {
    let value = this.getItemFromLocalStorage(key);
    if (value === null) {
      return '';
    } else {
      return JSON.parse(value);
    }
  }

  onSubmit(): void {
    console.log(this.couponForm.value);
    let formDataList = [
      { key: 'fullName', value: this.fullName.value },
      { key: 'email', value: this.email.value },
      { key: 'phoneNumber', value: this.phoneNumber.value },
      { key: 'couponCode', value: this.couponCode.value },
    ];
    formDataList.map((item) => {
      this.setLocalStorage(item.key, JSON.stringify(item.value));
    });
  }
}
