import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Counter = ({navigation} : {navigation: any}) => {
    const [count, setCount] = useState(0)

    const styles = StyleSheet.create({
      text: {
        fontSize: 150,
        textAlign: 'center',
        color: '#99DEEB',
        fontWeight: 'bold',
        marginVertical: 10,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
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
      }
    })

  return (
    <View>
      <Text style={styles.text}>{count}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => setCount(count - 1)}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{...styles.button, backgroundColor: 'red'}} onPress={() => navigation.navigate('Calc')}>
        <Text style={styles.buttonText}>Go to Calc</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Counter