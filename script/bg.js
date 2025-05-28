(function floatingHebrewLetters() {
  const gimel = 'ג'
  const colors = ['#005599', '#003366', '#c2ccd6', '#e6eaf2', '#0088cc', '#00b894', '#ff7675', '#fdcb6e'];
  const bg = document.getElementById('hebrew-bg');
  if (!bg) return;
  function createLetter() {
    const el = document.createElement('span');
    el.className = 'hebrew-float';
    el.textContent = gimel
    el.style.left = Math.random()*100 + 'vw';
    el.style.fontSize = (1.8 + Math.random()*2.5) + 'rem';
    el.style.color = colors[Math.floor(Math.random()*colors.length)];
    el.style.animationDuration = (8 + Math.random()*8) + 's';
    el.style.animationDelay = (-Math.random()*10) + 's';
    bg.appendChild(el);
    setTimeout(() => bg.removeChild(el), 16000);
  }
  for (let i=0; i<18; i++) createLetter();
  setInterval(createLetter, 500);
})();