import React from 'react';
import { useParams } from 'react-router';

const BookingPackage = () => {
    const {bookingpackage} = useParams()
    return (
        <div className="container text-center">
            <h1 className="mt-5">Hello Sir, Your <span className="text-primary">{bookingpackage}</span> package confirmed.</h1>
        </div>
    );
};

export default BookingPackage;