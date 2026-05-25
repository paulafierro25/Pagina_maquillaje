// componentes/TarjetaProducto.js
import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import { COLORES } from '../constantes/colores'

export default function TarjetaProducto({ producto, esFavorito, onToggleFavorito }) {
  return (
    <View style={estilos.tarjeta}>

      {/* Imagen del producto */}
      <View style={estilos.contenedorImagen}>
        <Image source={producto.imagen} style={estilos.imagen} />
        {/* Botón de favorito */}
        <Pressable
          style={estilos.botonCorazon}
          onPress={() => onToggleFavorito(producto.id)}
        >
          <Text style={estilos.corazon}>{esFavorito ? '♥' : '♡'}</Text>
        </Pressable>
      </View>

      {/* Información del producto */}
      <View style={estilos.info}>
        <Text style={estilos.marca}>{producto.marca}</Text>
        <Text style={estilos.nombre} numberOfLines={2}>{producto.nombre}</Text>
        <Text style={estilos.precio}>
          ${producto.precio.toLocaleString('es-CO')}
        </Text>
        <View style={estilos.badgeCategoria}>
          <Text style={estilos.textoCategoria}>{producto.tipo || producto.categoria}</Text>
        </View>
      </View>

    </View>
  )
}

const estilos = StyleSheet.create({
  tarjeta: {
    flex: 1,
    margin: 8,
    backgroundColor: COLORES.tarjeta,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#D4617A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
  },
  contenedorImagen: { position: 'relative' },
  imagen:  { width: '100%', height: 160, resizeMode: 'cover' },
  botonCorazon: {
    position: 'absolute', top: 8, right: 8,
    backgroundColor: 'rgba(255,255,255,0.85)',
    width: 34, height: 34, borderRadius: 17,
    justifyContent: 'center', alignItems: 'center',
  },
  corazon:  { fontSize: 18, color: COLORES.primario },
  info:     { padding: 12 },
  marca:    { fontSize: 11, color: COLORES.textoSuave, textTransform: 'uppercase', letterSpacing: 1 },
  nombre:   { fontSize: 14, fontWeight: '600', color: COLORES.texto, marginVertical: 4 },
  precio:   { fontSize: 16, fontWeight: 'bold', color: COLORES.primario, marginBottom: 8 },
  badgeCategoria: {
    alignSelf: 'flex-start', backgroundColor: '#F5E6E0',
    paddingHorizontal: 10, paddingVertical: 3, borderRadius: 10,
  },
  textoCategoria: { fontSize: 11, color: COLORES.primarioDark, fontWeight: '600' },
})
