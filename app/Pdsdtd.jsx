import React from 'react';
import { View, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Pdsdtd() {
  const pdfUrl = 'https://bpatcsc.org/uploads/BPATCSC-Dress-Eleven.pdf';

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <WebView
        source={{ uri: pdfUrl }}
        style={{ flex: 1, width: Dimensions.get('window').width }}
      />
    </View>
  );
}
