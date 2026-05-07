// PiePagina.js — información inferior de la app
import { View, Text, StyleSheet } from 'react-native'
export default function PiePagina() {
 return (
 <View style={estilos.pie}>
 <Text style={estilos.texto}>Creado por [Paula Fierro] · SENA 2026</Text>
 </View>
 )
}
const estilos = StyleSheet.create({
 pie: {
 padding: 16,
 alignItems: 'center',
 },
 texto: {
 fontSize: 12,
 color: '#666',
 },
})
