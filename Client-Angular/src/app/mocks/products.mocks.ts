import { Product } from "../interfaces/products.interface";

/**
 * Listado de productos de ejemplo usado en las pruebas unitarias.
 * Contiene datos de productos con id, name, category y price.
 */
export const PRODUCTS_MOCK: Product[] = [
    {
        id: 1,
        name: 'Leche entera',
        category: 'Lacteos',
        price: 4500,
    },
    {
        id: 2,
        name: 'Manzana roja',
        category: 'Frutas',
        price: 3200,
    }
];