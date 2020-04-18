import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/AddVendor/Home'
import VendorsList from './src/components/VendorsList'

export default class App extends Component {
  render(){
    // return <Home />
    return <VendorsList />
  }
}

