// pantallas/DetalleProducto.js
import { View, Text, Image, ScrollView, Pressable, StyleSheet } from 'react-native'
import CirculoTono   from '../componentes/CirculoTono'
import BadgeTipoPiel from '../componentes/BadgeTipoPiel'
import { COLORES }   from '../constantes/colores'

export default function DetalleProducto({ producto, esFavorito, onToggleFavorito }) {
  return (
    <ScrollView style={estilos.contenedor}>

      {/* Imagen y botón favorito */}
      <View style={estilos.contenedorImagen}>
        <Image source={producto.imagen} style={estilos.imagen} />
        <Pressable
          style={estilos.botonCorazon}
          onPress={() => onToggleFavorito(producto.id)}
        >
          <Text style={estilos.corazon}>{esFavorito ? '♥' : '♡'}</Text>
        </Pressable>
      </View>

      <View style={estilos.cuerpo}>
        {/* Cabecera */}
        <Text style={estilos.marca}>{producto.marca}</Text>
        <Text style={estilos.nombre}>{producto.nombre}</Text>
        <Text style={estilos.precio}>${producto.precio.toLocaleString('es-CO')}</Text>

        {/* SPF si existe */}
        {producto.spf && (
          <View style={estilos.spfBadge}>
            <Text style={estilos.spfTexto}>SPF {producto.spf}</Text>
          </View>
        )}

        {/* Función */}
        <Text style={estilos.seccion}>Función</Text>
        <Text style={estilos.parrafo}>{producto.funcion}</Text>

        {/* Tipo de piel */}
        <Text style={estilos.seccion}>Apto para tipo de piel</Text>
        <BadgeTipoPiel tipoPiel={producto.tipoPiel} />

        {/* Tonos si tiene */}
        {producto.tonos.length > 0 && (
          <>
            <Text style={estilos.seccion}>Tonos disponibles</Text>
            <View style={estilos.filaCirculos}>
              {producto.tonos.map(t => (
                <CirculoTono key={t.nombre} tono={t} />
              ))}
            </View>
          </>
        )}

        {/* Ingredientes destacados */}
        <Text style={estilos.seccion}>Ingredientes destacados</Text>
        {producto.ingredientesDestacados.map(ing => (
          <Text key={ing} style={estilos.ingrediente}>•  {ing}</Text>
        ))}
      </View>
    </ScrollView>
  )
}
