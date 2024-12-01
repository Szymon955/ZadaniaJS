const students = [
    { name: 'Jan', score: 85 },
    { name: 'Anna', score: 92 },
    { name: 'Piotr', score: 78 },
    { name: 'Kasia', score: 94 },
    { name: 'Marek', score: 88 }
  ];

  // Funkcja do obliczania średniej
function calculateAverage(scores) {
    const total = scores.reduce((acc, score) => acc + score, 0); // Sumowanie wyników
    return total / scores.length; // Dzielenie
  }
  
  // Funkcja do znajdowania najwyższego i najniższego wyniku
  function findMinMax(scores) {
    const max = Math.max(...scores);
    const min = Math.min(...scores); 
    return { max, min };
  }

  function analyzeResults(students) {
    // Wyodrębnianie wyników (destrukturyzacja)
    const scores = students.map(({ score }) => score);
  
    // srednia
    const average = calculateAverage(scores);
  
    
    const { max, min } = findMinMax(scores);
  
    
    console.log(`Średnia wyników: ${average.toFixed(2)}`);
    console.log(`Najwyższy wynik: ${max}`);
    console.log(`Najniższy wynik: ${min}`);
  }
  
  
  analyzeResults(students);