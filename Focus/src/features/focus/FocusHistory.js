import React from "react"
import { View, StyleSheet, Text, FlatList, SafeAreaView } from 'react-native';

import { fontSizes, spacing } from "../../utils/sizes";
import { RoundedButtons } from "../../components/RoundedButton";

const HistoryItem = ({ item, index}) => {
    return(
        <Text style={styles.historyItem(item.status)}>
            {item.subject}
        </Text>
    )
}
 export const FocusHistory = ({focusHistory, onClear}) => {
    const clearHistory = ()=> {
        onClear();
    };

    return(
        <SafeAreaView style={{ flex: 0.5,alignItems:'center' }}>
            {!!focusHistory.length && ( 
            <>
                    <Text style={styles.title}>Things we've Focused On: </Text>

                        <FlatList 
                        style={{ flex: 1}}
                        contentContainerStyle={{ flex: 1, alignItems: 'center' }}
                        data={focusHistory}
                        renderItem={HistoryItem}
                        />
             </>
            )}
         
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    historyItem: (status) => ({
        color: status > 1 ? 'red' : 'green',
        fontSize: fontSizes.md,
    }),
    title: {
        color: 'white',
        fontSize: fontSizes.lg,
    }
})