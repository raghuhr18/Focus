
import React, {useState} from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { FocusHistory } from './src/features/focus/FocusHistory';
import { Timer } from './src/features/timer/Timer';
import { colors } from './src/utils/colors';
import { spacing } from './src/utils/sizes';


const STATUSES = {
  COMPLETE: 1,
  CANCELLED: 1
}

export default function App() {
  const [focusSubject, setFocusSubject] = useState("Gardening");
  const [focusHistory, setFocusHistory] = useState([]);

  const addFocusHistorySubjectWithState = (subject, status) => {
    setFocusHistory([...focusHistory, { subject, status}])
  }

  const onClear = () => {
    
  }
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer focusSubject={focusSubject} 
        onTimerEnd={() => {
          addFocusHistorySubjectWithState(focusSubject, STATUSES.COMPLETE)
          setFocusSubject(null)
        }}
        clearSubject={() => {
          addFocusHistorySubjectWithState(focusSubject, STATUSES.CANCELLED)
          setFocusSubject(null)}
        }/>
      ) : (
        <>
        <Focus addSubject={setFocusSubject}/>
        <FocusHistory focusHistory={focusHistory} onClear={onClear} />
        </>
        )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:  Platform.OS === 'ios'? spacing.md: spacing.lg,
    backgroundColor: colors.darkBlue,
  },
});
