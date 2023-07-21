import {View, StyleSheet, Text} from 'react-native';
import React from 'react';

import { RoundedButtons } from '../../components/RoundedButton';

export const Timing = ({onChangeTime}) => {
    return(
        <>
            <View style={styles.timingButton}>
                <RoundedButtons style={styles.btnText} size={75} title="10" onPress={() => onChangeTime(10)} />
            </View>
            <View style={styles.timingButton}>
                <RoundedButtons style={styles.btnText} size={75} title="15" onPress={() => onChangeTime(15)} />
            </View>
            <View style={styles.timingButton}>
                <RoundedButtons style={styles.btnText} size={75} title="20" onPress={() => onChangeTime(20)} />
            </View>

        </>
    )
}
const styles = StyleSheet.create({
    timingButton: {
        flex: 1,
        alignItems: 'center',
        margin: 15
    },
    btnText: {
        color: '#fff',
        backgroundColor: '#fff'
    }
})