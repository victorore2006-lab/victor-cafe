import { Producto } from '../types/Producto';

export const productos: Producto[] = [
  {
    id: 1,
    nombre: 'Café americano',
    categoria: 'bebida',
    precio: 35,
    disponibilidad: 'disponible',
  },
  {
    id: 2,
    nombre: 'Licuado de fresa',
    categoria: 'bebida',
    precio: 55,
    disponibilidad: 'pocasUnidades',
    nuevo: true,
  },
  {
    id: 3,
    nombre: 'Empanada de queso',
    categoria: 'comida',
    precio: 30,
    disponibilidad: 'disponible',
    descuento: 10,
  },
  {
    id: 4,
    nombre: 'Sándwich de pollo',
    categoria: 'comida',
    precio: 75,
    disponibilidad: 'agotado',
  },
  {
    id: 5,
    nombre: 'Pastel de chocolate',
    categoria: 'postre',
    precio: 45,
    disponibilidad: 'pocasUnidades',
    descuento: 20,
  },
  {
    id: 6,
    nombre: 'Galleta de avena',
    categoria: 'postre',
    precio: 20,
    disponibilidad: 'disponible',
    nuevo: true,
  },
];