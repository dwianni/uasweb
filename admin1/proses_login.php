<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Proses login
    if ($username == 'admin' && $password == 'admin123') {
        $_SESSION['username'] = $username;
        header("Location: index.php");
        exit;
    } else {
        echo "Username atau password salah!";
    }
}
