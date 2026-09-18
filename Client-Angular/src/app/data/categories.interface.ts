import { Category } from "../interfaces/categories.interface";

/**
 * Listado de categorías disponibles en el sistema.
 *
 * Esta constante simula una fuente de datos (mock) que representa
 * información básica de categorías, utilizada para:
 * - Pruebas unitarias
 * - Desarrollo sin backend
 * - Ejercicios académicos
 *
 * @type {Category[]}
 */
export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: 'Electrónica',
    description: 'Dispositivos y accesorios electrónicos'
  },
  {
    id: 2,
    name: 'Hogar',
    description: 'Productos para el hogar y decoración'
  },
  {
    id: 3,
    name: 'Deportes',
    description: 'Artículos y equipos deportivos'
  },
  {
    id: 4,
    name: 'Ropa',
    description: 'Prendas de vestir y accesorios de moda'
  },
  {
    id: 5,
    name: 'Alimentos',
    description: 'Productos alimenticios y bebidas'
  },
  {
    id: 6,
    name: 'Salud',
    description: 'Productos de salud y bienestar'
  },
  {
    id: 7,
    name: 'Juguetes',
    description: 'Juguetes y juegos para todas las edades'
  },
  {
    id: 8,
    name: 'Libros',
    description: 'Libros, revistas y material de lectura'
  },
  {
    id: 9,
    name: 'Mascotas',
    description: 'Productos y accesorios para mascotas'
  },
  {
    id: 10,
    name: 'Herramientas',
    description: 'Herramientas y materiales de construcción'
  }
];
