import { useRouter } from 'expo-router';
import { FlatList, StyleSheet } from 'react-native';
import { Card } from "../components/ui/Card";
import { CardItem } from "../types/CardItem";

const MOCK_DATA: CardItem[]= [
  {
    id:'1',
    title:'Primera tarjeta',
    image: 'https://tse2.mm.bing.net/th/id/OIP.rjAVwJj511fXjlE-j8tgtwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    description:'Voy caminando por las calles de noche, y no creo que ningún humano sospeche',
  }, 
    {
    id:'2',
    title:'Segunda tarjeta',
    image: 'https://tse2.mm.bing.net/th/id/OIP.rjAVwJj511fXjlE-j8tgtwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    description:'Pensamientos marcianos invaden mi mente, el planeta es mío con toda su gente',
  }, 
    {
    id:'3',
    title:'Tercera tarjeta',
    image: 'https://tse2.mm.bing.net/th/id/OIP.rjAVwJj511fXjlE-j8tgtwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    description:'¿POORQUEEEEEEEEEEEEEEEE?',
  }, 
]

export default function HomeScreen(){
  const router = useRouter();
  return(
    <FlatList
      data={MOCK_DATA}
      keyExtractor={(item)=>item.id}
      contentContainerStyle={styles.listContent}
      renderItem={({item})=>(
        <Card
          title={item.title}
          image={item.image}
          description={item.description}
          onPress={()=>router.push({pathname:'/details',params:{item:JSON.stringify(item)}})}
        />
      )}
    />
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  listContent:{
    paddingTop:16,
    paddingBottom:16,
  }
});


