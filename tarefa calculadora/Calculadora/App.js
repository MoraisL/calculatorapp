import React from 'react';
import { View, StyleSheet } from 'react-native';
import Title from './components/Title';
import Display from './components/Display';
import ButtonGrid from './components/ButtonGrid';

const CalculatorApp = () => {
  return (
    <View style={styles.container}>
      <Title />
      <Display />
      <ButtonGrid />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default CalculatorApp;
