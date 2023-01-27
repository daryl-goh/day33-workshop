import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Details } from '../models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input()
  details: Details | null = null;
   
  detailsForm!: FormGroup;
  cartArray!: FormArray;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.detailsForm = this.createForm(this.details);
  }

  private createForm(details: Details | null = null): FormGroup {

}
