import ArtikelDetail from "./ArtikelDetail";

export default function HelloWorld(){
    const propsUserCard = {
        nama: "Musarofah",
        nim: "2355301151",
        tanggal: "2025-03-11"
    }

    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai/>
            <QuoteText/>
            <UserCard
            nama= "Musarofah"
            nim= "2355301151"
            tanggal= {new Date().toLocaleDateString()}
            />
            <UserCard {...propsUserCard}/>
            <img src="img/upin ipin.jpg" alt="logo"/>
            <img src="img/upin ipin.jpg" alt="logo"/>
            
        </div>
    )
}

function GreetingBinjai(){
    return (
        <small>Salam Dari Binjai</small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}



