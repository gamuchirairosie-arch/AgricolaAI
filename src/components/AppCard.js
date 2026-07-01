import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../constants/colors';

/**
 * AppCard - A generic reusable card container.
 * Enforces uniform padding, border-radius, and shadows.
 */
export default function AppCard({ children, style }) {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 12,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#EBEBEB',
  },
});
