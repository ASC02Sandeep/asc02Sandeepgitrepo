package com.example.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "booking")
public class Booking {

    @Id
    private String id; // Custom ID (e.g., B0001, B0002, etc.)

    @Column(name = "guest_name", nullable = false)
    private String guestName;

    @Column(name = "hotel", nullable = false)
    private String hotel;

    @Column(name = "room_number", nullable = false)
    private String roomNumber;

    @Column(name = "check_in_date", nullable = false)
    private String checkInDate;

    @Column(name = "check_out_date", nullable = false)
    private String checkOutDate;

    @Column(name = "status", nullable = false)
    private String status;

    // Default Constructor
    public Booking() {}

    // Parameterized Constructor
    public Booking(String guestName, String hotel, String roomNumber, String checkInDate, String checkOutDate, String status) {
        this.guestName = guestName;
        this.hotel = hotel;
        this.roomNumber = roomNumber;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.status = status;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getGuestName() {
        return guestName;
    }

    public void setGuestName(String guestName) {
        this.guestName = guestName;
    }

    public String getHotel() {
        return hotel;
    }

    public void setHotel(String hotel) {
        this.hotel = hotel;
    }

    public String getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(String roomNumber) {
        this.roomNumber = roomNumber;
    }

    public String getCheckInDate() {
        return checkInDate;
    }

    public void setCheckInDate(String checkInDate) {
        this.checkInDate = checkInDate;
    }

    public String getCheckOutDate() {
        return checkOutDate;
    }

    public void setCheckOutDate(String checkOutDate) {
        this.checkOutDate = checkOutDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}

