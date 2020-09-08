import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import Svg, { Ellipse } from 'react-native-svg';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialButtonPrimary4 from '../components/MaterialButtonPrimary4';
import FeatherIcon from 'react-native-vector-icons/Feather';

function Untitled11(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.loremIpsum}>906 Peg Shop St. Franklyn, NY 11209</Text>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <Text style={styles.loremIpsum2}>123</Text>
        </View>
        <IoniconsIcon name='md-star-half' style={styles.icon}></IoniconsIcon>
        <IoniconsIcon name='md-star' style={styles.icon2}></IoniconsIcon>
        <IoniconsIcon name='md-star' style={styles.icon3}></IoniconsIcon>
        <IoniconsIcon name='md-star' style={styles.icon4}></IoniconsIcon>
        <IoniconsIcon name='md-star' style={styles.icon5}></IoniconsIcon>
      </View>
      <View style={styles.ellipseStack}>
        <Svg viewBox='0 0 163.67 157.82' style={styles.ellipse}>
          <Ellipse
            stroke='rgba(230, 230, 230,1)'
            strokeWidth={0}
            fill='rgba(230, 230, 230,1)'
            cx={82}
            cy={79}
            rx={82}
            ry={79}
          ></Ellipse>
        </Svg>
        <FontAwesomeIcon
          name='thumbs-up'
          style={styles.icon6}
        ></FontAwesomeIcon>
      </View>
      <Text style={styles.goodJob}>Good Job!</Text>
      <Text style={styles.loremIpsum3}>
        Your parking area has been successfully booked
      </Text>
      <MaterialButtonPrimary4
        caption='BUTTON'
        caption='VIEW CODE'
        style={styles.materialButtonPrimary4}
      ></MaterialButtonPrimary4>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.goToHome}>GO TO HOME</Text>
      </TouchableOpacity>
      <View style={styles.rect2}>
        <View style={styles.icon7Row}>
          <FeatherIcon name='gift' style={styles.icon7}></FeatherIcon>
          <Text style={styles.sendGift}>SEND GIFT</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loremIpsum: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 28,
    marginTop: 74,
    marginLeft: 20,
  },
  rect: {
    top: 3,
    left: 0,
    width: 168,
    height: 27,
    position: 'absolute',
  },
  loremIpsum2: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    opacity: 0.68,
    marginTop: 7,
    marginLeft: 135,
  },
  icon: {
    top: 1,
    left: 101,
    position: 'absolute',
    color: 'rgba(251,209,54,1)',
    fontSize: 28,
  },
  icon2: {
    top: 0,
    left: 0,
    position: 'absolute',
    color: 'rgba(251,209,54,1)',
    fontSize: 28,
  },
  icon3: {
    top: 0,
    left: 26,
    position: 'absolute',
    color: 'rgba(251,209,54,1)',
    fontSize: 28,
  },
  icon4: {
    top: 0,
    left: 52,
    position: 'absolute',
    color: 'rgba(251,209,54,1)',
    fontSize: 28,
  },
  icon5: {
    top: 0,
    left: 76,
    position: 'absolute',
    color: 'rgba(251,209,54,1)',
    fontSize: 28,
  },
  rectStack: {
    width: 168,
    height: 32,
    marginTop: 13,
    marginLeft: 20,
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 164,
    height: 158,
    position: 'absolute',
    opacity: 0.62,
  },
  icon6: {
    top: 27,
    left: 40,
    position: 'absolute',
    color: 'rgba(39,170,225,1)',
    fontSize: 95,
  },
  ellipseStack: {
    width: 164,
    height: 158,
    marginTop: 46,
    marginLeft: 106,
  },
  goodJob: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 30,
    marginTop: 33,
    marginLeft: 121,
  },
  loremIpsum3: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    opacity: 0.5,
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 28,
    marginTop: 28,
    marginLeft: 64,
  },
  materialButtonPrimary4: {
    height: 40,
    width: 110,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    elevation: 60,
    shadowOpacity: 0.16,
    shadowRadius: 20,
    marginTop: 32,
    marginLeft: 136,
  },
  button: {
    width: 110,
    height: 40,
    borderWidth: 2,
    borderColor: 'rgba(39,170,225,1)',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    elevation: 60,
    shadowOpacity: 0.16,
    shadowRadius: 20,
    marginTop: 17,
    marginLeft: 136,
  },
  goToHome: {
    fontFamily: 'roboto-500',
    color: 'rgba(39,170,225,1)',
    marginTop: 12,
    marginLeft: 14,
  },
  rect2: {
    width: 151,
    height: 38,
    borderWidth: 2,
    borderColor: 'rgba(39,170,225,1)',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    elevation: 60,
    shadowOpacity: 0.16,
    shadowRadius: 20,
    flexDirection: 'row',
    marginTop: 43,
    marginLeft: 114,
  },
  icon7: {
    color: 'rgba(11,64,148,1)',
    fontSize: 20,
    height: 20,
    width: 20,
  },
  sendGift: {
    fontFamily: 'roboto-500',
    color: 'rgba(39,170,225,1)',
    fontSize: 13,
    marginLeft: 15,
    marginTop: 4,
  },
  icon7Row: {
    height: 20,
    flexDirection: 'row',
    flex: 1,
    marginRight: 40,
    marginLeft: 12,
    marginTop: 8,
  },
});

export default Untitled11;
