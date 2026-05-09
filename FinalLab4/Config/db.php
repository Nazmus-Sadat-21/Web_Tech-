<?php

$conn = new mysqli("localhost", "root", "");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create Database
$conn->query("CREATE DATABASE IF NOT EXISTS library_management");

// Select Database
$conn->select_db("library_management");

// Create Table
$conn->query("CREATE TABLE IF NOT EXISTS books (

    id INT AUTO_INCREMENT PRIMARY KEY,

    title VARCHAR(255) NOT NULL,

    author VARCHAR(255) NOT NULL,

    category VARCHAR(255) NOT NULL,

    status VARCHAR(50) NOT NULL

)");

?>