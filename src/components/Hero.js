import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';
import PrimaryButton from './PrimaryButton';

export default function Hero({ onCtaPress }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>
        Grow Smarter.{'\n'}
        <Text style={styles.accentText}>Harvest Better.</Text>
      </Text>
      
      <Text style={styles.subtitle}>
        Agricola AI helps farmers decide what, where and when to grow using AI, GPS and climate intelligence.
      </Text>

      <View style={styles.btnContainer}>
        <PrimaryButton 
          title="🌱 Start Farming Smarter" 
          onPress={onCtaPress} 
        />
      </View>

      {/* Modern Agricultural Vector-style Illustration Placeholder */}
      <View style={styles.illustrationContainer}>
        <View style={styles.circleBg}>
          {/* Accent orbits */}
          <View style={styles.orbitRing} />
          
          {/* Main center graphic */}
          <View style={styles.centerGraphic}>
            <Text style={styles.mainEmoji}>🌾</Text>
          </View>
          
          {/* Interactive floating badges representing AI/GPS/Weather */}
          <View style={[styles.floatingBadge, styles.badgeGPS]}>
            <Text style={styles.badgeEmoji}>📍</Text>
            <Text style={styles.badgeLabel}>GPS Active</Text>
          </View>

          <View style={[styles.floatingBadge, styles.badgeClimate]}>
            <Text style={styles.badgeEmoji}>🌦️</Text>
            <Text style={styles.badgeLabel}>24°C • Moist</Text>
          </View>

          <View style={[styles.floatingBadge, styles.badgeAI]}>
            <Text style={styles.badgeEmoji}>🤖</Text>
            <Text style={styles.badgeLabel}>98% Match</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 36,
    alignItems: 'center',
    width: '100%',
  },
  headline: {
    fontSize: 40,
    fontWeight: '900',
    color: Colors.black,
    textAlign: 'center',
    lineHeight: 46,
    letterSpacing: -1.2,
    marginBottom: 16,
  },
  accentText: {
    color: Colors.primary,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.text,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 28,
    paddingHorizontal: 12,
  },
  btnContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 40,
  },
  illustrationContainer: {
    width: '100%',
    height: 260,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  circleBg: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  orbitRing: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 1.5,
    borderColor: 'rgba(46, 125, 50, 0.15)',
    borderStyle: 'dashed',
  },
  centerGraphic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 4,
  },
  mainEmoji: {
    fontSize: 48,
  },
  floatingBadge: {
    position: 'absolute',
    backgroundColor: Colors.white,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#EBEBEB',
  },
  badgeEmoji: {
    fontSize: 16,
    marginRight: 6,
  },
  badgeLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.black,
  },
  badgeGPS: {
    top: -10,
    left: -20,
  },
  badgeClimate: {
    bottom: 10,
    right: -40,
  },
  badgeAI: {
    bottom: 20,
    left: -30,
  },
});
