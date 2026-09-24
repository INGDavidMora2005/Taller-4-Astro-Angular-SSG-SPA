import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from '../../interfaces/customers.interface';
import { CUSTOMERS } from '../../data/customers.interface';

/**
 * Servicio encargado de la gestión de clientes.
 *
 * Proporciona métodos para obtener información de clientes
 * desde la data local.
 *
 * @example
 * ```ts
 * constructor(private customersService: CustomersService) {}
 *
 * this.customersService.getAllCustomers().subscribe(customers => {
 *   console.log(customers);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  /**
   * Obtiene una lista de clientes desde el backend.
   *
   * @returns Observable que emite un array de clientes.
   *
   * @example
   * ```ts
   * this.customersService.getAllCustomers().subscribe(customers => {
   *   console.log(customers);
   * });
   * ```
   */
  getAllCustomers(): Observable<Customer[]> {
    return of(CUSTOMERS);
  }
}