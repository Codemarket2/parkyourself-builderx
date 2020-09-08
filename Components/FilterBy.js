import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCheckbox from '../components/MaterialCheckbox';

function Untitled5(props) {
  return (
    <View style={styles.rect}>
      <View style={styles.iconRow}>
        <Icon name='filter-variant' style={styles.icon}></Icon>
        <Text style={styles.filterBy}>FILTER BY</Text>
      </View>
      <View style={styles.rect2StackStack}>
        <View style={styles.rect2Stack}>
          <View style={styles.rect2}>
            <View style={styles.materialCheckboxRow}>
              <MaterialCheckbox
                style={styles.materialCheckbox}
              ></MaterialCheckbox>
              <Text style={styles.all}>All</Text>
            </View>
          </View>
          <View style={styles.rect6}>
            <View style={styles.materialCheckbox1Row}>
              <MaterialCheckbox
                style={styles.materialCheckbox1}
              ></MaterialCheckbox>
              <Text style={styles.price}>Price</Text>
            </View>
          </View>
        </View>
        <View style={styles.rect4Stack}>
          <View style={styles.rect4}>
            <View style={styles.materialCheckbox3Row}>
              <MaterialCheckbox
                style={styles.materialCheckbox3}
              ></MaterialCheckbox>
              <Text style={styles.compact}>Compact</Text>
            </View>
          </View>
          <View style={styles.rect5}>
            <View style={styles.materialCheckbox2Row}>
              <MaterialCheckbox
                style={styles.materialCheckbox2}
              ></MaterialCheckbox>
              <Text style={styles.distance}>Distance</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.rect3StackStack}>
        <View style={styles.rect3Stack}>
          <View style={styles.rect3}>
            <View style={styles.materialCheckbox4Row}>
              <MaterialCheckbox
                style={styles.materialCheckbox4}
              ></MaterialCheckbox>
              <Text style={styles.midSized}>Mid Sized</Text>
            </View>
          </View>
          <View style={styles.rect8}>
            <View style={styles.materialCheckbox5Row}>
              <MaterialCheckbox
                style={styles.materialCheckbox5}
              ></MaterialCheckbox>
              <Text style={styles.largeSized}>Large Sized</Text>
            </View>
          </View>
        </View>
        <View style={styles.rect7}>
          <View style={styles.materialCheckbox6Row}>
            <MaterialCheckbox
              style={styles.materialCheckbox6}
            ></MaterialCheckbox>
            <Text style={styles.overSized}>Over Sized</Text>
          </View>
        </View>
      </View>
      <Text style={styles.features}>FEATURES</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.guarded}>Guarded</Text>
        </TouchableOpacity>
        <View style={styles.rect9}>
          <Text style={styles.gated}>Gated</Text>
        </View>
      </View>
      <View style={styles.rect10Row}>
        <View style={styles.rect10}>
          <Text style={styles.cctv}>CCTV</Text>
        </View>
        <View style={styles.rect11}>
          <Text style={styles.sheltered}>Sheltered</Text>
        </View>
      </View>
      <View style={styles.rect12}>
        <Text style={styles.disabledAccess}>Disabled Access</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    width: 237,
    height: 641,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000000',
    marginTop: 123,
    marginLeft: 60,
  },
  icon: {
    color: 'rgba(76,75,75,1)',
    fontSize: 45,
    height: 49,
    width: 45,
  },
  filterBy: {
    fontFamily: 'roboto-500',
    color: 'rgba(93,92,92,1)',
    fontSize: 22,
    marginLeft: 12,
    marginTop: 14,
  },
  iconRow: {
    height: 49,
    flexDirection: 'row',
    marginTop: 1,
    marginLeft: 21,
    marginRight: 59,
  },
  rect2: {
    top: 0,
    left: 0,
    width: 237,
    height: 61,
    position: 'absolute',
    borderWidth: 2,
    borderColor: 'rgba(39,170,225,1)',
    flexDirection: 'row',
  },
  materialCheckbox: {
    height: 40,
    width: 40,
  },
  all: {
    fontFamily: 'roboto-500',
    color: 'rgba(118,117,117,1)',
    fontSize: 22,
    marginLeft: 11,
    marginTop: 9,
  },
  materialCheckboxRow: {
    height: 40,
    flexDirection: 'row',
    flex: 1,
    marginRight: 141,
    marginLeft: 19,
    marginTop: 11,
  },
  rect6: {
    top: 60,
    left: 0,
    width: 237,
    height: 61,
    position: 'absolute',
    borderWidth: 2,
    borderColor: 'rgba(39,170,225,1)',
    flexDirection: 'row',
  },
  materialCheckbox1: {
    height: 40,
    width: 40,
  },
  price: {
    fontFamily: 'roboto-500',
    color: 'rgba(118,117,117,1)',
    fontSize: 22,
    marginLeft: 7,
    marginTop: 8,
  },
  materialCheckbox1Row: {
    height: 40,
    flexDirection: 'row',
    flex: 1,
    marginRight: 120,
    marginLeft: 19,
    marginTop: 10,
  },
  rect2Stack: {
    top: 0,
    left: 0,
    width: 237,
    height: 121,
    position: 'absolute',
  },
  rect4: {
    top: 57,
    left: 0,
    width: 237,
    height: 61,
    position: 'absolute',
    borderWidth: 2,
    borderColor: 'rgba(39,170,225,1)',
    flexDirection: 'row',
  },
  materialCheckbox3: {
    height: 40,
    width: 40,
  },
  compact: {
    fontFamily: 'roboto-500',
    color: 'rgba(118,117,117,1)',
    lineHeight: 0,
    fontSize: 22,
    marginLeft: 11,
    marginTop: 17,
  },
  materialCheckbox3Row: {
    height: 40,
    flexDirection: 'row',
    flex: 1,
    marginRight: 77,
    marginLeft: 20,
    marginTop: 14,
  },
  rect5: {
    top: 0,
    left: 0,
    width: 237,
    height: 61,
    position: 'absolute',
    borderWidth: 2,
    borderColor: 'rgba(39,170,225,1)',
    flexDirection: 'row',
  },
  materialCheckbox2: {
    height: 40,
    width: 40,
  },
  distance: {
    fontFamily: 'roboto-500',
    color: 'rgba(118,117,117,1)',
    fontSize: 22,
    marginLeft: 6,
    marginTop: 9,
  },
  materialCheckbox2Row: {
    height: 40,
    flexDirection: 'row',
    flex: 1,
    marginRight: 86,
    marginLeft: 19,
    marginTop: 10,
  },
  rect4Stack: {
    top: 120,
    left: 0,
    width: 237,
    height: 118,
    position: 'absolute',
  },
  rect2StackStack: {
    width: 237,
    height: 238,
    marginTop: 2,
  },
  rect3: {
    top: 0,
    left: 0,
    width: 237,
    height: 61,
    position: 'absolute',
    borderWidth: 2,
    borderColor: 'rgba(39,170,225,1)',
    flexDirection: 'row',
  },
  materialCheckbox4: {
    height: 40,
    width: 40,
  },
  midSized: {
    fontFamily: 'roboto-500',
    color: 'rgba(118,117,117,1)',
    fontSize: 22,
    marginLeft: 7,
    marginTop: 10,
  },
  materialCheckbox4Row: {
    height: 40,
    flexDirection: 'row',
    flex: 1,
    marginRight: 74,
    marginLeft: 19,
    marginTop: 10,
  },
  rect8: {
    top: 60,
    left: 0,
    width: 237,
    height: 61,
    position: 'absolute',
    borderWidth: 2,
    borderColor: 'rgba(39,170,225,1)',
    flexDirection: 'row',
  },
  materialCheckbox5: {
    height: 40,
    width: 40,
  },
  largeSized: {
    fontFamily: 'roboto-500',
    color: 'rgba(118,117,117,1)',
    fontSize: 22,
    marginLeft: 6,
    marginTop: 9,
  },
  materialCheckbox5Row: {
    height: 40,
    flexDirection: 'row',
    flex: 1,
    marginRight: 56,
    marginLeft: 20,
    marginTop: 10,
  },
  rect3Stack: {
    top: 0,
    left: 0,
    width: 237,
    height: 121,
    position: 'absolute',
  },
  rect7: {
    top: 119,
    left: 0,
    width: 237,
    height: 61,
    position: 'absolute',
    borderWidth: 2,
    borderColor: 'rgba(39,170,225,1)',
    flexDirection: 'row',
  },
  materialCheckbox6: {
    height: 40,
    width: 40,
  },
  overSized: {
    fontFamily: 'roboto-500',
    color: 'rgba(117,117,117,1)',
    fontSize: 22,
    marginLeft: 5,
    marginTop: 10,
  },
  materialCheckbox6Row: {
    height: 40,
    flexDirection: 'row',
    flex: 1,
    marginRight: 67,
    marginLeft: 20,
    marginTop: 10,
  },
  rect3StackStack: {
    width: 237,
    height: 180,
  },
  features: {
    fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 22,
    opacity: 0.79,
    marginTop: 10,
    marginLeft: 22,
  },
  button: {
    width: 97,
    height: 32,
    borderWidth: 1,
    borderColor: 'rgba(136,135,135,1)',
    borderRadius: 30,
  },
  guarded: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
    marginTop: 6,
    marginLeft: 18,
  },
  rect9: {
    width: 90,
    height: 32,
    borderWidth: 2,
    borderColor: 'rgba(11,64,148,1)',
    borderRadius: 34,
    marginLeft: 9,
  },
  gated: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 16,
    marginTop: 6,
    marginLeft: 24,
  },
  buttonRow: {
    height: 32,
    flexDirection: 'row',
    marginTop: 11,
    marginLeft: 22,
    marginRight: 19,
  },
  rect10: {
    width: 79,
    height: 32,
    borderWidth: 2,
    borderColor: 'rgba(11,64,148,1)',
    borderRadius: 34,
  },
  cctv: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 16,
    marginTop: 7,
    marginLeft: 18,
  },
  rect11: {
    width: 108,
    height: 32,
    borderWidth: 1,
    borderColor: 'rgba(136,135,135,1)',
    borderRadius: 34,
    marginLeft: 9,
  },
  sheltered: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
    marginTop: 7,
    marginLeft: 19,
  },
  rect10Row: {
    height: 32,
    flexDirection: 'row',
    marginTop: 8,
    marginLeft: 21,
    marginRight: 20,
  },
  rect12: {
    width: 162,
    height: 32,
    borderWidth: 1,
    borderColor: 'rgba(136,135,135,1)',
    borderRadius: 34,
    marginTop: 8,
    marginLeft: 22,
  },
  disabledAccess: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
    marginTop: 6,
    marginLeft: 23,
  },
});

export default Untitled5;
