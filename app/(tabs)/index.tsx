import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const[sign, setSign]=useState("")

  const handleInput = (value:any) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
    setSign('');
  };

  const handleCalculate = () => {
    try {
      
      setResult(eval(input).toString());
      setSign ("=")
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.input}>{input} {sign} {result}</Text>
      <View style={styles.buttonContainer}>
        {['1', '2', '3', '+'].map((value) => (
          <TouchableOpacity key={value} style={styles.button} onPress={() => handleInput(value)}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
        {['4', '5', '6', '-'].map((value) => (
          <TouchableOpacity key={value} style={styles.button} onPress={() => handleInput(value)}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
        {['7', '8', '9', '*'].map((value) => (
          <TouchableOpacity key={value} style={styles.button} onPress={() => handleInput(value)}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
        {['0', '.', '=', '/'].map((value) => (
          <TouchableOpacity
            key={value}
            style={styles.button}
            onPress={value === '=' ? handleCalculate : () => handleInput(value)}
          >
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableOpacity>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   backgroundColor:"#1F222A" 
  },
  input: {
    fontSize: 32,
    marginBottom:20,
    alignItems:"flex-start",
    color:"white",
  },

 
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#246BFD',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    color:"white",
  },

  clearButton: {
    width: 120,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#F75555',
    borderRadius: 10,
  },
});

export default Calculator;
