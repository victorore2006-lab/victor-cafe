export type CategoriaProducto = 'bebida' | 'comida' | 'postre';

export type DisponibilidadProducto =
  | 'disponible'
  | 'pocasUnidades'
  | 'agotado';

export type Producto = {
  id: number;
  nombre: string;
  categoria: CategoriaProducto;
  precio: number;
  disponibilidad: DisponibilidadProducto;
  descuento?: number;
  nuevo?: boolean;
};