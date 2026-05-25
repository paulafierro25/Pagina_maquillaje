// componentes/BadgeTipoPiel.js
import { View, Text, StyleSheet } from 'react-native'
import { COLORES_PIEL } from '../constantes/colores'

export default function BadgeTipoPiel({ tipoPiel }) {
  return (
    <View style={estilos.fila}>
      {tipoPiel.map(tipo => (
        <View key={tipo} style={[estilos.badge, { backgroundColor: COLORES_PIEL[tipo] || '#CCC' }]}>
          <Text style={estilos.texto}>{tipo}</Text>
        </View>
      ))}
    </View>
  )
}
const estilos = StyleSheet.create({
  fila:  { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  badge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  texto: { fontSize: 12, color: '#2C1A1D', fontWeight: '600' },
})
