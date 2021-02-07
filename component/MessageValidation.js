import React from 'react'
import { View, Text } from 'react-native'
import { Button, Snackbar } from "react-native-paper";
import {Colors} from "../constant/colors";

export default function MessageValidation({visible,onDismiss, backgroundColor,color, label,accent}) {
    return (
        <Snackbar
        style={{
          backgroundColor: backgroundColor,
          color:color,
        }}
        theme={{ colors: { accent: accent } }}
        visible={visible}
        onDismiss={onDismiss}
        action={{
          label: label,
          onPress: () => {
            // Do something
          },
        }}
      >
       {message}
      </Snackbar>
    )
}
