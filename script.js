function cariData() {
    const inputKK = document.getElementById('inputKK').value.trim();
    const resultContainer = document.getElementById('resultContainer');
    
    // Bersihkan hasil sebelumnya
    resultContainer.innerHTML = '';

    if(inputKK === '') {
        resultContainer.innerHTML = '<p class="error-msg">Mohon masukkan No. KK terlebih dahulu.</p>';
        return;
    }

    // Mencari data yang cocok dengan No KK
    const hasilPencarian = dataPenerima.filter(item => item.noKK === inputKK);

    if (hasilPencarian.length > 0) {
        let htmlContent = '';
        
        hasilPencarian.forEach(siswa => {
            htmlContent += `
            <div class="result-card">
                <h3>Undangan Resmi Beasiswa</h3>
                <p>Kepada Yth. Bapak/Ibu <strong>${siswa.namaOrtu}</strong>,</p>
                <p>Selamat! Putra/i Anda terpilih sebagai penerima Beasiswa Primajasa 2026. Berikut adalah detailnya:</p>
                <ul>
                    <li><strong>Nama Anak:</strong> ${siswa.namaAnak}</li>
                    <li><strong>Tingkat:</strong> ${siswa.tingkat}</li>
                    <li><strong>Sekolah/Instansi:</strong> ${siswa.sekolah}</li>
                    <li><strong>Kategori:</strong> ${siswa.kategori}</li>
                    <li><strong>Nominal:</strong> Rp ${siswa.nominal}</li>
                </ul>
                <p><em>*Mohon tunjukkan tangkapan layar (screenshot) halaman ini saat menghadiri acara penyerahan beasiswa.</em></p>
            </div>
            `;
        });
        
        resultContainer.innerHTML = htmlContent;
    } else {
        resultContainer.innerHTML = '<p class="error-msg">Mohon maaf, No. KK tidak ditemukan atau belum terdaftar sebagai penerima beasiswa tahun ini.</p>';
    }
}
