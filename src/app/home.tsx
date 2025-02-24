import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

const Home = ({ navigation } : {navigation: any}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
     
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
    },
    button: {
      backgroundColor: '#007AFF',
      padding: 5,
      borderRadius: 5,
      margin: 10,
      width: 150,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    image: {
      width: '100%',
      height: '80%',
      borderRadius: 0,
      margin: 0,
    },
    buttonContainer: {
      display: 'flex',
      margin: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
    },
  });

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: 'https://cdn.pixabay.com/photo/2025/01/09/16/59/forest-9322222_1280.jpg'}} resizeMode="cover" />
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Calc')}>
        <Text style={styles.buttonText}>Go to Calc</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Counter')}>
        <Text style={styles.buttonText}>Go to Counter</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home