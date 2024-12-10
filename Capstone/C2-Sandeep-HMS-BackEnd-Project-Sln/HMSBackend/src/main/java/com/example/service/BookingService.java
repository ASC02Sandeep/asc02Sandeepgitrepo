package com.example.service;

import com.example.entity.Booking;
import com.example.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class BookingService {
//
//    @Autowired
//    private BookingRepository bookingRepository;
//
//    // Generate the next ID based on existing bookings
//    public String generateBookingId() {
//        List<Booking> bookings = bookingRepository.findAll();
//        if (bookings.isEmpty()) {
//            return "B0001";
//        }
//        String lastId = bookings.stream()
//                .map(Booking::getId)
//                .max(String::compareTo)
//                .orElse("B0000");
//
//        int nextNumber = Integer.parseInt(lastId.substring(1)) + 1; // Extract the numeric part
//        return String.format("B%04d", nextNumber); // Format as B000X
//    }
//
//    // Add a new booking
//    public Booking addBooking(Booking booking) {
//        booking.setId(generateBookingId()); // Automatically generate the ID
//        return bookingRepository.save(booking);
//    }
//
//    // Get all bookings
//    public List<Booking> getAllBookings() {
//        return bookingRepository.findAll();
//    }
//
//    // Get a booking by ID
//    public Booking getBookingById(String id) {
//        Optional<Booking> booking = bookingRepository.findById(id);
//        return booking.orElseThrow(() -> new RuntimeException("Booking not found with id " + id));
//    }
//
//    // Delete a booking
//    public void deleteBooking(String id) {
//        bookingRepository.deleteById(id);
//    }
//}
