import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/colors';

/**
 * WeatherAlert
 *
 * Renders a single weather warning with severity-based visual styling.
 * Supports 'warning' and 'info' severity levels (extendable to 'danger').
 *
 * Used on: WeatherScreen alerts section.
 *
 * TODO (API): Replace `data` prop with entries from:
 *   GET /api/weather/alerts?lat={lat}&lng={lng}
 *   Map: { id, severity, title, description }
 *
 * Props:
 *   data  { id, severity, icon, title, message }
 */
export default function WeatherAlert({ data }) {
  const isWarning = data.severity === 'warning';

  return (
    <View style={[styles.card, isWarning && styles.cardWarning]}>
      <View style={[styles.iconBg, isWarning && styles.iconBgWarning]}>
        <Text style={styles.icon}>{data.icon}</Text>
      </View>
      <View style={styles.textBlock}>
        <Text style={[styles.title, isWarning && styles.titleWarning]}>
          {data.title}
        </Text>
        <Text style={styles.message}>{data.message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFF8E1',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#FFE082',
    marginBottom: 10,
    gap: 14,
  },
  cardWarning: {
    backgroundColor: '#FFF3E0',
    borderColor: '#FFB74D',
  },
  iconBg: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#FFE082',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  iconBgWarning: {
    backgroundColor: '#FFB74D',
  },
  icon: {
    fontSize: 18,
  },
  textBlock: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '800',
    color: '#E65100',
    marginBottom: 4,
    letterSpacing: -0.2,
  },
  titleWarning: {
    color: '#BF360C',
  },
  message: {
    fontSize: 12,
    color: '#795548',
    lineHeight: 18,
  },
});
