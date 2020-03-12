import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';


 const Calendar = ({setViewCalendar, setPickedDate}) =>  {
 

    const pickDate = (date) => {
        setPickedDate(date);
        console.log(date);
        setViewCalendar(false);
    }
        return (
            <View style={styles.container}>
                <CalendarPicker onDateChange={pickDate} />
            </View>
        )
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: 100,
    },
});

export default Calendar;