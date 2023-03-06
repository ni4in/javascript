"use strict"

const bookings = [];
const createBooking = function(flightNum, numPassengers = 1, price = 199){

    const booking = {
        flightNum,
        numPassengers,
        price,
    };
    bookings.push(booking);
    console.log(booking)

};

createBooking("LH123")


const flight = "LH234";
const jonas = {
    name: "Jonas Schmedtmann",
    passport: 24739479284
};

const checkIn = function(flightNum, passenger) {
    
}
