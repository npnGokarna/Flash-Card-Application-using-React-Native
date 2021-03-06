import React from 'react';
import {View, Text} from 'react-native';

const CardSection = (props) =>{

    return (
        <View style = {styleObj.containerStyle}>
            {props.children}
        </View>
    );

};
/*
backgroundColor: '#692058',
*/
const styleObj = {

    containerStyle: {
        borderBottomWidth: 1,
        borderRadius:4,
        padding:5,
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor: '#fbd5ff',
        position: 'relative'
    }

};

export {CardSection};
