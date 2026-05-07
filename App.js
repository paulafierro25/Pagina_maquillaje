// App.js — el componente principal que reúne todo
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import Inicio from './componentes/Inicio'
import Maquillaje from './componentes/Maquillaje'
import Bloqueadores from './componentes/Bloqueadores'
import CuidadoFacial from './componentes/CuidadoFacial'
import MisCombinaciones from './componentes/MisCombinaciones'
export default function App() {
 return (
 <SafeAreaView style={estilos.app}>
 <ScrollView>
 <Inicio />
 <Maquillaje />
 <Bloqueadores />
 <CuidadoFacial />
 <MisCombinaciones />
 </ScrollView>
 <StatusBar style="light" />
 </SafeAreaView>
 )
}
const estilos = StyleSheet.create({
 app: {
 flex: 1,
 backgroundColor: '#fff',
 },
})
