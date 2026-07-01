import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../constants/colors';

/**
 * StepIndicator - Progress dot indicators showing step positions.
 */
export default function StepIndicator({ currentStep, totalSteps }) {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  return (
    <View style={styles.container}>
      {steps.map((step) => {
        const isActive = step === currentStep;
        return (
          <View
            key={step}
            style={[
              styles.dot,
              isActive && styles.dotActive
            ]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 4,
  },
  dotActive: {
    width: 24,
    backgroundColor: Colors.primary,
  },
});
