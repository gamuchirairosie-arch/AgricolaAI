import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';
import SectionTitle from './SectionTitle';

export default function ProblemSection() {
  const problems = [
    { emoji: '🌦', title: 'Unpredictable Weather', desc: 'Shifted seasons and volatile climate cycles make historic timelines unreliable.' },
    { emoji: '🌱', title: 'Poor Crop Choices', desc: 'Sowing varieties mismatched for current soil and rain leads to crop failure.' },
    { emoji: '📉', title: 'Lower Harvests', desc: 'Unoptimized crop configurations yield far below potential food outputs.' },
    { emoji: '💰', title: 'Income Losses', desc: 'High input costs combined with crop loss lead directly to severe financial debt.' },
  ];

  return (
    <View style={styles.container}>
      <SectionTitle 
        title="Climate Change Has Changed Farming." 
        subtitle="Modern obstacles require intelligent tools. Traditional methods are no longer enough to survive."
      />
      <View style={styles.list}>
        {problems.map((prob) => (
          <View key={prob.title} style={styles.card}>
            <View style={styles.emojiContainer}>
              <Text style={styles.emoji}>{prob.emoji}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.title}>{prob.title}</Text>
              <Text style={styles.desc}>{prob.desc}</Text>
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
    padding: 20,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#EBEBEB',
  },
  emojiContainer: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#FFEBEE', // Soft light red background for problem indicators
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  emoji: {
    fontSize: 24,
  },
  content: {
    flex: 1,
  },
  title: {
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
