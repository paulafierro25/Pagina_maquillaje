// componentes/BarraCategorias.js
import { ScrollView, Pressable, Text, StyleSheet } from 'react-native'
import { CATEGORIAS } from '../constantes/categorias'
import { COLORES } from '../constantes/colores'

export default function BarraCategorias({ categoriaActiva }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={estilos.contenedor}
    >
      {CATEGORIAS.map(cat => {
        const activa = cat === categoriaActiva
        return (
          <Pressable
            key={cat}
            style={[estilos.boton, activa && estilos.botonActivo]}
          >
            <Text style={[estilos.texto, activa && estilos.textoActivo]}>
              {cat}
            </Text>
          </Pressable>
        )
      })}
    </ScrollView>
  )
}
const estilos = StyleSheet.create({
  contenedor:  { paddingHorizontal: 12, paddingVertical: 10, gap: 8 },
  boton:       { paddingHorizontal: 18, paddingVertical: 8, borderRadius: 20,
                 backgroundColor: '#EEDDDD', borderWidth: 1, borderColor: '#DDCCCC' },
  botonActivo: { backgroundColor: COLORES.primario, borderColor: COLORES.primario },
  texto:       { fontSize: 13, fontWeight: '600', color: COLORES.primarioDark },
  textoActivo: { color: '#FFFFFF' },
})
