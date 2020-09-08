import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MapView from 'react-native-maps';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import SimpleLineIconsIcon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

function Untitled4(props) {
  return (
    <View style={styles.container}>
      <View style={styles.mapViewStack}>
        <MapView
          provider={MapView.PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={[
            {
              elementType: 'geometry',
              stylers: [
                {
                  color: '#f5f5f5',
                },
              ],
            },
            {
              elementType: 'labels.icon',
              stylers: [
                {
                  visibility: 'off',
                },
              ],
            },
            {
              elementType: 'labels.text.fill',
              stylers: [
                {
                  color: '#616161',
                },
              ],
            },
            {
              elementType: 'labels.text.stroke',
              stylers: [
                {
                  color: '#f5f5f5',
                },
              ],
            },
            {
              featureType: 'administrative.land_parcel',
              elementType: 'labels.text.fill',
              stylers: [
                {
                  color: '#bdbdbd',
                },
              ],
            },
            {
              featureType: 'poi',
              elementType: 'geometry',
              stylers: [
                {
                  color: '#eeeeee',
                },
              ],
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [
                {
                  color: '#757575',
                },
              ],
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [
                {
                  color: '#e5e5e5',
                },
              ],
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [
                {
                  color: '#9e9e9e',
                },
              ],
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [
                {
                  color: '#ffffff',
                },
              ],
            },
            {
              featureType: 'road.arterial',
              elementType: 'labels.text.fill',
              stylers: [
                {
                  color: '#757575',
                },
              ],
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [
                {
                  color: '#dadada',
                },
              ],
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [
                {
                  color: '#616161',
                },
              ],
            },
            {
              featureType: 'road.local',
              elementType: 'labels.text.fill',
              stylers: [
                {
                  color: '#9e9e9e',
                },
              ],
            },
            {
              featureType: 'transit.line',
              elementType: 'geometry',
              stylers: [
                {
                  color: '#e5e5e5',
                },
              ],
            },
            {
              featureType: 'transit.station',
              elementType: 'geometry',
              stylers: [
                {
                  color: '#eeeeee',
                },
              ],
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [
                {
                  color: '#c9c9c9',
                },
              ],
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [
                {
                  color: '#9e9e9e',
                },
              ],
            },
          ]}
          style={styles.mapView}
        ></MapView>
        <View style={styles.rect}>
          <View style={styles.rect2Stack}>
            <View style={styles.rect2}>
              <View style={styles.iconRow}>
                <FontAwesomeIcon
                  name='calendar-o'
                  style={styles.icon}
                ></FontAwesomeIcon>
                <Text style={styles.daily}>DAILY</Text>
              </View>
            </View>
            <View style={styles.rect3}>
              <View style={styles.icon2Row}>
                <FontAwesomeIcon
                  name='calendar'
                  style={styles.icon2}
                ></FontAwesomeIcon>
                <Text style={styles.monthly}>MONTHLY</Text>
              </View>
            </View>
          </View>
          <View style={styles.rect4}>
            <View style={styles.icon3Row}>
              <SimpleLineIconsIcon
                name='magnifier'
                style={styles.icon3}
              ></SimpleLineIconsIcon>
              <TextInput
                placeholder='Location, Address, Event Name'
                placeholderTextColor='rgba(158,158,158,1)'
                style={styles.placeholder}
              ></TextInput>
              <MaterialIconsIcon
                name='gps-fixed'
                style={styles.icon4}
              ></MaterialIconsIcon>
            </View>
          </View>
          <View style={styles.rect5Row}>
            <View style={styles.rect5}>
              <Text style={styles.startDateTime}>Start Date/Time</Text>
            </View>
            <View style={styles.rect6}>
              <Text style={styles.endDateTime}>End Date/Time</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button2}>
          <EntypoIcon name='location-pin' style={styles.icon5}></EntypoIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesomeIcon
            name='th-list'
            style={styles.icon6}
          ></FontAwesomeIcon>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapView: {
    position: 'absolute',
    top: 46,
    height: 702,
    width: 375,
    left: 0,
  },
  rect: {
    top: 0,
    left: 0,
    width: 375,
    height: 169,
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,1)',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 30,
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  rect2: {
    top: 2,
    left: 0,
    width: 100,
    height: 37,
    position: 'absolute',
    flexDirection: 'row',
  },
  icon: {
    color: 'rgba(11,64,148,1)',
    fontSize: 25,
    height: 25,
    width: 23,
  },
  daily: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 18,
    marginLeft: 9,
    marginTop: 2,
  },
  iconRow: {
    height: 25,
    flexDirection: 'row',
    flex: 1,
    marginRight: 11,
    marginLeft: 10,
    marginTop: 6,
  },
  rect3: {
    top: 0,
    left: 99,
    width: 132,
    height: 37,
    position: 'absolute',
    flexDirection: 'row',
  },
  icon2: {
    color: 'rgba(11,64,148,1)',
    fontSize: 25,
    opacity: 0.56,
    height: 25,
    width: 23,
  },
  monthly: {
    fontFamily: 'roboto-300',
    color: 'rgba(11,64,148,1)',
    fontSize: 18,
    opacity: 0.84,
    marginLeft: 8,
    marginTop: 3,
  },
  icon2Row: {
    height: 25,
    flexDirection: 'row',
    flex: 1,
    marginRight: 9,
    marginLeft: 11,
    marginTop: 8,
  },
  rect2Stack: {
    width: 231,
    height: 39,
    marginTop: 2,
    marginLeft: 20,
  },
  rect4: {
    width: 340,
    height: 40,
    borderWidth: 1,
    borderColor: 'rgba(215,212,212,1)',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 24,
    shadowOpacity: 0.13,
    shadowRadius: 8,
    flexDirection: 'row',
    marginTop: 9,
    marginLeft: 20,
  },
  icon3: {
    color: 'rgba(128,128,128,1)',
    fontSize: 19,
    height: 21,
    width: 19,
    marginTop: 2,
  },
  placeholder: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 28,
    width: 258,
    marginLeft: 14,
  },
  icon4: {
    color: 'rgba(39,170,225,1)',
    fontSize: 21,
    height: 21,
    width: 21,
    marginLeft: 5,
    marginTop: 2,
  },
  icon3Row: {
    height: 28,
    flexDirection: 'row',
    flex: 1,
    marginRight: 13,
    marginLeft: 10,
    marginTop: 7,
  },
  rect5: {
    width: 164,
    height: 59,
    borderWidth: 1,
    borderColor: 'rgba(232,232,232,1)',
  },
  startDateTime: {
    fontFamily: 'roboto-regular',
    color: 'rgba(158,158,158,1)',
    marginTop: 7,
    marginLeft: 14,
  },
  rect6: {
    width: 165,
    height: 59,
    borderWidth: 1,
    borderColor: 'rgba(232,232,232,1)',
    marginLeft: 11,
  },
  endDateTime: {
    fontFamily: 'roboto-regular',
    color: 'rgba(158,158,158,1)',
    marginTop: 9,
    marginLeft: 14,
  },
  rect5Row: {
    height: 59,
    flexDirection: 'row',
    marginTop: 11,
    marginLeft: 20,
    marginRight: 15,
  },
  button2: {
    top: 184,
    left: 288,
    width: 38,
    height: 35,
    position: 'absolute',
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    backgroundColor: 'rgba(255,255,255,1)',
    borderWidth: 1,
    borderColor: 'rgba(208,208,208,1)',
  },
  icon5: {
    color: 'rgba(39,170,225,1)',
    fontSize: 25,
    height: 27,
    width: 25,
    marginTop: 4,
    marginLeft: 8,
  },
  button: {
    top: 184,
    left: 324,
    width: 39,
    height: 35,
    position: 'absolute',
    backgroundColor: 'rgba(252,252,252,1)',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(208,205,205,1)',
    borderLeftWidth: 1,
  },
  icon6: {
    color: 'rgba(11,64,148,1)',
    fontSize: 20,
    height: 20,
    width: 20,
    marginTop: 8,
    marginLeft: 9,
  },
  mapViewStack: {
    width: 375,
    height: 748,
    marginTop: 56,
  },
});

export default Untitled4;
