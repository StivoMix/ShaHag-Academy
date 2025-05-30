const exerciseSets = {
  intro: [
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
  ],
  syllable: [
    {
      q: "מהי הברה פתוחה?",
      options: [
        "הברה שמסתיימת בתנועה",
        "הברה שמסתיימת בעיצור",
        "הברה שמתחילה בתנועה"
      ],
      correct: 0,
      explain: "הברה פתוחה מסתיימת בתנועה (למשל: 'כַּ', 'מוֹ')."
    },
    {
      q: "מהי הברה סגורה?",
      options: [
        "הברה שמסתיימת בעיצור",
        "הברה שמסתיימת בתנועה",
        "הברה שמתחילה בתנועה"
      ],
      correct: 0,
      explain: "הברה סגורה מסתיימת בעיצור (למשל: 'לוֹם' ב'שלום')."
    },
        {
      type: "split",
      q: "(אין צורך בכתיבה מנוקדת) חלקו את המילה להברות: שָׁלוֹם",
      word: "שלום",
      syllables: ["ש", "לום"],
      explain: "שלום מתחלק להברות: שָׁ-לוֹם"
    },
    {
      type: "split",
      q: "(אין צורך בכתיבה מנוקדת) חלקו את המילה להברות: מוֹרֶה",
      word: "מורה",
      syllables: ["מו", "רה"],
      explain: "מורה מתחלק להברות: מוֹ-רֶה"
    },
    {
      type: "split",
      q: "(אין צורך בכתיבה מנוקדת) חלקו את המילה להברות: חַלּוֹן",
      word: "חלון",
      syllables: ["ח", "לון"],
      explain: "חלון מתחלק להברות: חַ-לּוֹן"
    },
    {
      type: "split",
      q: "(אין צורך בכתיבה מנוקדת) חלקו את המילה להברות: בַּיִת",
      word: "בית",
      syllables: ["ב", "ית"],
      explain: "בית מתחלק להברות: בַּ-יִת"
    },
    {
      type: "split",
      q: "(אין צורך בכתיבה מנוקדת) חלקו את המילה להברות: יְלָדִים",
      word: "ילדים",
      syllables: ["י", "ל", "דים"],
      explain: "ילדים מתחלק להברות: יְ-לָ-דִים"
    },
    {
      type: "split",
      q: "(אין צורך בכתיבה מנוקדת) חלקו את המילה להברות: תִּינוֹק",
      word: "תינוק",
      syllables: ["תי", "נוק"],
      explain: "תינוק מתחלק להברות: תִּי-נוֹק"
    },
    {
      type: "split-drag",
      q: "(לחצו פעמיים להסרה) גררו את ההברות למקום הנכון: חומצה",
      word: "חומצה",
      syllables: ["חֻו", "מְ", "צָה"],
      options: ["חֻו", "מְ", "צָה", "חוּ", "מָה", "צָ", "חֻמְ", "צָה", "מְצָה"],
      explain: "חומצה מתחלק להברות: חֻו-מְ-צָה"
    },
    {
      type: "split-drag",
      q: "(לחצו פעמיים להסרה) גררו את ההברות למקום הנכון: ספרים",
      word: "ספרים",
      syllables: ["סְ", "פָ", "רִים"],
      options: ["פָ", "סְ", "רִים", "סֵפֶר", "ים", "רִ", "סְפָ"],
      explain: "ספרים מתחלק להברות: סְ-פָ-רִים"
    },
    {
      type: "split-drag",
      q: "(לחצו פעמיים להסרה) גררו את ההברות למקום הנכון: מחשב",
      word: "מחשב",
      syllables: ["מַ", "חְ", "שֵב"],
      options: ["מַחְ", "חְ", "שֵ", "מַ", "שֵב", "ב"],
      explain: "מחשב מתחלק להברות: מַ-חְ-שֵב"
    },
    {
      type: "syllable-type",
      q: "סמנו את סוגי ההברות במילה: גְּזָרִים",
      word: "גְּזָרִים",
      syllables: ["גְּ", "זָ", "רִים"],
      types: ["הברה סגורה", "הברה פתוחה", "הברה סגורה"],
      explain: "גְּ – הברה סגורה (מסתיימת בעיצור), זָ – הברה פתוחה (מסתיימת בתנועה), רִים – הברה סגורה (מסתיימת בעיצור ם)."
    },
    {
      type: "syllable-type",
      q: "סמנו את סוגי ההברות במילה: מְכוֹנִית",
      word: "מְכוֹנִית",
      syllables: ["מְ", "כוֹ", "נִית"],
      types: ["הברה סגורה", "הברה פתוחה", "הברה סגורה"],
      explain: "מְ – הברה סגורה (מסתיימת בעיצור), כוֹ – הברה פתוחה (התנועה כוללת את ו' אך אינה נסגרת בעיצור), נִית – הברה סגורה (מסתיימת בעיצור ת')."
    },
    {
      type: "syllable-type",
      q: "סמנו את סוגי ההברות במילה: שׁוּלְחָן",
      word: "שׁוּלְחָן",
      syllables: ["שׁוּל", "חָן"],
      types: ["הברה סגורה", "הברה סגורה"],
      explain: "שׁוּל – הברה סגורה (מסתיימת בעיצור ל'), חָן – הברה סגורה (מסתיימת בעיצור ן)."
    },
    {
      type: "syllable-type",
      q: "סמנו את סוגי ההברות במילה: עוּגָה",
      word: "עוּגָה",
      syllables: ["עוּ", "גָה"],
      types: ["הברה פתוחה", "הברה פתוחה"],
      explain: "עוּ – הברה פתוחה (התנועה כוללת את ו' אך אינה נסגרת בעיצור), גָה – הברה פתוחה (מסתיימת בתנועה)."
    }
  ]
};

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

function dragStart(e, idx) {
  e.dataTransfer.setData("text/plain", idx);
}

function getLessonKey() {
  const path = window.location.pathname;
  if (path.includes("syllable")) return "syllable";
  return "intro";
}

let currentQ = 0;
let score = 0;
let exerciseOrder = [];

function startExercise() {
  const intro = document.getElementById('exercise-intro');
  if (intro) intro.style.display = 'none';

  currentQ = 0;
  score = 0;
  const lessonKey = getLessonKey();
  const exercises = exerciseSets[lessonKey] || [];
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
  else if (ex.type === "split") {
    html += `
      <form id="exercise-form" onsubmit="event.preventDefault(); checkExercise();">
        <div class="split-word-inputs" style="display:flex;gap:0.5em;justify-content:center;align-items:center;">
          ${ex.syllables.map((_, i) =>
            `<input type="text" class="split-syllable" id="split${i}" autocomplete="off" style="width:60px;text-align:center;font-size:1.1em;padding:0.3em 0.2em;border-radius:7px;border:1.5px solid #e6eaf2;">
            ${i < ex.syllables.length - 1 ? '<span style="font-weight:bold;">-</span>' : ''}`
          ).join('')}
        </div>
        <div style="margin-top:0.7em;font-size:1.05em;color:#888;">${ex.word}</div>
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
  else if (ex.type === "split-drag") {
    const dragOptions = shuffleArray(ex.options.slice());
    html += `
      <form id="exercise-form" onsubmit="event.preventDefault(); checkExercise();">
        <div class="split-word-inputs" style="display:flex;gap:0.5em;justify-content:center;align-items:center;">
          ${ex.syllables.map((_, i) =>
            `<span class="split-dropzone" id="split-dropzone${i}" data-option="" style="display:inline-block;min-width:60px;min-height:2em;border-bottom:2px dashed #1976d2;background:#e6eaf2;color:#1976d2;font-weight:bold;text-align:center;border-radius:7px;margin:0 2px;"></span>
            ${i < ex.syllables.length - 1 ? '<span style="font-weight:bold;">-</span>' : ''}`
          ).join('')}
        </div>
        <div class="drag-options" id="drag-options" style="display:flex;flex-wrap:wrap;gap:1em;justify-content:center;margin:1em 0;max-width:420px;">
          ${dragOptions.map((opt, i) => `
            <div class="drag-item" draggable="true" data-option="${opt}" ondragstart="dragStart(event,${i})" id="drag${i}" style="margin-bottom:0.5em;">${opt}</div>
          `).join('')}
        </div>
        <div style="margin-top:0.7em;font-size:1.05em;color:#888;">${ex.word}</div>
        <button type="submit" class="ws-btn" id="exercise-btn">בדוק תשובה »</button>
      </form>
      <div id="exercise-feedback"></div>
    `;
  }
  else if (ex.type === "syllable-type") {
    const options = ["הברה פתוחה", "הברה סגורה"];
    html += `
      <form id="exercise-form" onsubmit="event.preventDefault(); checkExercise();">
        <div class="syllable-type-inputs" style="display:flex;gap:0.7em;justify-content:center;align-items:flex-end;">
          ${ex.syllables.map((syll, i) => `
            <div style="display:flex;flex-direction:column;align-items:center;">
              <div style="font-weight:bold;font-size:1.1em;margin-bottom:0.3em;">${syll}</div>
              <select class="syllable-type-field" id="sylltype${i}" style="width:120px;text-align:center;font-size:1em;padding:0.3em 0.2em;border-radius:7px;border:1.5px solid #e6eaf2;background:#f7fafd;">
                <option value="">בחרו סוג</option>
                ${options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
              </select>
            </div>
          `).join('')}
        </div>
        <div style="margin-top:0.7em;font-size:1.05em;color:#888;">${ex.word}</div>
        <button type="submit" class="ws-btn" id="exercise-btn">בדוק תשובה »</button>
      </form>
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
  if (ex.type === "split-drag") {
    function updateDragLayout() {
      const dragOptionsDiv = document.getElementById('drag-options');
      const items = Array.from(dragOptionsDiv.querySelectorAll('.drag-item'));
      const visibleItems = items.filter(item => item.style.visibility !== "hidden");
      items.forEach(item => dragOptionsDiv.removeChild(item));
      visibleItems.forEach(item => dragOptionsDiv.appendChild(item));
    }

    document.querySelectorAll('.drag-item').forEach(item => {
      item.ondragstart = function(e) {
        e.dataTransfer.setData("text/plain", item.getAttribute('data-option'));
        setTimeout(() => item.classList.add('dragging'), 0);
      };
      item.ondragend = function() {
        item.classList.remove('dragging');
      };
    });

    document.querySelectorAll('.split-dropzone').forEach(zone => {
      zone.ondragover = e => e.preventDefault();
      zone.ondrop = function(e) {
        e.preventDefault();
        const text = e.dataTransfer.getData("text/plain");
        if (zone.textContent.trim() === "") {
          zone.textContent = text;
          zone.setAttribute('data-option', text);
          zone.classList.add("filled");
          document.querySelectorAll('.drag-item').forEach(item => {
            if (item.getAttribute('data-option') === text) item.style.visibility = "hidden";
          });
          updateDragLayout();
        }
      };
      zone.ondblclick = function() {
        const text = zone.getAttribute('data-option');
        if (zone.textContent.trim() !== "" && text) {
          const dragOptionsDiv = document.getElementById('drag-options');
          const newDrag = document.createElement('div');
          newDrag.className = "drag-item";
          newDrag.setAttribute('draggable', true);
          newDrag.setAttribute('data-option', text);
          newDrag.textContent = text;
          newDrag.ondragstart = function(e) {
            e.dataTransfer.setData("text/plain", text);
            setTimeout(() => newDrag.classList.add('dragging'), 0);
          };
          newDrag.ondragend = function() {
            newDrag.classList.remove('dragging');
          };
          dragOptionsDiv.appendChild(newDrag);

          zone.textContent = "";
          zone.setAttribute('data-option', "");
          zone.classList.remove("filled");
          updateDragLayout();
        }
      };
    });

    updateDragLayout();
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
  else if (ex.type === "split") {
    let correct = true;
    for (let i = 0; i < ex.syllables.length; i++) {
      const userVal = (document.getElementById(`split${i}`).value || "").replace(/\s/g, "");
      const correctVal = ex.syllables[i].replace(/\s/g, "");
      if (userVal !== correctVal) correct = false;
    }
    if (correct) {
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
  else if (ex.type === "split-drag") {
    let correct = true;
    for (let i = 0; i < ex.syllables.length; i++) {
      const zone = document.getElementById(`split-dropzone${i}`);
      const userVal = (zone.textContent || "").replace(/\s/g, "");
      const correctVal = ex.syllables[i].replace(/\s/g, "");
      if (userVal !== correctVal) correct = false;
    }
    if (correct) {
      score++;
      feedback.innerHTML = `<span class="exercise-correct">✔ נכון!</span><div class="exercise-explain">${ex.explain}</div>`;
    } else {
      feedback.innerHTML = `<span class="exercise-wrong">✖ לא נכון.</span><div class="exercise-explain">${ex.explain}</div>`;
    }
    document.querySelectorAll('.drag-item').forEach(item => item.setAttribute('draggable', false));
    document.querySelectorAll('.split-dropzone').forEach(zone => {
      zone.ondrop = null;
      zone.ondragover = null;
      zone.ondblclick = null;
    });
    btn.textContent = (currentQ < exerciseOrder.length - 1) ? "המשך" : "סיים תרגול";
    btn.onclick = nextExercise;
    btn.type = "button";
    document.querySelectorAll('.syllable-type-field').forEach(input => input.disabled = true);
    return;
  }
  else if (ex.type === "syllable-type") {
    let correct = true;
    for (let i = 0; i < ex.syllables.length; i++) {
      const val = (document.getElementById(`sylltype${i}`).value || "").trim();
      if (val !== ex.types[i]) correct = false;
    }
    if (correct) {
      score++;
      feedback.innerHTML = `<span class="exercise-correct">✔ נכון!</span><div class="exercise-explain">${ex.explain}</div>`;
    } else {
      feedback.innerHTML = `<span class="exercise-wrong">✖ לא נכון.</span><div class="exercise-explain">${ex.explain}</div>`;
    }
    btn.textContent = (currentQ < exerciseOrder.length - 1) ? "המשך" : "סיים תרגול";
    btn.onclick = nextExercise;
    btn.type = "button";
    document.querySelectorAll('.syllable-type-field').forEach(input => input.disabled = true);
    return;
  }

  btn.textContent = (currentQ < exerciseOrder.length - 1) ? "המשך" : "סיים תרגול";
  btn.onclick = nextExercise;
  btn.type = "button";
  if (!ex.type) document.querySelectorAll('input[name="q"]').forEach(input => input.disabled = true);
  if (ex.type === "input") document.getElementById('gimelInput').disabled = true;
  if (ex.type === "split") document.querySelectorAll('.split-syllable').forEach(input => input.disabled = true);
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