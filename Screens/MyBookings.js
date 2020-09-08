import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import MaterialButtonPrimary2 from '../components/MaterialButtonPrimary2';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

function Untitled10(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.myBookings}>My Bookings</Text>
      <View style={styles.rect}>
        <View style={styles.currentRow}>
          <Text style={styles.current}>CURRENT</Text>
          <Text style={styles.upcoming}>UPCOMING</Text>
          <Text style={styles.completed}>COMPLETED</Text>
          <Text style={styles.cancelled}>CANCELLED</Text>
        </View>
      </View>
      <View style={styles.scrollAreaStack}>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          ></ScrollView>
        </View>
        <View style={styles.rect2}>
          <View style={styles.rect3}>
            <View style={styles.rect4Row}>
              <View style={styles.rect4}>
                <Image
                  source={require('../assets/images/cars1.jpg')}
                  resizeMode='stretch'
                  style={styles.image}
                ></Image>
              </View>
              <View style={styles.loremIpsumStackColumn}>
                <View style={styles.loremIpsumStack}>
                  <Text style={styles.loremIpsum}>
                    906 Peg Shop St. Franklyn, NY, 11209
                  </Text>
                  <View style={styles.rect5}>
                    <Text style={styles.rebook}>Rebook</Text>
                  </View>
                </View>
                <Text style={styles.loremIpsum2}>
                  July 1 2019, 9:00pm to July 2 2019, 6:00am
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.materialButtonPrimary2Row}>
            <MaterialButtonPrimary2
              caption='EARLY CHECK-IN'
              style={styles.materialButtonPrimary2}
            ></MaterialButtonPrimary2>
            <View style={styles.rect9}>
              <Text style={styles.cancelBooking}>CANCEL BOOKING</Text>
            </View>
            <View style={styles.rect10}>
              <MaterialCommunityIconsIcon
                name='qrcode'
                style={styles.icon6}
              ></MaterialCommunityIconsIcon>
            </View>
          </View>
        </View>
        <View style={styles.rect6}>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>
              <View style={styles.iconRow}>
                <FontAwesomeIcon
                  name='cc-visa'
                  style={styles.icon}
                ></FontAwesomeIcon>
                <Text style={styles.visa6094320}>VISA *6094 | $3.20</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.moreDetails}>More Details</Text>
            <View style={styles.rect8}>
              <View style={styles.icon2Row}>
                <IoniconsIcon
                  name='ios-star'
                  style={styles.icon2}
                ></IoniconsIcon>
                <IoniconsIcon
                  name='ios-star'
                  style={styles.icon3}
                ></IoniconsIcon>
                <IoniconsIcon
                  name='ios-star'
                  style={styles.icon4}
                ></IoniconsIcon>
                <IoniconsIcon
                  name='ios-star'
                  style={styles.icon5}
                ></IoniconsIcon>
                <Text style={styles.loremIpsum3}>123</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  myBookings: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 28,
    marginTop: 60,
    marginLeft: 23,
  },
  rect: {
    width: 332,
    height: 28,
    flexDirection: 'row',
    marginTop: 16,
    marginLeft: 23,
  },
  current: {
    fontFamily: 'roboto-regular',
    color: 'rgba(11,64,148,1)',
    fontSize: 14,
    opacity: 0.8,
  },
  upcoming: {
    fontFamily: 'roboto-700',
    color: 'rgba(11,64,148,1)',
    fontSize: 16,
    marginLeft: 11,
    marginTop: 1,
  },
  completed: {
    fontFamily: 'roboto-regular',
    color: 'rgba(11,64,148,1)',
    fontSize: 14,
    opacity: 0.8,
    marginLeft: 9,
    marginTop: 1,
  },
  cancelled: {
    fontFamily: 'roboto-regular',
    color: 'rgba(11,64,148,1)',
    opacity: 0.8,
    marginLeft: 9,
    marginTop: 1,
  },
  currentRow: {
    height: 20,
    flexDirection: 'row',
    flex: 1,
    marginRight: 1,
    marginTop: 5,
  },
  scrollArea: {
    top: 0,
    left: 1,
    width: 330,
    height: 584,
    position: 'absolute',
  },
  scrollArea_contentContainerStyle: {
    height: 584,
    width: 330,
  },
  rect2: {
    top: 0,
    left: 1,
    width: 332,
    height: 233,
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(197,196,196,1)',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      height: 10,
      width: 10,
    },
    elevation: 60,
    shadowOpacity: 0.17,
    shadowRadius: 20,
  },
  rect3: {
    width: 330,
    height: 85,
  },
  rect4: {
    width: 82,
    height: 85,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 100,
    marginTop: 12,
    marginLeft: 12,
  },
  loremIpsum: {
    top: 1,
    left: 0,
    position: 'absolute',
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 15,
  },
  rect5: {
    top: 0,
    left: 186,
    width: 50,
    height: 20,
    position: 'absolute',
    backgroundColor: 'rgba(39,170,225,0.2)',
  },
  rebook: {
    fontFamily: 'roboto-500',
    color: 'rgba(39,170,225,1)',
    fontSize: 11,
    marginTop: 4,
    marginLeft: 7,
  },
  loremIpsumStack: {
    width: 236,
    height: 37,
    marginLeft: 2,
  },
  loremIpsum2: {
    fontFamily: 'roboto-regular',
    color: 'rgba(39,170,225,1)',
    fontSize: 12,
    marginTop: 8,
  },
  loremIpsumStackColumn: {
    width: 238,
    marginLeft: 4,
    marginTop: 14,
    marginBottom: 11,
  },
  rect4Row: {
    height: 85,
    flexDirection: 'row',
    marginRight: 6,
  },
  materialButtonPrimary2: {
    height: 36,
    width: 120,
  },
  rect9: {
    width: 124,
    height: 36,
    borderWidth: 1,
    borderColor: 'rgba(39,170,225,1)',
    marginLeft: 13,
  },
  cancelBooking: {
    fontFamily: 'roboto-regular',
    color: 'rgba(39,170,225,1)',
    fontSize: 13,
    marginTop: 11,
    marginLeft: 7,
  },
  rect10: {
    width: 38,
    height: 36,
    backgroundColor: 'rgba(39,170,225,0.2)',
    marginLeft: 11,
  },
  icon6: {
    color: 'rgba(39,170,225,1)',
    fontSize: 30,
    height: 33,
    width: 30,
    marginTop: 2,
    marginLeft: 3,
  },
  materialButtonPrimary2Row: {
    height: 36,
    flexDirection: 'row',
    marginTop: 92,
    marginLeft: 13,
    marginRight: 13,
  },
  rect6: {
    top: 97,
    left: 0,
    width: 332,
    height: 65,
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(223,220,220,1)',
    flexDirection: 'row',
  },
  button: {
    width: 138,
    height: 32,
    borderWidth: 1,
    borderColor: 'rgba(187,186,186,1)',
    flexDirection: 'row',
  },
  icon: {
    color: 'rgba(11,64,148,1)',
    fontSize: 20,
    height: 20,
    width: 26,
  },
  visa6094320: {
    fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 10,
    marginLeft: 10,
    marginTop: 6,
  },
  iconRow: {
    height: 20,
    flexDirection: 'row',
    flex: 1,
    marginRight: 9,
    marginLeft: 8,
    marginTop: 5,
  },
  moreDetails: {
    fontFamily: 'roboto-regular',
    color: 'rgba(11,64,148,1)',
    fontSize: 10,
    textDecorationLine: 'underline',
    marginLeft: 10,
    marginTop: 11,
  },
  rect8: {
    width: 100,
    height: 30,
    flexDirection: 'row',
    marginLeft: 9,
    marginTop: 1,
  },
  icon2: {
    color: 'rgba(248,201,28,1)',
    fontSize: 18,
    height: 19,
    width: 15,
  },
  icon3: {
    color: 'rgba(248,201,28,1)',
    fontSize: 18,
    height: 19,
    width: 15,
    marginLeft: 3,
    marginTop: 1,
  },
  icon4: {
    color: 'rgba(248,201,28,1)',
    fontSize: 18,
    height: 19,
    width: 15,
    marginLeft: 3,
    marginTop: 1,
  },
  icon5: {
    color: 'rgba(248,201,28,1)',
    fontSize: 18,
    height: 19,
    width: 16,
    marginLeft: 2,
    marginTop: 1,
  },
  loremIpsum3: {
    fontFamily: 'roboto-regular',
    color: 'rgba(114,113,113,1)',
    fontSize: 10,
    marginLeft: 8,
    marginTop: 6,
  },
  icon2Row: {
    height: 20,
    flexDirection: 'row',
    flex: 1,
    marginRight: 6,
    marginTop: 6,
  },
  buttonRow: {
    height: 32,
    flexDirection: 'row',
    flex: 1,
    marginRight: 6,
    marginLeft: 13,
    marginTop: 18,
  },
  scrollAreaStack: {
    width: 333,
    height: 584,
    marginTop: 22,
    marginLeft: 22,
  },
});

export default Untitled10;
