import { Component, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { Order } from '../models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  @Output()
  onNewOrder = new Subject<Order>()

  form!: FormGroup;
  lineItems!: FormArray;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.createForm();
  }

  private createForm(): FormGroup {
    this.lineItems = this.fb.array([])
    return this.fb.group({
      name: this.fb.control<string>(''),
      address: this.fb.control<string>(''),
      email: this.fb.control<string>(''),
      phone: this.fb.control<string>(''),
      express: this.fb.control<boolean>(false),
      delivery: this.fb.control<string>(''),
      lineItems: this.lineItems
    })
  }
  
  processForm() {
    // map values from the form to the order model (interface)
    const order: Order = this.form.value as Order;
    console.info('>>> order: ', order)
    // emit the order from the onNewOrder subject (Order interface) by .next
    this.onNewOrder.next(order)
    // create form
    this.form = this.createForm()

  }

  private createLineItem(): FormGroup {
    return this.fb.group({
      item: this.fb.control<string>(''),
      quantity: this.fb.control<number>(1),
      unitPrice: this.fb.control<number>(1)
    })
  }

  addLineItem() {
    this.lineItems.push(this.createLineItem())
  }

  removeLineItem(i: number) {
    this.lineItems.removeAt(i)
  }


}
