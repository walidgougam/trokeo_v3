import React from 'react';
import {Snackbar} from 'react-native-paper';

export default function MessageValidation({
  visible,
  onDismiss,
  backgroundColor,
  color,
  label,
  accent,
  message,
}) {
  return (
    <Snackbar
      style={{
        backgroundColor: backgroundColor,
        color: color,
      }}
      theme={{colors: {accent: accent}}}
      visible={visible}
      onDismiss={onDismiss}
      action={{
        label: label,
        onPress: () => {
          // Do something
        },
      }}>
      {message}
    </Snackbar>
  );
}
