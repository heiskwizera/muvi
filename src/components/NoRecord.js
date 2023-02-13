import React from 'react';
import { StyleSheet,View,TouchableOpacity } from 'react-native';
import AppText from "./AppText";
import { uiProps } from '../config';

function NoRecord(props) {
    return (
        <View style={styles.container}>
            <AppText>There is no Movie Downloaded Yet</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:uiProps.colors.primary

    }
})

export default NoRecord;