class Kalkulator{
    add(a, b){ //metoda dodawania
        return `Wynik dodawania to: ${a + b}`;
    }

    subtract(a, b){ //metoda odejmowania
        return `Wynik odejmowania to: ${a - b}`
    }

    multiply(a, b){ //metoda mnozenia
        return `Wynik mnożenia to: ${a * b}`
    }

    divide(a, b){ //metoda dzielenia
        if(b === 0){
            return "Nie mozna dzielic przez 0"
        }
        return `Wynik dzielenia to ${a/b}`;
    }
}

const calc = new Kalkulator();//Utworzenie obiektu kalkulator


console.log(calc.add(5, 3)); 
console.log(calc.subtract(5, 3)); 
console.log(calc.multiply(5, 3)); 
console.log(calc.divide(5, 3)); 
console.log(calc.divide(5, 0)); 