import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialButtonPrimary5 from '../components/MaterialButtonPrimary5';

function Untitled12(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.parkingTicket}>Parking Ticket</Text>
      <View style={styles.rect}>
        <Text style={styles.loremIpsum}>
          906 Peg Shop St. Franklyn, NY 11209
        </Text>
        <Text style={styles.loremIpsum2}>
          Car: Toyota Corolla 2018 - License Plate: DA 93600
        </Text>
        <View style={styles.rect2Row}>
          <View style={styles.rect2}>
            <Text style={styles.arriveAfter}>Arrive After</Text>
            <Text style={styles.loremIpsum3}>9:00 PM</Text>
            <Text style={styles.tueJuly1}>Tue, July 1</Text>
          </View>
          <FeatherIcon name='arrow-right' style={styles.icon}></FeatherIcon>
          <View style={styles.rect3}>
            <Text style={styles.exitBefore}>Exit Before</Text>
            <Text style={styles.loremIpsum4}>6:00 PM</Text>
            <Text style={styles.wedJuly2}>Wed, July 2</Text>
          </View>
        </View>
      </View>
      <View style={styles.rect4}>
        <View style={styles.loremIpsum5Stack}>
          <Text style={styles.loremIpsum5}>
            Show this QR code to enter the Parking area
          </Text>
          <MaterialCommunityIconsIcon
            name='qrcode'
            style={styles.icon2}
          ></MaterialCommunityIconsIcon>
        </View>
      </View>
      <MaterialButtonPrimary5
        caption='DONE'
        style={styles.materialButtonPrimary5}
      ></MaterialButtonPrimary5>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  parkingTicket: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 26,
    marginTop: 69,
    marginLeft: 21,
  },
  rect: {
    width: 346,
    height: 212,
    borderWidth: 1,
    borderColor: 'rgba(39,170,225,1)',
    shadowColor: 'rgba(39,170,225,1)',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    elevation: 60,
    shadowOpacity: 0.16,
    shadowRadius: 20,
    marginTop: 18,
    marginLeft: 15,
  },
  loremIpsum: {
    fontFamily: 'roboto-500',
    color: 'rgba(39,170,225,1)',
    fontSize: 17,
    marginTop: 19,
    marginLeft: 18,
  },
  loremIpsum2: {
    fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 13,
    marginTop: 16,
    marginLeft: 18,
  },
  rect2: {
    width: 89,
    height: 78,
  },
  arriveAfter: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 13,
    marginTop: 7,
    marginLeft: 15,
  },
  loremIpsum3: {
    fontFamily: 'roboto-700',
    color: 'rgba(11,64,148,1)',
    fontSize: 17,
    marginTop: 6,
    marginLeft: 14,
  },
  tueJuly1: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 11,
    marginTop: 5,
    marginLeft: 21,
  },
  icon: {
    color: 'rgba(128,128,128,1)',
    fontSize: 30,
    height: 30,
    width: 30,
    marginLeft: 15,
    marginTop: 22,
  },
  rect3: {
    width: 83,
    height: 78,
    marginLeft: 11,
  },
  exitBefore: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 13,
    marginTop: 6,
    marginLeft: 14,
  },
  loremIpsum4: {
    fontFamily: 'roboto-700',
    color: 'rgba(11,64,148,1)',
    fontSize: 17,
    marginTop: 6,
    marginLeft: 13,
  },
  wedJuly2: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 11,
    marginTop: 7,
    marginLeft: 17,
  },
  rect2Row: {
    height: 78,
    flexDirection: 'row',
    marginTop: 34,
    marginLeft: 58,
    marginRight: 60,
  },
  rect4: {
    width: 346,
    height: 252,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      height: 7,
      width: 7,
    },
    elevation: 210,
    shadowOpacity: 0.16,
    shadowRadius: 70,
    marginTop: 23,
    marginLeft: 15,
  },
  loremIpsum5: {
    top: 0,
    left: 0,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
  },
  icon2: {
    top: 15,
    left: 55,
    position: 'absolute',
    color: 'rgba(0,0,0,1)',
    fontSize: 200,
    opacity: 0.68,
    height: 218,
    width: 200,
  },
  loremIpsum5Stack: {
    width: 311,
    height: 233,
    marginTop: 18,
    marginLeft: 18,
  },
  materialButtonPrimary5: {
    height: 38,
    width: 108,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    elevation: 60,
    shadowOpacity: 0.18,
    shadowRadius: 20,
    marginTop: 49,
    marginLeft: 134,
  },
});

export default Untitled12;
