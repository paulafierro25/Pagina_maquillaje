// componentes/CirculoTono.js
import { View, Text, StyleSheet } from 'react-native'

export default function CirculoTono({ tono }) {
  return (
    <View style={estilos.contenedor}>
      <View style={[estilos.circulo, { backgroundColor: tono.hex }]} />
      <Text style={estilos.nombre}>{tono.nombre}</Text>
    </View>
  )
}
const estilos = StyleSheet.create({
  contenedor: { alignItems: 'center', margin: 6 },
  circulo:    { width: 36, height: 36, borderRadius: 18,
                borderWidth: 2, borderColor: '#EEDDDD',
                elevation: 2 },
  nombre:     { fontSize: 10, color: '#8A6A6E', marginTop: 4, textAlign: 'center', maxWidth: 50 },
})
