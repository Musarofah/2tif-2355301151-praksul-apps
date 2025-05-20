export default function ArtikelDetail({children}){
    return(
        <div className="card">
        <Detail/>
        <Dampak/>
        <Efek/>
        <Contoh/>
            <br/>
                {children}
                <img src="img/dokter.jpg" alt="logo"/>
                <img src="img/dokter.jpg" alt="logo"/>
            <br/>
            <footer>
                <p>Oleh: dr. Rizal Fadli</p>
            </footer>
        </div>
    )
}

function Detail(){
    return (
        <div >
            <hr/>
            <h1>Artikel Kesehatan</h1>
            <h3><center>Bahaya Konsumsi Antibiotik Tanpa Resep Dokter</center></h3>
            <p>Antibiotik merupakan jenis obat yang sering digunakan untuk mengatasi berbagai penyakit yang disebabkan 
                karena infeksi bakteri. Biasanya, jika infeksi yang terjadi masih dalam kategori ringan, dokter tidak perlu meresepkan obat antibiotik. </p>
            <p>Sementara untuk kasus infeksi bakteri yang sudah parah, dokter baru akan meresepkan penggunaan obat antibiotik. Kondisi lain yang membutuhkan obat antibiotik, 
                yaitu orang-orang dengan kondisi imun tubuh yang lemah, contohnya seperti pengidap HIV atau kanker. </p>
            <p>Hal yang perlu ditegaskan, antibiotik harus dikonsumsi berdasarkan resep dan anjuran dokter. Sebab, obat ini bisa menimbulkan berbagai efek samping bila digunakan secara sembarangan.</p>
            
        </div>
    )
}

function Dampak(){
    return (
        <div>
            <hr/>
            <p><b>Dampak Konsumsi Antibiotik Tanpa Resep Dokter</b></p>
            <p>Supaya obat ini bisa bekerja lebih aman dan efektif, tentu ada pertimbangan dari dokter sebelum meresepkannya. 
                Contohnya, kondisi medis pengidap, jenis antibiotik yang hendak diresepkan, jenis bakteri yang menjadi penyebab infeksi, hingga dosis dan durasi konsumsinya. </p>
            <p>Setiap jenis antibiotik akan memicu terjadinya efek samping yang berbeda. Efeknya bisa ringan atau justru lebih parah. 
                Menggunakan resep dokter pun tak akan menghindarkan kamu dari efek samping saat mengkonsumsi obat ini, apalagi jika kamu mengonsumsinya tanpa pertimbangan dari pakarnya.</p>
            <p>Mau tahu apa saja dampak bila obat ini digunakan secara asal? Berikut ulasannya!</p>
            <p><b>1. Mempengaruhi kerja otak</b></p>
            <p>Antibiotik menjadi jenis obat yang memiliki efek keras, tetapi tetap efektif untuk menekan sekaligus mematikan bakteri yang menjadi penyebab munculnya penyakit.</p>
            <p>Meski begitu, kamu tetap perlu tahu bahwa obat satu ini juga mempengaruhi kerja otak sebagai organ penting dalam tubuh. Sangat rentan terjadi depresi dan kecemasan berlebihan hanya dengan satu antibiotik.</p>
            <p><b>2. Risiko obesitas</b></p>
            <p>Penggunaan obat antibiotik pada anak tak hanya berdampak pada kenaikan berat badan saja, tetapi ada juga ada efek yang bisa terjadi dalam jangka panjang. Kondisi ini lantas turut dihubungkan dengan masalah diabetes tipe 2.
                Pasalnya, seseorang dengan kondisi kegemukan atau obesitas memang memiliki risiko lebih tinggi mengalami diabetes tipe 2.</p>
            <p><b>3. Masalah kesehatan pada usus</b></p>
            <p>Antibiotik memang efektif untuk membasmi bakteri. Namun, apabila obat ini dikonsumsi dengan dosis berlebihan, bakteri baik yang terdapat dalam tubuh pun akan ikut hilang.</p>
            <p>Beberapa orang mendapati kondisi perut menjadi lebih baik setelah minum antibiotik. Meski begitu, ada pula yang mengalami gangguan perut setelah mengkonsumsinya.</p>
            <p>Dalam beberapa kasus, konsumsi antibiotik berlebihan akan meningkatkan risiko terjadinya masalah pada usus, misalnya penyakit Crohn, iritasi pada pencernaan, dan kolitis ulseratif.</p>
        </div>
    )
}

function Efek(){
    return (
        <div >
            <hr/>
            <h3>Waspada 5 Efek Samping Konsumsi Antibiotik</h3>
            <p>1. Diare </p>
            <p>2. Mual dan Muntah</p>
            <p>3. Sakit Kepala</p>
            <p>4. Sakit Perut</p>
            <p>5. Infeksi Jamur</p>
        </div>
    )
}

function Contoh(){
    return (
        <div >
            <hr/>
            <h3>Berikut adalah contoh penyakit akibat infeksi bakteri yang bisa diobati dengan antibiotik:</h3>
            <p>1. Infeksi saluran kemih </p>
            <p>2. Luka atau infeksi kulit</p>
            <p>3. Meningitis atau radang selaput otak</p>
            <p>4. Infeksi menular seksual</p>
            <p>5. Pnemonia bakterialis</p>
        </div>
    )
}

