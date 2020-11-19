import React,{Component} from 'react';
import {  View } from 'react-native';
import Header from './src/components/Header'
import CryptoContainer from './src/components/CryptoContainer'
import {Provider} from 'react-redux';
import store from './src/store'


export default class App extends Component {
  render (){
    return (
      <Provider store={store}>
      <View >
    <Header/>
    <CryptoContainer/>
      
    </View>
    </Provider>
    );
  }
}