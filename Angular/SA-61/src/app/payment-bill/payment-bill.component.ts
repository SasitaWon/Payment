import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-bill',
  templateUrl: './payment-bill.component.html',
  styleUrls: ['./payment-bill.component.css']
})
export class PaymentBillComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  print(){
    this.router.navigate(['receipt']);
  }
}
