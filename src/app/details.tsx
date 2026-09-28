import { useLocalSearchParams } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  View
} from "react-native";
import { CardItem } from '../types/CardItem';

export default function DetailScreen(){
  const {item:itemString}=useLocalSearchParams<{item:string}>();
  const item: CardItem=JSON.parse(itemString);
  const { image, title, description } = item;
  return (
      <View style={styles.container}>
      <Image source={{uri:image}} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      </View>
  );
};

const styles = StyleSheet.create ({
  container:{flex:1,backgroundColor:'#fff'},
  image: {width: '100%',height: 250},
  title: {fontSize:22, fontWeight: 'bold', padding:16},
  description: { fontSize: 16, paddingHorizontal:16, color:'#555'}
});
