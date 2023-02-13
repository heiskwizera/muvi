import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footerContainer}>
            <Text style={styles.footerText}>
                Made with Love by KWIZERA Fabrice
                <Text style={styles.year}> ©️ 2023</Text>
            </Text>
        </View>
    );
    }

const styles = StyleSheet.create({
    footerContainer: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        color: 'white',
        fontSize: 12,
    },
    year: {
        fontWeight: 'bold'
    }
});

export default Footer;