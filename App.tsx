import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { productos } from './data/productos';
import TarjetaProducto from './components/TarjetaProducto';
import EncabezadoSeccion from './components/EncabezadoSeccion';
import BotonAccion from './components/BotonAccion';

export default function App() {
  const formatearPrecio = (precio: number) => `L ${precio.toFixed(2)}`;

  const agregarProducto = (nombre: string) => {
    Alert.alert(`${nombre} agregado al pedido`);
  };

  const pedirOtraVez = (nombre: string) => {
    Alert.alert(`Pedido rápido: ${nombre}`);
  };

  const favoritos = productos.filter(
    producto => producto.id === 1 || producto.id === 6
  );

  return (
    <ScrollView
      style={styles.fondo}
      contentContainerStyle={styles.contenedor}
    >
      <View style={styles.seccion}>
        <EncabezadoSeccion
          titulo="Menú del día"
          cantidad={productos.length}
          onVerTodo={() => Alert.alert('Mostrando el menú completo')}
        />

        {productos.map(producto => (
          <TarjetaProducto
            key={producto.id}
            producto={producto}
            formatearPrecio={formatearPrecio}
            onPress={() => agregarProducto(producto.nombre)}
          />
        ))}
      </View>

      <View style={styles.seccion}>
        <EncabezadoSeccion
          titulo="Sus favoritos"
          cantidad={favoritos.length}
        />

        {favoritos.map(producto => (
          <TarjetaProducto
            key={producto.id}
            producto={producto}
            formatearPrecio={formatearPrecio}
            textoBoton="Pedir otra vez"
            onPress={() => pedirOtraVez(producto.nombre)}
          />
        ))}
      </View>

      <View style={styles.seccion}>
        <EncabezadoSeccion titulo="Su pedido" />

        <BotonAccion
          texto="Confirmar pedido"
          anchoCompleto
          onPress={() => Alert.alert('Pedido confirmado')}
        />

        <BotonAccion
          texto="Vaciar pedido"
          apariencia="destructiva"
          anchoCompleto
          onPress={() => Alert.alert('Se vació el pedido')}
        />

        <BotonAccion
          texto="Enviando..."
          anchoCompleto
          enProceso
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fondo: {
    backgroundColor: 'white',
  },
  contenedor: {
    padding: 20,
    paddingTop: 60,
  },
  seccion: {
    marginBottom: 25,
    gap: 10,
  },
});