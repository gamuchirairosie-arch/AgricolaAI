import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/colors';

/**
 * WeatherMetric
 *
 * A single weather measurement tile used in the metrics grid.
 * Displays icon, value, label, and a contextual status description.
 *
 * Used on: WeatherScreen metrics grid (humidity, wind, rain, UV, pressure).
 *
 * TODO (API): Replace `data` prop entries with mapped values from:
 *   GET /api/weather/current → humidity, wind_speed, precipitation_prob, uv_index
 *
 * Props:
 *   data  { icon, label, value, status }
 */
export default function WeatherMetric({ data }) {
  return (
    <View style={styles.cell}>
      <Text style={styles.icon}>{data.icon}</Text>
      <Text style={styles.value}>{data.value}</Text>
      <Text style={styles.label}>{data.label}</Text>
      <Text style={styles.status}>{data.status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cell: {
    width: '48%',
    backgroundColor: Colors.white,
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#EBEBEB',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 1,
    alignItems: 'flex-start',
  },
  icon: {
    fontSize: 22,
    marginBottom: 8,
  },
  value: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.black,
    letterSpacing: -0.5,
    marginBottom: 2,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  status: {
    fontSize: 11,
    color: Colors.primary,
    fontWeight: '500',
  },
});
