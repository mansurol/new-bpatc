import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, StyleSheet, Pressable } from 'react-native';
import axios from 'axios';
import { useNavigation } from "expo-router";

const NoticesScreen = () => {
  const [notices, setNotices] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await axios.get('https://liveclass.bpatcsc.org/api-bpatcsc-notice.php');
      setNotices(response.data);
    } catch (error) {
      console.error('Error fetching notices:', error);
    }
  };

  const navigateToDetails = (filename) => {
    navigation.navigate('details', { filename });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Notices Screen</Text>
      <FlatList
        style={styles.flatList}
        data={notices}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigateToDetails(item.filename)}>
            <View style={styles.noticeContainer}>
              <Text style={styles.noticeTitle}>Title: {item.title}</Text>
              <Text style={styles.noticeDate}>Published Date: {item.publish_date}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  flatList: {
    width: '100%',
  },
  noticeContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    elevation: 3, // for Android
    shadowColor: '#000000', // for iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  noticeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  noticeDate: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default NoticesScreen;
