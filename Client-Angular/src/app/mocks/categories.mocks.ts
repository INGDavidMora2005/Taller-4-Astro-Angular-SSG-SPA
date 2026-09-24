import { Category } from "../interfaces/categories.interface";

/**
 * Listado de categorías de ejemplo usado en las pruebas unitarias.
 * Contiene datos de categorías con id, name y description.
 */
export const CATEGORIES_MOCK: Category[] = [
    {
        id: 1,
        name: 'Electrónica',
        description: 'Dispositivos y accesorios electrónicos',
    },
    {
        id: 2,
        name: 'Hogar',
        description: 'Productos para el hogar y decoración',
    },
    {
        id: 3,
        name: 'Deportes',
        description: 'Artículos y equipos deportivos',
    }
];
