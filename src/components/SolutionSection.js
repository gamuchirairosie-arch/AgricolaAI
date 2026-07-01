import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';
import SectionTitle from './SectionTitle';

export default function SolutionSection() {
  const steps = [
    { number: '1', emoji: '📍', title: 'Farm Location', description: 'Pins crop requirements to your specific soil characteristics and boundaries.' },
    { number: '2', emoji: '☁', title: 'Climate Analysis', description: 'Calculates local weather forecasts, historic rain patterns, and moisture levels.' },
    { number: '3', emoji: '🤖', title: 'AI Recommendation', description: 'Runs comparative algorithms to find the crops that maximize growth and revenue.' },
    { number: '4', emoji: '🌾', title: 'Better Harvest', description: 'Yield optimization via customized crop management calendars.' },
  ];

  return (
    <View style={styles.container}>
      <SectionTitle 
        title="Our Solution" 
        subtitle="A logical progression from location data to precision yield recommendations."
      />
      <View style={styles.timelineContainer}>
        {steps.map((step, index) => (
          <View key={step.number} style={styles.stepWrapper}>
            <View style={styles.leftColumn}>
              <View style={styles.numberBadge}>
                <Text style={styles.numberText}>{step.number}</Text>
              </View>
              {index < steps.length - 1 && <View style={styles.connectorLine} />}
            </View>
            <View style={styles.rightColumn}>
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <Text style={styles.emoji}>{step.emoji}</Text>
                  <Text style={styles.stepTitle}>{step.title}</Text>
                </View>
                <Text style={styles.stepDescription}>{step.description}</Text>
              </View>
            </View>
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
  timelineContainer: {
    paddingLeft: 4,
    marginTop: 8,
  },
  stepWrapper: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  leftColumn: {
    alignItems: 'center',
    marginRight: 16,
  },
  numberBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  numberText: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: 14,
  },
  connectorLine: {
    width: 2,
    flex: 1,
    backgroundColor: Colors.secondary,
    marginVertical: 4,
    zIndex: 1,
  },
  rightColumn: {
    flex: 1,
    paddingBottom: 24,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.02,
    shadowRadius: 8,
    elevation: 1,
    borderWidth: 1,
    borderColor: '#EBEBEB',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  emoji: {
    fontSize: 18,
    marginRight: 8,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.black,
  },
  stepDescription: {
    fontSize: 13,
    color: Colors.text,
    lineHeight: 18,
  },
});
