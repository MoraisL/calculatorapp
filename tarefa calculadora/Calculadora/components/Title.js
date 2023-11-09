// Title.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Title = () => {
  return (
    <Text style={styles.title}>Calculadora do Vinão</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Title;
