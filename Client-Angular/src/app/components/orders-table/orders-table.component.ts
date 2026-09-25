import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Order } from '../../interfaces/orders.interface';

/**
 * Componente de tabla de pedidos.
 *
 * Se utiliza para mostrar un listado de pedidos en una tabla,
 * mostrando información como id, producto, cantidad, total y estado.
 *
 * @remarks
 * Este componente recibe los pedidos desde un componente padre
 * a través del Input `orders`.
 *
 * @example
 * ```html
 * <app-orders-table [orders]="ordersList"></app-orders-table>
 * ```
 */
@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  imports: [CommonModule],
})
export class OrdersTableComponent {
  /**
   * Listado de pedidos que se mostrarán en la tabla.
   * @type {Order[]}
   */
  @Input() orders: Order[] = [];
}
