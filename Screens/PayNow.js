import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import Svg, { Ellipse } from 'react-native-svg';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialButtonPrimary3 from '../components/MaterialButtonPrimary3';

function Untitled8(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.loremIpsum}>906 Peg Shop St. Franklyn, NY 11209</Text>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <View style={styles.icon1Row}>
            <IoniconsIcon name='ios-star' style={styles.icon1}></IoniconsIcon>
            <IoniconsIcon name='ios-star' style={styles.icon2}></IoniconsIcon>
            <IoniconsIcon name='ios-star' style={styles.icon3}></IoniconsIcon>
            <IoniconsIcon
              name='ios-star-half'
              style={styles.icon4}
            ></IoniconsIcon>
            <Text style={styles.loremIpsum2}>656</Text>
          </View>
        </View>
        <IoniconsIcon name='ios-star' style={styles.icon}></IoniconsIcon>
      </View>
      <Image
        source={require('../assets/images/parking.jpg')}
        resizeMode='stretch'
        style={styles.image}
      ></Image>
      <View style={styles.rect2StackStack}>
        <View style={styles.rect2Stack}>
          <View style={styles.rect2}>
            <View style={styles.rect3}>
              <View style={styles.arrivingRow}>
                <Text style={styles.arriving}>Arriving</Text>
                <Text style={styles.loremIpsum3}>7/01/2019, 9:00PM</Text>
                <Text style={styles.change}>Change</Text>
              </View>
            </View>
            <View style={styles.rect5Stack}>
              <View style={styles.rect5}>
                <View style={styles.durationRow}>
                  <Text style={styles.duration}>Duration</Text>
                  <Text style={styles.loremIpsum5}>9 hours, 0 minutes</Text>
                </View>
              </View>
              <View style={styles.rect6}>
                <View style={styles.vehicleRow}>
                  <Text style={styles.vehicle}>Vehicle</Text>
                  <Text style={styles.loremIpsum6}>2019 BMW X6</Text>
                  <View style={styles.ellipseStack}>
                    <Svg viewBox='0 0 22 21.81' style={styles.ellipse}>
                      <Ellipse
                        stroke='rgba(230, 230, 230,1)'
                        strokeWidth={0}
                        fill='rgba(39,170,225,1)'
                        cx={11}
                        cy={11}
                        rx={11}
                        ry={11}
                      ></Ellipse>
                    </Svg>
                    <Text style={styles.loremIpsum7}>+</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.rect8}>
              <View style={styles.paymentRow}>
                <Text style={styles.payment}>Payment</Text>
                <Text style={styles.loremIpsum8}>$3.20</Text>
              </View>
            </View>
            <View style={styles.cardNumberRow}>
              <Text style={styles.cardNumber}>Card Number</Text>
              <FontAwesomeIcon
                name='cc-visa'
                style={styles.icon5}
              ></FontAwesomeIcon>
              <Text style={styles.xxxXxxxXxxx0147}>xxx-xxxx-xxxx-0147</Text>
              <View style={styles.ellipse1Stack}>
                <Svg viewBox='0 0 22 21.81' style={styles.ellipse1}>
                  <Ellipse
                    stroke='rgba(230, 230, 230,1)'
                    strokeWidth={0}
                    fill='rgba(39,170,225,1)'
                    cx={11}
                    cy={11}
                    rx={11}
                    ry={11}
                  ></Ellipse>
                </Svg>
                <Text style={styles.loremIpsum9}>+</Text>
              </View>
            </View>
            <MaterialButtonPrimary3
              caption='PAY $3.20'
              style={styles.materialButtonPrimary3}
            ></MaterialButtonPrimary3>
          </View>
          <View style={styles.rect4}>
            <View style={styles.leavingRow}>
              <Text style={styles.leaving}>Leaving</Text>
              <Text style={styles.loremIpsum4}>7/02/2019, 6:00AM</Text>
              <Text style={styles.change2}>Change</Text>
            </View>
          </View>
          <View style={styles.rect7}>
            <View style={styles.profileCategoryRow}>
              <Text style={styles.profileCategory}>Profile Category</Text>
              <View style={styles.rect9}>
                <View style={styles.rect10Row}>
                  <View style={styles.rect10}>
                    <Text style={styles.business}>Business</Text>
                  </View>
                  <Text style={styles.personal}>Personal</Text>
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.loremIpsum10}>
            By Making payment you indicate your acceptance of our Terms &amp;
            Conditions and Privacy Policy.
          </Text>
        </View>
        <View style={styles.loremIpsum11Stack}>
          <Text style={styles.loremIpsum11}>656</Text>
          <View style={styles.rect11}></View>
        </View>
        <IoniconsIcon name='ios-star-half' style={styles.icon6}></IoniconsIcon>
        <IoniconsIcon name='ios-star' style={styles.icon7}></IoniconsIcon>
        <IoniconsIcon name='ios-star' style={styles.icon8}></IoniconsIcon>
        <IoniconsIcon name='ios-star' style={styles.icon9}></IoniconsIcon>
        <IoniconsIcon name='ios-star' style={styles.icon10}></IoniconsIcon>
        <Text style={styles.loremIpsum12}>
          906 Peg Shop St. Franklyn, NY 11209
        </Text>
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
    marginTop: 72,
    marginLeft: 18,
    marginRight: 17,
  },
  rect: {
    top: 0,
    left: 1,
    width: 170,
    height: 32,
    position: 'absolute',
    flexDirection: 'row',
  },
  icon1: {
    color: 'rgba(248,231,28,1)',
    fontSize: 22,
    height: 24,
    width: 19,
  },
  icon2: {
    color: 'rgba(248,231,28,1)',
    fontSize: 22,
    height: 24,
    width: 19,
    marginLeft: 5,
  },
  icon3: {
    color: 'rgba(248,231,28,1)',
    fontSize: 22,
    height: 24,
    width: 19,
    marginLeft: 5,
  },
  icon4: {
    color: 'rgba(248,231,28,1)',
    fontSize: 22,
    height: 24,
    width: 19,
    marginLeft: 5,
  },
  loremIpsum2: {
    fontFamily: 'roboto-regular',
    color: 'rgba(130,130,130,1)',
    marginLeft: 10,
    marginTop: 5,
  },
  icon1Row: {
    height: 24,
    flexDirection: 'row',
    flex: 1,
    marginRight: 22,
    marginLeft: 24,
    marginTop: 3,
  },
  icon: {
    top: 3,
    left: 0,
    position: 'absolute',
    color: 'rgba(248,231,28,1)',
    fontSize: 22,
  },
  rectStack: {
    width: 171,
    height: 32,
    marginTop: 12,
    marginLeft: 17,
  },
  image: {
    width: 346,
    height: 154,
    marginTop: 9,
    marginLeft: 16,
  },
  rect2: {
    top: 0,
    left: 0,
    width: 346,
    height: 470,
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#000000',
  },
  rect3: {
    width: 346,
    height: 49,
    flexDirection: 'row',
  },
  arriving: {
    fontFamily: 'roboto-regular',
    color: 'rgba(179,177,177,1)',
    fontSize: 16,
  },
  loremIpsum3: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 15,
    marginLeft: 92,
    marginTop: 3,
  },
  change: {
    fontFamily: 'roboto-500',
    color: 'rgba(39,170,225,1)',
    fontSize: 12,
    marginLeft: 5,
    marginTop: 6,
  },
  arrivingRow: {
    height: 21,
    flexDirection: 'row',
    flex: 1,
    marginRight: 5,
    marginLeft: 16,
    marginTop: 16,
  },
  rect5: {
    top: 0,
    left: 0,
    width: 346,
    height: 49,
    position: 'absolute',
    flexDirection: 'row',
  },
  duration: {
    fontFamily: 'roboto-regular',
    color: 'rgba(179,177,177,1)',
    fontSize: 16,
  },
  loremIpsum5: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 15,
    marginLeft: 133,
  },
  durationRow: {
    height: 19,
    flexDirection: 'row',
    flex: 1,
    marginRight: 12,
    marginLeft: 16,
    marginTop: 18,
  },
  rect6: {
    top: 48,
    left: 0,
    width: 346,
    height: 49,
    position: 'absolute',
    flexDirection: 'row',
  },
  vehicle: {
    fontFamily: 'roboto-regular',
    color: 'rgba(179,177,177,1)',
    fontSize: 16,
    marginTop: 4,
  },
  loremIpsum6: {
    fontFamily: 'roboto-700',
    color: 'rgba(39,170,225,1)',
    fontSize: 15,
    marginLeft: 134,
    marginTop: 5,
  },
  ellipse: {
    top: 2,
    left: 0,
    width: 22,
    height: 22,
    position: 'absolute',
  },
  loremIpsum7: {
    top: 0,
    left: 5,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 20,
  },
  ellipseStack: {
    width: 22,
    height: 25,
    marginLeft: 13,
  },
  vehicleRow: {
    height: 25,
    flexDirection: 'row',
    flex: 1,
    marginRight: 12,
    marginLeft: 17,
    marginTop: 12,
  },
  rect5Stack: {
    width: 346,
    height: 97,
    marginTop: 47,
  },
  rect8: {
    width: 346,
    height: 49,
    flexDirection: 'row',
    marginTop: 47,
  },
  payment: {
    fontFamily: 'roboto-regular',
    color: 'rgba(179,177,177,1)',
    fontSize: 16,
  },
  loremIpsum8: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 16,
    marginLeft: 210,
  },
  paymentRow: {
    height: 19,
    flexDirection: 'row',
    flex: 1,
    marginRight: 14,
    marginLeft: 18,
    marginTop: 17,
  },
  cardNumber: {
    fontFamily: 'roboto-regular',
    color: 'rgba(179,177,177,1)',
    fontSize: 16,
    marginTop: 5,
  },
  icon5: {
    color: 'rgba(11,64,148,1)',
    fontSize: 25,
    height: 25,
    width: 32,
    marginLeft: 19,
    marginTop: 2,
  },
  xxxXxxxXxxx0147: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 15,
    marginLeft: 6,
    marginTop: 6,
  },
  ellipse1: {
    top: 3,
    left: 0,
    width: 22,
    height: 22,
    position: 'absolute',
  },
  loremIpsum9: {
    top: 0,
    left: 5,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 20,
  },
  ellipse1Stack: {
    width: 22,
    height: 25,
    marginLeft: 8,
  },
  cardNumberRow: {
    height: 27,
    flexDirection: 'row',
    marginTop: 11,
    marginLeft: 18,
    marginRight: 10,
  },
  materialButtonPrimary3: {
    height: 36,
    width: 100,
    marginTop: 34,
    marginLeft: 125,
  },
  rect4: {
    top: 48,
    left: 1,
    width: 346,
    height: 49,
    position: 'absolute',
    flexDirection: 'row',
  },
  leaving: {
    fontFamily: 'roboto-regular',
    color: 'rgba(179,177,177,1)',
    fontSize: 16,
  },
  loremIpsum4: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 15,
    marginLeft: 90,
    marginTop: 1,
  },
  change2: {
    fontFamily: 'roboto-500',
    color: 'rgba(39,170,225,1)',
    fontSize: 12,
    marginLeft: 5,
    marginTop: 4,
  },
  leavingRow: {
    height: 19,
    flexDirection: 'row',
    flex: 1,
    marginRight: 8,
    marginLeft: 15,
    marginTop: 18,
  },
  rect7: {
    top: 191,
    left: 1,
    width: 346,
    height: 49,
    position: 'absolute',
    flexDirection: 'row',
  },
  profileCategory: {
    fontFamily: 'roboto-regular',
    color: 'rgba(179,177,177,1)',
    fontSize: 16,
    marginTop: 8,
  },
  rect9: {
    width: 108,
    height: 32,
    backgroundColor: 'rgba(216,212,212,1)',
    borderRadius: 38,
    flexDirection: 'row',
    marginLeft: 92,
  },
  rect10: {
    width: 55,
    height: 25,
    backgroundColor: 'rgba(39,170,225,1)',
    borderRadius: 57,
  },
  business: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 9,
    marginTop: 6,
    marginLeft: 9,
  },
  personal: {
    fontFamily: 'roboto-regular',
    color: 'rgba(39,170,225,1)',
    fontSize: 9,
    marginLeft: 7,
    marginTop: 8,
  },
  rect10Row: {
    height: 25,
    flexDirection: 'row',
    flex: 1,
    marginRight: 8,
    marginLeft: 3,
    marginTop: 3,
  },
  profileCategoryRow: {
    height: 32,
    flexDirection: 'row',
    flex: 1,
    marginRight: 16,
    marginLeft: 16,
    marginTop: 10,
  },
  loremIpsum10: {
    top: 412,
    left: 15,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    right: 0,
  },
  rect2Stack: {
    top: 0,
    left: 0,
    height: 470,
    position: 'absolute',
    right: 331,
  },
  loremIpsum11: {
    top: 7,
    left: 125,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: 'rgba(130,130,130,1)',
  },
  rect11: {
    top: 0,
    left: 0,
    width: 170,
    height: 32,
    position: 'absolute',
  },
  loremIpsum11Stack: {
    top: 186,
    left: 381,
    width: 170,
    height: 32,
    position: 'absolute',
  },
  icon6: {
    top: 189,
    left: 477,
    position: 'absolute',
    color: 'rgba(248,231,28,1)',
    fontSize: 22,
  },
  icon7: {
    top: 189,
    left: 453,
    position: 'absolute',
    color: 'rgba(248,231,28,1)',
    fontSize: 22,
  },
  icon8: {
    top: 189,
    left: 429,
    position: 'absolute',
    color: 'rgba(248,231,28,1)',
    fontSize: 22,
  },
  icon9: {
    top: 189,
    left: 405,
    position: 'absolute',
    color: 'rgba(248,231,28,1)',
    fontSize: 22,
  },
  icon10: {
    top: 189,
    left: 380,
    position: 'absolute',
    color: 'rgba(248,231,28,1)',
    fontSize: 22,
  },
  loremIpsum12: {
    top: 106,
    left: 381,
    position: 'absolute',
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 28,
    right: 0,
  },
  rect2StackStack: {
    height: 470,
    marginTop: 20,
    marginLeft: 16,
    marginRight: -362,
  },
});

export default Untitled8;
