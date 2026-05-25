// App.js — lógica de favoritos
import { useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { PRODUCTOS } from './datos/productos'
import Encabezado      from './componentes/Encabezado'
import BarraCategorias from './componentes/BarraCategorias'
import Catalogo        from './componentes/Catalogo'

export default function App() {
  // Array con los IDs de productos favoritos
  const [favoritos, setFavoritos] = useState([])

  // Agrega el id si no estaba; lo quita si ya estaba
  const toggleFavorito = (id) => {
    setFavoritos(prev =>
      prev.includes(id)
        ? prev.filter(fav => fav !== id)   // quitar
        : [...prev, id]                    // agregar
    )
  }

  return (
    <SafeAreaView style={estilos.app}>
      <Encabezado titulo="GlowApp" cantFavoritos={favoritos.length} />
      <BarraCategorias />
      <Catalogo
        productos={PRODUCTOS}
        favoritos={favoritos}
        onToggleFavorito={toggleFavorito}
      />
    </SafeAreaView>
  )
}
const estilos = StyleSheet.create({ app: { flex:1, backgroundColor:'#F9F3F4' } })
