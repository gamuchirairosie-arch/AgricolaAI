import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import { Colors } from '../constants/colors';
import ScreenHeader from '../components/ScreenHeader';
import PrimaryButton from '../components/PrimaryButton';
import SelectionCard from '../components/SelectionCard';
import StepIndicator from '../components/StepIndicator';
import { farmTypes } from '../data/farmTypes';

export default function FarmTypeScreen({ navigation }) {
  const [selectedType, setSelectedType] = useState(null);

  const handleContinue = () => {
    if (selectedType) {
      navigation.navigate('CropSelection');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      
      <ScreenHeader 
        title="What type of farming do you do?"
        subtitle="Select the classification that matches your primary agricultural focus."
        step={3}
        totalSteps={5}
        onBack={() => navigation.goBack()}
      />

      <View style={styles.content}>
        <View style={styles.grid}>
          {farmTypes.map((type) => (
            <SelectionCard 
              key={type.id}
              icon={type.emoji}
              title={type.title}
              subtitle={type.subtitle}
              selected={selectedType === type.id}
              onPress={() => setSelectedType(type.id)}
            />
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <StepIndicator currentStep={3} totalSteps={5} />
        <PrimaryButton 
          title="Continue" 
          onPress={handleContinue}
          disabled={!selectedType}
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
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  grid: {
    width: '100%',
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 36,
    alignItems: 'center',
    width: '100%',
  },
});
