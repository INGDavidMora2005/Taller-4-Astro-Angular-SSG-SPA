import { User } from "../interfaces/users.interface";

/**
 * Listado de usuarios de ejemplo usado en las pruebas unitarias.
 * Contiene datos de usuarios con id, name, lastName, age, email e ingeniería.
 */
export const USERS_MOCK: User[] = [
    {
        id: 1,
        name: 'Carlos',
        lastName: 'Ramírez',
        age: 22,
        email: 'carlos.ramirez@example.com',
        engineering: 'Sistemas',
    },
    {
        id: 2,
        name: 'Ana',
        lastName: 'Gómez',
        age: 24,
        email: 'ana.gomez@example.com',
        engineering: 'Industrial',
    }
];