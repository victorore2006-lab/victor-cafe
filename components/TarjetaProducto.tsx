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

  const colores = {
    bebida: 'blue',
    comida: 'orange',
    postre: 'purple',
  };

  return (
    <View style={[styles.tarjeta, agotado && styles.agotado]}>
      <Text style={styles.nombre}>{producto.nombre}</Text>

      <Text style={{ color: colores[producto.categoria] }}>
        {producto.categoria}
      </Text>

      {producto.descuento ? (
        <View style={styles.precios}>
          <Text style={styles.tachado}>
            {formatearPrecio(producto.precio)}
          </Text>
          <Text style={styles.texto}>
            {formatearPrecio(precioFinal)}
          </Text>
        </View>
      ) : (
        <Text style={styles.texto}>
          {formatearPrecio(producto.precio)}
        </Text>
      )}

      {producto.nuevo && <Text style={styles.texto}>Nuevo</Text>}

      {producto.disponibilidad === 'pocasUnidades' && (
        <Text style={styles.texto}>Últimas unidades</Text>
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
    backgroundColor: 'white',
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  texto: {
    color: 'black',
  },
  agotado: {
    opacity: 0.5,
  },
  precios: {
    flexDirection: 'row',
    gap: 10,
  },
  tachado: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});