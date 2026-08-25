let currentIndex = 0;

const pinyinEl = document.getElementById("pinyin");
const characterEl = document.getElementById("character");
const meaningEl = document.getElementById("meaning");
const noteEl = document.getElementById("note");
const charPinyinWrap = document.getElementById("charPinyinWrap");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const shuffleToggle = document.getElementById("shuffle");
const wordSelectGroup = document.getElementById("wordSelectGroup");
const speakBtn = document.getElementById("speakBtn");
const strokeBtn = document.getElementById("strokeBtn");
const resetBtn = document.getElementById("resetBtn");
const blindToggle = document.getElementById("blindToggle");
const blindToggleLabel = document.getElementById("blindToggleLabel");
const blindIcon = document.querySelector(".blind-icon");

const learntWords = new Set();

// Storage Keys
const STORAGE_KEY_LEARNT = "cvr_learnt_words";
const STORAGE_KEY_INDEX = "cvr_current_index";
const STORAGE_KEY_BLIND = "cvr_blind_mode";

// Hidden-mode state. `blindMode` persists across words until toggled off;
// `revealed` is per-word and resets whenever you move to a different word.
let blindMode = false;
let revealed = false;

// Chinese Voice Detection
let chineseVoice = null;

function loadVoices() {
  if (!("speechSynthesis" in window)) return;
  const voices = window.speechSynthesis.getVoices();
  chineseVoice = voices.find(
    (v) =>
      v.lang.startsWith("zh") ||
      v.lang.includes("CN") ||
      v.name.toLowerCase().includes("chinese"),
  );
}

if ("speechSynthesis" in window) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

// Universal Speech Function (Optimized for Firefox & Chrome)
function speakChinese(text) {
  if (!text) return;

  // 1. If browser has a native Chinese OS voice, use Web Speech API
  if ("speechSynthesis" in window) {
    if (!chineseVoice) loadVoices();

    if (chineseVoice) {
      try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = chineseVoice;
        utterance.lang = chineseVoice.lang;
        utterance.rate = 0.8;
        window.speechSynthesis.speak(utterance);
        return;
      } catch (e) {
        console.warn("SpeechSynthesis failed, using fallback:", e);
      }
    }
  }

  // 2. Fallback for Firefox/Browsers without native OS Chinese voice
  const audioUrl = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&le=zh`;
  const audio = new Audio(audioUrl);

  audio.play().catch((err) => {
    console.error("Audio playback error:", err);
  });
}

// Storage: Load saved state
function loadProgress() {
  try {
    const savedLearnt = localStorage.getItem(STORAGE_KEY_LEARNT);
    if (savedLearnt) {
      const parsedArray = JSON.parse(savedLearnt);
      parsedArray.forEach((index) => {
        if (index >= 0 && index < VOCAB.length) {
          learntWords.add(index);
        }
      });
    }

    const savedIndex = localStorage.getItem(STORAGE_KEY_INDEX);
    if (savedIndex !== null) {
      const indexNum = parseInt(savedIndex, 10);
      if (!isNaN(indexNum) && indexNum >= 0 && indexNum < VOCAB.length) {
        currentIndex = indexNum;
      }
    }

    const savedBlind = localStorage.getItem(STORAGE_KEY_BLIND);
    blindMode = savedBlind === "true";
  } catch (e) {
    console.error("Error loading saved progress:", e);
  }
}

// Storage: Save state
function saveProgress() {
  try {
    localStorage.setItem(
      STORAGE_KEY_LEARNT,
      JSON.stringify(Array.from(learntWords)),
    );
    localStorage.setItem(STORAGE_KEY_INDEX, currentIndex.toString());
  } catch (e) {
    console.error("Error saving progress:", e);
  }
}

function saveBlindPreference() {
  try {
    localStorage.setItem(STORAGE_KEY_BLIND, blindMode ? "true" : "false");
  } catch (e) {
    console.error("Error saving hidden-mode preference:", e);
  }
}

// Part-of-speech categories, in the order their dropdowns should appear.
// Only categories that are actually present in VOCAB get a dropdown built.
const CATEGORY_ORDER = [
  { key: "noun", label: "Noun" },
  { key: "proper noun", label: "Proper Noun" },
  { key: "verb", label: "Verb" },
  { key: "adjective", label: "Adjective" },
  { key: "pronoun", label: "Pronoun" },
  { key: "measure", label: "Measure Word" },
  { key: "adverb", label: "Adverb" },
  { key: "particle", label: "Particle" },
  { key: "conjunction", label: "Conjunction" },
  { key: "numeral", label: "Numeral" },
];

// Populated by buildWordSelects(): pos key -> <select> element
let wordSelects = {};

// Builds one <select> per part-of-speech category found in VOCAB, each
// listing that category's words alphabetically by pinyin, and appends
// them all into #wordSelectGroup.
function buildWordSelects() {
  const grouped = {};
  VOCAB.forEach((word, index) => {
    if (!grouped[word.pos]) grouped[word.pos] = [];
    grouped[word.pos].push(index);
  });

  wordSelectGroup.innerHTML = "";
  wordSelects = {};

  CATEGORY_ORDER.forEach(({ key, label }) => {
    const indices = grouped[key];
    if (!indices || indices.length === 0) return;

    indices.sort((a, b) => VOCAB[a].pinyin.localeCompare(VOCAB[b].pinyin));

    const select = document.createElement("select");
    select.className = "word-select";
    select.dataset.pos = key;
    select.setAttribute("aria-label", label);

    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = label;
    placeholder.disabled = true;
    placeholder.selected = true;
    select.appendChild(placeholder);

    indices.forEach((idx) => {
      const option = document.createElement("option");
      option.value = idx;
      option.textContent = `${VOCAB[idx].pinyin} - ${VOCAB[idx].chinese}`;
      select.appendChild(option);
    });

    select.addEventListener("change", () => {
      if (select.value === "") return;
      currentIndex = Number(select.value);
      displayWord();
    });

    wordSelectGroup.appendChild(select);
    wordSelects[key] = select;
  });
}

// Shows the current word's index in its own category's dropdown, and
// resets every other category dropdown back to its placeholder.
function updateWordSelects() {
  const currentPos = VOCAB[currentIndex].pos;

  Object.entries(wordSelects).forEach(([pos, select]) => {
    select.value = pos === currentPos ? String(currentIndex) : "";
  });
}

// Applies the blind-mode / revealed classes and updates the toggle icon.
function updateBlindDisplay() {
  document.body.classList.toggle("blind-mode", blindMode);
  document.body.classList.toggle("revealed", revealed);
  blindToggleLabel.classList.toggle("active", blindMode);
  blindIcon.textContent = blindMode ? "🙈" : "👁️";
}

function setRevealed(value) {
  revealed = value;
  document.body.classList.toggle("revealed", revealed);
}

// Builds the strokeorder.com search link for a given character/word.
function strokeOrderUrl(chinese) {
  return `https://www.strokeorder.com/chinese/search?q=${encodeURIComponent(chinese)}`;
}

// Paints the current word into the DOM without touching reveal state.
function renderWord() {
  const word = VOCAB[currentIndex];

  pinyinEl.textContent = word.pinyin;
  characterEl.textContent = word.chinese;
  meaningEl.textContent = word.meaning;
  noteEl.textContent = word.note || "";

  characterEl.classList.toggle("learnt", learntWords.has(currentIndex));
  strokeBtn.href = strokeOrderUrl(word.chinese);

  updateWordSelects();
  saveProgress();
}

// Used when navigating to a (possibly new) word: always resets reveal.
function displayWord() {
  setRevealed(false);
  renderWord();
}

function toggleLearnt() {
  if (learntWords.has(currentIndex)) {
    learntWords.delete(currentIndex);
  } else {
    learntWords.add(currentIndex);
  }
  renderWord();
}

function randomIndex() {
  if (VOCAB.length <= 1) return currentIndex;

  let index;

  do {
    index = Math.floor(Math.random() * VOCAB.length);
  } while (index === currentIndex);

  return index;
}

function nextWord() {
  if (shuffleToggle.checked) {
    const available = [];

    for (let i = 0; i < VOCAB.length; i++) {
      if (!learntWords.has(i)) available.push(i);
    }

    if (available.length === 0) return;

    currentIndex = available[Math.floor(Math.random() * available.length)];
  } else {
    currentIndex = nextAvailable(currentIndex, 1);
  }

  displayWord();
}

function previousWord() {
  if (shuffleToggle.checked) {
    const available = [];

    for (let i = 0; i < VOCAB.length; i++) {
      if (!learntWords.has(i)) available.push(i);
    }

    if (available.length === 0) return;

    currentIndex = available[Math.floor(Math.random() * available.length)];
  } else {
    currentIndex = nextAvailable(currentIndex, -1);
  }

  displayWord();
}

function nextAvailable(start, direction) {
  if (learntWords.size === VOCAB.length) {
    return start;
  }

  let index = start;

  do {
    index = (index + direction + VOCAB.length) % VOCAB.length;
  } while (learntWords.has(index));

  return index;
}

nextBtn.addEventListener("click", nextWord);

prevBtn.addEventListener("click", previousWord);

// Audio button handler
speakBtn.addEventListener("click", () => {
  speakChinese(VOCAB[currentIndex].chinese);
});

// Reset progress button handler
resetBtn.addEventListener("click", () => {
  if (learntWords.size === 0) {
    alert("No learnt words to reset!");
    return;
  }

  if (confirm("Are you sure you want to reset all learnt words?")) {
    learntWords.clear();
    saveProgress();
    renderWord();
  }
});

// Hidden-mode toggle handler. This is a global setting (not per word):
// it stays on as you move through Next/Previous/the dropdowns until you
// switch it off again.
blindToggle.addEventListener("change", () => {
  blindMode = blindToggle.checked;
  setRevealed(false);
  updateBlindDisplay();
  saveBlindPreference();
});

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if (e.target.tagName === "SELECT" || e.target.tagName === "INPUT") return;

  if (e.key === "ArrowRight") {
    nextWord();
  } else if (e.key === "ArrowLeft") {
    previousWord();
  } else if (e.code === "Space") {
    e.preventDefault(); // Prevent page scrolling down
    speakChinese(VOCAB[currentIndex].chinese);
  }
});

// Tapping the character/pinyin area:
// - in hidden mode, first reveals the current word, then toggles learnt
// - otherwise, toggles learnt right away (previous behavior)
charPinyinWrap.addEventListener("click", () => {
  if (blindMode && !revealed) {
    setRevealed(true);
    return;
  }

  toggleLearnt();
});

// Initial boot logic: Restore state from LocalStorage & render
buildWordSelects();
loadProgress();
blindToggle.checked = blindMode;
updateBlindDisplay();
displayWord();
