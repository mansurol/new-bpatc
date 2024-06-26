import React from 'react';
import { View, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { useRoute } from '@react-navigation/native';

export default function Details() {
  const route = useRoute();
  const { filename } = route.params;
  const pdfUrl = `https://bpatcsc.org/uploads/${filename}`;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <WebView
        source={{ uri: pdfUrl }}
        style={{ flex: 1, width: Dimensions.get('window').width }}
      />
    </View>
  );
}

