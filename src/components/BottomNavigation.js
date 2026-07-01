import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/colors';

/**
 * BottomNavigation
 *
 * Persistent tab bar for switching between app sections.
 * API-ready: no external data needed — route targets update when screens are added.
 *
 * Props:
 *   activeTab   string  – name of the currently active tab
 *   onTabPress  function(tabName) – navigation handler
 */

const TABS = [
  { name: 'Dashboard', icon: '🏠', label: 'Home' },
  { name: 'MyFarm',    icon: '🌾', label: 'My Farm' },
  { name: 'Crops',     icon: '🌱', label: 'Crops' },
  { name: 'Settings',  icon: '⚙️', label: 'Settings' },
];

export default function BottomNavigation({ activeTab, onTabPress }) {
  return (
    <View style={styles.container}>
      {TABS.map((tab) => {
        const isActive = activeTab === tab.name;
        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.tabBtn}
            onPress={() => onTabPress(tab.name)}
            activeOpacity={0.7}
          >
            <View style={[styles.iconWrap, isActive && styles.iconWrapActive]}>
              <Text style={styles.tabIcon}>{tab.icon}</Text>
            </View>
            <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: '#EBEBEB',
    paddingVertical: 8,
    paddingBottom: 12,
    paddingHorizontal: 8,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 8,
  },
  tabBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrap: {
    width: 40,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
  },
  iconWrapActive: {
    backgroundColor: '#E8F5E9',
  },
  tabIcon: {
    fontSize: 18,
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: '500',
    color: Colors.text,
  },
  tabLabelActive: {
    color: Colors.primary,
    fontWeight: '700',
  },
});
