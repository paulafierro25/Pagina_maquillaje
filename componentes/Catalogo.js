// componentes/Catalogo.js
import { FlatList, StyleSheet, Text, View } from 'react-native'
import TarjetaProducto from './TarjetaProducto'

export default function Catalogo({ productos, favoritos, onToggleFavorito }) {
  return (
    <FlatList
      data={productos}
      renderItem={({ item }) => (
        <TarjetaProducto
          producto={item}
          esFavorito={favoritos.includes(item.id)}
          onToggleFavorito={onToggleFavorito}
        />
      )}
      keyExtractor={item => item.id}
      numColumns={2}
      contentContainerStyle={estilos.contenedor}
      ListEmptyComponent={
        <View style={estilos.vacio}>
          <Text style={estilos.textoVacio}>
            No hay productos en esta categoría.
          </Text>
        </View>
      }
    />
  )
}
const estilos = StyleSheet.create({
  contenedor: { padding: 8 },
  vacio:      { flex: 1, alignItems: 'center', padding: 40 },
  textoVacio: { color: '#8A6A6E', fontSize: 15, textAlign: 'center' },
})
