import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {images} from '../Utils/crypto.png';

import FetchCoinData from './../Actions/FetchCoinData';
import CoinCard from './CoinCard';

class CryptoContainer extends Component{
    componentWillUnmount(){
        this.props.FetchCoinData
    }

    renderCoinCards(){
      const {crypto}=this.props;
      return crypto.data.map((coin)=>
        <CoinCard
        key={coin.name}
        coin_Name={coin.name}
        symbol={coin.symbol}
        price_usd={price.price.usd}
        percent_change_24hr={coin.percent_change_24hr}
        percent_change_7d={coin.percent_change_7d}
        />
      )
    }
    
    render(){
        const {crypto}=this.props;
        const {contentContainer}=styles
        if(crypto.isFetching){
            return(
                <View>
                    <Spinner
                        visible={crypto.isFetching}
                        textContent={"LOADING.."}
                        textStyle={{color:'green'}}
                        animation="fade"
                    />
                </View>
            )
        }

        return(
            <View>
            <Text >
            Crypto App
           </Text>
            <ScrollView contentContainerStyle={contentContainer}>
                {this.renderCoinCards()}
            </ScrollView>
            </View>
        )
    }

}

const styles={
    contentContainer:{
        paddingBottom:100,
        paddingTop:55,

    }
}

function mapStateToProp(state){
    return{
        crypto:state.crypto
    }
}

export default connect(mapStateToProp,{FetchCoinData})(CryptoContainer)