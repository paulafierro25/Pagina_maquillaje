// Encabezado.js — título y presentación de la app
import { View, Text, StyleSheet } from 'react-native'
export default function Encabezado() {
 return (
 <View style={estilos.encabezado}>
 <Text style={estilos.titulo}>Maquillaje</Text>
 <Text style={estilos.subtitulo}>Busca todo lo que quieras aqui</Text>
 </View>
 )
}
const estilos = StyleSheet.create({
 encabezado: {
 padding: 20,
 backgroundColor: '#1F3864',
 },
 titulo: {
 fontSize: 22,
 fontWeight: 'bold',
 color: '#fff',
 },
 subtitulo: {
 fontSize: 14,
 color: '#cdd5e0',
 marginTop: 4,
 },
})
