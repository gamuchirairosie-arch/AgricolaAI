import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';
import SectionTitle from './SectionTitle';

export default function SdgSection() {
  const goals = [
    { number: 'SDG 2', emoji: '🌾', title: 'Zero Hunger', desc: 'Ending food scarcity by maximizing agricultural efficiency and providing localized crop safety plans.', bg: '#E8F5E9' },
    { number: 'SDG 8', emoji: '💼', title: 'Decent Work & Economic Growth', desc: 'Empowering smallholder farmers to scale into profitable commercial operators and increase household earnings.', bg: '#FFF3E0' },
    { number: 'SDG 13', emoji: '🌍', title: 'Climate Action', desc: 'Pioneering agricultural adaptation technologies to mitigate harvest losses caused by extreme weather patterns.', bg: '#E3F2FD' },
  ];

  return (
    <View style={styles.container}>
      <SectionTitle 
        title="UN Sustainable Development Goals" 
        subtitle="Agricola AI actively drives measurable progress across three global UN pillars."
      />
      <View style={styles.list}>
        {goals.map((goal) => (
          <View key={goal.title} style={[styles.card, { backgroundColor: goal.bg }]}>
            <View style={styles.left}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{goal.number}</Text>
              </View>
              <Text style={styles.emoji}>{goal.emoji}</Text>
            </View>
            <View style={styles.right}>
              <Text style={styles.title}>{goal.title}</Text>
              <Text style={styles.desc}>{goal.desc}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
    width: '100%',
  },
  list: {
    marginTop: 8,
  },
  card: {
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 6,
    elevation: 1,
  },
  left: {
    alignItems: 'center',
    marginRight: 18,
    width: 65,
  },
  badge: {
    backgroundColor: 'rgba(0,0,0,0.06)',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 6,
    marginBottom: 8,
  },
  badgeText: {
    fontSize: 9,
    fontWeight: '800',
    color: Colors.black,
  },
  emoji: {
    fontSize: 32,
  },
  right: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.black,
    marginBottom: 4,
    letterSpacing: -0.2,
  },
  desc: {
    fontSize: 12,
    color: Colors.text,
    lineHeight: 18,
  },
});
