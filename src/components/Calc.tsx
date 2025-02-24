import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Calc = ({ navigation } : { navigation: any }) => {
  const styles = StyleSheet.create({
    buttonContainer: {
      display: 'flex',
      margin: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
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
  });

  return (
    <View>
      <Text>we just test</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Counter')}>
          <Text style={styles.buttonText}>Go to Counter</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Calc