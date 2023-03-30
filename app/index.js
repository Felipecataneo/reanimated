
import {
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import cities from '../data/cities';

import React from 'react';
import { Link } from 'expo-router';



const CityGrid = () => {
  const renderItem = ({item}) => (
    <Link href={`/${item.id}`} asChild>
      <Pressable style={styles.itemContainer}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <Text style={styles.name}>{item.name}</Text>
      </Pressable >
    </Link>
  )

  return (

      <View style={styles.container}>
          <FlatList
              data={cities}
              renderItem={renderItem}
              keyExtractor={(item) => item.name}
              numColumns={2}
          />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: 25,
      backgroundColor: '#F5FCFF',
  },
  itemContainer: {
      flex: 1,
      margin: 5,
      padding: 10,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
      
  },
  image: {
      width: '100%',
      height: 150,
      borderRadius:10
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
    color:'gray'
  },
});

export default CityGrid;