import type { Order } from "@interfaces/Orders";

/**
 * Listado de pedidos disponibles en el sistema.
 * @type {Order[]}
 */
export const ORDERS: Order[] = [
  { id: 1, product: 'Auriculares inalámbricos', quantity: 2, total: 129.99, status: 'Pendiente' },
  { id: 2, product: 'Teclado mecánico', quantity: 1, total: 89.50, status: 'Enviado' },
  { id: 3, product: 'Monitor 24"', quantity: 1, total: 210.00, status: 'Entregado' },
  { id: 4, product: 'Mouse inalámbrico', quantity: 3, total: 45.00, status: 'Pendiente' },
  { id: 5, product: 'Silla ergonómica', quantity: 1, total: 340.75, status: 'Cancelado' },
  { id: 6, product: 'Cámara web HD', quantity: 2, total: 98.20, status: 'Enviado' },
  { id: 7, product: 'Disco SSD 1TB', quantity: 1, total: 120.00, status: 'Entregado' },
  { id: 8, product: 'Lámpara de escritorio', quantity: 4, total: 76.40, status: 'Pendiente' },
];
