import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';

/**
 * FarmSummaryCard
 *
 * Displays key farm profile metadata in a 2x2 metric grid.
 * API-ready: replace the `data` prop with data from a /farm/profile endpoint.
 *
 * Props:
 *   data  { name, size, type, soilType, lastUpdated }
 */
export default function FarmSummaryCard({ data }) {
  const metrics = [
    { label: 'Area',      value: data.size,      icon: '📐' },
    { label: 'Type',      value: data.type,      icon: '🚜' },
    { label: 'Soil',      value: data.soilType,  icon: '🌍' },
    { label: 'Updated',   value: data.lastUpdated, icon: '🕐' },
  ];

  return (
    <View style={styles.card}>
      {/* Card heading */}
      <View style={styles.heading}>
        <View style={styles.iconBg}>
          <Text style={styles.headingIcon}>🏡</Text>
        </View>
        <View>
          <Text style={styles.farmName}>{data.name}</Text>
          <Text style={styles.headingSubLabel}>Farm Profile</Text>
        </View>
      </View>

      {/* Metric grid */}
      <View style={styles.grid}>
        {metrics.map((m) => (
          <View key={m.label} style={styles.metricCell}>
            <Text style={styles.metricIcon}>{m.icon}</Text>
            <Text style={styles.metricValue}>{m.value}</Text>
            <Text style={styles.metricLabel}>{m.label}</Text>
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
    marginBottom: 20,
  },
  iconBg: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  headingIcon: {
    fontSize: 22,
  },
  farmName: {
    fontSize: 17,
    fontWeight: '800',
    color: Colors.black,
    letterSpacing: -0.3,
  },
  headingSubLabel: {
    fontSize: 12,
    color: Colors.text,
    marginTop: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  metricCell: {
    width: '48%',
    backgroundColor: Colors.background,
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  metricIcon: {
    fontSize: 18,
    marginBottom: 6,
  },
  metricValue: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.black,
    marginBottom: 2,
  },
  metricLabel: {
    fontSize: 11,
    color: Colors.text,
  },
});
