import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Colors } from '../constants/colors';

export default function Header({ onMenuPress, onGetStartedPress }) {
  const menuItems = [
    { label: 'Home', key: 'home' },
    { label: 'Problem', key: 'problem' },
    { label: 'Solution', key: 'solution' },
    { label: 'Features', key: 'features' },
    { label: 'Impact', key: 'impact' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>🌾</Text>
          <Text style={styles.brandName}>Agricola AI</Text>
        </View>
        <TouchableOpacity style={styles.ctaButton} onPress={onGetStartedPress} activeOpacity={0.85}>
          <Text style={styles.ctaText}>Get Started</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuWrapper}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.menuRow}
        >
          {menuItems.map((item) => (
            <TouchableOpacity 
              key={item.key} 
              style={styles.menuItem} 
              onPress={() => onMenuPress(item.key)}
              activeOpacity={0.7}
            >
              <Text style={styles.menuText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
    paddingTop: 8,
    paddingBottom: 4,
    width: '100%',
    zIndex: 10,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 6,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    fontSize: 22,
    marginRight: 6,
  },
  brandName: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.primary,
    letterSpacing: -0.5,
  },
  ctaButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  ctaText: {
    color: Colors.white,
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: -0.1,
  },
  menuWrapper: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#F0F0F0',
  },
  menuRow: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  menuItem: {
    paddingHorizontal: 14,
    paddingVertical: 4,
  },
  menuText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
  },
});
