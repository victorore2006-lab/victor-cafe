import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
  texto: string;
  onPress: () => void;
  apariencia?: 'principal' | 'alternativa' | 'destructiva' | 'enlace';
  tamano?: 'pequeno' | 'mediano' | 'grande';
  anchoCompleto?: boolean;
  inhabilitado?: boolean;
  enProceso?: boolean;
};

export default function BotonAccion({
  texto,
  onPress,
  apariencia = 'principal',
  tamano = 'mediano',
  anchoCompleto = false,
  inhabilitado = false,
  enProceso = false,
}: Props) {
  const estilos = {
    principal: styles.principal,
    alternativa: styles.alternativa,
    destructiva: styles.destructiva,
    enlace: styles.enlace,
  };

  const tamanos = {
    pequeno: styles.pequeno,
    mediano: styles.mediano,
    grande: styles.grande,
  };

  return (
    <TouchableOpacity
      style={[
        styles.boton,
        estilos[apariencia],
        tamanos[tamano],
        anchoCompleto && styles.anchoCompleto,
        (inhabilitado || enProceso) && styles.inhabilitado,
      ]}
      onPress={onPress}
      disabled={inhabilitado || enProceso}
    >
      {enProceso ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles.texto}>{texto}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  principal: {
    backgroundColor: '#6f4e37',
  },
  alternativa: {
    borderWidth: 1,
    borderColor: '#6f4e37',
  },
  destructiva: {
    backgroundColor: '#b00020',
  },
  enlace: {
    backgroundColor: 'transparent',
  },
  pequeno: {
    padding: 6,
  },
  mediano: {
    padding: 10,
  },
  grande: {
    padding: 14,
  },
  anchoCompleto: {
    width: '100%',
  },
  inhabilitado: {
    opacity: 0.5,
  },
  texto: {
    color: 'white',
  },
});