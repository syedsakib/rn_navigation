import React, {useContext} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {AuthContext} from '../context/AuthContext'; // Importing the AuthContext for user authentication

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { toastMessage } from '../utils/ToastMessage';

const CustomDrawer = props => {
  const {logout} = useContext(AuthContext); // Accessing the logout function from the AuthContext

  return (
    <View style={styles.container}>
      {/* Drawer Content ScrollView */}
      <DrawerContentScrollView
        contentContainerStyle={styles.drawerContent}
        {...props}>
        {/* Background Image Section */}
        <ImageBackground
          source={require('../assets/images/menubg.jpeg')}
          style={styles.imageBackground}>
          <Image
            source={require('../assets/images/userprofile.jpg')}
            style={styles.userImage}
          />
          <Text style={styles.userName}>John Doe</Text>
          <View style={styles.coinsContainer}>
            <Text style={styles.coinsText}>280 Coins</Text>
            <FontAwesome5 name="coins" size={20} color="#FFF" />
          </View>
        </ImageBackground>

        {/* Drawer Item List Section */}
        <View style={styles.drawerItemListContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      {/* Footer Section */}
      <View style={styles.footerContainer}>
        {/* Tell A Friend Option */}
        <TouchableOpacity
          onPress={() =>
            toastMessage(
              'info',
              '',
              'This funtionality has not been implemented yet!',
            )
          }
          style={styles.footerItem}>
          <View style={styles.footerItemContent}>
            <Ionicons name="share-social-outline" size={22} />
            <Text style={styles.footerItemText}>Tell A Friend</Text>
          </View>
        </TouchableOpacity>

        {/* Sign Out Option */}
        <TouchableOpacity onPress={() => logout()} style={styles.footerItem}>
          <View style={styles.footerItemContent}>
            <Ionicons name="exit-outline" size={22} />
            <Text style={styles.footerItemText}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles for the CustomDrawer component
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerContent: {
    backgroundColor: '#8200D6',
  },
  imageBackground: {
    padding: 20,
  },
  userImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    color: '#FFF',
    fontFamily: 'Roboto-Medium',
  },
  coinsContainer: {
    flexDirection: 'row',
  },
  coinsText: {
    color: '#FFF',
    fontFamily: 'Roboto-Regular',
    marginRight: 8,
  },
  drawerItemListContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 10,
  },
  footerContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#CCC',
  },
  footerItem: {
    paddingVertical: 15,
  },
  footerItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerItemText: {
    fontSize: 15,
    marginLeft: 5,
    fontFamily: 'Roboto-Medium',
  },
});

export default CustomDrawer;
