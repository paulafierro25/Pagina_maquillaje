// Lista.js — mostrará todos los items
import { View, Text, StyleSheet } from 'react-native'
export default function Lista() {
 return (
 <View style={estilos.seccion}>
 <Text style={estilos.titulo}>Soy la lista</Text>
 <Text>Aquí se verán todos los productos agregados</Text>
 </View>
 )
}
const estilos = StyleSheet.create({
 seccion: {
 padding: 16,
 margin: 12,
 backgroundColor: '#e8f0fe',
 borderRadius: 8,
 },
 titulo: {
 fontSize: 18,
 fontWeight: 'bold',
 marginBottom: 6,
 },
})
