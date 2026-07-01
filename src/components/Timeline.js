import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';
import SectionTitle from './SectionTitle';

export default function Timeline() {
  const steps = [
    { number: '1', title: 'Choose Your Farm', description: 'Select your field location on our smart interactive system.' },
    { number: '2', title: 'Analyze Climate', description: 'Our AI engine aggregates geographic & historic climate records.' },
    { number: '3', title: 'Receive Recommendations', description: 'Get a targeted report highlighting crop options & planting cycles.' },
    { number: '4', title: 'Grow with Confidence', description: 'Plant your seeds backed by real-time climate insight.' },
  ];

  return (
    <View style={styles.container}>
      <SectionTitle 
        title="How It Works" 
        subtitle="Four simple stages to start your climate-resilient farming journey."
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
                <Text style={styles.stepTitle}>{step.title}</Text>
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
    marginVertical: 16,
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
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 6,
    elevation: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.black,
    marginBottom: 4,
  },
  stepDescription: {
    fontSize: 13,
    color: Colors.text,
    lineHeight: 18,
  },
});
