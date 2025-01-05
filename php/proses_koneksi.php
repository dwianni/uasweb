<?php
include 'koneksi.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nama = $_POST['nama'];
    $email = $_POST['email'];
    $pesan = $_POST['pesan'];

    $query = "INSERT INTO kontak (nama, email, pesan) VALUES ('$nama', '$email', '$pesan')";
    if (mysqli_query($koneksi, $query)) {
        echo "Pesan berhasil dikirim!";
    } else {
        echo "Error: " . mysqli_error($koneksi);
    }
}
?>