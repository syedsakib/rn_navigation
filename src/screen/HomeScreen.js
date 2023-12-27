import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import Carousel from 'react-native-snap-carousel';

import {freeGames, paidGames, sliderData} from '../modal/data';
import {windowWidth} from '../utils/Dimensions';

import BannerSlider from '../components/BannerSlider';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';
import {toastMessage} from '../utils/ToastMessage';

const HomeScreen = ({navigation}) => {
  const [gamesTab, setGamesTab] = useState(1);

  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = value => {
    setGamesTab(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Hello Jon Doe</Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require('../assets/images/userprofile.jpg')}
              style={styles.profileImage}
              imageStyle={styles.profileImageBorderRadius}
            />
          </TouchableOpacity>
        </View>

        {/* Search Bar Section */}
        <View style={styles.searchContainer}>
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={styles.searchIcon}
          />
          <TextInput style={styles.searchInput} placeholder="Search here..." />
        </View>

        {/* Upcoming Games Section */}
        <View style={styles.upcomingGamesContainer}>
          <Text style={styles.upcomingGamesText}>Upcoming Games</Text>
          <TouchableOpacity
            onPress={() =>
              toastMessage(
                'info',
                '',
                'This funtionality has not been implemented yet!',
              )
            }>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>

        {/* Carousel Section */}
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        />

        {/* Switch Section */}
        <View style={styles.switchContainer}>
          <CustomSwitch
            selectionMode={1}
            option1="Free to play"
            option2="Paid games"
            onSelectSwitch={onSelectSwitch}
          />
        </View>

        {/* List of Games Section */}
        {gamesTab == 1 &&
          freeGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              onPress={() =>
                navigation.navigate('GameDetails', {
                  title: item.title,
                  id: item.id,
                })
              }
            />
          ))}
        {gamesTab == 2 &&
          paidGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              price={item.price}
              onPress={() =>
                navigation.navigate('GameDetails', {
                  title: item.title,
                  id: item.id,
                })
              }
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollView: {
    padding: 20,
    marginBottom: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  headerText: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
  },
  profileImage: {
    width: 35,
    height: 35,
  },
  profileImageBorderRadius: {
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    borderColor: '#C6C6C6',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  searchIcon: {
    marginRight: 5,
    marginTop: 13,
  },
  searchInput: {
    flex: 1,
  },
  upcomingGamesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  upcomingGamesText: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
  },
  seeAllText: {
    color: '#0AADA8',
  },
  switchContainer: {
    marginVertical: 20,
  },
});

export default HomeScreen;
