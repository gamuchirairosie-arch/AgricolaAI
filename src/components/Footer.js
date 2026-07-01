import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🌾 Agricola AI</Text>
      <Text style={styles.text}>Climate-smart farming powered by AI.</Text>
      <Text style={styles.copyright}>© 2025 Agricola AI. All rights reserved.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 48,
    paddingTop: 32,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.primary,
    marginBottom: 6,
  },
  text: {
    fontSize: 14,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 16,
  },
  copyright: {
    fontSize: 11,
    color: '#9E9E9E',
  },
});
