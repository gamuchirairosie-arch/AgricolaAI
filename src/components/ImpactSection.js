import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';
import SectionTitle from './SectionTitle';

export default function ImpactSection() {
  const impacts = [
    { value: '+35%', label: 'Better Harvests', emoji: '🌾', desc: 'Average increase in crop yield tonnage.' },
    { value: '98%', label: 'Smarter Decisions', emoji: '📈', desc: 'Accuracy rate in climate-matching models.' },
    { value: '4x', label: 'Climate Resilience', emoji: '🌍', desc: 'Reduction in crop loss risk from extreme weather.' },
    { value: '+2.5x', label: 'Increased Productivity', emoji: '💰', desc: 'Multiplied farmer return-on-investment rate.' },
  ];

  return (
    <View style={styles.container}>
      <SectionTitle 
        title="Expected Impact" 
        subtitle="Measurable progress toward a climate-resilient and sustainable food supply."
      />
      <View style={styles.grid}>
        {impacts.map((imp) => (
          <View key={imp.label} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.emoji}>{imp.emoji}</Text>
              <Text style={styles.value}>{imp.value}</Text>
            </View>
            <Text style={styles.label}>{imp.label}</Text>
            <Text style={styles.desc}>{imp.desc}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
    width: '100%',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  card: {
    width: '48%',
    backgroundColor: Colors.white,
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#EBEBEB',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.02,
    shadowRadius: 10,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  emoji: {
    fontSize: 20,
  },
  value: {
    fontSize: 22,
    fontWeight: '900',
    color: Colors.primary,
    letterSpacing: -0.5,
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.black,
    marginBottom: 4,
    letterSpacing: -0.2,
  },
  desc: {
    fontSize: 11,
    color: Colors.text,
    lineHeight: 16,
  },
});
