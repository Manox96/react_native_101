import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Counter = () => {
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
      circleButton: {
        width: 160,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
      },
      buttonText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
      }
    })

  return (
    <View>
      <Text style={styles.text}>{count}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.circleButton}
          onPress={() => setCount(count - 1)}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.circleButton}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Counter