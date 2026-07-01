import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import { Colors } from '../constants/colors';
import ScreenHeader from '../components/ScreenHeader';
import PrimaryButton from '../components/PrimaryButton';
import SelectionCard from '../components/SelectionCard';
import StepIndicator from '../components/StepIndicator';
import { crops } from '../data/crops';

export default function CropSelectionScreen({ navigation }) {
  const [selectedCrop, setSelectedCrop] = useState(null);

  const handleContinue = () => {
    if (selectedCrop) {
      navigation.navigate('AIProcessing');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      
      <ScreenHeader 
        title="What would you like to grow?"
        subtitle="We will cross-reference this crop choice against local climate metrics."
        step={4}
        totalSteps={5}
        onBack={() => navigation.goBack()}
      />

      <ScrollView 
        contentContainerStyle={styles.scrollContainer} 
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.grid}>
          {crops.map((crop) => (
            <SelectionCard 
              key={crop.id}
              icon={crop.emoji}
              title={crop.name}
              subtitle={crop.subtitle}
              selected={selectedCrop === crop.id}
              onPress={() => setSelectedCrop(crop.id)}
            />
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <StepIndicator currentStep={4} totalSteps={5} />
        <PrimaryButton 
          title="Continue" 
          onPress={handleContinue}
          disabled={!selectedCrop}
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
  scrollContainer: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    flexGrow: 1,
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
