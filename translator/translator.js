let lastTranslatedWithNikud = "";

document.getElementById('settingsBtn').onclick = function() {
  const panel = document.getElementById('settingsPanel');
  panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
};
document.getElementById('clearBtn').onclick = function() {
  document.getElementById('inputText').value = '';
  document.getElementById('translatedText').textContent = '';
};
document.getElementById('showNikud').onchange = updateOutput;
document.getElementById('copyButton').onclick = function() {
  const text = document.getElementById('translatedText').textContent;
  if (!text) return;
  navigator.clipboard.writeText(text).then(() => {
    this.textContent = "הועתק!";
    setTimeout(() => { this.textContent = "העתק"; }, 1200);
  });
};
document.getElementById('highlightGimel').onchange = updateOutput;
document.getElementById('highlightExtra').onchange = updateOutput;
document.getElementById('highlightSyllables').onchange = updateOutput;

function validateHebrew(textarea) {
  const hebrewOnly = textarea.value.replace(/[^\u0590-\u05FF\s.,?!()"\-–—]/g, '');
  if (textarea.value !== hebrewOnly) {
    textarea.value = hebrewOnly;
  }
}

function updateOutput() {
  const output = document.getElementById("translatedText");
  const showNikud = document.getElementById("showNikud").checked;
  let text = lastTranslatedWithNikud;
  if (!showNikud) {
    text = text.replace(/[\u0591-\u05BD\u05BF-\u05C7]/g, '');
  }
  const highlightGimel = document.getElementById("highlightGimel").checked;
  const highlightExtra = document.getElementById("highlightExtra").checked;
  const highlightSyllables = document.getElementById("highlightSyllables").checked;

  if (highlightGimel) {
    text = text.replace(/\[\[GIMEL\]\](ג[\u0591-\u05C7]*)\[\[\/GIMEL\]\]/g, '<span class="gimel-highlight">$1</span>');
  } else {
    text = text.replace(/\[\[GIMEL\]\](ג[\u0591-\u05C7]*)\[\[\/GIMEL\]\]/g, 'ג');
  }

  if (highlightExtra) {
    text = text.replace(/\[\[EXTRA\]\](([יו][\u0591-\u05C7]*)+)\[\[\/EXTRA\]\]/g, '<span class="extra-highlight">$1</span>');
  } else {
    text = text.replace(/\[\[EXTRA\]\](([יו][\u0591-\u05C7]*)+)\[\[\/EXTRA\]\]/g, '$1');
  }

  if (highlightSyllables) {
    text = text.replace(/\[\[SYL\]\](.+?)\[\[\/SYL\]\]/g, '<span class="syllable-highlight">$1</span>');
    text = text.replace(/\[\[NON_SYL\]\](.+?)\[\[\/NON_SYL\]\]/g, '<span class="non-syllable-highlight">$1</span>');
  } else {
    text = text.replace(/\[\[SYL\]\](.+?)\[\[\/SYL\]\]/g, '$1');
    text = text.replace(/\[\[NON_SYL\]\](.+?)\[\[\/NON_SYL\]\]/g, '$1');
  }

  text = text.replace(/\[\[GIMEL\]\]|\[\[\/GIMEL\]\]|\[\[EXTRA\]\]|\[\[\/EXTRA\]\]|\[\[SYL\]\]|\[\[\/SYL\]\]|\[\[NON_SYL\]\]|\[\[\/NON_SYL\]\]/g, '');

  output.innerHTML = text;
}

function toggleNikud() {
  updateOutput();
}

function translateText() {
  const input = document.getElementById("inputText").value;
  lastTranslatedWithNikud = Shahag(input);
  updateOutput();
}

function stripNonVowelNikud(nikud) {
  return nikud.replace(/[\u05BC\u05C1\u05C2\u05C7]/g, '');
}

function isOnlyShva(nikud) {
  return stripNonVowelNikud(nikud) === "\u05B0";
}

function hasKubutz(nikud) {
  return stripNonVowelNikud(nikud).includes('\u05BB');
}
function hasHirik(nikud) {
  return stripNonVowelNikud(nikud).includes('\u05B4');
}
function hasHolam(nikud) {
  return stripNonVowelNikud(nikud).includes('\u05B9');
}
function hasKamatzOrPatah(nikud) {
  const stripped = stripNonVowelNikud(nikud);
  return stripped.includes('\u05B8') || stripped.includes('\u05B7');
}

function Shahag(text) {
  const letters = [...text];
  const result = [];

  const isHebrewLetter = ch => /[\u05D0-\u05EA]/.test(ch);
  const isNikud = ch => /[\u05B0-\u05BC\u05C1-\u05C7]/.test(ch);
  const isYud = ch => ch === 'י';
  const isVav = ch => ch === 'ו';
  const isShva = nikud => nikud === '\u05B0';

  const finalToRegularMap = {
    'ך': 'כ',
    'ם': 'מ',
    'ן': 'נ',
    'ף': 'פ',
    'ץ': 'צ'
  };

  const isEndOfWord = idx => (
    idx >= letters.length ||
    letters[idx] === ' ' ||
    /[.,?!()"\-–—]/.test(letters[idx])
  );

  let attachYudVav = false;
  let yudVavChar = '';
  let yudVavNikud = '';
  let lastConnectedYudVav = null;
  let lastConnectedYudVavNikud = '';

  let i = 0;
  while (i < letters.length) {
    let ch = letters[i];

    if (!isHebrewLetter(ch)) {
      result.push(ch);
      i++;
      continue;
    }

    let syllable = ch;
    let j = i + 1;
    let nikudChars = '';

    while (j < letters.length && isNikud(letters[j])) {
      syllable += letters[j];
      nikudChars += letters[j];
      j++;
    }

    let connectedNikud = nikudChars;
    attachYudVav = false;
    yudVavChar = '';
    yudVavNikud = '';

    if (
      letters[j] === 'י' &&
      letters[j + 1] === 'ו'
    ) {
      let yudNikud = '';
      let vavNikud = '';
      let yudPos = j + 1;
      while (yudPos < letters.length && isNikud(letters[yudPos])) {
        yudNikud += letters[yudPos];
        yudPos++;
      }
      let vavPos = yudPos + 1;
      while (vavPos < letters.length && isNikud(letters[vavPos])) {
        vavNikud += letters[vavPos];
        vavPos++;
      }
      if (
        stripNonVowelNikud(yudNikud) === '' &&
        stripNonVowelNikud(vavNikud) === ''
      ) {
        syllable += 'י' + yudNikud + 'ו' + vavNikud;
        j = vavPos;
        attachYudVav = true;
        yudVavChar = 'יו';
        connectedNikud = nikudChars;
      }
    }

    if (!attachYudVav && (isVav(letters[j]) || isYud(letters[j]))) {
      let nextNikud = '';
      let k = j + 1;
      while (k < letters.length && isNikud(letters[k])) {
        nextNikud += letters[k];
        k++;
      }
      const prevNikudStripped = stripNonVowelNikud(nikudChars);
      const nextNikudStripped = stripNonVowelNikud(nextNikud);

      if (isVav(letters[j])) {
        const vavHasNoNikud = nextNikudStripped === '';
        const vavHasHolam = nextNikudStripped === '\u05B9';
        const vavHasShuruk = nextNikudStripped === '\u05BC';
        const prevHasKubutz = prevNikudStripped.includes('\u05BB');
        const prevHasHolam = prevNikudStripped.includes('\u05B9');
        const prevHasShuruk = prevNikudStripped.includes('\u05BC');
        const prevHasNoNikud = prevNikudStripped === '';

        const isKamatzOrPatahBeforeVav = hasKamatzOrPatah(prevNikudStripped) && isEndOfWord(k);

        if (
          !isKamatzOrPatahBeforeVav &&
          (vavHasNoNikud || vavHasHolam || vavHasShuruk) &&
          (prevHasKubutz || prevHasHolam || prevHasShuruk || prevHasNoNikud)
        ) {
          yudVavChar = letters[j];
          let m = j + 1;
          while (m < letters.length && isNikud(letters[m])) {
            yudVavNikud += letters[m];
            m++;
          }
          syllable += yudVavChar + yudVavNikud;
          j = m;
          attachYudVav = true;
          connectedNikud = nikudChars;
        }
      }
      else if (isYud(letters[j])) {
        const yudHasNoNikud = nextNikudStripped === '';
        const prevHasHirik = prevNikudStripped.includes('\u05B4');
        const prevHasNoNikud = prevNikudStripped === '';

        const isKamatzOrPatahBeforeYud = hasKamatzOrPatah(prevNikudStripped) && isEndOfWord(k);

        if (
          !isKamatzOrPatahBeforeYud &&
          yudHasNoNikud &&
          (prevHasHirik || prevHasNoNikud)
        ) {
          yudVavChar = letters[j];
          let m = j + 1;
          while (m < letters.length && isNikud(letters[m])) {
            yudVavNikud += letters[m];
            m++;
          }
          syllable += yudVavChar + yudVavNikud;
          j = m;
          attachYudVav = true;
          connectedNikud = nikudChars;
        }
      }
    }

    if (
      attachYudVav &&
      (yudVavChar === 'י' || yudVavChar === 'ו' || yudVavChar === 'יו')
    ) {
      lastConnectedYudVav = yudVavChar;
      lastConnectedYudVavNikud = connectedNikud;
    } else if (isEndOfWord(j)) {
      lastConnectedYudVav = null;
      lastConnectedYudVavNikud = '';
    }

    const isFinalForm = finalToRegularMap.hasOwnProperty(ch);
    const trueEndOfWord = isEndOfWord(j);

    const onlyShva = (
      (!attachYudVav && isOnlyShva(nikudChars)) ||
      (attachYudVav && isOnlyShva(connectedNikud))
    );

    const isNonConnectedYudVav =
      !attachYudVav &&
      (ch === 'י' || ch === 'ו') &&
      stripNonVowelNikud(nikudChars) === '';

    const isShvaSyllable = isOnlyShva(nikudChars);
    const isConnectedYudVav = attachYudVav && (yudVavChar === 'י' || yudVavChar === 'ו' || yudVavChar === 'יו');
    const isLastNonConnected = trueEndOfWord &&
      (stripNonVowelNikud(nikudChars) === '' || isOnlyShva(nikudChars)) &&
      !isConnectedYudVav;
    const isNonSyllable = isShvaSyllable || isLastNonConnected;

    if (
      isFinalForm &&
      nikudChars &&
      !isShva(nikudChars) &&
      trueEndOfWord
    ) {
      result.push(finalToRegularMap[ch] + nikudChars);
      result.push(`[[GIMEL]]ג[[/GIMEL]]${nikudChars}${attachYudVav ? `[[EXTRA]]${yudVavChar}[[/EXTRA]]` : ''}`);
      result.push('ה');
    } else {
      if (isNonSyllable) {
        result.push(`[[NON_SYL]]${syllable}[[/NON_SYL]]`);
      } else {
        result.push(`[[SYL]]${syllable}[[/SYL]]`);
      }
      if (
        !onlyShva &&
        !isNonConnectedYudVav &&
        (
          !trueEndOfWord ||
          (isFinalForm && nikudChars && !isShva(nikudChars) && trueEndOfWord)
        )
      ) {
        result.push(`[[GIMEL]]ג[[/GIMEL]]${connectedNikud}${attachYudVav ? `[[EXTRA]]${yudVavChar}[[/EXTRA]]` : ''}`);
      }
    }

    i = j;

    if (
      isEndOfWord(i) &&
      i >= 2 &&
      letters[i - 2] === 'י' &&
      letters[i - 1] === 'ו'
    ) {
      let yudNikud = '';
      let vavNikud = '';
      let yudPos = i - 1;
      while (yudPos < letters.length && isNikud(letters[yudPos])) {
        yudNikud += letters[yudPos];
        yudPos++;
      }
      let vavPos = yudPos + 1;
      while (vavPos < letters.length && isNikud(letters[vavPos])) {
        vavNikud += letters[vavPos];
        vavPos++;
      }
      if (
        stripNonVowelNikud(yudNikud) === '' &&
        stripNonVowelNikud(vavNikud) === ''
      ) {
        lastConnectedYudVav = null;
        lastConnectedYudVavNikud = '';
        continue;
      }
    }

    if (
      lastConnectedYudVav &&
      isEndOfWord(i) &&
      !isOnlyShva(lastConnectedYudVavNikud)
    ) {
      result.push(`[[GIMEL]]ג[[/GIMEL]]${lastConnectedYudVav ? `[[EXTRA]]${lastConnectedYudVav}[[/EXTRA]]` : ''}`);
      lastConnectedYudVav = null;
      lastConnectedYudVavNikud = '';
    }
  }

  return result.join('');
}