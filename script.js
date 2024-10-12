// script.js
document.addEventListener('DOMContentLoaded', function() {
    const tombol = document.getElementById('tombolDiskon');
    const prices = document.querySelectorAll('.price');
    
    tombol.addEventListener('click', function() {
        prices.forEach(priceElement => {
            let harga = parseInt(priceElement.textContent.replace(/[^0-9]/g, '')); // Mengambil nilai harga
            let diskon = 0.10; // Diskon 10%
            let hargaDiskon = harga - (harga * diskon);
            priceElement.textContent = `Rp ${hargaDiskon.toLocaleString()}`; // Menampilkan harga setelah diskon
        });
        alert("Diskon 10% telah diterapkan!");
    });
});
