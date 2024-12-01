class Kalkulator{
    add(a, b){
        return `Wynik dodawania to: ${a + b}`;
    }

    subtract(a, b){//metoda odejmowania
        return `Wynik odejmowania to: ${a - b}`
    }

    multiplay(a, b){
        return `Wynik mnożenia to: ${a * b}`
    }

    divide(a, b){
        if(b === 0){
            return "Nie mozna dzielic przez 0"
        }
        return `Wynik dzielenia to ${a/b}`;
    }
}

const calc = new Kalkulator();