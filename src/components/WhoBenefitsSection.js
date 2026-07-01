import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';
import SectionTitle from './SectionTitle';

export default function WhoBenefitsSection() {
  const users = [
    { emoji: '👨‍🌾', role: 'Farmers', desc: 'Secure reliable income guides and build local resilience against unstable weather.' },
    { emoji: '🏢', role: 'Agribusinesses', desc: 'Mitigate sourcing risks and forecast accurate regional yield distributions.' },
    { emoji: '🏘', role: 'Communities', desc: 'Strengthen local food supplies and drive sustainable rural economy growth.' },
    { emoji: '🛒', role: 'Consumers', desc: 'Access highly nutritious, affordable food harvested using climate-friendly practices.' },
  ];

  return (
    <View style={styles.container}>
      <SectionTitle 
        title="Who Benefits?" 
        subtitle="Empowering every link in the global food supply chain, starting at the roots."
      />
      <View style={styles.list}>
        {users.map((u) => (
          <View key={u.role} style={styles.card}>
            <Text style={styles.emoji}>{u.emoji}</Text>
            <View style={styles.content}>
              <Text style={styles.role}>{u.role}</Text>
              <Text style={styles.desc}>{u.desc}</Text>
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
    backgroundColor: Colors.white,
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EBEBEB',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.02,
    shadowRadius: 8,
    elevation: 1,
  },
  emoji: {
    fontSize: 32,
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  role: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.black,
    marginBottom: 4,
    letterSpacing: -0.2,
  },
  desc: {
    fontSize: 13,
    color: Colors.text,
    lineHeight: 18,
  },
});
