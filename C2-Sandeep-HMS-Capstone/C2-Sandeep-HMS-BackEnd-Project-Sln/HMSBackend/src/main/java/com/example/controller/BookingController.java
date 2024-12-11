package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.entity.Booking;
import com.example.repository.BookingRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class BookingController {

    @Autowired
    private BookingRepository bookingRepository;

    // Get all bookings
    @GetMapping("/booking")
    public List<Booking> getBookingList() {
        return bookingRepository.findAll(); // Retrieves all records from the "booking" table
    }

    // Get a booking by ID
    @GetMapping("/booking/{id}")
    public Booking getBookingById(@PathVariable(value = "id") String id) {
        return bookingRepository.findById(id).get();
    }

    // Add a new booking
    @PostMapping("/booking")
    public Booking createBooking(@RequestBody Booking booking) {
        String newId = generateNextId(); // Generate the next ID
        booking.setId(newId); // Assign the generated ID
        return bookingRepository.save(booking);
    }

    // Update an existing booking
    @PutMapping("/booking/{id}")
    public Booking updateBooking(@PathVariable(value = "id") String id, @RequestBody Booking booking) {
        Booking existingBooking = bookingRepository.findById(id).get();
        existingBooking.setGuestName(booking.getGuestName());
        existingBooking.setHotel(booking.getHotel());
        existingBooking.setRoomNumber(booking.getRoomNumber());
        existingBooking.setCheckInDate(booking.getCheckInDate());
        existingBooking.setCheckOutDate(booking.getCheckOutDate());
        existingBooking.setStatus(booking.getStatus());
        return bookingRepository.save(existingBooking);
    }

    // Delete a booking
    @DeleteMapping("/booking/{id}")
    public Booking deleteBookingById(@PathVariable(value = "id") String id) {
        Booking existingBooking = bookingRepository.findById(id).get();
        bookingRepository.delete(existingBooking);
        return existingBooking;
    }

    // Helper method to generate the next ID
    private String generateNextId() {
        List<Booking> allBookings = bookingRepository.findAll(); // Fetch all rows from "booking" table
        if (allBookings.isEmpty()) {
            return "B0001"; // First ID
        }
        String lastId = allBookings.stream()
                .map(Booking::getId)
                .max(String::compareTo)
                .orElse("B0000"); // Get the last ID
        int nextNumber = Integer.parseInt(lastId.substring(1)) + 1; // Increment the numeric part
        return String.format("B%04d", nextNumber); // Format as B000X
    }
}
