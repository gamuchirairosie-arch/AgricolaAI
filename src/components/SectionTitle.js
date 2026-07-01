import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';

/**
 * SectionTitle - Typography component used to structure sections.
 */
export default function SectionTitle({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    marginBottom: 16,
    marginTop: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.black,
    letterSpacing: -0.6,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.text,
    marginTop: 6,
    lineHeight: 20,
  },
});
