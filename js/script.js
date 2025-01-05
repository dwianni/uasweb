// Validasi Formulir Kontak
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const namaInput = document.getElementById("nama");
    const emailInput = document.getElementById("email");
    const pesanInput = document.getElementById("pesan");
  
    form.addEventListener("submit", (event) => {
      let valid = true;
  
      // Validasi Nama
      if (namaInput.value.trim() === "") {
        alert("Nama tidak boleh kosong!");
        namaInput.focus();
        valid = false;
      }
  
      // Validasi Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        alert("Masukkan email yang valid!");
        emailInput.focus();
        valid = false;
      }
  
      // Validasi Pesan
      if (pesanInput.value.trim() === "") {
        alert("Pesan tidak boleh kosong!");
        pesanInput.focus();
        valid = false;
      }
  
      // Jika validasi gagal, cegah pengiriman formulir
      if (!valid) {
        event.preventDefault();
      }
    });
  });
  
  // Scroll ke Bagian Atas
  const scrollToTopBtn = document.createElement("button");
  scrollToTopBtn.innerText = "⬆️";
  scrollToTopBtn.style.position = "fixed";
  scrollToTopBtn.style.bottom = "20px";
  scrollToTopBtn.style.right = "20px";
  scrollToTopBtn.style.backgroundColor = "#28a745";
  scrollToTopBtn.style.color = "#fff";
  scrollToTopBtn.style.border = "none";
  scrollToTopBtn.style.borderRadius = "50%";
  scrollToTopBtn.style.width = "40px";
  scrollToTopBtn.style.height = "40px";
  scrollToTopBtn.style.cursor = "pointer";
  scrollToTopBtn.style.display = "none";
  document.body.appendChild(scrollToTopBtn);
  
  // Tampilkan tombol scroll jika posisi scroll lebih dari 200px
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });
  
  // Fungsi scroll ke atas
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });