import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';
import SectionTitle from './SectionTitle';

export default function AboutSection() {
  return (
    <View style={styles.container}>
      <SectionTitle 
        title="About Agricola AI" 
      />
      <View style={styles.contentCard}>
        <Text style={styles.description}>
          A simple AI assistant that helps farmers choose the right crops using location and climate insights.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    width: '100%',
  },
  contentCard: {
    backgroundColor: Colors.white,
    borderRadius: 18,
    padding: 24,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },
  description: {
    fontSize: 15,
    color: Colors.text,
    lineHeight: 24,
  },
});
