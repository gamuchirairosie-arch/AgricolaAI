import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Colors } from '../constants/colors';
import ScreenHeader from '../components/ScreenHeader';
import LoadingStep from '../components/LoadingStep';
import StepIndicator from '../components/StepIndicator';

export default function AIProcessingScreen({ navigation }) {
  const [step1, setStep1] = useState('loading');
  const [step2, setStep2] = useState('waiting');
  const [step3, setStep3] = useState('waiting');
  const [step4, setStep4] = useState('waiting');

  useEffect(() => {
    const t1 = setTimeout(() => {
      setStep1('completed');
      setStep2('loading');
    }, 1500);

    const t2 = setTimeout(() => {
      setStep2('completed');
      setStep3('loading');
    }, 3000);

    const t3 = setTimeout(() => {
      setStep3('completed');
      setStep4('loading');
    }, 4500);

    const t4 = setTimeout(() => {
      setStep4('completed');
    }, 6000);

    const t5 = setTimeout(() => {
      navigation.navigate('FarmAssistant');
    }, 7200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      
      <ScreenHeader 
        title="Analyzing your farm..."
        subtitle="Our AI engine is compiling localization weather tables."
        step={5}
        totalSteps={5}
        onBack={() => navigation.goBack()}
      />

      <View style={styles.content}>
        {/* Large AI Robot emoji display */}
        <View style={styles.illustrationContainer}>
          <View style={styles.ringOuter}>
            <View style={styles.ringInner}>
              <Text style={styles.aiEmoji}>🤖</Text>
            </View>
          </View>
        </View>

        <View style={styles.stepsContainer}>
          <LoadingStep 
            icon="📍"
            title="Detecting location"
            status={step1}
          />
          <LoadingStep 
            icon="☁"
            title="Analyzing climate"
            status={step2}
          />
          <LoadingStep 
            icon="🌱"
            title="Finding crops"
            status={step3}
          />
          <LoadingStep 
            icon="🧠"
            title="Building recommendation"
            status={step4}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <StepIndicator currentStep={5} totalSteps={5} />
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
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustrationContainer: {
    marginBottom: 24,
  },
  ringOuter: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 2,
    borderColor: 'rgba(46, 125, 50, 0.15)',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ringInner: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 3,
  },
  aiEmoji: {
    fontSize: 40,
  },
  stepsContainer: {
    width: '100%',
    maxWidth: 360,
  },
  footer: {
    paddingBottom: 36,
    alignItems: 'center',
  },
});
