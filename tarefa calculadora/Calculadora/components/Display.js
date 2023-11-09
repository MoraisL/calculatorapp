// Display.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Display = () => {
  return (
    <View style={styles.display}>
      <Text style={styles.displayText}>0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10,
    backgroundColor: 'white',
  },
  displayText: {
    fontSize: 48,
  },
});

export default Display;
