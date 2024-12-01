const produkty = [ //lista produktow
    { nazwa: "Laptop", cena: 1500, kategoria: "Elektronika" },
    { nazwa: "Smartfon", cena: 800, kategoria: "Elektronika" },
    { nazwa: "T-shirt", cena: 25, kategoria: "Odzież" },
    { nazwa: "Dżinsy", cena: 40, kategoria: "Odzież" },
    { nazwa: "Ekspres do kawy", cena: 100, kategoria: "Sprzęt AGD" }
];
//filtracja
function filtrujProdukty(produkty, kategoria, minCena, maxCena) {
    return produkty.filter(produkt => 
        (kategoria === "" || produkt.kategoria === kategoria) && 
        (produkt.cena >= minCena && produkt.cena <= maxCena)
    );
}
//wyswietlanie
function wyswietlProdukty(produkty) {
    produkty.forEach(produkt => {
        console.log(`Nazwa: ${produkt.nazwa}, Cena: ${produkt.cena} zł, Kategoria: ${produkt.kategoria}`);
    });
}

// Przykład użycia
const przefiltrowane = filtrujProdukty(produkty, "Elektronika", 500, 1500);
wyswietlProdukty(przefiltrowane);

// const przefiltrowane2 = filtrujProdukty(produkty, "Odzież", 25, 40);
// wyswietlProdukty(przefiltrowane2);
