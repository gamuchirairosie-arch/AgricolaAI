import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/colors';

/**
 * DashboardHeader
 *
 * Displays a personalized greeting, farm location, and a quick weather summary.
 * API-ready: replace the `header` prop with data from a /user/profile endpoint.
 *
 * Props:
 *   data  { greeting, location, weatherSummary }
 *   onNotificationPress  function
 */
export default function DashboardHeader({ data, onNotificationPress, onBack }) {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        {onBack && (
          <TouchableOpacity style={styles.backBtn} onPress={onBack} activeOpacity={0.7}>
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
        )}
        <View style={styles.textBlock}>
          <Text style={styles.greeting}>{data.greeting}</Text>
          <View style={styles.locationRow}>
            <Text style={styles.locationPin}>📍</Text>
            <Text style={styles.locationText}>{data.location}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notificationBtn} onPress={onNotificationPress} activeOpacity={0.7}>
          <Text style={styles.notificationIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      {/* Quick weather pill */}
      <View style={styles.weatherPill}>
        <Text style={styles.weatherPillEmoji}>🌤️</Text>
        <Text style={styles.weatherPillText}>{data.weatherSummary}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: Colors.background,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  textBlock: {
    flex: 1,
  },
  greeting: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.black,
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationPin: {
    fontSize: 13,
    marginRight: 4,
  },
  locationText: {
    fontSize: 13,
    color: Colors.text,
    fontWeight: '500',
  },
  notificationBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
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
    marginLeft: 12,
  },
  notificationIcon: {
    fontSize: 16,
  },
  weatherPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 20,
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#EBEBEB',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 3,
    elevation: 1,
  },
  weatherPillEmoji: {
    fontSize: 14,
    marginRight: 6,
  },
  weatherPillText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.text,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
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
    marginRight: 12,
  },
  backIcon: {
    fontSize: 18,
    color: Colors.primary,
    fontWeight: 'bold',
  },
});
