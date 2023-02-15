import React from 'react';
import { Image, View, StyleSheet, Dimensions } from 'react-native';

import Screen from '../components/Screen';
import {AppText} from '../components';
import { paths, uiProps } from '../config';
import useAuth from '../auth/useAuth';

function Profile() {
    const getUser = useAuth();
    const user = getUser.user;

    return (
    

            <View style={styles.container}>
                <Image style={styles.image} source={paths.PROFILE_PATH} />
                <AppText style={styles.textBig}>KWIZERA {user.name}</AppText>
                <AppText style={styles.textSmall}>{user.email}</AppText>
                <AppText style={styles.editInfo}>Edit account</AppText>
            </View>
           

    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: uiProps.colors.primaryBlur,
        height: 180,

    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 100,
    },
    textBig: {
        color: uiProps.colors.white,
        fontSize: uiProps.fontSizes.medium + 2,
        fontWeight:uiProps.fontWeights.bold,
        textAlign: "center",
        marginBottom: -13,
    },
    textSmall: {
        color: uiProps.colors.lightGray,
        fontSize: uiProps.fontSizes.small,
        textAlign: "center",
        marginBottom: -13,
    },
    editInfo: {
        color: uiProps.colors.accent,
        textAlign: "right",
        fontSize: uiProps.fontSizes.small,
        marginLeft: -10,
    },
});

export default Profile;