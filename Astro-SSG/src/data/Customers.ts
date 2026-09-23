import type { Customer } from "@interfaces/Customers";

/**
 * Listado de clientes disponibles en el sistema.
 *
 * Esta constante simula una fuente de datos (mock) que representa
 * información básica de clientes, utilizada para:
 * - Pruebas unitarias
 * - Desarrollo sin backend
 * - Ejercicios académicos
 *
 * @type {Customer[]}
 */
export const CUSTOMERS: Customer[] = [
  {
    id: 1,
    name: 'María Fernanda López',
    email: 'maria.fernanda.lopez@email.com',
    phone: '312-456-7890'
  },
  {
    id: 2,
    name: 'Carlos Andrés Rivera',
    email: 'carlos.andres.rivera@email.com',
    phone: '321-987-6543'
  },
  {
    id: 3,
    name: 'Valentina Gómez Jiménez',
    email: 'valentina.gomez@email.com',
    phone: '315-234-5678'
  },
  {
    id: 4,
    name: 'Juan David Castro',
    email: 'juan.david.castro@email.com',
    phone: '323-876-5432'
  },
  {
    id: 5,
    name: 'Isabella Montoya Restrepo',
    email: 'isabella.montoya@email.com',
    phone: '311-345-6789'
  },
  {
    id: 6,
    name: 'Santiago Pérez Vargas',
    email: 'santiago.perez@email.com',
    phone: '325-654-3210'
  },
  {
    id: 7,
    name: 'Catalina Díaz Fernández',
    email: 'catalina.diaz@email.com',
    phone: '314-765-4321'
  },
  {
    id: 8,
    name: 'Nicolás Torres Ortiz',
    email: 'nicolas.torres@email.com',
    phone: '322-123-4567'
  },
  {
    id: 9,
    name: 'Laura Jiménez Cano',
    email: 'laura.jimenez@email.com',
    phone: '313-555-7890'
  },
  {
    id: 10,
    name: 'Andrés Felipe Mora',
    email: 'andres.felipe.mora@email.com',
    phone: '324-432-1098'
  }
];
