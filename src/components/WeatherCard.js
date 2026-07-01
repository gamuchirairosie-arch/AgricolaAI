import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';

/**
 * WeatherCard
 *
 * Shows current weather conditions in a clean metrics grid.
 * API-ready: replace the `data` prop with data from a /weather/current endpoint.
 *
 * Props:
 *   data  { temp, humidity, rainfallChance, windSpeed, conditions }
 */
export default function WeatherCard({ data }) {
  const metrics = [
    { icon: '🌡️', label: 'Temperature', value: data.temp },
    { icon: '💧', label: 'Humidity',    value: data.humidity },
    { icon: '🌧️', label: 'Rainfall',   value: data.rainfallChance },
    { icon: '💨', label: 'Wind',        value: data.windSpeed },
  ];

  return (
    <View style={styles.card}>
      <View style={styles.heading}>
        <Text style={styles.headingEmoji}>☁️</Text>
        <View>
          <Text style={styles.headingTitle}>Local Weather</Text>
          <Text style={styles.headingSubtitle}>{data.conditions}</Text>
        </View>
      </View>
      <View style={styles.grid}>
        {metrics.map((m) => (
          <View key={m.label} style={styles.cell}>
            <Text style={styles.cellIcon}>{m.icon}</Text>
            <Text style={styles.cellValue}>{m.value}</Text>
            <Text style={styles.cellLabel}>{m.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#EBEBEB',
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    gap: 12,
  },
  headingEmoji: {
    fontSize: 28,
  },
  headingTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.black,
    letterSpacing: -0.3,
  },
  headingSubtitle: {
    fontSize: 12,
    color: Colors.text,
    marginTop: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cell: {
    width: '48%',
    backgroundColor: '#F0F9F0',
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  cellIcon: {
    fontSize: 20,
    marginBottom: 6,
  },
  cellValue: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.black,
    marginBottom: 2,
  },
  cellLabel: {
    fontSize: 11,
    color: Colors.text,
  },
});
