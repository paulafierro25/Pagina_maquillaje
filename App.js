// App.js — mi primer componente React Native
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
export default function App() {
 // TODO aprendiz: cambia este título por el nombre de tu proyecto
 const tituloProyecto = "Mi primer proyecto React Native"
 return (
 <SafeAreaView style={estilos.contenedor}>
 <Text style={estilos.titulo}>{tituloProyecto}</Text>
 <Text style={estilos.parrafo}>
 Si ves este texto en tu celular, React Native está funcionando 🎉
 </Text>
 <StatusBar style="auto" />
 </SafeAreaView>
 )
}
const estilos = StyleSheet.create({
 contenedor: {
 flex: 1,
 backgroundColor: '#fff',
 alignItems: 'center',
 justifyContent: 'center',
 padding: 20,
 },
 titulo: {
 fontSize: 24,
 fontWeight: 'bold',
 marginBottom: 12,
 textAlign: 'center',
 },
 parrafo: {
 fontSize: 16,
 textAlign: 'center',
 color: '#333',
 },
})