
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
const flashcardBank = {
  "Science::Chemical Reactions and Equations": [
    {q:"1. What is a chemical reaction?",a:"A process in which one or more substances form new substances."},
    {q:"2. What are reactants?",a:"The substances that take part in a chemical reaction."},
    {q:"3. What are products?",a:"The new substances formed in a chemical reaction."},
    {q:"4. What is a chemical equation?",a:"A symbolic representation of a chemical reaction."},
    {q:"5. What is a word equation?",a:"A reaction represented using the names of substances."},
    {q:"6. What is a balanced equation?",a:"An equation with equal numbers of each type of atom on both sides."},
    {q:"7. Why must equations be balanced?",a:"To obey the law of conservation of mass."},
    {q:"8. What is the law of conservation of mass?",a:"Mass is neither created nor destroyed in a chemical reaction."},
    {q:"9. What is a skeletal equation?",a:"A chemical equation that has not yet been balanced."},
    {q:"10. What does (s) mean in an equation?",a:"The substance is in the solid state."},
    {q:"11. What does (l) mean?",a:"The substance is in the liquid state."},
    {q:"12. What does (g) mean?",a:"The substance is in the gaseous state."},
    {q:"13. What does (aq) mean?",a:"The substance is dissolved in water as an aqueous solution."},
    {q:"14. What does an arrow mean in an equation?",a:"It indicates the direction from reactants to products."},
    {q:"15. What does Δ above an arrow indicate?",a:"Heat is supplied to the reaction."},
    {q:"16. What is a combination reaction?",a:"Two or more reactants combine to form a single product."},
    {q:"17. Give an example of a combination reaction.",a:"CaO + H₂O → Ca(OH)₂."},
    {q:"18. What happens when quicklime reacts with water?",a:"Calcium hydroxide forms and heat is released."},
    {q:"19. What is quicklime?",a:"Calcium oxide (CaO)."},
    {q:"20. What is slaked lime?",a:"Calcium hydroxide, Ca(OH)₂."},
    {q:"21. What is an exothermic reaction?",a:"A reaction that releases energy, usually as heat."},
    {q:"22. Give an example of an exothermic reaction.",a:"Burning fuels or respiration."},
    {q:"23. What is respiration in terms of energy?",a:"An exothermic process that releases energy from food."},
    {q:"24. What is a decomposition reaction?",a:"One compound breaks down into two or more simpler substances."},
    {q:"25. What is thermal decomposition?",a:"Decomposition caused by heating."},
    {q:"26. What happens when lead nitrate is heated?",a:"It forms lead oxide, nitrogen dioxide and oxygen."},
    {q:"27. What is the colour of lead nitrate?",a:"Lead nitrate is a white solid."},
    {q:"28. What brown gas forms when lead nitrate is heated?",a:"Nitrogen dioxide (NO₂)."},
    {q:"29. What is electrolytic decomposition?",a:"Decomposition caused by passing electricity through a substance."},
    {q:"30. What happens when water undergoes electrolysis?",a:"Water decomposes into hydrogen and oxygen."},
    {q:"31. What is photochemical decomposition?",a:"Decomposition caused by light."},
    {q:"32. What happens when silver chloride is exposed to sunlight?",a:"It decomposes into silver and chlorine."},
    {q:"33. What colour change occurs in silver chloride?",a:"White silver chloride turns grey."},
    {q:"34. What is an endothermic reaction?",a:"A reaction that absorbs energy from its surroundings."},
    {q:"35. What is a displacement reaction?",a:"A more reactive element displaces a less reactive element."},
    {q:"36. What happens when iron is placed in copper sulphate solution?",a:"Iron displaces copper and forms iron sulphate."},
    {q:"37. What is the colour of copper sulphate solution?",a:"Blue."},
    {q:"38. What colour is iron sulphate solution?",a:"Pale green."},
    {q:"39. What forms on an iron nail in copper sulphate solution?",a:"A reddish-brown deposit of copper."},
    {q:"40. Why does iron displace copper?",a:"Iron is more reactive than copper."},
    {q:"41. What is a double displacement reaction?",a:"Two compounds exchange ions to form new compounds."},
    {q:"42. What is a precipitation reaction?",a:"A reaction in which an insoluble solid forms."},
    {q:"43. What happens when sodium sulphate reacts with barium chloride?",a:"White barium sulphate precipitate forms."},
    {q:"44. What is the formula of barium sulphate?",a:"BaSO₄."},
    {q:"45. What is oxidation?",a:"Gain of oxygen or loss of hydrogen."},
    {q:"46. What is reduction?",a:"Loss of oxygen or gain of hydrogen."},
    {q:"47. What is a redox reaction?",a:"A reaction in which oxidation and reduction occur together."},
    {q:"48. In CuO + H₂ → Cu + H₂O, what is reduced?",a:"Copper oxide loses oxygen and becomes copper."},
    {q:"49. In CuO + H₂ → Cu + H₂O, what is oxidised?",a:"Hydrogen gains oxygen and becomes water."},
    {q:"50. What is corrosion?",a:"The gradual deterioration of a metal due to its surroundings."},
    {q:"51. What is rust?",a:"A reddish-brown substance formed when iron corrodes."},
    {q:"52. What conditions are needed for iron to rust?",a:"Both oxygen and moisture are needed."},
    {q:"53. How can rusting be prevented?",a:"By painting, oiling, greasing or galvanising iron."},
    {q:"54. What is galvanisation?",a:"Coating iron or steel with a protective layer of zinc."},
    {q:"55. What is rancidity?",a:"Oxidation of fats and oils that causes unpleasant smell and taste."},
    {q:"56. How can rancidity be prevented?",a:"Use airtight packaging, refrigeration or antioxidants."},
    {q:"57. Why are chips packets filled with nitrogen?",a:"Nitrogen helps prevent oxidation of oils and fats."},
    {q:"58. What is a balanced equation for magnesium burning?",a:"2Mg + O₂ → 2MgO."},
    {q:"59. What is the observation when magnesium burns?",a:"It burns with a dazzling white flame and forms white magnesium oxide."},
    {q:"60. What is the balanced equation for water formation?",a:"2H₂ + O₂ → 2H₂O."},
    {q:"61. Balance: H₂ + Cl₂ → HCl.",a:"H₂ + Cl₂ → 2HCl."},
    {q:"62. Balance: Fe + O₂ → Fe₂O₃.",a:"4Fe + 3O₂ → 2Fe₂O₃."},
    {q:"63. Balance: Zn + HCl → ZnCl₂ + H₂.",a:"Zn + 2HCl → ZnCl₂ + H₂."},
    {q:"64. Balance: Na + H₂O → NaOH + H₂.",a:"2Na + 2H₂O → 2NaOH + H₂."},
    {q:"65. Balance: Al + O₂ → Al₂O₃.",a:"4Al + 3O₂ → 2Al₂O₃."},
    {q:"66. What is the balanced equation for calcium carbonate heating?",a:"CaCO₃ → CaO + CO₂."},
    {q:"67. What is the balanced equation for silver chloride decomposition?",a:"2AgCl → 2Ag + Cl₂ (in sunlight)."},
    {q:"68. What is the balanced equation for iron and copper sulphate?",a:"Fe + CuSO₄ → FeSO₄ + Cu."},
    {q:"69. What is the balanced equation for lead nitrate heating?",a:"2Pb(NO₃)₂ → 2PbO + 4NO₂ + O₂ (on heating)."},
    {q:"70. What are the four main signs of a chemical reaction?",a:"Change in state, colour change, gas formation or temperature change; a precipitate may also form."}
  ]
};
function loadFlashDeck() {
  const key = chapterKey($("flashSubject").value, $("flashChapter").value);
  flashDeck = flashcardBank[key] || [];
  currentFlash = 0;
  showFlash();
}
$("flashChapter").addEventListener("change", loadFlashDeck);
let currentFlash = 0;
let flashDeck = [];

function loadFlashcards() {
  const subject = $("flashSubject").value;
  const chapter = $("flashChapter").value;
  const key = `${subject}::${chapter}`;

  flashDeck = (flashcardBank[key] || []).map(card => ({
    front: card.q,
    back: card.a
  }));

  currentFlash = 0;
  showFlash();
}

$("flashSubject").addEventListener("change", () => {
  populateFlashChapters();
  loadFlashcards();
});

$("flashChapter").addEventListener("change", loadFlashcards);
$("markKnown").addEventListener("click", () => {
  if (!flashDeck.length) return;
  currentFlash = (currentFlash + 1) % flashDeck.length;
  showFlash();
});

$("markReview").addEventListener("click", () => {
  if (!flashDeck.length) return;
  currentFlash = (currentFlash + 1) % flashDeck.length;
  showFlash();
});

loadFlashcards();
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
    currentNoteId = n.id; $("noteTitle").value = n.title; $("noteText").value = n.text;
    $("saveStatus").textContent = "Editing saved note";
    window.scrollTo({top:0,behavior:"smooth"});
  }));
  list.querySelectorAll(".delete-note").forEach(b => b.addEventListener("click", () => {
    if (!confirm("Delete this note?")) return;
    data.notes = data.notes.filter(n => n.id !== b.dataset.id);
    if (currentNoteId === b.dataset.id) clearNoteEditor();
    saveData(); renderNotes(); showToast("Note deleted.");
  }));
}
function clearNoteEditor() {
  currentNoteId = null; $("noteTitle").value = ""; $("noteText").value = "";
  $("saveStatus").textContent = "New note";
}
function saveCurrentNote() {
  const title = $("noteTitle").value.trim() || "Untitled note";
  const text = $("noteText").value;
  if (!text.trim() && !title.trim()) return;
  const id = currentNoteId || `note-${Date.now()}-${Math.random().toString(36).slice(2,7)}`;
  const note = {id,title,text,updated:new Date().toLocaleString()};
  const idx = data.notes.findIndex(n => n.id === id);
  if (idx >= 0) data.notes[idx] = note; else data.notes.push(note);
  currentNoteId = id;
  saveData(); renderNotes();
  $("saveStatus").textContent = "Saved on this device";
}
let noteSaveTimeout;
$("noteTitle").addEventListener("input", () => {
  clearTimeout(noteSaveTimeout);
  noteSaveTimeout = setTimeout(saveCurrentNote,500);
});
$("noteText").addEventListener("input", () => {
  $("saveStatus").textContent = "Saving…";
  clearTimeout(noteSaveTimeout);
  noteSaveTimeout = setTimeout(saveCurrentNote,500);
});
$("saveNote").addEventListener("click", () => {
  saveCurrentNote(); showToast("Note saved on this device.");
});
$("newNote").addEventListener("click", () => { clearNoteEditor(); });
$("continueButton").addEventListener("click", () => {
  if (!data.lastActivity) { goPage("library"); return; }
  goPage("library");
  $("librarySearch").value = "";
  renderSubjects();
  openSubject(data.lastActivity.subject);
  openChapter(data.lastActivity.subject,data.lastActivity.chapter);
});

/* Study timer */
function updateTimerDisplay() {
  const h = String(Math.floor(timerSeconds/3600)).padStart(2,"0");
  const m = String(Math.floor((timerSeconds%3600)/60)).padStart(2,"0");
  const s = String(timerSeconds%60).padStart(2,"0");
  $("timerDisplay").textContent = `${h}:${m}:${s}`;
}
function startTimer() {
  if (timerRunning) return;
  timerRunning = true;
  timerInterval = setInterval(() => {
    timerSeconds++;
    updateTimerDisplay();
  },1000);
}
function pauseTimer() {
  if (!timerRunning) return;
  clearInterval(timerInterval); timerRunning = false;
  const minutes = Math.floor(timerSeconds/60);
  if (minutes > 0) {
    const key = todayKey();
    data.dailyMinutes[key] = (data.dailyMinutes[key] || 0) + minutes;
    timerSeconds %= 60;
    saveData();
  }
  updateTimerDisplay();
}
$("timerStart").addEventListener("click",startTimer);
$("timerPause").addEventListener("click",() => { pauseTimer(); showToast("Timer paused."); });
$("timerReset").addEventListener("click",() => {
  pauseTimer(); timerSeconds=0; updateTimerDisplay(); showToast("Timer reset.");
});

/* Calculator: allow only arithmetic characters and use a restricted parser */
function calculateExpression(expression) {
  const s = expression.replace(/\s+/g,"");
  if (!s || s.length>100 || !/^[0-9.+\-*/()%]+$/.test(s)) throw new Error("Use numbers and + - * / % ( ) only.");
  let i=0;
  function expressionRule() {
    let value=term();
    while (s[i] === "+" || s[i] === "-") {
      const op=s[i++], rhs=term();
      value=op==="+" ? value+rhs : value-rhs;
    }
    return value;
  }
  function term() {
    let value=factor();
    while (["*","/","%"].includes(s[i])) {
      const op=s[i++], rhs=factor();
      if ((op==="/" || op==="%") && rhs===0) throw new Error("Cannot divide by zero.");
      value=op==="*" ? value*rhs : op==="/" ? value/rhs : value%rhs;
    }
    return value;
  }
  function factor() {
    if (s[i]==="+") { i++; return factor(); }
    if (s[i]==="-") { i++; return -factor(); }
    if (s[i]==="(") {
      i++; const value=expressionRule();
      if (s[i++]!==")") throw new Error("Check your brackets.");
      return value;
        }const match=s.slice(i).match(/^(?:\d+\.?\d*|\.\d+)/);
    if (!match) throw new Error("Check the expression.");
    i+=match[0].length;
    return Number(match[0]);
  }
  const result=expressionRule();
  if (i!==s.length || !Number.isFinite(result)) throw new Error("Invalid expression.");
  return Number(result.toPrecision(12));
}
$("calculate").addEventListener("click",() => {
  try { $("calcResult").textContent = `Result: ${calculateExpression($("calcDisplay").value)}`; }
  catch(e) { $("calcResult").textContent = e.message; }
});
$("clearCalc").addEventListener("click",() => { $("calcDisplay").value=""; $("calcResult").textContent="Your result appears here."; });

/* Word counter */
function updateWordCounter() {
  const text=$("wordInput").value;
  const trimmed=text.trim();
  $("wordCount").textContent=trimmed ? trimmed.split(/\s+/).length : 0;
  $("charCount").textContent=text.length;
  $("sentenceCount").textContent=(text.match(/[.!?]+(?=\s|$)/g)||[]).length;
}
$("wordInput").addEventListener("input",updateWordCounter);

/* Progress dashboard */
function updateDashboard() {
  const today=data.dailyMinutes[todayKey()]||0;
  $("goalMinutes").textContent=today;
  const goal=Math.max(1,Number(data.settings.goal)||30);
  $("goalBar").style.width=`${Math.min(100,today/goal*100)}%`;
  $("goalText").textContent=`Your daily target: ${goal} minutes`;
  $("continueText").textContent=data.lastActivity
    ? `${data.lastActivity.subject} — ${data.lastActivity.chapter}`
    : "Your recent chapter will appear here as you study.";
  if ($("completedCount")) $("completedCount").textContent=data.completed.length;
  if ($("bookmarkCount")) $("bookmarkCount").textContent=data.bookmarks.length;
  if ($("difficultCount")) $("difficultCount").textContent=data.difficult.length;
  if ($("knownCount")) $("knownCount").textContent=Object.values(data.flashProgress).reduce((sum,p)=>sum+(p.known||0),0);
}
function renderProgress() {
  updateDashboard();
  const rows=[
    ["Completed chapters",data.completed],
    ["Bookmarked chapters",data.bookmarks],
    ["Difficult topics",data.difficult]
  ];
  $("progressDetails").innerHTML=rows.map(([label,items])=>`
    <div class="help-item"><b>${label} (${items.length})</b>
    ${items.length ? `<p class="muted">${items.map(escapeHTML).join("<br>")}</p>` : '<p class="muted">Nothing here yet.</p>'}</div>`
  ).join("");
}

/* Backup & restore */
$("exportBackup").addEventListener("click",() => {
  const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");
  a.href=url; a.download=`my-utility-backup-${todayKey()}.json`; a.click();
  URL.revokeObjectURL(url);
  showToast("Backup downloaded.");
});
$("importBackup").addEventListener("click",() => $("backupFile").click());
$("backupFile").addEventListener("change",async e => {
  const file=e.target.files[0]; if(!file) return;
  try {
    if(file.size>5*1024*1024) throw new Error("Backup file is too large.");
    const imported=JSON.parse(await file.text());
    if(!imported || typeof imported!=="object" || !imported.settings || !Array.isArray(imported.notes)) {
      throw new Error("This does not look like a My Utility backup.");
    }
    if(!confirm("Restore this backup? Current saved data will be replaced.")) return;
    data={
      ...clone(defaults),...imported,
      settings:{...defaults.settings,...imported.settings},
      notes:Array.isArray(imported.notes)?imported.notes:[],
      completed:Array.isArray(imported.completed)?imported.completed:[],
      bookmarks:Array.isArray(imported.bookmarks)?imported.bookmarks:[],
      difficult:Array.isArray(imported.difficult)?imported.difficult:[],
      flashProgress:imported.flashProgress||{},
      dailyMinutes:imported.dailyMinutes||{}
    };
    saveData(); applySettings(); renderNotes(); renderSubjects(); renderProgress();
    showToast("Backup restored.");
  } catch(err) { showToast(err.message || "Could not restore backup."); }
  finally { e.target.value=""; }
});
$("clearData").addEventListener("click",() => {
  if(!confirm("Delete all notes and study progress saved by My Utility? This cannot be undone without a backup.")) return;
  data.notes=[];data.completed=[];data.bookmarks=[];data.difficult=[];
  data.flashProgress={};data.dailyMinutes={};data.lastActivity=null;
  saveData();renderNotes();renderProgress();showToast("Saved notes and progress cleared.");
});
$("resetSettings").addEventListener("click",() => {
  if(!confirm("Reset all website preferences to their defaults? Your notes will be kept.")) return;
  data.settings=clone(defaults.settings);applySettings();saveData();
  showToast("Settings reset. Your notes are safe.");
});
$("installGuide").addEventListener("click",() => {
  alert("Open your published GitHub Pages site in Chrome → browser menu → Add to Home screen or Install app, if available.");
});

/* Quick search across chapters and notes */
document.addEventListener("keydown",e => {
  if((e.ctrlKey||e.metaKey) && e.key.toLowerCase()==="k") {
    e.preventDefault();
    const query=prompt("Search subjects, chapters and saved notes:");
    if(!query) return;
    const q=query.toLowerCase();
    const matches=[];
    subjects.forEach(s=>{
      if(s.name.toLowerCase().includes(q)) matches.push(`Subject: ${s.name}`);
      s.chapters.filter(c=>c.toLowerCase().includes(q)).forEach(c=>matches.push(`${s.name}: ${c}`));
    });
    data.notes.filter(n=>(n.title+" "+n.text).toLowerCase().includes(q))
      .forEach(n=>matches.push(`Note: ${n.title||"Untitled note"}`));
    alert(matches.length ? matches.slice(0,30).join("\n") : "No matches found.");
  }
});

/* Small standalone games */
const games = {
  quiz:{title:"Quiz Challenge",questions:[
    {q:"Which planet is known as the Red Planet?",a:["Earth","Mars","Venus"],correct:1},
    {q:"What is the chemical formula of water?",a:["CO₂","O₂","H₂O"],correct:2},
    {q:"How many sides does a triangle have?",a:["Three","Four","Five"],correct:0}
  ]},
  truefalse:{title:"True or False",questions:[
    {q:"The Earth revolves around the Sun.",a:["True","False"],correct:0},
    {q:"A square has three sides.",a:["True","False"],correct:1},
    {q:"Plants need light for photosynthesis.",a:["True","False"],correct:0}
  ]},
  memory:{title:"Quick Recall",questions:[
    {q:"What is the basic unit of life?",a:["Cell","Tissue","Organ"],correct:0},
    {q:"What is 12 × 12?",a:["124","144","132"],correct:1}
  ]},
  math:{title:"Number Challenge",questions:[]},
  word:{title:"Word Scramble",questions:[]}
};
const wordRounds=[
  {scramble:"NATELP",answer:"PLANET",hint:"A celestial body orbiting a star."},
  {scramble:"CILEL",answer:"CELL",hint:"The basic unit of life."},
  {scramble:"RTEWA",answer:"WATER",hint:"H₂O in everyday language."}
];
function startGame(type) {
  currentGame=type;gameScore=0;gameQuestion=0;
  $("gameArea").classList.remove("hidden");
  $("gameTitle").textContent=games[type]?.title||"Challenge";
  renderGame();
  $("gameArea").scrollIntoView({behavior:"smooth",block:"start"});
}
function renderGame() {
  const area=$("gameContent");
  if(currentGame==="word") {
    const round=wordRounds[gameQuestion%wordRounds.length];
    area.innerHTML=`<p class="muted">Unscramble this word: <b>${round.scramble}</b></p>
      <p>${round.hint}</p><input id="wordGuess" placeholder="Your answer" class="calculator-display">
      <button class="primary-button" id="submitWord">Check answer</button><p id="gameFeedback" class="muted"></p>`;
    $("submitWord").addEventListener("click",()=>{
      const ok=$("wordGuess").value.trim().toUpperCase()===round.answer;
      $("gameFeedback").textContent=ok?"Correct! Well done.":`Answer: ${round.answer}`;
      if(ok) gameScore++;
      $("submitWord").textContent="Next word";
      $("submitWord").onclick=()=>{gameQuestion++;renderGame();};
    });
    return;
  }
  if(currentGame==="math") {
    const a=2+Math.floor(Math.random()*18),b=2+Math.floor(Math.random()*12);
    const answer=a*b;
    area.innerHTML=`<p>What is <b>${a} × ${b}</b>?</p><input id="mathGuess" inputmode="numeric" class="calculator-display" placeholder="Your answer"><button class="primary-button" id="mathCheck">Check</button><p id="gameFeedback" class="muted"></p>`;
    $("mathCheck").addEventListener("click",()=>{
      const ok=Number($("mathGuess").value)===answer;
      $("gameFeedback").textContent=ok?"Correct!":`The answer is ${answer}.`;
      if(ok) gameScore++;
      $("mathCheck").textContent="New question";
      $("mathCheck").onclick=()=>renderGame();
    });
    return;
    }
  const pack=games[currentGame];
  if(!pack) return;
  if(gameQuestion>=pack.questions.length) {
    area.innerHTML=`<h3>Challenge complete!</h3><p>Your score: ${gameScore} / ${pack.questions.length}</p><button class="primary-button" id="restartGame">Play again</button>`;
    $("restartGame").addEventListener("click",()=>startGame(currentGame));
    return;
  }
  const q=pack.questions[gameQuestion];
  area.innerHTML=`<div class="eyebrow">QUESTION ${gameQuestion+1} OF ${pack.questions.length}</div><h3>${q.q}</h3>
    <div class="grid-two">${q.a.map((a,i)=>`<button class="chapter-btn game-answer" data-answer="${i}">${a}</button>`).join("")}</div>
    <p id="gameFeedback" class="muted"></p>`;
  area.querySelectorAll(".game-answer").forEach(b=>b.addEventListener("click",()=>{
    const correct=Number(b.dataset.answer)===q.correct;
    if(correct) gameScore++;
    area.querySelectorAll(".game-answer").forEach(x=>x.disabled=true);
    $("gameFeedback").textContent=correct?"Correct!":"Not quite. Correct answer: "+q.a[q.correct];
    const next=document.createElement("button");
    next.className="primary-button";next.textContent="Next question →";
    next.addEventListener("click",()=>{gameQuestion++;renderGame();});
    area.appendChild(next);
  }));
}
document.querySelectorAll("[data-game]").forEach(b =>
  b.addEventListener("click",()=>startGame(b.dataset.game))
);
$("closeGame").addEventListener("click",()=>$("gameArea").classList.add("hidden"));

/* Initial render */
applySettings();
renderSubjects();
populateFlashSubjects();
loadFlashDeck();
renderNotes();
renderProgress();
updateDashboard();
updateTimerDisplay();
