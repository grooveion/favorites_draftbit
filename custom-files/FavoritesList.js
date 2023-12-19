import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

export const FavoritesListScreen = () => {
  const route = useRoute();
  const { favoriteList } = route.params;

  const renderItem = ({ item }) => (
    <View style={styles.listContainer}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.name}</Text>
        {/* Add other item details here if needed */}
      </View>
    </View>
  );

  return (
    <FlatList
      data={favoriteList}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()} // Assuming each item has a unique 'id'
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    borderRadius: 8,
    backgroundColor: '#edf2fb',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
