import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { Colors } from '../constants/colors';

/**
 * SecondaryButton - Used for back options, cancel triggers, or minor actions.
 * Matches PrimaryButton height for visual balance.
 */
export default function SecondaryButton({ title, onPress, disabled }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        disabled && styles.buttonDisabled,
        pressed && styles.buttonPressed,
      ]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: Colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 320,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 4,
    elevation: 1,
  },
  buttonDisabled: {
    borderColor: '#A5D6A7',
    opacity: 0.5,
  },
  buttonPressed: {
    opacity: 0.75,
    backgroundColor: '#F1F8F1',
  },
  buttonText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: -0.2,
  },
});
