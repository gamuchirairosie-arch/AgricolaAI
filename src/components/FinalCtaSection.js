import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';
import PrimaryButton from './PrimaryButton';

export default function FinalCtaSection({ onCtaPress }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Ready to grow smarter?</Text>
        <Text style={styles.subtitle}>Start using Agricola AI today.</Text>
        
        <View style={styles.btnContainer}>
          <PrimaryButton 
            title="Get Started" 
            onPress={onCtaPress} 
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
    width: '100%',
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 24,
    paddingVertical: 36,
    paddingHorizontal: 24,
    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 16,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#EBEBEB',
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: Colors.black,
    marginBottom: 8,
    textAlign: 'center',
    letterSpacing: -0.6,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 24,
  },
  btnContainer: {
    width: '100%',
    alignItems: 'center',
  },
});
