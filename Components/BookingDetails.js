import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BookingDetails =({booking})=> {

    if(booking){
        return (
            <View>
                <Text style={styles.text}>
                Customer name: {booking.customer.name}
                </Text>
                <Text style={styles.text}>
                Customer phone no: {booking.customer.phoneNumber}
                </Text>
                <Text style={styles.text}>
                Date: {booking.date}
                </Text>
                <Text style={styles.text}>
                Time: {booking.startTime}
                </Text>
                <Text style={styles.text}>
                Party size: {booking.numberOfGuests}
                </Text>
                <Text style={styles.text}>
                Table Number: {booking.eatingPlatformId}
                </Text>
           </View>
       ); 
    }
    else{
        return null;
    }


}

const styles = StyleSheet.create({
    view:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize:40,
        textAlignVertical: 'top'
    },
    text:{
      fontSize: 20,
      color: 'black'
    }
  })

export default BookingDetails;