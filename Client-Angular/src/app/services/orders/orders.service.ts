import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from '../../interfaces/orders.interface';
import { ORDERS } from '../../data/orders.interface';

/**
 * Servicio encargado de la gestión de pedidos.
 *
 * Proporciona métodos para obtener información de pedidos
 * desde la data local.
 *
 * @example
 * ```ts
 * constructor(private ordersService: OrdersService) {}
 *
 * this.ordersService.getAllOrders().subscribe(orders => {
 *   console.log(orders);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  /**
   * Obtiene una lista de pedidos desde la data local.
   *
   * @returns Observable que emite un array de pedidos.
   *
   * @example
   * ```ts
   * this.ordersService.getAllOrders().subscribe(orders => {
   *   console.log(orders);
   * });
   * ```
   */
  getAllOrders(): Observable<Order[]> {
    return of(ORDERS);
  }
}
