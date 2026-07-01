import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Colors } from '../constants/colors';

/**
 * LoadingStep - Visualizes individual process items during loading states.
 * Colors and layouts vary automatically based on current status (waiting, loading, completed).
 */
export default function LoadingStep({ icon, title, status }) {
  const isWaiting = status === 'waiting';
  const isLoading = status === 'loading';
  const isCompleted = status === 'completed';

  return (
    <View style={[
      styles.container,
      isLoading && styles.containerLoading,
      isCompleted && styles.containerCompleted
    ]}>
      <View style={[
        styles.iconContainer,
        isWaiting && styles.iconWaiting,
        isLoading && styles.iconLoading,
        isCompleted && styles.iconCompleted
      ]}>
        {isCompleted ? (
          <Text style={styles.checkIcon}>✓</Text>
        ) : (
          <Text style={styles.iconText}>{icon}</Text>
        )}
      </View>
      <Text style={[
        styles.title,
        isWaiting && styles.titleWaiting,
        isLoading && styles.titleLoading,
        isCompleted && styles.titleCompleted
      ]}>
        {title}
      </Text>
      <View style={styles.statusContainer}>
        {isLoading && (
          <ActivityIndicator size="small" color={Colors.primary} />
        )}
        {isCompleted && (
          <Text style={styles.statusLabelCompleted}>Completed</Text>
        )}
        {isWaiting && (
          <Text style={styles.statusLabelWaiting}>Waiting</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#EBEBEB',
    width: '100%',
  },
  containerLoading: {
    borderColor: Colors.primary,
    backgroundColor: '#F8FBF8',
  },
  containerCompleted: {
    backgroundColor: '#F1F8F1',
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  iconWaiting: {
    opacity: 0.5,
  },
  iconLoading: {
    backgroundColor: '#E8F5E9',
  },
  iconCompleted: {
    backgroundColor: Colors.primary,
  },
  checkIcon: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '800',
  },
  iconText: {
    fontSize: 18,
  },
  title: {
    flex: 1,
    fontSize: 15,
    fontWeight: '700',
    color: Colors.black,
  },
  titleWaiting: {
    color: '#9E9E9E',
  },
  titleLoading: {
    color: Colors.primary,
  },
  titleCompleted: {
    color: Colors.black,
    textDecorationLine: 'line-through',
    opacity: 0.6,
  },
  statusContainer: {
    minWidth: 70,
    alignItems: 'flex-end',
  },
  statusLabelCompleted: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.primary,
  },
  statusLabelWaiting: {
    fontSize: 11,
    color: '#9E9E9E',
  },
});
