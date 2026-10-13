
"use strict";

const $ = (id) => document.getElementById(id);
const KEY = "myUtilityDataV1";

const defaults = {
  settings: {
    theme: "dark",
    accent: "#718cff",
    background: "aurora",
    layout: "comfortable",
    animations: true,
    contrast: false,
    reading: false,
    reduceMotion: false,
    fontSize: 16,
    language: "en",
    goal: 30,
    welcome: "A better way to learn every day.",
    welcomeSub: "Learn at your own pace. Explore new ideas. Make every study session count."
  },
  notes: [],
  completed: [],
  bookmarks: [],
  difficult: [],
  flashProgress: {},
  dailyMinutes: {},
  lastActivity: null,
  customNotes: ""
};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadData() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY));
    if (!saved || typeof saved !== "object") return clone(defaults);
    return {
      ...clone(defaults),
      ...saved,
      settings: { ...defaults.settings, ...(saved.settings || {}) },
      notes: Array.isArray(saved.notes) ? saved.notes : [],
      completed: Array.isArray(saved.completed) ? saved.completed : [],
      bookmarks: Array.isArray(saved.bookmarks) ? saved.bookmarks : [],
      difficult: Array.isArray(saved.difficult) ? saved.difficult : [],
      flashProgress: saved.flashProgress || {},
      dailyMinutes: saved.dailyMinutes || {}
    };
  } catch {
    return clone(defaults);
  }
}

let data = loadData();
let activeSubject = "";
let activeChapter = "";
let currentFlash = 0;
let flashDeck = [];
let currentNoteId = null;
let timerSeconds = 0;
let timerInterval = null;
let timerRunning = false;
let gameScore = 0;
let gameQuestion = 0;
let currentGame = "";
let toastTimer;

function saveData() {
  try {
    localStorage.setItem(KEY, JSON.stringify(data));
    updateDashboard();
    return true;
  } catch (error) {
    showToast("Could not save data. Export a backup or clear browser storage.");
    return false;
  }
}

function showToast(message) {
  const toast = $("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, c => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  })[c]);
}

function applySettings() {
  const s = data.settings;
  document.body.classList.toggle("light", s.theme === "light");
  document.body.classList.toggle("background-plain", s.background === "plain");
  document.body.classList.toggle("background-midnight", s.background === "midnight");
  document.body.classList.toggle("layout-compact", s.layout === "compact");
  document.body.classList.toggle("layout-spacious", s.layout === "spacious");
  document.body.classList.toggle("no-animations", !s.animations || s.reduceMotion);
  document.body.classList.toggle("no-animations", !s.animations || s.reduceMotion);
  document.body.classList.toggle("high-contrast", !!s.contrast);
  document.body.classList.toggle("reading-mode", !!s.reading);
  document.documentElement.style.setProperty("--accent", s.accent);
  document.documentElement.style.setProperty("--font-size", `${s.fontSize}px`);

  $("themeSelect").value = s.theme;
  $("accentSelect").value = s.accent;
  $("backgroundSelect").value = s.background;
  $("layoutSelect").value = s.layout;
  $("animationsToggle").checked = s.animations;
  $("contrastToggle").checked = s.contrast;
  $("readingToggle").checked = s.reading;
  $("motionToggle").checked = s.reduceMotion;
  $("fontSize").value = s.fontSize;
  $("fontSizeLabel").textContent = `${s.fontSize}px`;
  $("languageSelect").value = s.language;
  $("goalSelect").value = String(s.goal);
  $("welcomeInput").value = s.welcome;
  $("welcomeSubInput").value = s.welcomeSub;
  $("welcomeTitle").innerHTML = escapeHTML(s.welcome).replace(
    /learn every day\./i, '<span class="gradient-text">learn every day.</span>'
  );
  $("welcomeSubtitle").textContent = s.welcomeSub;
  document.documentElement.lang = s.language === "hi" ? "hi" : "en";
}

function openSidebar() {
  $("sidebar").classList.add("show");
  $("overlay").classList.add("show");
}
function closeSidebar() {
  $("sidebar").classList.remove("show");
  $("overlay").classList.remove("show");
}

function goPage(page) {
  const target = $("page-" + page);
  if (!target) return;
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  target.classList.add("active");
  document.querySelectorAll(".nav-item").forEach(b =>
    b.classList.toggle("active", b.dataset.page === page)
  );
  closeSidebar();
  window.scrollTo({ top: 0, behavior: data.settings.animations && !data.settings.reduceMotion ? "smooth" : "auto" });
  if (page === "progress") renderProgress();
  if (page === "notes") renderNotes();
}

$("menuButton").addEventListener("click", openSidebar);
$("closeSidebar").addEventListener("click", closeSidebar);
$("overlay").addEventListener("click", closeSidebar);
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeSidebar();
});
document.querySelectorAll("[data-page]").forEach(b =>
  b.addEventListener("click", () => goPage(b.dataset.page))
);
document.querySelectorAll("[data-go]").forEach(b =>
  b.addEventListener("click", () => goPage(b.dataset.go))
);
$("themeQuick").addEventListener("click", () => {
  data.settings.theme = data.settings.theme === "dark" ? "light" : "dark";
  applySettings(); saveData();
});

function updateClock() {
  const now = new Date();
  $("clock").textContent = now.toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"});
  $("networkStatus").textContent = navigator.onLine ? "You're online" : "Offline mode";
}
window.addEventListener("online", updateClock);
window.addEventListener("offline", updateClock);
setInterval(updateClock, 30000);
updateClock();

/* Settings */
$("themeSelect").addEventListener("change", e => {
  data.settings.theme = e.target.value; applySettings(); saveData();
});
$("accentSelect").addEventListener("input", e => {
  data.settings.accent = e.target.value; applySettings(); saveData();
});
$("backgroundSelect").addEventListener("change", e => {
  data.settings.background = e.target.value; applySettings(); saveData();
});
$("layoutSelect").addEventListener("change", e => {
  data.settings.layout = e.target.value; applySettings(); saveData();
});
$("animationsToggle").addEventListener("change", e => {
  data.settings.animations = e.target.checked; applySettings(); saveData();
});
$("contrastToggle").addEventListener("change", e => {
  data.settings.contrast = e.target.checked; applySettings(); saveData();
});
$("readingToggle").addEventListener("change", e => {
  data.settings.reading = e.target.checked; applySettings(); saveData();
});
$("motionToggle").addEventListener("change", e => {
  data.settings.reduceMotion = e.target.checked; applySettings(); saveData();
});
$("fontSize").addEventListener("input", e => {
  data.settings.fontSize = Number(e.target.value);
  $("fontSizeLabel").textContent = `${e.target.value}px`;
  applySettings(); saveData();
});
$("languageSelect").addEventListener("change", e => {
  data.settings.language = e.target.value; applySettings(); saveData();
  showToast(e.target.value === "hi"
    ? "Language preference saved. Some content remains in English."
    : "Language preference saved.");
});
$("goalSelect").addEventListener("change", e => {
  data.settings.goal = Number(e.target.value); saveData();
});
$("saveStudySettings").addEventListener("click", () => {
  data.settings.welcome = $("welcomeInput").value.trim() || defaults.settings.welcome;
  data.settings.welcomeSub = $("welcomeSubInput").value.trim() || defaults.settings.welcomeSub;
  data.settings.goal = Number($("goalSelect").value);
  applySettings(); saveData(); showToast("Study preferences saved.");
});
document.querySelectorAll("[data-settings]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-settings]").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".settings-page").forEach(p => p.classList.remove("active"));
    button.classList.add("active");
    $("settings-" + button.dataset.settings).classList.add("active");
  });
});

/* Subjects and chapter navigation */
const subjects = [
  {name:"Science",icon:"⚛",chapters:[
    "Chemical Reactions and Equations","Acids, Bases and Salts","Metals and Non-metals",
    "Carbon and its Compounds","Life Processes","Control and Coordination",
    "How Do Organisms Reproduce?","Heredity","Light – Reflection and Refraction",
    "The Human Eye and the Colourful World","Electricity","Magnetic Effects of Electric Current",
    "Our Environment"
  ]},
  {name:"Mathematics Standard",icon:"∑",chapters:[
    "Real Numbers","Polynomials","Pair of Linear Equations in Two Variables",
    "Quadratic Equations","Arithmetic Progressions","Triangles","Coordinate Geometry",
    "Introduction to Trigonometry","Some Applications of Trigonometry","Circles",
    "Areas Related to Circles","Surface Areas and Volumes","Statistics","Probability"
  ]},
  {name:"English",icon:"Aa",chapters:[
    "A Letter to God","Nelson Mandela: Long Walk to Freedom","Two Stories about Flying",
    "From the Diary of Anne Frank","Glimpses of India","Mijbil the Otter",
    "Madam Rides the Bus","The Sermon at Benares","The Proposal",
    "Dust of Snow","Fire and Ice","A Tiger in the Zoo","How to Tell Wild Animals",
    "The Ball Poem","Amanda!","The Trees","Fog","The Tale of Custard the Dragon","For Anne Gregory"
  ]},
  {name:"Hindi Course B",icon:"अ",chapters:[
    "बड़े भाई साहब","डायरी का एक पन्ना","तताँरा-वामीरो कथा","तीसरी कसम के शिल्पकार शैलेंद्र",
    "गिरगिट","अब कहाँ दूसरे के दुख से दुखी होने वाले","पतझर में टूटी पत्तियाँ",
    "कारतूस","साखी","पद","दोहे","मनुष्यता","पर्वत प्रदेश में पावस",
    "तोप","कर चले हम फ़िदा","आत्मत्राण","हरिहर काका","टोपी शुक्ला"
  ]},
  {name:"Social Science",icon:"◎",chapters:[
    "The Rise of Nationalism in Europe","Nationalism in India","The Making of a Global World",
    "The Age of Industrialisation","Print Culture and the Modern World",
    "Resources and Development","Forest and Wildlife Resources","Water Resources",
    "Agriculture","Minerals and Energy Resources","Manufacturing Industries",
    "Lifelines of National Economy","Power Sharing","Federalism","Gender, Religion and Caste",
    "Political Parties","Outcomes of Democracy","Development","Sectors of the Indian Economy",
    "Money and Credit","Globalisation and the Indian Economy","Consumer Rights"
  ]},
  {name:"IT / Computer",icon:"⌘",chapters:[
    "Introduction to Database Management System","Starting with LibreOffice Base",
    "Tables and Data Types","Queries","Forms","Reports","Database Relationships",
    "Digital Documentation","Electronic Spreadsheet","Employability Skills"
  ]}
];

function chapterKey(subject, chapter) { return `${subject}::${chapter}`; }
function hasItem(list, value) { return list.includes(value); }
function toggleItem(listName, key) {
  const list = data[listName];
  data[listName] = hasItem(list, key) ? list.filter(x => x !== key) : [...list, key];
  saveData();
}

function renderSubjects(query = "") {
  const grid = $("subjectGrid");
  const q = query.toLowerCase().trim();
  const filtered = subjects.filter(s =>
    s.name.toLowerCase().includes(q) ||
    s.chapters.some(c => c.toLowerCase().includes(q))
  );
  grid.innerHTML = filtered.length ? filtered.map(s => `
    <button class="subject-card" data-subject="${escapeHTML(s.name)}">
      <div class="subject-symbol">${s.icon}</div>
      <b>${escapeHTML(s.name)}</b>
      <small>${s.chapters.length} chapter titles</small>
    </button>`).join("") : '<div class="empty-state">No matching subjects or chapters.</div>';
  grid.querySelectorAll("[data-subject]").forEach(b =>
    b.addEventListener("click", () => openSubject(b.dataset.subject))
  );
}

function openSubject(name) {
  activeSubject = name;
  const subject = subjects.find(s => s.name === name);
  if (!subject) return;
  $("chapterTitle").textContent = name;
  $("chapterArea").classList.remove("hidden");
  $("chapterReader").classList.add("hidden");
  $("chapterList").innerHTML = subject.chapters.map((chapter, i) => {
    const key = chapterKey(name, chapter);
    const completed = hasItem(data.completed, key);
    const bookmarked = hasItem(data.bookmarks, key);
    const difficult = hasItem(data.difficult, key);
    return `<div class="chapter-btn">
      <button class="chapter-open" data-chapter="${escapeHTML(chapter)}" style="flex:1;text-align:left;background:none;border:0;color:inherit;padding:0">
        <b>${i+1}. ${escapeHTML(chapter)}</b>
        <span class="chapter-meta">${completed ? "Completed" : "Not completed yet"}${difficult ? " · Difficult topic" : ""}</span>
      </button>
      <div class="reader-actions" style="margin:0">
        <button class="glass-button chapter-bookmark" data-key="${escapeHTML(key)}" aria-label="Bookmark chapter">${bookmarked ? "★" : "☆"}</button>
        <button class="glass-button chapter-difficult" data-key="${escapeHTML(key)}" aria-label="Mark difficult">${difficult ? "!" : "?"}</button>
      </div>
    </div>`;
  }).join("");
  $("chapterList").querySelectorAll(".chapter-open").forEach(b =>
    b.addEventListener("click", () => openChapter(name, b.dataset.chapter))
  );
  $("chapterList").querySelectorAll(".chapter-bookmark").forEach(b =>
    b.addEventListener("click", () => { toggleItem("bookmarks", b.dataset.key); openSubject(name); })
  );
  $("chapterList").querySelectorAll(".chapter-difficult").forEach(b =>
    b.addEventListener("click", () => { toggleItem("difficult", b.dataset.key); openSubject(name); })
  );
  $("chapterArea").scrollIntoView({behavior:"smooth",block:"start"});
}

function openChapter(subject, chapter) {
  activeSubject = subject;
  activeChapter = chapter;
  const key = chapterKey(subject, chapter);
  data.lastActivity = {subject, chapter};
  saveData();
  $("chapterReader").classList.remove("hidden");
  $("chapterReader").innerHTML = `
    <div class="eyebrow">YOUR LEARNING SPACE</div>
    <h2>${escapeHTML(chapter)}</h2>
    <p class="muted">${escapeHTML(subject)}</p>
    <div class="reader-copy">
      <p>This is the chapter workspace for <b>${escapeHTML(chapter)}</b>.</p>
      <p>Original chapter notes, diagrams and revision material can be added here. The chapter title is a navigation entry, not a claim that complete textbook notes are already available.</p>
    </div>
    <div class="reader-actions">
      <button class="primary-button" id="markComplete">${hasItem(data.completed,key) ? "✓ Completed" : "Mark as completed"}</button>
      <button class="glass-button" id="readerBookmark">${hasItem(data.bookmarks,key) ? "★ Bookmarked" : "☆ Bookmark"}</button>
      <button class="glass-button" id="readerDifficult">${hasItem(data.difficult,key) ? "Remove difficult mark" : "Mark difficult"}</button>
      <button class="glass-button" id="chapterFlashcards">Practise flashcards →</button>
    </div>`;
  $("markComplete").addEventListener("click", () => {
    if (!hasItem(data.completed,key)) data.completed.push(key);
    else data.completed = data.completed.filter(x => x !== key);
    saveData(); openChapter(subject,chapter); showToast("Chapter progress updated.");
  });
  $("readerBookmark").addEventListener("click", () => {
    toggleItem("bookmarks",key); openChapter(subject,chapter);
  });
  $("readerDifficult").addEventListener("click", () => {
    toggleItem("difficult",key); openChapter(subject,chapter);
  });
  $("chapterFlashcards").addEventListener("click", () => {
    goPage("flashcards");
    $("flashSubject").value = subject;
    populateFlashChapters();
    $("flashChapter").value = chapter;
    loadFlashDeck();
  });
  $("chapterReader").scrollIntoView({behavior:"smooth",block:"start"});
}

$("librarySearch").addEventListener("input", e => {
  renderSubjects(e.target.value);
  $("chapterArea").classList.add("hidden");
  $("chapterReader").classList.add("hidden");
});
$("backSubjects").addEventListener("click", () => {
  $("chapterArea").classList.add("hidden");
  $("chapterReader").classList.add("hidden");
  renderSubjects($("librarySearch").value);
});

function populateFlashSubjects() {
  $("flashSubject").innerHTML = subjects.map(s =>
    `<option value="${escapeHTML(s.name)}">${escapeHTML(s.name)}</option>`
  ).join("");
  populateFlashChapters();
}
function populateFlashChapters() {
  const subject = subjects.find(s => s.name === $("flashSubject").value) || subjects[0];
  $("flashChapter").innerHTML = subject.chapters.map(c =>
    `<option value="${escapeHTML(c)}">${escapeHTML(c)}</option>`
  ).join("");
}
$("flashSubject").addEventListener("change", populateFlashChapters);

/* Add real question/answer objects here as the chapter decks are written. */
const flashcardBank = {};
function loadFlashDeck() {
  const key = chapterKey($("flashSubject").value, $("flashChapter").value);
  flashDeck = flashcardBank[key] || [];
  currentFlash = 0;
  showFlash();
}
$("flashChapter").addEventListener("change", loadFlashDeck);
function showFlash() {
  const card = flashDeck[currentFlash];
  $("flashAnswer").classList.add("hidden");
  $("revealAnswer").disabled = !card;
  $("nextFlash").disabled = !card;
  $("markKnown").disabled = !card;
  $("markReview").disabled = !card;
  if (!card) {
    $("flashQuestion").textContent = "No flashcards have been added for this chapter yet.";
    $("flashAnswer").textContent = "";
    $("flashCount").textContent = "0 cards";
    $("flashNotice").textContent = "The flashcard viewer is ready. Original chapter cards still need to be added.";
    return;
  }
  $("flashQuestion").textContent = card.front;
  $("flashAnswer").textContent = card.back;
  $("flashCount").textContent = `Card ${currentFlash+1} of ${flashDeck.length}`;
  $("flashNotice").textContent = "Tap Reveal answer, then mark your result.";
}
$("revealAnswer").addEventListener("click", () => $("flashAnswer").classList.toggle("hidden"));
$("nextFlash").addEventListener("click", () => { currentFlash = (currentFlash+1)%flashDeck.length; showFlash(); });
function rateFlash(rating) {
  const key = chapterKey($("flashSubject").value, $("flashChapter").value);
  const progress = data.flashProgress[key] || {known:0,review:0};
  progress[rating] = (progress[rating] || 0) + 1;
  data.flashProgress[key] = progress;
  saveData();
  showToast(rating === "known" ? "Marked as known." : "Added to review count.");
  if (flashDeck.length) { currentFlash=(currentFlash+1)%flashDeck.length; showFlash(); }
}
$("markKnown").addEventListener("click", () => rateFlash("known"));
$("markReview").addEventListener("click", () => rateFlash("review"));

/* Notes with browser-local auto-save */
function renderNotes() {
  const list = $("notesList");
  if (!data.notes.length) {
    list.innerHTML = '<div class="empty-state">No saved notes yet. Start writing in your notebook above.</div>';
    return;
  }
  list.innerHTML = data.notes.slice().reverse().map(n => `
    <article class="note-card">
      <h3>${escapeHTML(n.title || "Untitled note")}</h3>
      <p>${escapeHTML((n.text || "").slice(0,250))}${(n.text || "").length>250 ? "…" : ""}</p>
      <small class="muted">${escapeHTML(n.updated || "")}</small><br>
      <button class="glass-button edit-note" data-id="${escapeHTML(n.id)}">Open</button>
      <button class="danger-button delete-note" data-id="${escapeHTML(n.id)}">Delete</button>
    </article>`).join("");
  list.querySelectorAll(".edit-note").forEach(b => b.addEventListener("click", () => {
    const n = data.notes.find(x => x.id === b.dataset.id);
    if (!n) return;
    currentNoteId = n.id; $("noteTitle").value = n.title
