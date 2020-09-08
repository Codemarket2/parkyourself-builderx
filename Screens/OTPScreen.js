import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function Untitled1(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo11.png')}
        resizeMode='contain'
        style={styles.image}
      ></Image>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <Text style={styles.loremIpsum3}>Enter your Temporary Code</Text>
          <View style={styles.rect}>
            <View style={styles.enterCodeRow}>
              <Text style={styles.enterCode}>ENTER CODE :</Text>
              <TextInput
                placeholder='XXXXXX'
                placeholderTextColor='rgba(237,235,235,0.62)'
                style={styles.xxxxxx}
              ></TextInput>
            </View>
          </View>
          <Text style={styles.resendOtp}>Resend OTP</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.enter}>Enter</Text>
          </TouchableOpacity>
          <Text style={styles.loremIpsum2}>
            By creating or using an Account you agree to the {'\n'}ParkYourself
            Terms &amp; Conditions and Privacy Policy
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 293,
    height: 202,
    marginTop: 82,
    marginLeft: 41,
  },
  scrollArea: {
    width: 375,
    height: 521,
    backgroundColor: 'rgba(39,170,225,1)',
    marginTop: 49,
  },
  scrollArea_contentContainerStyle: {
    height: 521,
    width: 375,
  },
  loremIpsum3: {
    fontFamily: 'roboto-500',
    color: 'rgba(246,246,246,1)',
    fontSize: 24,
    marginTop: 59,
    marginLeft: 41,
  },
  rect: {
    width: 314,
    height: 86,
    borderWidth: 2,
    borderColor: 'rgba(252,252,252,1)',
    borderRadius: 7,
    flexDirection: 'row',
    marginTop: 38,
    marginLeft: 30,
  },
  enterCode: {
    fontFamily: 'roboto-500',
    color: 'rgba(237,235,235,1)',
    fontSize: 22,
    opacity: 0.62,
  },
  xxxxxx: {
    fontFamily: 'roboto-regular',
    color: 'rgba(250,248,248,1)',
    height: 26,
    width: 94,
    fontSize: 22,
    marginLeft: 13,
  },
  enterCodeRow: {
    height: 26,
    flexDirection: 'row',
    flex: 1,
    marginRight: 31,
    marginLeft: 36,
    marginTop: 30,
  },
  resendOtp: {
    fontFamily: 'roboto-regular',
    color: 'rgba(231,229,229,1)',
    textDecorationLine: 'underline',
    marginTop: 13,
    marginLeft: 266,
  },
  button: {
    width: 314,
    height: 56,
    backgroundColor: 'rgba(249,249,249,1)',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    elevation: 150,
    shadowOpacity: 0.33,
    shadowRadius: 50,
    marginTop: 36,
    marginLeft: 30,
  },
  enter: {
    fontFamily: 'roboto-500',
    color: 'rgba(39,170,225,1)',
    fontSize: 17,
    marginTop: 18,
    marginLeft: 138,
  },
  loremIpsum2: {
    fontFamily: 'roboto-regular',
    color: 'rgba(245,245,245,1)',
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 20,
    marginTop: 34,
    marginLeft: 14,
  },
});

export default Untitled1;
