import React, {Component} from 'react';
import { StyleSheet, Text, View ,Image, TouchableWithoutFeedback,
    TextInput} from 'react-native';
import PropTypes from 'prop-types';

const images={
    expand:require('../../../resources/downArrow.png')
};

const propTypes={
    item:PropTypes.object
}

class HomeItem extends Component{
    state={
        isSelected:false
    };

    onPress=()=>{
        this.setState((prevState)=>({
            isSelected:!prevState.isSelected
        }))
    }

    renderDetails(){
        return(
        <View>
                  <TextInput
        style={styles.userinputText} />
                          <TextInput
        style={styles.userinputText} />
                          <TextInput
        style={styles.userinputText} />
            {/* <Text style={styles.description}>{this.props.item.description}</Text> */}
        </View>
        )
    };

    render(){
        const {isSelected}=this.state
        return(
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.onPress}>
                    <View style={styles.titleContainer}>
        <               Text style={styles.title}>{this.props.item.title}</Text>
                        <Image source={images.expand} style={styles.image}></Image>
                    </View>
                </TouchableWithoutFeedback>
                {isSelected && this.renderDetails()}
            </View>                    
        )
    }
}

HomeItem.propTypes=propTypes;

const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            margin:10,
        },
        titleContainer:{
            flexDirection:'row',
            justifyContent:'flex-end'
        },
        title:{
            flex:1,
            fontSize:22
        },
        description:{
            flex:1,
            fontSize:22,
            color:'grey',
            paddingTop:10         
        },

        image:{
            width:20,
            height:20
        },
        userinputText:{
            marginLeft:40,
            marginRight:40,
            marginTop:18,
            backgroundColor:'#fadadd'
          },

    }
)

export {HomeItem}