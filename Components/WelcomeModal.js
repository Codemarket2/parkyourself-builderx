import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Svg, { Ellipse } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';

function Untitled2(props) {
  return (
    <View style={styles.rect}>
      <View style={styles.ellipseStack}>
        <Svg viewBox='0 0 181.34 168.14' style={styles.ellipse}>
          <Ellipse
            stroke='rgba(39,170,225,0.47)'
            strokeWidth={20}
            fill='rgba(39,170,225,1)'
            cx={91}
            cy={84}
            rx={81}
            ry={74}
          ></Ellipse>
        </Svg>
        <Icon name='thumbs-up' style={styles.icon}></Icon>
      </View>
      <Text style={styles.wellDone}>Well Done !</Text>
      <Text style={styles.loremIpsum}>
        Your mobile number has been successfully verified
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    width: 329,
    height: 444,
    backgroundColor: 'rgba(255,255,255,1)',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 7,
    marginTop: 163,
    marginLeft: 25,
  },
  ellipse: {
    top: 0,
    width: 181,
    height: 168,
    position: 'absolute',
    opacity: 0.82,
    left: 0,
  },
  icon: {
    top: 26,
    position: 'absolute',
    color: 'rgba(249,246,246,1)',
    fontSize: 116,
    left: 37,
    height: 116,
    width: 108,
  },
  ellipseStack: {
    width: 181,
    height: 168,
    marginTop: 40,
    marginLeft: 72,
  },
  wellDone: {
    fontFamily: 'roboto-500',
    color: 'rgba(14,67,149,1)',
    fontSize: 28,
    marginTop: 61,
    marginLeft: 93,
  },
  loremIpsum: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 20,
    textAlign: 'center',
    opacity: 0.57,
    marginTop: 35,
    marginLeft: 44,
  },
});

export default Untitled2;
