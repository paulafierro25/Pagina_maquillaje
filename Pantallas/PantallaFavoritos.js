// pantallas/PantallaFavoritos.js
import { View, Text, StyleSheet } from 'react-native'
import Catalogo from '../componentes/Catalogo'
import { COLORES } from '../constantes/colores'

export default function PantallaFavoritos({ todosProductos, favoritos, onToggleFavorito }) {
  // Filtra solo los productos que el usuario marcó
  const productosFavoritos = todosProductos.filter(p => favoritos.includes(p.id))

  if (productosFavoritos.length === 0) {
    return (
      <View style={estilos.vacio}>
        <Text style={estilos.emoji}>♡</Text>
        <Text style={estilos.titulo}>Aún no tienes favoritos</Text>
        <Text style={estilos.subtitulo}>
          Toca el corazón en cualquier producto para guardarlo aquí.
        </Text>
      </View>
    )
  }

  return (
    <Catalogo
      productos={productosFavoritos}
      favoritos={favoritos}
      onToggleFavorito={onToggleFavorito}
    />
  )
}
const estilos = StyleSheet.create({
  vacio:     { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40 },
  emoji:     { fontSize: 64, marginBottom: 20 },
  titulo:    { fontSize: 20, fontWeight: 'bold', color: COLORES.texto, marginBottom: 8 },
  subtitulo: { fontSize: 14, color: COLORES.textoSuave, textAlign: 'center', lineHeight: 22 },
})