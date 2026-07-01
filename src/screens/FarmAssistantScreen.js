import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Text,
  Alert,
} from 'react-native';
import { Colors } from '../constants/colors';
import { dashboardData } from '../data/dashboard';

// Dashboard-specific components
import DashboardHeader from '../components/DashboardHeader';
import FarmSummaryCard from '../components/FarmSummaryCard';
import RecommendationCard from '../components/RecommendationCard';
import WeatherCard from '../components/WeatherCard';
import AITipCard from '../components/AITipCard';
import BottomNavigation from '../components/BottomNavigation';

// Generic shared component
import AppCard from '../components/AppCard';

export default function FarmAssistantScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const handleTabPress = (tabName) => {
    if (tabName === 'Dashboard') {
      setActiveTab(tabName);
    } else if (tabName === 'Home') {
      navigation.navigate('Home');
    } else {
      // Placeholder until other tab screens are built
      Alert.alert('Coming Soon', `${tabName} section will be available after backend integration.`);
      setActiveTab(tabName);
    }
  };

  const d = dashboardData;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />

      {/* ── Sticky Dashboard Header ─────────────────────────── */}
      <DashboardHeader
        data={d.header}
        onNotificationPress={() =>
          Alert.alert('Notifications', 'Notification centre coming soon.')
        }
      />

      {/* ── Scrollable Content ──────────────────────────────── */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* 1. Recommendation Card (hero prominence) */}
        <RecommendationCard data={d.recommendation} />

        {/* 2. Farm Summary Card */}
        <View style={styles.spacer}>
          <FarmSummaryCard data={d.farmSummary} />
        </View>

        {/* 3. Weather Card */}
        <WeatherCard data={d.weather} />

        {/* 4. Planting Window Card */}
        <View style={styles.spacer}>
          <AppCard>
            <View style={styles.infoCardHeader}>
              <Text style={styles.infoCardEmoji}>📅</Text>
              <View>
                <Text style={styles.infoCardTitle}>Planting Window</Text>
                <Text style={styles.infoCardStatus}>{d.plantingWindow.status}</Text>
              </View>
            </View>
            <View style={styles.infoCardRow}>
              <View style={styles.infoPill}>
                <Text style={styles.infoPillText}>{d.plantingWindow.range}</Text>
              </View>
              <View style={styles.infoPill}>
                <Text style={styles.infoPillText}>{d.plantingWindow.conditions}</Text>
              </View>
            </View>
            <Text style={styles.infoCardTip}>{d.plantingWindow.actionable}</Text>
          </AppCard>
        </View>

        {/* 5. Irrigation Card */}
        <AppCard>
          <View style={styles.infoCardHeader}>
            <Text style={styles.infoCardEmoji}>💧</Text>
            <View>
              <Text style={styles.infoCardTitle}>Irrigation</Text>
              <Text style={styles.infoCardStatus}>{d.irrigation.status}</Text>
            </View>
          </View>
          <View style={styles.infoCardRow}>
            <View style={styles.infoPill}>
              <Text style={styles.infoPillText}>{d.irrigation.schedule}</Text>
            </View>
            <View style={styles.infoPill}>
              <Text style={styles.infoPillText}>{d.irrigation.frequency}</Text>
            </View>
          </View>
          <Text style={styles.infoCardTip}>{d.irrigation.optimalTime}</Text>
        </AppCard>

        {/* 6. AI Tip Card */}
        <View style={styles.spacer}>
          <AITipCard data={d.aiTip} />
        </View>

        {/* 7. Recent Recommendations */}
        <View style={styles.spacer}>
          <Text style={styles.sectionHeading}>Recent Recommendations</Text>
          {d.recentRecommendations.map((rec, index) => (
            <AppCard key={index} style={styles.recentCard}>
              <View style={styles.recentRow}>
                <Text style={styles.recentCrop}>{rec.crop}</Text>
                <View style={styles.recentRight}>
                  <View style={styles.matchBadge}>
                    <Text style={styles.matchBadgeText}>{rec.match}</Text>
                  </View>
                  <Text style={styles.recentDate}>{rec.date}</Text>
                </View>
              </View>
            </AppCard>
          ))}
        </View>

        {/* Bottom padding so last card doesn't sit under tab bar */}
        <View style={styles.bottomPadding} />
      </ScrollView>

      {/* ── Sticky Bottom Navigation ────────────────────────── */}
      <BottomNavigation activeTab={activeTab} onTabPress={handleTabPress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  spacer: {
    marginTop: 16,
  },
  // ── Inline card sub-styles (Planting & Irrigation) ──────
  infoCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 14,
  },
  infoCardEmoji: {
    fontSize: 26,
  },
  infoCardTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.black,
    letterSpacing: -0.3,
  },
  infoCardStatus: {
    fontSize: 12,
    color: Colors.primary,
    fontWeight: '600',
    marginTop: 1,
  },
  infoCardRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  infoPill: {
    backgroundColor: '#E8F5E9',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  infoPillText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.primary,
  },
  infoCardTip: {
    fontSize: 13,
    color: Colors.text,
    lineHeight: 18,
  },
  // ── Recent Recommendations ───────────────────────────────
  sectionHeading: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.black,
    letterSpacing: -0.4,
    marginBottom: 12,
  },
  recentCard: {
    marginBottom: 10,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  recentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  recentCrop: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.black,
  },
  recentRight: {
    alignItems: 'flex-end',
    gap: 4,
  },
  matchBadge: {
    backgroundColor: '#E8F5E9',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  matchBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.primary,
  },
  recentDate: {
    fontSize: 11,
    color: Colors.text,
  },
  bottomPadding: {
    height: 16,
  },
});
