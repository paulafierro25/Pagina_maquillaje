// Item.js — representa un solo elemento de la lista
import { View, Text, StyleSheet } from 'react-native'
export default function Item() {
 return (
 <View style={estilos.item}>
 <Text>Soy un producto de la lista</Text>
 </View>
 )
}
const estilos = StyleSheet.create({
 item: {
 padding: 14,
 marginHorizontal: 12,
 marginVertical: 4,
 backgroundColor: '#fff',
 borderWidth: 1,
 borderColor: '#ddd',
 borderRadius: 6,
 },
})
