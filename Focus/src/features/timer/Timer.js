import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { colors } from '../../utils/colors';
import { spacing } from '../../utils/sizes';
import { CountDown } from '../../components/CountDown';

export const Timer = ({focusSubject}) => {
    
    return(
        <View style={styles.container}>
            <View style={styles.countDown}>
                <CountDown />
            </View>
            <View style={{paddingTop: spacing.xxl}}>
                <Text style={styles.Title}>Focusing On:</Text>
                <Text style={styles.Task}>{focusSubject}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Title: {
        color: colors.white,
        textAlign: 'center',
    },
    Task: {
        fontWeight: 'bold',
        color: colors.white,
        textAlign: 'center',
    },
    countDown: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    }
})