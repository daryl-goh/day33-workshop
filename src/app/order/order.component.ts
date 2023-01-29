import { Component, Input } from '@angular/core';
import { Order } from '../models';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  @Input()
  order: Order | null = null;

  @Input()
  name!: string;

}
