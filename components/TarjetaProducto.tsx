import { StyleSheet, Text, View } from 'react-native';
import BotonAccion from './BotonAccion';
import { Producto } from '../types/Producto';

type Props = {
  producto: Producto;
  onPress: () => void;
  formatearPrecio: (precio: number) => string;
  textoBoton?: string;
};

export default function TarjetaProducto({
  producto,
  onPress,
  formatearPrecio,
  textoBoton = 'Agregar',
}: Props) {
  const agotado = producto.disponibilidad === 'agotado';

  const precioFinal = producto.descuento
    ? producto.precio - producto.precio * producto.descuento / 100
    : producto.precio;

  return (
    <View style={[styles.tarjeta, agotado && styles.agotado]}>
      <Text style={styles.nombre}>{producto.nombre}</Text>
      <Text>{producto.categoria}</Text>

      {producto.descuento ? (
        <Text>
          {formatearPrecio(producto.precio)} → {formatearPrecio(precioFinal)}
        </Text>
      ) : (
        <Text>{formatearPrecio(producto.precio)}</Text>
      )}

      {producto.nuevo && <Text>Nuevo</Text>}

      {producto.disponibilidad === 'pocasUnidades' && (
        <Text>Últimas unidades</Text>
      )}

      <BotonAccion
        texto={agotado ? 'Agotado' : textoBoton}
        onPress={onPress}
        inhabilitado={agotado}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  agotado: {
    opacity: 0.5,
  },
});