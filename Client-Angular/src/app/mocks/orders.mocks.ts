import { Order } from "../interfaces/orders.interface";

/**
 * Listado de pedidos de ejemplo usado en las pruebas unitarias.
 * Contiene datos de pedidos con id, product, quantity, total y status.
 */
export const ORDERS_MOCK: Order[] = [
    {
        id: 1,
        product: 'Auriculares inalámbricos',
        quantity: 2,
        total: 129.99,
        status: 'Pendiente',
    },
    {
        id: 2,
        product: 'Teclado mecánico',
        quantity: 1,
        total: 89.50,
        status: 'Enviado',
    },
    {
        id: 3,
        product: 'Monitor 24"',
        quantity: 1,
        total: 210.00,
        status: 'Entregado',
    }
];
