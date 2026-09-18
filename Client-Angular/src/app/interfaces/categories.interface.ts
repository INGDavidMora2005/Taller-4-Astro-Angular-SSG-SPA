/**
 * Interfaz que representa una categoría.
 *
 * Contiene la información básica necesaria para mostrar una categoría
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada categoría debe tener un `id` único, un `name` descriptivo
 * y una `description` que detalle su propósito.
 *
 * @example
 * ```ts
 * const categoria: Category = {
 *   id: 1,
 *   name: 'Electrónica',
 *   description: 'Dispositivos y accesorios electrónicos'
 * };
 * ```
 */
export interface Category {
    /** Identificador único de la categoría */
    id: number;

    /** Nombre de la categoría */
    name: string;

    /** Descripción detallada de la categoría */
    description: string;
}
