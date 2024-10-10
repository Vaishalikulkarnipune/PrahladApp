import React, {createContext, useState, useContext} from 'react'

const BookingContext = createContext();

export const useBooking = () => useContext(BookingContext);


export const BookingProvider = ({children}) => {
    const [bookings, setBookings] = useState([]);

    const addBooking = (newBooking) => {
        setBookings([...bookings, newBooking]);
    };

    return (
        <BookingContext.Provider value={{bookings, addBooking}} >
            {children}
        </BookingContext.Provider>
    )
}