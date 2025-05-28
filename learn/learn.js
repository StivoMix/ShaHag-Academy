const exercises = [
  {
    q: "מהי שפת הג'?",
    options: [
      "שפה סודית המבוססת על העברית",
      "שפה רשמית בישראל",
      "שפת תכנות"
    ],
    correct: 0,
    explain: "שפת הג' היא שפה משחקית-סודית המבוססת על העברית."
  },
  {
    q: "מה עושים אחרי כל הברה בשפת הג'?",
    options: [
      "מוסיפים את האות ג'",
      "מוסיפים את האות ד'",
      "לא מוסיפים כלום"
    ],
    correct: 0,
    explain: "אחרי כל הברה מוסיפים את האות ג'."
  },
  {
    q: "מה עושים כאשר ההברה מסתיימת בתנועה (ניקוד)?",
    options: [
      "מוסיפים את הגימל מיד אחריה",
      "מוסיפים את הגימל בתחילת המילה",
      "לא מוסיפים גימל"
    ],
    correct: 0,
    explain: "אם ההברה מסתיימת בתנועה, מוסיפים את הגימל מיד אחריה."
  },
  {
    q: "מה עושים בהברות עם י' או ו' מחוברות (כמו 'או')?",
    options: [
      "מוסיפים גם אותיות אלו אחרי הגימל",
      "לא מוסיפים אותיות נוספות",
      "מוסיפים רק את הגימל"
    ],
    correct: 0,
    explain: "בהברות עם י' או ו' מחוברות, מוסיפים גם אותיות אלו אחרי הגימל."
  },
  {
    q: "מה עושים במילים לא מנוקדות?",
    options: [
      "מוסיפים גימל אחרי כל אות חוץ מהאות האחרונה ולפי חוקי השפה או לפי הקשר המילה",
      "לא מוסיפים גימל בכלל",
      "מוסיפים גימל רק בסוף המילה",
      "מוסיפים גימל אחרי כל אות"
    ],
    correct: 0,
    explain: "במילים לא מנוקדות, מוסיפים גימל אחרי כל אות."
  },
  {
    q: "מה יש לשים לב אליו בשפת הג'?",
    options: [
      "הברות סגורות, הברות פתוחות ותנועות שווא",
      "רק הברות פתוחות",
      "אין צורך לשים לב לכלום"
    ],
    correct: 0,
    explain: "יש לשים לב להברות סגורות, הברות פתוחות ותנועות שווא."
  },
    {
    type: "input",
    q: "(אין צורך בניקוד אך צריך להתייחס לניקוד ההקשרי למילה) מהי צורת שפת הג' של המילה: שלום",
    answer: "שגלוגום",
    explain: "צורת שפת הג' של שלום היא שגלוגום."
  },
  {
    type: "input",
    q: "(אין צורך בניקוד אך צריך להתייחס לניקוד ההקשרי למילה) מהי צורת שפת הג' של המילה: חבר",
    answer: "חגבגר",
    explain: "צורת שפת הג' של חבר היא חגבגר."
  },
  {
    type: "input",
    q: "(אין צורך בניקוד אך צריך להתייחס לניקוד ההקשרי למילה) מהי צורת שפת הג' של המילה: שמור",
    answer: "שגמוגור",
    explain: "צורת שפת הג' של שמור היא שגמוגור."
  },
  {
    type: "drag",
    q: "השלימו את המשפט בשפת הג' עבור: אני אוהב עברית",
    gimel: "אגניגי אוגוהגב עגבריגית",
    blank: "אוגוהגב",
    options: ["אוגוהגב", "אוגהגב", "אוגוהגבג"],
    correct: 0,
    explain: "אני אוהב עברית ← אגניגי אוגוהגב עגבריגית"
  },
  {
    type: "drag",
    q: "השלימו את המשפט בשפת הג' עבור: אתמול קראתי ספר טוב",
    gimel: "אגתמוגול קגרגאגתיגי סגפגר טוגוב",
    blank: "טוגוב",
    options: ["טוגוב", "טוגב", "טוגובג"],
    correct: 0,
    explain: "אתמול קראתי ספר טוב ← אגתמוגול קגרגאגתיגי סגפגר טוגוב"
  }
];

let currentQ = 0;
let score = 0;
let exerciseOrder = [];

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function shuffleOptions(options, correctIdx) {
  const arr = options.map((opt, i) => ({ opt, origIdx: i }));
  shuffleArray(arr);
  const newCorrect = arr.findIndex(x => x.origIdx === correctIdx);
  return {
    options: arr.map(x => x.opt),
    correct: newCorrect
  };
}

function startExercise() {
  const intro = document.getElementById('exercise-intro');
  if (intro) intro.style.display = 'none';
  
  currentQ = 0;
  score = 0;
  exerciseOrder = shuffleArray(exercises.slice()).map(q => {
    if (q.options && Array.isArray(q.options)) {
      const shuffled = shuffleOptions(q.options, q.correct);
      return {
        ...q,
        options: shuffled.options,
        correct: shuffled.correct
      };
    } else {
      return { ...q };
    }
  });
  showExerciseQuestion();
}

function dragStart(e, idx) {
  e.dataTransfer.setData("text/plain", idx);
}

function showExerciseQuestion() {
  const area = document.getElementById('exercise-area');
  const ex = exerciseOrder[currentQ];
  let html = `
    <div id="exercisecontainer" class="exercise-card">
      <h2>
        תרגול
        <span class="questionmark" title="בדקו את הידע שלכם על החומר שלמדתם">?</span>
      </h2>
      <div class="exercise-qtext"> ${exerciseOrder.length} / ${currentQ + 1} <span class="exercise-q">${ex.q}</span></div>
  `;

  if (!ex.type) {
    html += `
      <form id="exercise-form" onsubmit="event.preventDefault(); checkExercise();">
        ${ex.options.map((opt, i) => `
          <div class="quizoption">
            <input type="radio" name="q" id="quizoption${i}" value="${i}">
            <label for="quizoption${i}">${opt}</label>
          </div>
        `).join('')}
        <button type="submit" class="ws-btn" id="exercise-btn">בדוק תשובה »</button>
      </form>
      <div id="exercise-feedback"></div>
    `;
  }
  else if (ex.type === "input") {
    html += `
      <form id="exercise-form" onsubmit="event.preventDefault(); checkExercise();">
        <input type="text" id="gimelInput" autocomplete="off" style="font-size:1.1em;padding:0.4em 0.7em;border-radius:7px;border:1.5px solid #e6eaf2;width:80%;max-width:220px;text-align:center;">
        <button type="submit" class="ws-btn" id="exercise-btn">בדוק תשובה »</button>
      </form>
      <div id="exercise-feedback"></div>
    `;
  }
  else if (ex.type === "drag") {
    html += `
      <div class="gimel-sentence" style="font-size:1.15em;margin-bottom:1.2em;">
        ${ex.gimel.replace(ex.blank, `<span id="dropzone" class="dropzone">_____</span>`)}
      </div>
      <div class="drag-options" style="display:flex;gap:1em;justify-content:center;margin-bottom:1em;">
        ${ex.options.map((opt, i) => `
          <div class="drag-item" draggable="true" ondragstart="dragStart(event,${i})" id="drag${i}">${opt}</div>
        `).join('')}
      </div>
      <button class="ws-btn" id="exercise-btn" onclick="checkExercise()">בדוק תשובה »</button>
      <div id="exercise-feedback"></div>
    `;
  }

  html += `</div>`;
  area.innerHTML = html;

  if (ex.type === "drag") {
    const dropzone = document.getElementById('dropzone');
    dropzone.ondragover = e => e.preventDefault();
    dropzone.ondrop = function(e) {
      e.preventDefault();
      const idx = e.dataTransfer.getData("text/plain");
      dropzone.textContent = ex.options[idx];
      dropzone.setAttribute("data-idx", idx);
      dropzone.classList.add("filled");
    };
  }
}

function checkExercise() {
  const ex = exerciseOrder[currentQ];
  const feedback = document.getElementById('exercise-feedback');
  const btn = document.getElementById('exercise-btn');

  if (!ex.type) {
    const answer = document.querySelector('input[name="q"]:checked');
    if (!answer) {
      feedback.innerHTML = '<span class="exercise-warn">בחר תשובה!</span>';
      return;
    }
    if (parseInt(answer.value) === ex.correct) {
      score++;
      feedback.innerHTML = `<span class="exercise-correct">✔ נכון!</span><div class="exercise-explain">${ex.explain}</div>`;
    } else {
      feedback.innerHTML = `<span class="exercise-wrong">✖ לא נכון.</span><div class="exercise-explain">${ex.explain}</div>`;
    }
  }
  else if (ex.type === "input") {
    const val = document.getElementById('gimelInput').value.trim();
    if (!val) {
      feedback.innerHTML = '<span class="exercise-warn">הקלד תשובה!</span>';
      return;
    }
    if (val.replace(/[\s'״"׳]/g, "") === ex.answer.replace(/[\s'״"׳]/g, "")) {
      score++;
      feedback.innerHTML = `<span class="exercise-correct">✔ נכון!</span><div class="exercise-explain">${ex.explain}</div>`;
    } else {
      feedback.innerHTML = `<span class="exercise-wrong">✖ לא נכון.</span><div class="exercise-explain">${ex.explain}</div>`;
    }
  }
  else if (ex.type === "drag") {
    const dropzone = document.getElementById('dropzone');
    const idx = dropzone.getAttribute("data-idx");
    if (idx === null) {
      feedback.innerHTML = '<span class="exercise-warn">גרור אפשרות למקום החסר!</span>';
      return;
    }
    if (parseInt(idx) === ex.correct) {
      score++;
      feedback.innerHTML = `<span class="exercise-correct">✔ נכון!</span><div class="exercise-explain">${ex.explain}</div>`;
    } else {
      feedback.innerHTML = `<span class="exercise-wrong">✖ לא נכון.</span><div class="exercise-explain">${ex.explain}</div>`;
    }
  }

  btn.textContent = (currentQ < exerciseOrder.length - 1) ? "המשך" : "סיים תרגול";
  btn.onclick = nextExercise;
  btn.type = "button";
  if (!ex.type) document.querySelectorAll('input[name="q"]').forEach(input => input.disabled = true);
  if (ex.type === "input") document.getElementById('gimelInput').disabled = true;
  if (ex.type === "drag") {
    document.querySelectorAll('.drag-item').forEach(item => item.setAttribute('draggable', false));
    document.getElementById('dropzone').ondrop = null;
    document.getElementById('dropzone').ondragover = null;
  }
}

function nextExercise() {
  currentQ++;
  if (currentQ < exerciseOrder.length) {
    showExerciseQuestion();
  } else {
    showExerciseSummary();
  }
}

function showExerciseSummary() {
  const area = document.getElementById('exercise-area');
  area.innerHTML = `
    <div class="exercise-card">
      <h2>סיום תרגול</h2>
      <div class="exercise-summary">
        ענית נכון על <b>${score}</b> מתוך <b>${exerciseOrder.length}</b> שאלות.
      </div>
      <button class="ws-btn" onclick="startExercise()">נסה שוב</button>
    </div>
  `;
}