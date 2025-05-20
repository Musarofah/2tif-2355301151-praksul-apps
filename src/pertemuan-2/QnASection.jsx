export default function QnASection({children}){
    return(
        <div className="card">
            <Judul/>
            <br/>
                {children}
                <center><img src="img/qna.png" alt="logo"/></center>
            <br/>
            <Username
            nama= "Musarofah"
            nim= "2355301151"
            email= "musarofah23ti@mahasiswa.pcr.ac.id"
            tanggal= {new Date().toLocaleDateString()}
            />
            <Pertanyaan/>
            <Jawaban/>
            <footer>
                <p>QnASection</p>
            </footer>
        </div>
    )
}

function Judul(){
    return (
        <div >
            <hr/>
            <h1>Questions and Answer </h1>              
        </div>
    )
}

function Username(props){
    return (
        <div>
            <hr/>
            <p>Nama: {props.nama}</p>
            <p>NIM: {props.nim}</p>
            <p>Email: {props.email}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}

function Pertanyaan(){
    return (
        <div >
            <hr/>
            <h3>Daftar Pertanyaan </h3>
            <p>1. Apa itu pola makan sehat? </p>
            <p>2. Berapa banyak air yang harus kita minum setiap hari?</p>
            <p>3. Apa sih manfaat olahraga bagi kesehatan?</p>
            <p>4. Mengapa tidur yang cukup itu penting?</p>
            <p>5. Apa sih pengertian dari diet sehat?</p>        
        </div>
    )
}

function Jawaban(){
    return (
        <div >
            <hr/>
            <h3>Daftar Jawaban </h3>
            <p>1. Pola makan sehat adalah kebiasaan mengonsumsi makanan yang bergizi seimbang, termasuk buah, sayuran, protein, dan karbohidrat, serta membatasi konsumsi makanan tinggi gula, garam, dan lemak jenuh. </p>
            <p>2. Jumlah air yang disarankan untuk dikonsumsi setiap hari bervariasi tergantung pada usia, jenis kelamin, dan aktivitas fisik. Namun, rata-rata orang dewasa disarankan untuk minum sekitar 8 gelas air (sekitar 2 liter) per hari.</p>
            <p>3. Olahraga memiliki banyak manfaat kesehatan, termasuk meningkatkan kesehatan jantung, meningkatkan kekuatan otot dan tulang, menjaga berat badan yang sehat, serta meningkatkan kesehatan mental dengan mengurangi stres dan kecemasan.</p>
            <p>4. Tidur yang cukup sangat penting untuk memulihkan tubuh dan otak. Tidur yang berkualitas membantu meningkatkan daya ingat, menjaga keseimbangan hormon, memperbaiki sistem kekebalan tubuh, dan mendukung kesehatan mental.</p>
            <p>5. Diet sehat adalah pola makan yang mencakup makanan bergizi dalam jumlah yang tepat, dengan menghindari makanan olahan dan berlemak tinggi. Diet sehat dapat membantu mengatur berat badan dan mencegah penyakit kronis seperti diabetes dan hipertensi.</p>              
        </div>
    )
}

