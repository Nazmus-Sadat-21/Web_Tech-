<?php
session_start();
include "db.php";

$email_cookie = isset($_COOKIE['email']) ? $_COOKIE['email'] : "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();

        if (password_verify($password, $user['password'])) {

            $_SESSION['user_id'] = $user['id'];
            $_SESSION['name'] = $user['name'];

            // Cookie: remember email (1 hour)
            setcookie("email", $email, time() + 3600);

            // Cookie: last login time
            setcookie("last_login", date("Y-m-d H:i:s"), time() + 3600);

            header("Location: dashboard.php");
            exit();
        } else {
            echo "Wrong password!";
        }
    } else {
        echo "User not found!";
    }
}
?>

<h2>Login</h2>
<form method="post">
    Email: <input type="email" name="email" value="<?php echo $email_cookie; ?>" required><br><br>
    Password: <input type="password" name="password" required><br><br>
    <button type="submit">Login</button>
</form>

<a href="register.php">Register</a>