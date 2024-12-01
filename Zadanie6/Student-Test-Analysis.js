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