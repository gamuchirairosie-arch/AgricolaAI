import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';
import SectionTitle from './SectionTitle';

export default function WhyUsSection() {
  const points = [
    { emoji: '🧠', title: 'AI Powered', desc: 'Predictive intelligence model that maps out ideal crop matches using historical yields.' },
    { emoji: '📍', title: 'Hyper Personalized', desc: 'Custom recommendations based on precise farm boundaries, not broad regions.' },
    { emoji: '☁', title: 'Climate Forecasts', desc: 'Real-time integrations with localized moisture, humidity, and temperature data.' },
    { emoji: '🌾', title: 'Built for Commercial Farmers', desc: 'Scalable agricultural metrics matching commercial standards and planning.' },
  ];

  return (
    <View style={styles.container}>
      <SectionTitle 
        title="Why Agricola AI?" 
        subtitle="Designed from the ground up to combine data science with local agriculture."
      />
      <View style={styles.grid}>
        {points.map((pt) => (
          <View key={pt.title} style={styles.card}>
            <View style={styles.emojiBg}>
              <Text style={styles.emoji}>{pt.emoji}</Text>
            </View>
            <Text style={styles.title}>{pt.title}</Text>
            <Text style={styles.desc}>{pt.desc}</Text>
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
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.02,
    shadowRadius: 8,
    elevation: 1,
  },
  emojiBg: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  emoji: {
    fontSize: 22,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.black,
    marginBottom: 6,
    letterSpacing: -0.2,
  },
  desc: {
    fontSize: 12,
    color: Colors.text,
    lineHeight: 18,
  },
});
