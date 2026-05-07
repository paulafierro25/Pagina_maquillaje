// Formulario.js — aquí se agregarán nuevos elementos
import { View, Text, StyleSheet } from 'react-native'
export default function Formulario() {
 return (
 <View style={estilos.seccion}>
 <Text style={estilos.titulo}>Agregar Nuevo Producto</Text>
 <Text>Aquí vamos a poder agregar tus prductos</Text>
 </View>
 )
}
const estilos = StyleSheet.create({
 seccion: {
 padding: 16,
 margin: 12,
 backgroundColor: '#f0f0f0',
 borderRadius: 8,
 },
 titulo: {
 fontSize: 18,
 fontWeight: 'bold',
 marginBottom: 6,
 },
})
