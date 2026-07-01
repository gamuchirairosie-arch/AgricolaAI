import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';

/**
 * RecommendationCard
 *
 * Displays the top AI-matched crop recommendation and key stats.
 * API-ready: replace the `data` prop with data from a /recommendation/top endpoint.
 *
 * Props:
 *   data  { crop, matchScore, yieldEstimate, daysToHarvest, status }
 */
export default function RecommendationCard({ data }) {
  return (
    <View style={styles.card}>
      {/* Status badge */}
      <View style={styles.statusRow}>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>⭐ {data.status}</Text>
        </View>
      </View>

      {/* Main crop headline */}
      <Text style={styles.cropName}>{data.crop}</Text>
      <Text style={styles.matchScore}>{data.matchScore}</Text>

      {/* Stat pills row */}
      <View style={styles.statRow}>
        <View style={styles.statPill}>
          <Text style={styles.statIcon}>🌾</Text>
          <Text style={styles.statValue}>{data.yieldEstimate}</Text>
        </View>
        <View style={styles.statPill}>
          <Text style={styles.statIcon}>📅</Text>
          <Text style={styles.statValue}>{data.daysToHarvest}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
    padding: 22,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 14,
    elevation: 4,
  },
  statusRow: {
    marginBottom: 10,
  },
  statusBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  statusText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '700',
  },
  cropName: {
    fontSize: 28,
    fontWeight: '900',
    color: Colors.white,
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  matchScore: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.75)',
    fontWeight: '600',
    marginBottom: 18,
  },
  statRow: {
    flexDirection: 'row',
    gap: 10,
  },
  statPill: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    gap: 6,
  },
  statIcon: {
    fontSize: 14,
  },
  statValue: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.white,
    flex: 1,
  },
});
