import React, {useState} from 'react';
import { View, StyleSheet, Text, Vibration, Platform} from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';

import { colors } from '../../utils/colors';
import { spacing } from '../../utils/sizes';
import { CountDown } from '../../components/CountDown';
import { RoundedButtons } from '../../components/RoundedButton';
import { Timing } from './Timing';

const DEFAULT_TIME = 0.1
export const Timer = ({focusSubject, onTimerEnd}) => {
    useKeepAwake();
    const interval = React.useRef(null);
    const [minutes, setMinutes] = useState(DEFAULT_TIME);
    const [isStarted, setIsStarted] = useState(false);
    const [progress, setProgress] = useState(1);

    const onProgress = (progress) => {
        setProgress(progress)
    }

    const vibrate = () => {
        if(Platform.OS === 'ios'){
            const setInterval = setInterval(() => Vibration.vibrate(), 1000);
            setTimeout(() => clearInterval(interval), 10000)
        }else{
            Vibration.vibrate(10000)
        }
    }

    const onEnd = () => {
        vibrate();
        setMinutes(DEFAULT_TIME);
        setProgress(1);
        setIsStarted(false);
        onTimerEnd();
    
    }

    const changeTime = (min) => {
        setMinutes(min);
        setProgress(1);
        setIsStarted(false);

    }
    return(
        <>
        <View style={styles.container}>
            <View style={styles.countDown}>
                <CountDown minutes={minutes} isPaused={!isStarted} onProgress={onProgress} onEnd={onEnd}/>
            </View>
            <View style={{paddingTop: spacing.xxl}}>
                <Text style={styles.Title}>Focusing On:</Text>
                <Text style={styles.Task}>{focusSubject}</Text>
            </View>
            <View style={{paddingTop: spacing.sm}}>
                <ProgressBar 
                progress={progress}
                color='#5E84E2'
                style={{height: 10}}/>
            </View>
            <View style={styles.buttonWrapper}>
                <Timing onChangeTime={changeTime} />
            </View>
            <View style={styles.buttonWrapper}>
                {isStarted?
                    <RoundedButtons style={styles.btnText} title="Pause" onPress={() => setIsStarted(false)}/>
                    :
                    <RoundedButtons style={styles.btnText} title="Start" onPress={() => setIsStarted(true)}/>
                }
            </View>
            <View style={styles.clearSubject}>
                <RoundedButtons title="-" style={styles.btnText}  size={50} onPress={() => clearSubject()}/>
            </View>

        </View>
        </>
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
    },
    buttonWrapper: {
        flex: 0.3,
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',

    },
    btnText: {
        color: 'white',
        backgroundColor: '#b4b4b4',
    },
    clearSubject: {
        paddingBottom: 25,
        paddingLeft: 25,
    }
})