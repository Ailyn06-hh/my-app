import { CardItem } from '@/types/CardItem';
import { useRouter } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { Card } from '../components/ui/card';
import { login } from '../utils/auth';
import { saveToken } from '../utils/tokenStorage';

export default function LoginScreen(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = userRouter();

    const handleLogin = async () => {
        try{
            const token = await login(username, password);
            await saveToken(token);
            router.replace('/');
        }
    }
}

return (
  <View style={styles.container}>
    <TextInput
      placeholder='Usuario'
      value={username}
      onChangeText={setUsername}
      style={styles.input}
      autoCapitalize='none'
    />
    <TextInput
      placeholder='Contraseña'
      value={password}
      onChangeText={setPassword}
      secureTextEntry
      style={styles.input}
    />
    <Button title="Iniciar Sesión" onPress={handleLogin} />
    
  </View>
);

const styles = StyleSheet.create({

  container: { flex: 1, justifyContent: 'center', padding: 24},
  input:{
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  }
})