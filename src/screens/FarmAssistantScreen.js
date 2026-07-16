import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Text,
  Alert,
  TouchableOpacity,
  Switch,
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
  const [tabHistory, setTabHistory] = useState(['Dashboard']);
  
  // Settings tab states
  const [language, setLanguage] = useState('English');
  const [unitSystem, setUnitSystem] = useState('Metric');
  const [smsAlerts, setSmsAlerts] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);

  const handleTabPress = (tabName) => {
    if (tabName === activeTab) return;
    
    // Add to navigation history stack
    setTabHistory((prev) => [...prev, tabName]);
    setActiveTab(tabName);
  };

  const handleBack = () => {
    if (tabHistory.length > 1) {
      const newHistory = [...tabHistory];
      newHistory.pop(); // Remove current tab
      const lastTab = newHistory[newHistory.length - 1];
      setTabHistory(newHistory);
      setActiveTab(lastTab);
    } else {
      // If at original tab, go back to the home/onboarding screens
      navigation.goBack();
    }
  };

  const d = dashboardData;

  // ── Render Views for Each Tab ───────────────────────────

  const renderDashboard = () => (
    <>
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
        <AppCard style={styles.farmThemeCard}>
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
      <AppCard style={styles.farmThemeCard}>
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
          <AppCard key={index} style={[styles.recentCard, styles.farmThemeCard]}>
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
    </>
  );

  const renderMyFarm = () => (
    <View style={styles.tabContent}>
      <Text style={styles.tabHeading}>🌾 My Farm Details</Text>
      
      {/* Soil Analysis Card */}
      <AppCard style={[styles.infoCard, styles.greenOutlineCard]}>
        <View style={styles.cardHeaderRow}>
          <Text style={styles.cardSectionTitle}>🧪 Soil Analysis</Text>
          <View style={styles.activePill}>
            <Text style={styles.activePillText}>Optimal</Text>
          </View>
        </View>
        
        <View style={styles.soilStatGrid}>
          <View style={styles.soilStatItem}>
            <Text style={styles.soilStatLabel}>Soil Type</Text>
            <Text style={styles.soilStatValue}>Sandy Loam</Text>
          </View>
          <View style={styles.soilStatItem}>
            <Text style={styles.soilStatLabel}>Soil pH</Text>
            <Text style={styles.soilStatValue}>6.2</Text>
          </View>
          <View style={styles.soilStatItem}>
            <Text style={styles.soilStatLabel}>Moisture</Text>
            <Text style={styles.soilStatValue}>42%</Text>
          </View>
        </View>

        <View style={styles.divider} />
        
        <View style={styles.nutrientRow}>
          <View style={styles.nutrientBadge}>
            <Text style={styles.nutrientLabel}>Nitrogen (N)</Text>
            <Text style={[styles.nutrientVal, {color: Colors.farmGreen}]}>Good</Text>
          </View>
          <View style={styles.nutrientBadge}>
            <Text style={styles.nutrientLabel}>Phosphorus (P)</Text>
            <Text style={[styles.nutrientVal, {color: Colors.farmGreen}]}>Optimal</Text>
          </View>
          <View style={styles.nutrientBadge}>
            <Text style={styles.nutrientLabel}>Potassium (K)</Text>
            <Text style={[styles.nutrientVal, {color: Colors.accent}]}>Low</Text>
          </View>
        </View>
      </AppCard>

      {/* Farm Profile Details */}
      <AppCard style={styles.infoCard}>
        <Text style={styles.cardSectionTitle}>📍 Location & Climate</Text>
        
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Region</Text>
          <Text style={styles.detailValue}>Nakuru County, Kenya</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Farm Size</Text>
          <Text style={styles.detailValue}>4.5 Hectares</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Altitude</Text>
          <Text style={styles.detailValue}>1,850m above sea level</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Water Supply</Text>
          <Text style={styles.detailValue}>Rainfed + Drip Irrigation</Text>
        </View>
      </AppCard>

      {/* History Log */}
      <AppCard style={styles.infoCard}>
        <Text style={styles.cardSectionTitle}>⏳ Farm History</Text>
        <View style={styles.historyItem}>
          <Text style={styles.historyYear}>2025</Text>
          <Text style={styles.historyDesc}>Cultivated Cabbage (Yield: 11.8 Tons/Ha)</Text>
        </View>
        <View style={styles.historyItem}>
          <Text style={styles.historyYear}>2024</Text>
          <Text style={styles.historyDesc}>Cultivated Maize (Yield: 5.2 Tons/Ha)</Text>
        </View>
      </AppCard>
    </View>
  );

  const renderCrops = () => (
    <View style={styles.tabContent}>
      <Text style={styles.tabHeading}>🌱 Compatible Crop Catalog</Text>
      <Text style={styles.tabSubtitle}>AI-recommended crops optimized for your soil chemistry & climate:</Text>

      {/* Crop 1: Cabbage */}
      <AppCard style={[styles.cropCard, styles.topCropCard]}>
        <View style={styles.cropCardHeader}>
          <View>
            <Text style={styles.cropName}>🥬 Cabbage</Text>
            <Text style={styles.cropFamily}>Brassica oleracea</Text>
          </View>
          <View style={styles.compatibilityBadge}>
            <Text style={styles.compatibilityText}>94% Match</Text>
          </View>
        </View>
        <View style={styles.cropSpecGrid}>
          <View style={styles.cropSpecItem}>
            <Text style={styles.cropSpecLabel}>Maturity</Text>
            <Text style={styles.cropSpecVal}>85 Days</Text>
          </View>
          <View style={styles.cropSpecItem}>
            <Text style={styles.cropSpecLabel}>Est. Yield</Text>
            <Text style={styles.cropSpecVal}>12.4 Tons/Ha</Text>
          </View>
          <View style={styles.cropSpecItem}>
            <Text style={styles.cropSpecLabel}>Water Need</Text>
            <Text style={styles.cropSpecVal}>Medium</Text>
          </View>
        </View>
      </AppCard>

      {/* Crop 2: Potatoes */}
      <AppCard style={styles.cropCard}>
        <View style={styles.cropCardHeader}>
          <View>
            <Text style={styles.cropName}>🥔 Potato</Text>
            <Text style={styles.cropFamily}>Solanum tuberosum</Text>
          </View>
          <View style={[styles.compatibilityBadge, {backgroundColor: '#E8F5E9'}]}>
            <Text style={[styles.compatibilityText, {color: Colors.farmGreen}]}>89% Match</Text>
          </View>
        </View>
        <View style={styles.cropSpecGrid}>
          <View style={styles.cropSpecItem}>
            <Text style={styles.cropSpecLabel}>Maturity</Text>
            <Text style={styles.cropSpecVal}>100 Days</Text>
          </View>
          <View style={styles.cropSpecItem}>
            <Text style={styles.cropSpecLabel}>Est. Yield</Text>
            <Text style={styles.cropSpecVal}>15.2 Tons/Ha</Text>
          </View>
          <View style={styles.cropSpecItem}>
            <Text style={styles.cropSpecLabel}>Water Need</Text>
            <Text style={styles.cropSpecVal}>High</Text>
          </View>
        </View>
      </AppCard>

      {/* Crop 3: Carrots */}
      <AppCard style={styles.cropCard}>
        <View style={styles.cropCardHeader}>
          <View>
            <Text style={styles.cropName}>🥕 Carrot</Text>
            <Text style={styles.cropFamily}>Daucus carota</Text>
          </View>
          <View style={[styles.compatibilityBadge, {backgroundColor: '#E8F5E9'}]}>
            <Text style={[styles.compatibilityText, {color: Colors.farmGreen}]}>85% Match</Text>
          </View>
        </View>
        <View style={styles.cropSpecGrid}>
          <View style={styles.cropSpecItem}>
            <Text style={styles.cropSpecLabel}>Maturity</Text>
            <Text style={styles.cropSpecVal}>75 Days</Text>
          </View>
          <View style={styles.cropSpecItem}>
            <Text style={styles.cropSpecLabel}>Est. Yield</Text>
            <Text style={styles.cropSpecVal}>9.8 Tons/Ha</Text>
          </View>
          <View style={styles.cropSpecItem}>
            <Text style={styles.cropSpecLabel}>Water Need</Text>
            <Text style={styles.cropSpecVal}>Low</Text>
          </View>
        </View>
      </AppCard>
    </View>
  );

  const renderSettings = () => (
    <View style={styles.tabContent}>
      <Text style={styles.tabHeading}>⚙️ Settings & Preferences</Text>

      {/* Profile Section */}
      <AppCard style={styles.infoCard}>
        <Text style={styles.cardSectionTitle}>👤 Farmer Profile</Text>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Farmer Name</Text>
          <Text style={styles.detailValue}>Frank</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Phone Number</Text>
          <Text style={styles.detailValue}>+254 712 345678</Text>
        </View>
      </AppCard>

      {/* Preferences Section */}
      <AppCard style={styles.infoCard}>
        <Text style={styles.cardSectionTitle}>⚙️ Preferences</Text>
        
        {/* Language Selection */}
        <Text style={styles.settingSublabel}>Preferred Language</Text>
        <View style={styles.optionSelectorRow}>
          {['English', 'Swahili', 'Kikuyu'].map((lang) => (
            <TouchableOpacity 
              key={lang} 
              style={[styles.selectorBtn, language === lang && styles.selectorBtnActive]}
              onPress={() => setLanguage(lang)}
            >
              <Text style={[styles.selectorText, language === lang && styles.selectorTextActive]}>
                {lang}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Unit system */}
        <Text style={[styles.settingSublabel, {marginTop: 12}]}>Measurement System</Text>
        <View style={styles.optionSelectorRow}>
          {['Metric', 'Imperial'].map((sys) => (
            <TouchableOpacity 
              key={sys} 
              style={[styles.selectorBtn, unitSystem === sys && styles.selectorBtnActive]}
              onPress={() => setUnitSystem(sys)}
            >
              <Text style={[styles.selectorText, unitSystem === sys && styles.selectorTextActive]}>
                {sys === 'Metric' ? 'Metric (Ha, °C)' : 'Imperial (Ac, °F)'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </AppCard>

      {/* Alerts & Notifications */}
      <AppCard style={styles.infoCard}>
        <Text style={styles.cardSectionTitle}>🔔 Notifications & Alerts</Text>
        
        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Weekly SMS Advisory</Text>
          <Switch 
            value={smsAlerts} 
            onValueChange={setSmsAlerts} 
            trackColor={{ false: "#767577", true: Colors.secondary }}
            thumbColor={smsAlerts ? Colors.primary : "#f4f3f4"}
          />
        </View>

        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Weather Alert Push Notifications</Text>
          <Switch 
            value={pushNotifications} 
            onValueChange={setPushNotifications}
            trackColor={{ false: "#767577", true: Colors.secondary }}
            thumbColor={pushNotifications ? Colors.primary : "#f4f3f4"}
          />
        </View>
      </AppCard>

      {/* Help Section */}
      <AppCard style={styles.infoCard}>
        <TouchableOpacity style={styles.supportBtn} onPress={() => Alert.alert('Agronomist Call', 'Connecting you with local agronomy support...')}>
          <Text style={styles.supportBtnText}>📞 Call local agronomist advisor</Text>
        </TouchableOpacity>
      </AppCard>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#E8F5E9" />

      {/* Decorative farm elements floating in the top background */}
      <View style={styles.floatingDecor1}><Text style={styles.floatingDecorText}>🌾</Text></View>
      <View style={styles.floatingDecor2}><Text style={styles.floatingDecorText}>☀️</Text></View>
      <View style={styles.floatingDecor3}><Text style={styles.floatingDecorText}>🌱</Text></View>

      {/* ── Sticky Dashboard Header ─────────────────────────── */}
      <DashboardHeader
        data={d.header}
        onNotificationPress={() =>
          Alert.alert('Notifications', 'Notification centre coming soon.')
        }
        onBack={handleBack}
      />

      {/* ── Scrollable Content ──────────────────────────────── */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {activeTab === 'Dashboard' && renderDashboard()}
        {activeTab === 'MyFarm' && renderMyFarm()}
        {activeTab === 'Crops' && renderCrops()}
        {activeTab === 'Settings' && renderSettings()}

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
    backgroundColor: '#F3F9F4', // Gorgeous farmer-centric light mint backdrop
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 16,
    zIndex: 5,
  },
  spacer: {
    marginTop: 16,
  },
  // Floating decorative farm elements
  floatingDecor1: {
    position: 'absolute',
    top: 100,
    right: 20,
    opacity: 0.12,
    zIndex: 1,
  },
  floatingDecor2: {
    position: 'absolute',
    top: 240,
    left: -10,
    opacity: 0.1,
    zIndex: 1,
  },
  floatingDecor3: {
    position: 'absolute',
    bottom: 120,
    right: 15,
    opacity: 0.12,
    zIndex: 1,
  },
  floatingDecorText: {
    fontSize: 70,
  },
  // Custom styled cards for farm aesthetic
  farmThemeCard: {
    borderLeftWidth: 4,
    borderLeftColor: Colors.primary,
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
    height: 40,
  },
  // ── Tab Screen Shared styles ─────────────────────────────
  tabContent: {
    paddingTop: 8,
  },
  tabHeading: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.farmGreen,
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  tabSubtitle: {
    fontSize: 14,
    color: Colors.text,
    marginBottom: 16,
    lineHeight: 20,
  },
  infoCard: {
    marginBottom: 16,
    padding: 16,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  cardSectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.black,
    marginBottom: 8,
  },
  greenOutlineCard: {
    borderWidth: 1,
    borderColor: 'rgba(46, 125, 50, 0.2)',
    borderLeftWidth: 4,
    borderLeftColor: Colors.primary,
  },
  activePill: {
    backgroundColor: '#E8F5E9',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  activePillText: {
    fontSize: 11,
    color: Colors.primary,
    fontWeight: '700',
  },
  // Soil Analysis grid
  soilStatGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  soilStatItem: {
    alignItems: 'center',
    flex: 1,
  },
  soilStatLabel: {
    fontSize: 12,
    color: Colors.text,
    marginBottom: 4,
  },
  soilStatValue: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.black,
  },
  divider: {
    height: 1,
    backgroundColor: '#EBEBEB',
    marginVertical: 14,
  },
  nutrientRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nutrientBadge: {
    alignItems: 'center',
    flex: 1,
  },
  nutrientLabel: {
    fontSize: 11,
    color: Colors.text,
    marginBottom: 2,
  },
  nutrientVal: {
    fontSize: 13,
    fontWeight: '700',
  },
  // Location list styles
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  detailLabel: {
    fontSize: 14,
    color: Colors.text,
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.black,
  },
  // History tab styles
  historyItem: {
    flexDirection: 'row',
    paddingVertical: 8,
    alignItems: 'center',
  },
  historyYear: {
    width: 60,
    fontSize: 14,
    fontWeight: '800',
    color: Colors.primary,
  },
  historyDesc: {
    flex: 1,
    fontSize: 13,
    color: Colors.text,
  },
  // Crops tab styles
  cropCard: {
    marginBottom: 16,
    padding: 16,
  },
  topCropCard: {
    borderLeftWidth: 4,
    borderLeftColor: Colors.accent,
  },
  cropCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  cropName: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.black,
  },
  cropFamily: {
    fontSize: 12,
    color: Colors.text,
    fontStyle: 'italic',
    marginTop: 2,
  },
  compatibilityBadge: {
    backgroundColor: '#FFF3E0',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  compatibilityText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#E65100',
  },
  cropSpecGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FAFAFA',
    padding: 12,
    borderRadius: 8,
  },
  cropSpecItem: {
    alignItems: 'center',
    flex: 1,
  },
  cropSpecLabel: {
    fontSize: 11,
    color: Colors.text,
    marginBottom: 4,
  },
  cropSpecVal: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.black,
  },
  // Settings tab styles
  settingSublabel: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 8,
  },
  optionSelectorRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  selectorBtn: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EBEBEB',
  },
  selectorBtnActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  selectorText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.text,
  },
  selectorTextActive: {
    color: Colors.white,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  switchLabel: {
    fontSize: 14,
    color: Colors.black,
    fontWeight: '500',
  },
  supportBtn: {
    backgroundColor: '#E8F5E9',
    padding: 14,
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(46, 125, 50, 0.2)',
  },
  supportBtnText: {
    color: Colors.primary,
    fontWeight: '700',
    fontSize: 14,
  },
});
