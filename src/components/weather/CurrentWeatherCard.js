import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/colors';

/**
 * CurrentWeatherCard
 *
 * Displays the hero weather summary for the farmer's location:
 * large temperature, conditions label, feels-like, and daily high/low.
 *
 * Used on: WeatherScreen (top of page, most prominent card).
 *
 * TODO (API): Replace `data` prop with live response from:
 *   GET /api/weather/current?lat={lat}&lng={lng}
 *   Map: { temp, feels_like, description, icon, daily.max, daily.min }
 *
 * Props:
 *   data     { temperature, feelsLike, conditions, icon, high, low }
 *   location { name, country, lastUpdated }
 */
export default function CurrentWeatherCard({ data, location }) {
  return (
    <View style={styles.card}>
      {/* Location row */}
      <View style={styles.locationRow}>
        <Text style={styles.locationPin}>📍</Text>
        <Text style={styles.locationName}>{location.name}, {location.country}</Text>
      </View>

      {/* Main temperature + icon */}
      <View style={styles.mainRow}>
        <Text style={styles.icon}>{data.icon}</Text>
        <View>
          <Text style={styles.tempText}>{data.temperature}°C</Text>
          <Text style={styles.conditions}>{data.conditions}</Text>
        </View>
      </View>

      {/* Secondary stats */}
      <View style={styles.statsRow}>
        <View style={styles.statChip}>
          <Text style={styles.statChipLabel}>Feels like</Text>
          <Text style={styles.statChipValue}>{data.feelsLike}°C</Text>
        </View>
        <View style={styles.statChip}>
          <Text style={styles.statChipLabel}>High</Text>
          <Text style={styles.statChipValue}>{data.high}°</Text>
        </View>
        <View style={styles.statChip}>
          <Text style={styles.statChipLabel}>Low</Text>
          <Text style={styles.statChipValue}>{data.low}°</Text>
        </View>
      </View>

      {/* Last updated */}
      <Text style={styles.lastUpdated}>Updated: {location.lastUpdated}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.primary,
    borderRadius: 24,
    padding: 24,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 6,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    gap: 6,
  },
  locationPin: {
    fontSize: 14,
  },
  locationName: {
    fontSize: 14,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.85)',
  },
  mainRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 20,
  },
  icon: {
    fontSize: 64,
  },
  tempText: {
    fontSize: 52,
    fontWeight: '900',
    color: Colors.white,
    letterSpacing: -2,
    lineHeight: 58,
  },
  conditions: {
    fontSize: 16,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.8)',
    marginTop: 2,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 14,
  },
  statChip: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  statChipLabel: {
    fontSize: 10,
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '500',
    marginBottom: 2,
  },
  statChipValue: {
    fontSize: 15,
    fontWeight: '800',
    color: Colors.white,
  },
  lastUpdated: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'right',
  },
});
