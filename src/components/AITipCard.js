import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';

/**
 * AITipCard
 *
 * Renders a highlighted farming tip from the AI engine.
 * API-ready: replace the `data` prop with data from a /recommendation/tip endpoint.
 *
 * Props:
 *   data  { title, content }
 */
export default function AITipCard({ data }) {
  return (
    <View style={styles.card}>
      <View style={styles.iconRow}>
        <View style={styles.iconBg}>
          <Text style={styles.icon}>🧠</Text>
        </View>
        <Text style={styles.label}>AI Farming Tip</Text>
      </View>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.content}>{data.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F0FFF1',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1.5,
    borderColor: Colors.secondary,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 1,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 10,
  },
  iconBg: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 18,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.black,
    letterSpacing: -0.3,
    marginBottom: 8,
  },
  content: {
    fontSize: 13,
    color: Colors.text,
    lineHeight: 20,
  },
});
