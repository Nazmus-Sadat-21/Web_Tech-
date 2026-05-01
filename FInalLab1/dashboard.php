<?php
session_start();

$timeout = 10; // 10 seconds

// If not logged in, redirect to login
if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}

// Check if start_time exists
if (!isset($_SESSION['start_time'])) {
    $_SESSION['start_time'] = time();
}

// Check timeout
if (time() - $_SESSION['start_time'] > $timeout) {
    session_unset();
    session_destroy();
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html>

<head>
    <title>Dashboard</title>
</head>

<body>
    <h2>Dashboard</h2>

    <p>Welcome, <?php echo $_SESSION['username']; ?>!</p>

    <a href="logout.php">Logout</a>
</body>

</html>