import React, {Component} from 'react';
import { StyleSheet, Text, View ,FlatList,TouchableOpacity} from 'react-native';
import {HomeItem} from './HomeItem'

const team=[
    {id:'1',title:'Company Details',description:'Mobile app developer'},
    {id:'2',title:'Contact Information',description:'UI developer'},
    {id:'3',title:'Governance',description:'Python developer'},
    {id:'4',title:'Insurance',description:'Full Stack developer'}]

export default class Home extends Component {
/*     renderItem(){
        <HomeItem />
    } */
    render(){
        console.log('render item involved')
        return(
            <View style={styles.container}>
        <Text style={styles.title}>Add Vendor</Text>
                <FlatList data={team} 
                // renderItem={({item})=> <Text>{item.title}</Text>} 
                renderItem={({item})=> <HomeItem item={item}/>} 
                // renderItem={this.renderItem()}
                keyExtractor={(item, index) => String(item.id)}
                />
        <TouchableOpacity onPress={() => sendCred(props)}>
        <Text style={styles.loginButton}>Submit</Text>
        </TouchableOpacity>
            </View>  
        )
            }
}

const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff',
            paddingTop:50
        },
        flatlisttext:{
            fontSize:32,
            marginLeft:50,
            backgroundColor:'grey'
        },
        loginButton:{
            marginLeft:125,
            marginRight:125,
            backgroundColor: '#1c313a',
            color:'#fff',
            fontSize:20,
            textAlign: 'center',
            borderRadius: 20,
            paddingVertical:10
          },
          title:{
            color:'black',
            fontSize:40,
            textAlign: 'center',
            borderRadius: 20,
            marginBottom:50,
            marginTop:20,
            paddingVertical:10
          }, 
    }
)

