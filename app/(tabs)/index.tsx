import { StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import data from "@/assets/data.json"
import { Ionicons } from '@expo/vector-icons';

export default function TabOneScreen() {

  const renderitem = ({ item }: any) => <View style={styles.cartItemContainer}>
    <Image source={{ uri: item.image }}
      style={styles.cartItemImage}
    />
    <View style={styles.itemContainer}>
      <Text style={styles.cartItemName}>{item.title}</Text>
      <Text>{item.price}</Text>
    </View>

    <View style={styles.buttonContainer}>
      <TouchableOpacity style={{ padding: 10 }} activeOpacity={.7}>
        <Ionicons name='remove' size={20} color={`#fff`} />
      </TouchableOpacity>
      <TouchableOpacity style={{ padding: 10 }} activeOpacity={.7}>
        <Ionicons name='add' size={20} color={`#fff`} />
      </TouchableOpacity>
    </View>
  </View>


  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderitem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cartItemImage: {
    width: 50,
    height: 50
  },
  cartItemContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  itemContainer: {
    flex: 1,

  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: "bold"
  }

});
