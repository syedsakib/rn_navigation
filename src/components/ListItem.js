import React from 'react';
import {Image, TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {windowWidth} from '../utils/Dimensions';

const ListItem = ({photo, title, subTitle, isFree, price, onPress}) => {
  return (
    <View style={styles.container}>
      {/* Information Container */}
      <View style={styles.infoContainer}>
        {/* Game Poster Image */}
        <Image source={photo} style={styles.image} />
        {/* Text Container for Title and Subtitle */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text numberOfLines={1} style={styles.subTitle}>
            {subTitle}
          </Text>
        </View>
      </View>

      {/* Button Container for Play or Price */}
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.buttonText}>
          {isFree === 'Yes' ? 'Play' : price}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 10,
    marginRight: 8,
  },
  textContainer: {
    width: windowWidth - 220,
  },
  title: {
    color: '#333',
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
  },
  subTitle: {
    color: '#333',
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  buttonContainer: {
    backgroundColor: '#0aada8',
    padding: 10,
    width: 100,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
  },
});

export default ListItem;
