function updateResults(reaction, memory, verbal, visual) {
  document.getElementById('reaction-score').innerText = reaction;
  document.getElementById('memory-score').innerText = memory;
  document.getElementById('verbal-score').innerText = verbal;
  document.getElementById('visual-score').innerText = visual;
 
  const totalAverage = Math.round((reaction + memory + verbal + visual) / 4);
  document.getElementById('total-score').innerText = totalAverage;

  const resultText = document.getElementById('result-text');
  const resultDesc = document.getElementById('result-desc');

  if (totalAverage >= 85) {
    resultText.innerText = 'Excellent';
    resultDesc.innerText = 'Your scored higher than 90% of the people who have taken these...';
  } else if (totalAverage >= 70) {
    resultText.innerText = 'Great';
    resultDesc.innerText = 'Your scored higher than 75% of the people who have taken these...';
  } else if (totalAverage >= 50) {
    resultText.innerText = 'Good';
    resultDesc.innerText = 'Your scored higher than 50% of the people who have taken these...';
  } else {
    resultText.innerText = 'Needs Improvement';
    resultDesc.innerText = 'You scored lower than 50% of the people who have taken these...';
  }
  
} 
updateResults(80, 92, 61, 72);

document.getElementById('continue-btn').addEventListener('click', () => {
    const randReaction = Math.floor(Math.random() * 61) + 40;
    const randMemory = Math.floor(Math.random() * 61) + 40;
    const randVerbal = Math.floor(Math.random() * 61) + 40;
    const randVisual = Math.floor(Math.random() * 61) + 40;
    updateResults(randReaction, randMemory, randVerbal, randVisual);});