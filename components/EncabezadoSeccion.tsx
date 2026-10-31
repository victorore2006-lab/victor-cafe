import { StyleSheet, Text, View } from 'react-native';
import BotonAccion from './BotonAccion';

type Props = {
  titulo: string;
  cantidad?: number;
  onVerTodo?: () => void;
};

export default function EncabezadoSeccion({
  titulo,
  cantidad,
  onVerTodo,
}: Props) {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>
        {titulo} {cantidad !== undefined && `(${cantidad})`}
      </Text>

      {onVerTodo && (
        <BotonAccion
          texto="Ver todo"
          apariencia="enlace"
          tamano="pequeno"
          onPress={onVerTodo}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});