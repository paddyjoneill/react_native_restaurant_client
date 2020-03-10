import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import BookingDetails from './Components/BookingDetails';
import Header from './Components/Header';
import BookingsListItem from './Components/BookingsListItem';
import CustomerService from './Services/CustomerService';


const App = () => {

  const [bookings, setBookings] = useState([])
  const [bookingToEdit, setBookingToEdit] = useState(null)
  const [customers, setCustomers] = useState([])

  useEffect(() => {

    
    getBookingsData();
    // getCustomerData();
    CustomerService.getAllCustomers()
      .then(customerData => setCustomers(customerData._embedded.customers))
      // .then(data => console.log('customers in app:',customers[0].phoneNumber))
  },
    []
  )

  const loadEditPage = (booking) => {
    setBookingToEdit(booking)
  }

  const backHome = () => {
    setBookingToEdit(null)

  }

  const getCustomerData = () => {
    fetch('https://restaurantspringbackend.herokuapp.com/customers')
      .then(res => res.json())
      .then(customerData => setCustomers(customerData._embedded.customers))
      .then(data => console.log('customers in app:',customers[0].phoneNumber)
      )
  }

  const getBookingsData = () => {
    fetch('https://restaurantspringbackend.herokuapp.com/bookings')
      .then(res => res.json())
      .then(bookingData => setBookings(bookingData._embedded.bookings))
    // .then(() => console.log(bookings[0].date))
  }

  return (
    <View style={styles.view}>

      <Header title="Header" />
      {!bookingToEdit && <View style={styles.list}>
        <BookingsListItem bookings={bookings} loadEditPage={loadEditPage} />
      </View>}
      {bookingToEdit && <BookingDetails booking={bookingToEdit} backHome={backHome}/>}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  list: {
    borderWidth: 2,
    height: 500,
    borderColor: 'red',
    padding: 10,
    alignContent: 'center',
    marginHorizontal: 15
  }
})

export default App;
