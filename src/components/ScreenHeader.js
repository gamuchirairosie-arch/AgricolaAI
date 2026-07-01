import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/colors';
import ProgressBar from './ProgressBar';

/**
 * ScreenHeader - Top header for onboarding screens.
 * Contains back button triggers, page titles, and integrated progress indicators.
 */
export default function ScreenHeader({ title, subtitle, step, totalSteps, onBack }) {
  const showProgress = typeof step === 'number' && typeof totalSteps === 'number';
  const progressPercent = showProgress ? (step / totalSteps) * 100 : 0;

  return (
    <View style={styles.container}>
      <View style={styles.topNavigation}>
        {onBack ? (
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={onBack} 
            activeOpacity={0.7}
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
          >
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.backButtonPlaceholder} />
        )}
        
        {showProgress && (
          <Text style={styles.stepText}>Step {step} of {totalSteps}</Text>
        )}
        
        <View style={styles.backButtonPlaceholder} />
      </View>

      {showProgress && (
        <View style={styles.progressContainer}>
          <ProgressBar progress={progressPercent} />
        </View>
      )}

      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 16,
    backgroundColor: Colors.background,
  },
  topNavigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    height: 40,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EBEBEB',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  backArrow: {
    fontSize: 18,
    color: Colors.black,
    lineHeight: 22,
  },
  backButtonPlaceholder: {
    width: 40,
  },
  stepText: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.text,
  },
  progressContainer: {
    marginBottom: 20,
    width: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.black,
    letterSpacing: -0.6,
    lineHeight: 34,
  },
  subtitle: {
    fontSize: 15,
    color: Colors.text,
    marginTop: 6,
    lineHeight: 22,
  },
});
