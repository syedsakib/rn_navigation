import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const BannerSlider = ({ data }) => {
  return (
    <View style={styles.container}>
      <Image source={data.image} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    height: 150,
    width: 300,
  },
});

export default BannerSlider;
