import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Alert } from 'react-native';
import { Colors } from '../constants/colors';
import ScreenHeader from '../components/ScreenHeader';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import SelectionCard from '../components/SelectionCard';
import AppCard from '../components/AppCard';
import StepIndicator from '../components/StepIndicator';

export default function LocationScreen({ navigation }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleUseLocation = () => {
    setSelectedOption('gps');
    Alert.alert(
      "Location Permission",
      "Agricola AI will use your device's GPS to find climate characteristics.",
      [
        { text: "Cancel", style: "cancel", onPress: () => setSelectedOption(null) },
        { text: "Allow", onPress: () => navigation.navigate('FarmType') }
      ]
    );
  };

  const handleSearchLocation = () => {
    setSelectedOption('search');
    Alert.alert(
      "Search Location",
      "Location search query overlay will appear here.",
      [
        { text: "Cancel", style: "cancel", onPress: () => setSelectedOption(null) },
        { text: "Select", onPress: () => navigation.navigate('FarmType') }
      ]
    );
  };

  const handleNext = () => {
    if (selectedOption) {
      navigation.navigate('FarmType');
    } else {
      Alert.alert("Selection Required", "Please choose a location input option to continue.");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      
      <ScreenHeader 
        title="Where is your farm?"
        subtitle="Allow location access so we can understand your local climate."
        step={2}
        totalSteps={5}
        onBack={() => navigation.goBack()}
      />

      <View style={styles.content}>
        <AppCard style={styles.cardContainer}>
          <SelectionCard 
            icon="📍"
            title="Use Current Location"
            subtitle="Find climate statistics using GPS"
            selected={selectedOption === 'gps'}
            onPress={handleUseLocation}
          />

          <View style={styles.dividerRow}>
            <View style={styles.divider} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.divider} />
          </View>

          <SelectionCard 
            icon="🔍"
            title="Search Location"
            subtitle="Type your town or county manually"
            selected={selectedOption === 'search'}
            onPress={handleSearchLocation}
          />
        </AppCard>
      </View>

      <View style={styles.footer}>
        <StepIndicator currentStep={2} totalSteps={5} />
        <View style={styles.buttonRow}>
          <View style={styles.flexButton}>
            <SecondaryButton 
              title="Back" 
              onPress={() => navigation.goBack()} 
            />
          </View>
          <View style={styles.flexSpacer} />
          <View style={styles.flexButton}>
            <PrimaryButton 
              title="Next" 
              onPress={handleNext} 
            />
          </View>
        </View>
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
  cardContainer: {
    width: '100%',
    padding: 16,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  orText: {
    marginHorizontal: 12,
    fontSize: 13,
    fontWeight: '700',
    color: Colors.text,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 36,
    width: '100%',
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  flexButton: {
    flex: 1,
    alignItems: 'center',
  },
  flexSpacer: {
    width: 12,
  },
});
