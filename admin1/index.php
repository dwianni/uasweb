<?php
// Memulai session untuk pengecekan login
session_start();

// Cek apakah user sudah login
if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit;
}

include 'header.php'; // Menyertakan header
include 'sidebar.php'; // Menyertakan sidebar
?>

<div class="content">
    <h1>Welcome to Admin Dashboard</h1>
    <p>Konten Dashboard Admin</p>
</div>

<?php include 'footer.php'; // Menyertakan footer ?>
