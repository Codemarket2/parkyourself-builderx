import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialButtonPrimary1 from '../components/MaterialButtonPrimary1';

function Untitled7(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}></View>
      <View style={styles.loremIpsumRow}>
        <Text style={styles.loremIpsum}>Vehicle Sizes Accepted</Text>
        <Text style={styles.loremIpsum2}>Vehicle size description</Text>
      </View>
      <View style={styles.rect2Row}>
        <View style={styles.rect2}>
          <FontAwesomeIcon
            name='automobile'
            style={styles.icon}
          ></FontAwesomeIcon>
          <Text style={styles.compact}>Compact</Text>
        </View>
        <View style={styles.rect3}>
          <FontAwesomeIcon
            name='automobile'
            style={styles.icon1}
          ></FontAwesomeIcon>
          <Text style={styles.midSized}>Mid Sized</Text>
        </View>
      </View>
      <Text style={styles.loremIpsum3}>
        This parking space is a residential and side by side parking type.
      </Text>
      <Text style={styles.loremIpsum4}>
        This parking has a lorem ipsum height limit.
      </Text>
      <View style={styles.rect4}>
        <Text style={styles.loremIpsum5}>Things you should know</Text>
        <Text style={styles.loremIpsum6}>
          In/out Privileges are only allowed for overnight guests at this
          location
        </Text>
        <Text style={styles.loremIpsum7}>
          ParkYouself reservation are not accepted for guests of the Loews hotel
        </Text>
      </View>
      <View style={styles.rect5}>
        <Text style={styles.gettingHere}>Getting here</Text>
        <Text style={styles.loremIpsum8}>
          Enter this location at 1755 N Highland Ave you must pull up to the
          front of the hotel to valet your vehicle. This is Loews Hotel valet
          garage, operated by Towne Park.
        </Text>
      </View>
      <View style={styles.rect6}>
        <View style={styles.rect7StackRow}>
          <View style={styles.rect7Stack}>
            <View style={styles.rect7}>
              <Text style={styles.loremIpsum9}>$3.20</Text>
            </View>
            <Text style={styles.perHour}>per hour</Text>
          </View>
          <MaterialButtonPrimary1
            caption='BUTTON'
            caption='SCHEDULE BOOKING'
            style={styles.materialButtonPrimary1}
          ></MaterialButtonPrimary1>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(39,170,225,0.15)',
  },
  rect: {
    width: 346,
    height: 279,
    backgroundColor: 'rgba(255,255,255,1)',
    marginTop: -472,
    marginLeft: -43,
  },
  loremIpsum: {
    fontFamily: 'roboto-500',
    color: 'rgba(39,170,225,1)',
    fontSize: 17,
  },
  loremIpsum2: {
    fontFamily: 'roboto-regular',
    color: 'rgba(39,170,225,1)',
    fontSize: 12,
    textDecorationLine: 'underline',
    marginLeft: 20,
    marginTop: 4,
  },
  loremIpsumRow: {
    height: 20,
    flexDirection: 'row',
    marginTop: 265,
    marginLeft: 31,
    marginRight: 22,
  },
  rect2: {
    width: 89,
    height: 81,
    backgroundColor: 'rgba(39,170,225,0.2)',
  },
  icon: {
    color: 'rgba(39,170,225,1)',
    fontSize: 30,
    height: 30,
    width: 34,
    marginTop: 15,
    marginLeft: 27,
  },
  compact: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginTop: 10,
    marginLeft: 15,
  },
  rect3: {
    width: 89,
    height: 81,
    backgroundColor: 'rgba(39,170,225,0.2)',
    marginLeft: 9,
  },
  icon1: {
    color: 'rgba(39,170,225,1)',
    fontSize: 30,
    height: 30,
    width: 34,
    marginTop: 15,
    marginLeft: 28,
  },
  midSized: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginTop: 10,
    marginLeft: 15,
  },
  rect2Row: {
    height: 81,
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 31,
    marginRight: 157,
  },
  loremIpsum3: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 17,
    marginTop: 26,
    marginLeft: 31,
    marginRight: 28,
  },
  loremIpsum4: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 17,
    marginTop: 11,
    marginLeft: 30,
  },
  rect4: {
    width: 346,
    height: 180,
    backgroundColor: 'rgba(255,255,255,1)',
    marginTop: 23,
    marginLeft: 16,
  },
  loremIpsum5: {
    fontFamily: 'roboto-500',
    color: 'rgba(39,170,225,1)',
    fontSize: 17,
    marginTop: 17,
    marginLeft: 18,
  },
  loremIpsum6: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 17,
    lineHeight: 21,
    marginTop: 16,
    marginLeft: 18,
    marginRight: 8,
  },
  loremIpsum7: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 17,
    lineHeight: 21,
    marginTop: 17,
    marginLeft: 18,
    marginRight: 8,
  },
  rect5: {
    width: 346,
    height: 170,
    backgroundColor: 'rgba(255,255,255,1)',
    marginLeft: 16,
  },
  gettingHere: {
    fontFamily: 'roboto-500',
    color: 'rgba(39,170,225,1)',
    fontSize: 17,
    marginTop: 18,
    marginLeft: 17,
  },
  loremIpsum8: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 17,
    lineHeight: 22,
    marginTop: 17,
    marginLeft: 16,
    marginRight: 10,
  },
  rect6: {
    width: 346,
    height: 63,
    backgroundColor: 'rgba(255,255,255,1)',
    flexDirection: 'row',
    marginTop: 17,
    marginLeft: 16,
  },
  rect7: {
    top: 0,
    left: 0,
    width: 126,
    height: 42,
    position: 'absolute',
  },
  loremIpsum9: {
    fontFamily: 'roboto-900',
    color: 'rgba(11,64,148,1)',
    fontSize: 26,
    marginTop: 6,
    marginLeft: 4,
  },
  perHour: {
    top: 15,
    left: 79,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    opacity: 0.53,
  },
  rect7Stack: {
    width: 131,
    height: 42,
  },
  materialButtonPrimary1: {
    height: 36,
    width: 163,
    marginLeft: 23,
    marginTop: 2,
  },
  rect7StackRow: {
    height: 42,
    flexDirection: 'row',
    flex: 1,
    marginRight: 15,
    marginLeft: 14,
    marginTop: 11,
  },
});

export default Untitled7;
