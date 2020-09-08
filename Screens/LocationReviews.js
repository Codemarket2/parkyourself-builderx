import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Svg, { Ellipse } from 'react-native-svg';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

function Untitled9(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.reviews}>Reviews</Text>
      <Text style={styles.loremIpsum}>906 Peg Shop St. Franklyn, NY 11209</Text>
      <View style={styles.rect}>
        <View style={styles.rect2Stack}>
          <View style={styles.rect2}>
            <View style={styles.rect3Row}>
              <View style={styles.rect3}>
                <Svg viewBox='0 0 60.22 60.19' style={styles.ellipse}>
                  <Ellipse
                    stroke='rgba(230, 230, 230,1)'
                    strokeWidth={0}
                    fill='rgba(194,194,194,1)'
                    cx={30}
                    cy={30}
                    rx={30}
                    ry={30}
                  ></Ellipse>
                </Svg>
              </View>
              <View style={styles.andrewRowColumn}>
                <View style={styles.andrewRow}>
                  <Text style={styles.andrew}>Andrew</Text>
                  <Text style={styles.may302019}>May 30, 2019</Text>
                </View>
                <View style={styles.rect4Stack}>
                  <View style={styles.rect4}></View>
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
                  <IoniconsIcon
                    name='ios-star'
                    style={styles.icon6}
                  ></IoniconsIcon>
                </View>
              </View>
            </View>
          </View>
          <EntypoIcon name='user' style={styles.icon}></EntypoIcon>
        </View>
        <Text style={styles.loremIpsum2}>Very close to Campden market.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  reviews: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 28,
    marginTop: 68,
    marginLeft: 20,
  },
  loremIpsum: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 19,
    opacity: 0.75,
    marginTop: 13,
    marginLeft: 20,
  },
  rect: {
    width: 375,
    height: 158,
    borderWidth: 1,
    borderColor: 'rgba(232,228,228,1)',
    marginTop: 19,
  },
  rect2: {
    top: -1,
    left: 0,
    width: 334,
    height: 70,
    position: 'absolute',
  },
  rect3: {
    width: 79,
    height: 70,
    marginTop: -1,
  },
  ellipse: {
    width: 60,
    height: 60,
    marginTop: 9,
    marginLeft: 11,
  },
  andrew: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 17,
  },
  may302019: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    opacity: 0.52,
    marginLeft: 14,
    marginTop: 2,
  },
  andrewRow: {
    height: 20,
    flexDirection: 'row',
  },
  rect4: {
    top: 2,
    left: 0,
    width: 136,
    height: 26,
    position: 'absolute',
  },
  icon2: {
    top: 0,
    left: 1,
    position: 'absolute',
    color: 'rgba(251,209,54,1)',
    fontSize: 25,
    height: 27,
    width: 21,
  },
  icon3: {
    top: 0,
    left: 26,
    position: 'absolute',
    color: 'rgba(251,209,54,1)',
    fontSize: 25,
    height: 27,
    width: 22,
  },
  icon4: {
    top: 0,
    left: 51,
    position: 'absolute',
    color: 'rgba(251,209,54,1)',
    fontSize: 25,
    height: 27,
    width: 22,
  },
  icon5: {
    top: 0,
    left: 75,
    position: 'absolute',
    color: 'rgba(251,209,54,1)',
    fontSize: 25,
    height: 27,
    width: 22,
  },
  icon6: {
    top: 0,
    left: 100,
    position: 'absolute',
    color: 'rgba(206,206,204,1)',
    fontSize: 25,
    height: 27,
    width: 22,
  },
  rect4Stack: {
    width: 136,
    height: 28,
    marginTop: 4,
  },
  andrewRowColumn: {
    width: 155,
    marginLeft: 11,
    marginTop: 14,
    marginBottom: 4,
  },
  rect3Row: {
    height: 70,
    flexDirection: 'row',
    marginRight: 89,
  },
  icon: {
    top: 13,
    left: 16,
    position: 'absolute',
    color: 'rgba(255,255,255,1)',
    fontSize: 53,
    height: 58,
    width: 53,
  },
  rect2Stack: {
    width: 334,
    height: 71,
    marginTop: 18,
    marginLeft: 22,
  },
  loremIpsum2: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 15,
    opacity: 0.71,
    marginTop: 20,
    marginLeft: 34,
  },
});

export default Untitled9;
