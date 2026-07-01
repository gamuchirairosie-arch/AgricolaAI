import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/colors';

/**
 * ForecastCard
 *
 * Displays a single day's forecast inside the horizontal 7-day strip.
 *
 * Used on: WeatherScreen 7-day forecast row.
 *
 * TODO (API): Replace `data` prop with a single item from:
 *   GET /api/weather/forecast?days=7 → daily[] array element
 *   Map: { day: weekday_abbr, icon, high: temp_max, low: temp_min, rain: precip_prob }
 *
 * Props:
 *   data     { day, icon, high, low, rain }
 *   isToday  boolean – highlights this card as the current day
 */
export default function ForecastCard({ data, isToday }) {
  return (
    <View style={[styles.card, isToday && styles.cardToday]}>
      <Text style={[styles.day, isToday && styles.dayToday]}>
        {isToday ? 'Today' : data.day}
      </Text>
      <Text style={styles.icon}>{data.icon}</Text>
      <Text style={[styles.high, isToday && styles.highToday]}>{data.high}°</Text>
      <Text style={styles.low}>{data.low}°</Text>
      <View style={[styles.rainPill, isToday && styles.rainPillToday]}>
        <Text style={[styles.rainText, isToday && styles.rainTextToday]}>
          {data.rain}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 12,
    marginRight: 10,
    minWidth: 72,
    borderWidth: 1,
    borderColor: '#EBEBEB',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 5,
    elevation: 1,
  },
  cardToday: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    shadowColor: Colors.primary,
    shadowOpacity: 0.18,
    elevation: 4,
  },
  day: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 8,
  },
  dayToday: {
    color: 'rgba(255,255,255,0.8)',
  },
  icon: {
    fontSize: 24,
    marginBottom: 8,
  },
  high: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.black,
    letterSpacing: -0.3,
  },
  highToday: {
    color: Colors.white,
  },
  low: {
    fontSize: 13,
    fontWeight: '500',
    color: Colors.text,
    marginBottom: 8,
  },
  rainPill: {
    backgroundColor: '#E8F5E9',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  rainPillToday: {
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  rainText: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.primary,
  },
  rainTextToday: {
    color: Colors.white,
  },
});
