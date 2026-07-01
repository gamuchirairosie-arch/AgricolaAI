import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Colors } from '../constants/colors';
import ScreenHeader from '../components/ScreenHeader';
import PrimaryButton from '../components/PrimaryButton';
import StepIndicator from '../components/StepIndicator';

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      
      <ScreenHeader 
        title="Welcome to Agricola AI 👋"
        subtitle="Let's get to know your farm."
        step={1}
        totalSteps={5}
        onBack={() => navigation.navigate('Home')}
      />

      <View style={styles.content}>
        {/* Large Illustration Placeholder */}
        <View style={styles.illustrationContainer}>
          <View style={styles.circleBg}>
            <View style={styles.leafIconBg}>
              <Text style={styles.leafEmoji}>🌾</Text>
            </View>
            <View style={[styles.floatingSparkle, styles.sparkle1]}>
              <Text style={styles.sparkleEmoji}>✨</Text>
            </View>
            <View style={[styles.floatingSparkle, styles.sparkle2]}>
              <Text style={styles.sparkleEmoji}>🌱</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <StepIndicator currentStep={1} totalSteps={5} />
        <PrimaryButton 
          title="Get Started" 
          onPress={() => navigation.navigate('Location')} 
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  illustrationContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleBg: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 4,
  },
  leafIconBg: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  leafEmoji: {
    fontSize: 48,
  },
  floatingSparkle: {
    position: 'absolute',
    backgroundColor: Colors.white,
    padding: 8,
    borderRadius: 12,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  sparkle1: {
    top: 10,
    left: -10,
  },
  sparkle2: {
    bottom: 20,
    right: -10,
  },
  sparkleEmoji: {
    fontSize: 18,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 36,
    alignItems: 'center',
    width: '100%',
  },
});
