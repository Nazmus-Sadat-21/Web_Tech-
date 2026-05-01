<?php
session_start();

// Protect page
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

$name = $_SESSION['name'];
$last_login = isset($_COOKIE['last_login']) ? $_COOKIE['last_login'] : "First login";
?>

<h2>Dashboard</h2>

<p>Welcome, <?php echo $name; ?>!</p>

<p>Last Login: <?php echo $last_login; ?></p>

<a href="logout.php">Logout</a>