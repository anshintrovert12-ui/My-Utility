
"use strict";

/* =========================================
   CLASS 10 HUB — SCRIPT.JS
   Free, browser-based study workspace
   ========================================= */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const STORAGE = {
  notes: "class10hub_notes",
  settings: "class10hub_settings",
  progress: "class10hub_progress"
};

const defaultSettings = {
  theme: "dark",
  fontSize: "medium",
  reducedMotion: false,
  studyTips: true,
  shuffle: true
};

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    announce("Could not save data on this device.");
  }
}

let notes = readStorage(STORAGE.notes, []);
if (!Array.isArray(notes)) notes = [];

let settings = {
  ...defaultSettings,
  ...readStorage(STORAGE.settings, {})
};

let progress = {
  quizzes: 0,
  correct: 0,
  cards: 0,
  ...readStorage(STORAGE.progress, {})
};

let currentSubject = "";
let currentChapter = "";
let currentQuiz = [];
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;
let flashcards = [];
let flashIndex = 0;
let flashShowingAnswer = false;
let editingNoteId = null;
let activeGame = "";
let gameAnswer = "";
let gamePoints = 0;

const SUBJECTS = [
  {
    id: "science",
    name: "Science",
    icon: "🔬",
    description: "Physics, Chemistry and Biology",
    chapters: [
      "Chemical Reactions and Equations",
      "Acids, Bases and Salts",
      "Metals and Non-metals",
      "Carbon and its Compounds",
      "Life Processes",
      "Control and Coordination",
      "How do Organisms Reproduce?",
      "Heredity",
      "Light – Reflection and Refraction",
      "The Human Eye and the Colourful World",
      "Electricity",
      "Magnetic Effects of Electric Current",
      "Our Environment"
    ]
  },
  {
    id: "math",
    name: "Mathematics",
    icon: "📐",
    description: "Concepts, formulas and practice",
    chapters: [
      "Real Numbers",
      "Polynomials",
      "Pair of Linear Equations in Two Variables",
      "Quadratic Equations",
      "Arithmetic Progressions",
      "Triangles",
      "Coordinate Geometry",
      "Introduction to Trigonometry",
      "Some Applications of Trigonometry",
      "Circles",
      "Areas Related to Circles",
      "Surface Areas and Volumes",
      "Statistics",
      "Probability"
    ]
  },
  {
    id: "social",
    name: "Social Science",
    icon: "🌍",
    description: "History, Geography, Political Science and Economics",
    chapters: [
      "The Rise of Nationalism in Europe",
      "Nationalism in India",
      "The Making of a Global World",
      "The Age of Industrialisation",
      "Print Culture and the Modern World",
      "Resources and Development",
      "Forest and Wildlife Resources",
      "Water Resources",
      "Agriculture",
      "Minerals and Energy Resources",
      "Manufacturing Industries",
      "Lifelines of National Economy",
      "Power Sharing",
      "Federalism",
      "Gender, Religion and Caste",
      "Political Parties",
      "Outcomes of Democracy",
      "Development",
      "Sectors of the Indian Economy",
      "Money and Credit",
      "Globalisation and the Indian Economy",
      "Consumer Rights"
    ]
  },
  {
    id: "english",
    name: "English",
    icon: "📚",
    description: "Reading, writing, grammar and literature",
    chapters: [
      "A Letter to God",
      "Nelson Mandela: Long Walk to Freedom",
      "Two Stories about Flying",
      "From the Diary of Anne Frank",
      "Glimpses of India",
      "Mijbil the Otter",
      "Madam Rides the Bus",
      "The Sermon at Benares",
      "The Proposal",
      "Dust of Snow",
      "Fire and Ice",
      "A Tiger in the Zoo",
      "How to Tell Wild Animals",
      "The Ball Poem",
      "Amanda!",
      "The Trees",
      "Fog",
      "The Tale of Custard the Dragon",
      "For Anne Gregory"
    ]
  },
  {
    id: "hindi",
    name: "Hindi",
    icon: "📝",
    description: "पाठ, व्याकरण और लेखन",
    chapters: [
      "बड़े भाई साहब",
      "डायरी का एक पन्ना",
      "तताँरा-वामीरो कथा",
      "तीसरी कसम के शिल्पकार शैलेन्द्र",
      "गिरगिट",
      "अब कहाँ दूसरे के दुख से दुखी होने वाले",
      "पतझर में टूटी पत्तियाँ",
      "कारतूस",
      "साखी",
      "पद",
      "मनुष्यता",
      "पर्वत प्रदेश में पावस",
      "तोप",
      "कर चले हम फ़िदा",
      "आत्मत्राण"
    ]
  }
];

/* Starter question bank.
   Add verified questions chapter by chapter.
   These samples do not represent the complete syllabus. */

const BANK = {
  "science::Chemical Reactions and Equations": [
    {
      q: "What is a chemical reaction?",
      a: "A process in which one or more substances change into new substances.",
      type: "Very Short",
      options: [
        "Formation of new substances",
        "Only change in size",
        "Only change in shape",
        "Only change in state"
      ],
      correct: 0
    },
    {
      q: "What are reactants?",
      a: "The substances that take part in a chemical reaction.",
      type: "Very Short",
      options: [
        "Substances formed",
        "Substances that react",
        "Only gases",
        "Only liquids"
      ],
      correct: 1
    },
    {
      q: "What are products?",
      a: "The new substances formed during a chemical reaction.",
      type: "Very Short",
      options: [
        "Starting substances",
        "Catalysts only",
        "New substances formed",
        "Reactants before reaction"
      ],
      correct: 2
    },
    {
      q: "Why should a chemical equation be balanced?",
      a: "It follows the law of conservation of mass: the number of atoms of each element must be equal on both sides.",
      type: "Short",
      options: [
        "To change the products",
        "To conserve mass",
        "To increase the mass",
        "To remove all coefficients"
      ],
      correct: 1
    },
    {
      q: "What is oxidation?",
      a: "Oxidation can involve the addition of oxygen or the removal of hydrogen.",
      type: "Very Short",
      options: [
        "Addition of oxygen",
        "Addition of water only",
        "Removal of oxygen only",
        "Formation of a mixture"
      ],
      correct: 0
    }
  ],

  "science::Life Processes": [
    {
      q: "What are life processes?",
      a: "Processes necessary to maintain life, such as nutrition, respiration, transportation and excretion.",
      type: "Short",
      options: [
        "Only movement",
        "Processes that maintain life",
        "Only reproduction",
        "Only growth"
      ],
      correct: 1
    },
    {
      q: "Which green pigment helps plants absorb light?",
      a: "Chlorophyll.",
      type: "Very Short",
      options: ["Haemoglobin", "Melanin", "Chlorophyll", "Insulin"],
      correct: 2
    },
    {
      q: "What is photosynthesis?",
      a: "The process by which green plants use light energy to make food from carbon dioxide and water.",
      type: "Short",
      options: [
        "Breakdown of food without oxygen",
        "Making food using light energy",
        "Absorption of minerals only",
        "Removal of waste"
      ],
      correct: 1
    }
  ],

  "math::Real Numbers": [
    {
      q: "State Euclid's division lemma.",
      a: "For positive integers a and b, there exist unique non-negative integers q and r such that a = bq + r, where 0 ≤ r < b.",
      type: "Short",
      options: [
        "a = b + q",
        "a = bq + r, 0 ≤ r < b",
        "a = br + q",
        "a = q/r"
      ],
      correct: 1
    },
    {
      q: "What is a prime number?",
      a: "A natural number greater than 1 having exactly two distinct positive factors: 1 and itself.",
      type: "Very Short",
      options: [
        "A number with exactly two positive factors",
        "Every even number",
        "A number divisible by 1 only",
        "Every odd number"
      ],
      correct: 0
    },
    {
      q: "Find the HCF of 12 and 18.",
      a: "The HCF is 6.",
      type: "Very Short",
      options: ["2", "3", "6", "9"],
      correct: 2
    }
  ],

  "social::Power Sharing": [
    {
      q: "What is power sharing?",
      a: "The distribution of power among different organs, levels and groups in a government.",
      type: "Short",
      options: [
        "Power held by one person only",
        "Distribution of power among different groups and institutions",
        "Ending elections",
        "Removing the constitution"
      ],
      correct: 1
    },
    {
      q: "Name the three organs of government.",
      a: "The legislature, executive and judiciary.",
      type: "Very Short",
      options: [
        "Police, army and media",
        "Legislature, executive and judiciary",
        "Schools, courts and banks",
        "Villages, towns and cities"
      ],
      correct: 1
    }
  ],

  "english::A Letter to God": [
    {
      q: "Who is the main character in A Letter to God?",
      a: "Lencho, a hardworking farmer.",
      type: "Very Short",
      options: ["Nelson Mandela", "Lencho", "Anne Frank", "Mijbil"],
      correct: 1
    },
    {
      q: "Why did Lencho write a letter to God?",
      a: "His crops were destroyed by a hailstorm, so he asked God for money to help his family sow the field again.",
      type: "Short",
      options: [
        "To ask for a new house",
        "To complain about school",
        "To ask for money after the crop was destroyed",
        "To invite God to dinner"
      ],
      correct: 2
    }
  ],

  "hindi::बड़े भाई साहब": [
    {
      q: "बड़े भाई साहब छोटे भाई को क्या सीख देते थे?",
      a: "वे छोटे भाई को मेहनत से पढ़ने, समय का सदुपयोग करने और अनुशासन में रहने की सीख देते थे।",
      type: "Short",
      options: [
        "केवल खेलने की",
        "मेहनत और अनुशासन की",
        "पढ़ाई छोड़ने की",
        "समय बर्बाद करने की"
      ],
      correct: 1
    }
  ]
};

/* ---------- General helpers ---------- */

function announce(message) {
  const region = $("#liveAnnouncement");
  if (region) region.textContent = message;
}

function getSubject(id) {
  return SUBJECTS.find((subject) => subject.id === id);
}

function getChapters(subjectId) {
  return getSubject(subjectId)?.chapters || [];
}

function getBankKey(subjectId, chapter) {
  return `${subjectId}::${chapter}`;
}

function getQuestions(subjectId, chapter = "all") {
  const result = [];

  for (const [key, questions] of Object.entries(BANK)) {
    const [sid, ...chapterParts] = key.split("::");
    const chapterName = chapterParts.join("::");

    if (subjectId && sid !== subjectId) continue;
    if (chapter !== "all" && chapterName !== chapter) continue;

    result.push(
      ...questions.map((question) => ({
        ...question,
        subjectId: sid,
        chapter: chapterName
      }))
    );
  }

  return result;
}

function shuffleArray(items) {
  const result = [...items];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function showPage(pageName) {
  $$(".page").forEach((page) => {
    page.hidden = page.id !== `page-${pageName}`;
  });

  $$("[data-page]").forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.page === pageName
    );
  });

  const title = $(`[data-page="${pageName}"]`);
  const breadcrumb = $("#breadcrumbTitle");

  if (breadcrumb) {
    breadcrumb.textContent =
      title?.textContent.trim() || pageName;
  }

  $("#sidebar")?.classList.remove("open");
  $("#sidebarOverlay")?.classList.remove("show");

  if (pageName === "dashboard") renderDashboard();
  if (pageName === "subjects") renderSubjects();
  if (pageName === "questions") renderQuestionBank();
  if (pageName === "flashcards") renderFlashcards();
  if (pageName === "notes") renderNotes();
  if (pageName === "progress") renderProgress();
}

function populateSelect(select, items, firstLabel) {
  if (!select) return;

  const previous = select.value;

  select.innerHTML = "";

  if (firstLabel) {
    const option = document.createElement("option");
    option.value = "all";
    option.textContent = firstLabel;
    select.appendChild(option);
  }

  items.forEach((item) => {
    const option = document.createElement("option");

    if (typeof item === "string") {
      option.value = item;
      option.textContent = item;
    } else {
      option.value = item.id;
      option.textContent = item.name;
    }

    select.appendChild(option);
  });

  if ([...select.options].some((option) => option.value === previous)) {
    select.value = previous;
  }
}

function setupSubjectSelects() {
  const subjectSelects = [
    "#questionSubject",
    "#quizSubject",
    "#flashSubject",
    "#noteSubject",
    "#subjectFilter"
  ];

  subjectSelects.forEach((selector) => {
    const select = $(selector);
    if (!select) return;

    const includeAll = selector === "#questionSubject" ||
      selector === "#quizSubject" ||
      selector === "#subjectFilter";

    populateSelect(
      select,
      SUBJECTS,
      includeAll ? "All subjects" : null
    );
  });

  updateChapterSelects();
}

function updateChapterSelects() {
  const pairs = [
    ["#questionSubject", "#questionChapter"],
    ["#quizSubject", "#quizChapter"],
    ["#flashSubject", "#flashChapter"],
    ["#noteSubject", "#noteChapter"]
  ];

  pairs.forEach(([subjectSelector, chapterSelector]) => {
    const subjectSelect = $(subjectSelector);
    const chapterSelect = $(chapterSelector);

    if (!subjectSelect || !chapterSelect) return;

    const subjectId = subjectSelect.value;
    const chapters = subjectId && subjectId !== "all"
      ? getChapters(subjectId)
      : [];

    populateSelect(
      chapterSelect,
      chapters,
      "all"
    );

    if (chapters.length === 0) {
      chapterSelect.disabled = true;
    } else {
      chapterSelect.disabled = false;
    }
  });
}

/* ---------- Dashboard ---------- */

function renderDashboard() {
  const subjectCount = $("#statSubjects");
  const noteCount = $("#statNotes");
  const quizCount = $("#statQuizzes");
  const cardCount = $("#statCards");

  if (subjectCount) subjectCount.textContent = SUBJECTS.length;
  if (noteCount) noteCount.textContent = notes.length;
  if (quizCount) quizCount.textContent = progress.quizzes || 0;
  if (cardCount) cardCount.textContent = progress.cards || 0;

  const container = $("#dashboardSubjects");
  if (!container) return;

  container.innerHTML = SUBJECTS.map((subject) => `
    <button class="subject-card" data-open-subject="${subject.id}">
      <span class="subject-icon">${subject.icon}</span>
      <h3>${escapeHTML(subject.name)}</h3>
      <p>${escapeHTML(subject.description)}</p>
      <small>${subject.chapters.length} chapters listed</small>
    </button>
  `).join("");
}

/* ---------- Subject library ---------- */

function renderSubjects() {
  const container = $("#subjectLibrary");
  if (!container) return;

  const search = ($("#subjectSearch")?.value || "").toLowerCase();
  const filter = $("#subjectFilter")?.value || "all";

  const filtered = SUBJECTS.filter((subject) => {
    const matchesFilter = filter === "all" || subject.id === filter;
    const matchesSearch =
      subject.name.toLowerCase().includes(search) ||
      subject.description.toLowerCase().includes(search) ||
      subject.chapters.some((chapter) =>
        chapter.toLowerCase().includes(search)
      );

    return matchesFilter && matchesSearch;
  });

  container.innerHTML = filtered.map((subject) => `
    <article class="subject-card">
      <div class="subject-icon">${subject.icon}</div>
      <h3>${escapeHTML(subject.name)}</h3>
      <p>${escapeHTML(subject.description)}</p>
      <p>${subject.chapters.length} chapters listed</p>
      <button class="primary-button" data-open-subject="${subject.id}">
        View chapters
      </button>
    </article>
  `).join("") || "<p>No subjects found.</p>";
}

function openSubject(subjectId) {
  const subject = getSubject(subjectId);
  if (!subject) return;

  currentSubject = subjectId;

  const panel = $("#chapterPanel");
  const title = $("#chapterPanelTitle");
  const description = $("#chapterPanelDescription");
  const list = $("#chapterList");

  if (title) title.textContent = `${subject.icon} ${subject.name}`;
  if (description) {
    description.textContent = "Choose a chapter to view available practice questions.";
  }

  if (list) {
    list.innerHTML = subject.chapters.map((chapter) => {
      const count = BANK[getBankKey(subjectId, chapter)]?.length || 0;

      return `
        <button class="chapter-item"
          data-open-chapter="${escapeHTML(chapter)}"
          data-subject-id="${subjectId}">
          <span>${escapeHTML(chapter)}</span>
          <small>${count} starter questions</small>
        </button>
      `;
    }).join("");
  }

  if (panel) panel.hidden = false;
  panel?.scrollIntoView({
    behavior: settings.reducedMotion ? "auto" : "smooth",
    block: "nearest"
  });
}

function openChapter(subjectId, chapter) {
  currentSubject = subjectId;
  currentChapter = chapter;

  const questionSubject = $("#questionSubject");
  const questionChapter = $("#questionChapter");

  if (questionSubject) questionSubject.value = subjectId;
  updateChapterSelects();

  if (questionChapter) questionChapter.value = chapter;

  showPage("questions");
  renderQuestionBank();
}

/* ---------- Question bank ---------- */

function renderQuestionBank() {
  const list = $("#questionList");
  if (!list) return;

  const subjectId = $("#questionSubject")?.value || "all";
  const chapter = $("#questionChapter")?.value || "all";
  const type = $("#questionType")?.value || "all";
  const count = Number($("#questionCount")?.value || 35);

  let questions = getQuestions(subjectId, chapter);

  if (type !== "all") {
    questions = questions.filter((question) => question.type === type);
  }

  questions = questions.slice(0, count);

  list.innerHTML = questions.map((question, index) => `
    <article class="question-item">
      <button class="question-toggle" aria-expanded="false">
        <span>${index + 1}. ${escapeHTML(question.q)}</span>
        <span>＋</span>
      </button>
      <div class="question-answer" hidden>
        <p>${escapeHTML(question.a)}</p>
        <small>${escapeHTML(question.type || "Practice")}</small>
      </div>
    </article>
  `).join("") || `
    <p>No questions are available for this selection yet.
    More verified chapter questions need to be added to BANK in script.js.</p>
  `;
}

/* ---------- Quiz ---------- */

function startQuiz() {
  const subjectId = $("#quizSubject")?.value || "all";
  const chapter = $("#quizChapter")?.value || "all";
  const length = Number($("#quizLength")?.value || 10);

  let questions = getQuestions(subjectId, chapter)
    .filter((question) => Array.isArray(question.options) &&
      Number.isInteger(question.correct));

  if (settings.shuffle) questions = shuffleArray(questions);
  currentQuiz = questions.slice(0, length);

  if (currentQuiz.length === 0) {
    const message = $("#quizSetupMessage");
    if (message) {
      message.textContent =
        "No MCQs are available for this selection yet. Add verified MCQs to BANK first.";
    }
    return;
  }

  quizIndex = 0;
  quizScore = 0;
  quizAnswered = false;

  $("#quizSetup")?.setAttribute("hidden", "");
  $("#quizResult")?.setAttribute("hidden", "");
  $("#quizPlay")?.removeAttribute("hidden");

  renderQuizQuestion();
}

function renderQuizQuestion() {
  const question = currentQuiz[quizIndex];
  if (!question) return;

  quizAnswered = false;

  const progressLabel = $("#quizProgress");
  const scoreLabel = $("#liveScore");
  const progressFill = $("#quizProgressFill");
  const questionBox = $("#quizQuestion");
  const optionsBox = $("#quizOptions");
  const feedback = $("#quizFeedback");
  const nextButton = $("#nextQuestion");

  if (progressLabel) {
    progressLabel.textContent =
      `Question ${quizIndex + 1} of ${currentQuiz.length}`;
  }

  if (scoreLabel) scoreLabel.textContent = `Score: ${quizScore}`;

  if (progressFill) {
    progressFill.style.width =
      `${((quizIndex + 1) / currentQuiz.length) * 100}%`;
  }

  if (questionBox) {
    questionBox.textContent = question.q;
  }

  if (feedback) feedback.textContent = "";

  if (nextButton) nextButton.hidden = true;

  if (optionsBox) {
    optionsBox.innerHTML = question.options.map((option, index) => `
      <button class="quiz-option" data-option-index="${index}">
        ${escapeHTML(option)}
      </button>
    `).join("");
  }
}

function chooseQuizOption(index) {
  if (quizAnswered) return;

  const question = currentQuiz[quizIndex];
  if (!question) return;

  quizAnswered = true;

  const buttons = $$("#quizOptions [data-option-index]");
  buttons.forEach((button, buttonIndex) => {
    button.disabled = true;

    if (buttonIndex === question.correct) {
      button.classList.add("correct");
    } else if (buttonIndex === index) {
      button.classList.add("incorrect");
    }
  });

  const feedback = $("#quizFeedback");
  const correct = index === question.correct;

  if (correct) {
    quizScore++;
    if (feedback) feedback.textContent = "Correct! " + question.a;
  } else {
    if (feedback) feedback.textContent = "Not quite. " + question.a;
  }

  if ($("#liveScore")) {
    $("#liveScore").textContent = `Score: ${quizScore}`;
  }

  const nextButton = $("#nextQuestion");
  if (nextButton) {
    nextButton.hidden = false;
    nextButton.textContent =
      quizIndex === currentQuiz.length - 1 ? "See results" : "Next question";
  }
}

function nextQuizQuestion() {
  if (!quizAnswered) return;

  quizIndex++;

  if (quizIndex < currentQuiz.length) {
    renderQuizQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  progress.quizzes = (progress.quizzes || 0) + 1;
  progress.correct = (progress.correct || 0) + quizScore;
  writeStorage(STORAGE.progress, progress);

  $("#quizPlay")?.setAttribute("hidden", "");
  $("#quizResult")?.removeAttribute("hidden");

  const summary = $("#resultSummary");
  const score = $("#resultScore");
  const details = $("#resultDetails");

  if (summary) summary.textContent = "Quiz completed!";
  if (score) score.textContent = `${quizScore} / ${currentQuiz.length}`;

  if (details) {
    const percent = Math.round((quizScore / currentQuiz.length) * 100);
    details.textContent = `You scored ${percent}%. Keep practising to improve.`;
  }

  renderDashboard();
  renderProgress();
}

function resetQuizView() {
  $("#quizPlay")?.setAttribute("hidden", "");
  $("#quizResult")?.setAttribute("hidden", "");
  $("#quizSetup")?.removeAttribute("hidden");
}

/* ---------- Flashcards ---------- */
function renderFlashcards() {
  const subjectId = $("#flashSubject")?.value || "";
  const chapter = $("#flashChapter")?.value || "all";

  flashcards = getQuestions(subjectId, chapter);
  flashIndex = 0;
  flashShowingAnswer = false;

  displayFlashcard();
}

function displayFlashcard() {
  const area = $("#flashcardArea");
  const controls = $("#flashcardControls");
  const count = $("#flashcardCount");

  if (!area) return;

  if (flashcards.length === 0) {
    area.innerHTML = `
      <div class="flashcard">
        <p>No flashcards are available for this selection yet.</p>
        <p>Add verified questions to BANK to create flashcards.</p>
      </div>
    `;
    if (count) count.textContent = "0 cards";
    if (controls) controls.hidden = true;
    return;
  }

  if (controls) controls.hidden = false;

  const card = flashcards[flashIndex];

  if (count) {
    count.textContent = `${flashIndex + 1} / ${flashcards.length}`;
  }

  area.innerHTML = `
    <button class="flashcard" id="flipFlashcard">
      <small>${flashShowingAnswer ? "ANSWER" : "QUESTION"}</small>
      <h3>${escapeHTML(flashShowingAnswer ? card.a : card.q)}</h3>
      <p>Tap to flip</p>
    </button>
  `;

  $("#flipFlashcard")?.addEventListener("click", flipFlashcard);
}

function flipFlashcard() {
  flashShowingAnswer = !flashShowingAnswer;

  if (flashShowingAnswer) {
    progress.cards = (progress.cards || 0) + 1;
    writeStorage(STORAGE.progress, progress);
  }

  displayFlashcard();
  renderDashboard();
}

function moveFlashcard(direction) {
  if (flashcards.length === 0) return;

  flashIndex =
    (flashIndex + direction + flashcards.length) % flashcards.length;

  flashShowingAnswer = false;
  displayFlashcard();
}

/* ---------- Notes ---------- */
function renderNotes() {
  const list = $("#savedNotesList");
  const count = $("#savedNoteCount");

  if (count) count.textContent = notes.length;

  if (!list) return;

  const search = ($("#noteSearch")?.value || "").toLowerCase();

  const filtered = notes.filter((note) =>
    `${note.title} ${note.body} ${note.subject} ${note.chapter}`
      .toLowerCase().includes(search)
  );

  list.innerHTML = filtered.map((note) => `
    <article class="note-card">
      <h3>${escapeHTML(note.title)}</h3>
      <p>${escapeHTML(note.subject || "General")} · ${escapeHTML(note.chapter || "No chapter")}</p>
      <div class="note-body">${escapeHTML(note.body).replace(/\n/g, "<br>")}</div>
      <div class="note-actions">
        <button data-edit-note="${note.id}">Edit</button>
        <button data-delete-note="${note.id}">Delete</button>
      </div>
    </article>
  `).join("") || "<p>No saved notes found. Create your first note above.</p>";

  renderDashboard();
}

function saveNote(event) {
  event.preventDefault();

  const title = ($("#noteTitle")?.value || "").trim();
  const body = ($("#noteBody")?.value || "").trim();

  if (!title || !body) {
    const status = $("#noteSaveStatus");
    if (status) status.textContent = "Enter a title and note content.";
    return;
  }

  const note = {
    id: editingNoteId || `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    title,
    body,
    subject: $("#noteSubject")?.selectedOptions[0]?.textContent || "General",
    chapter: $("#noteChapter")?.value === "all"
      ? ""
      : $("#noteChapter")?.value || "",
    updatedAt: new Date().toISOString()
  };

  if (editingNoteId) {
    notes = notes.map((item) =>
      item.id === editingNoteId ? note : item
    );
  } else {
    notes.unshift(note);
  }

  writeStorage(STORAGE.notes, notes);

  editingNoteId = null;
  $("#noteForm")?.reset();

  const hiddenId = $("#noteId");
  if (hiddenId) hiddenId.value = "";

  const status = $("#noteSaveStatus");
  if (status) status.textContent = "Note saved on this device.";

  renderNotes();
}

function editNote(id) {
  const note = notes.find((item) => item.id === id);
  if (!note) return;

  editingNoteId = id;

  if ($("#noteTitle")) $("#noteTitle").value = note.title;
  if ($("#noteBody")) $("#noteBody").value = note.body;

  const status = $("#noteSaveStatus");
  if (status) status.textContent = "Editing note.";

  $("#noteForm")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function deleteNote(id) {
  if (!confirm("Delete this note?")) return;

  notes = notes.filter((note) => note.id !== id);
  writeStorage(STORAGE.notes, notes);
  renderNotes();
}

function clearNoteForm() {
  editingNoteId = null;
  $("#noteForm")?.reset();

  if ($("#noteId")) $("#noteId").value = "";
  if ($("#noteSaveStatus")) $("#noteSaveStatus").textContent = "";
}

/* ---------- Mini games ---------- */

function openScrambleGame() {
  const words = [
    "photosynthesis",
    "electricity",
    "democracy",
    "triangle",
    "respiration",
    "probability",
    "environment"
  ];

  const word = words[Math.floor(Math.random() * words.length)];
  let scrambled = word;

  while (scrambled === word && word.length > 2) {
    scrambled = shuffleArray(word.split("")).join("");
  }

  activeGame = "scramble";
  gameAnswer = word;
  gamePoints = 0;

  $("#gamePlayPanel")?.removeAttribute("hidden");
  if ($("#gameTitle")) $("#gameTitle").textContent = "Word Scramble";

  if ($("#gameContent")) {
    $("#gameContent").innerHTML = `
      <p>Unscramble this study word:</p>
      <h2>${escapeHTML(scrambled.toUpperCase())}</h2>
      <form id="scrambleForm">
        <input id="scrambleInput" autocomplete="off"
          placeholder="Type the correct word" required>
        <button type="submit">Check answer</button>
      </form>
    `;
  }

  if ($("#gameFeedback")) $("#gameFeedback").textContent = "";
}

function openQuickGame() {
  activeGame = "quick";
  gamePoints = 0;

  const questions = getQuestions("", "all")
    .filter((question) => question.options && Number.isInteger(question.correct));

  if (questions.length === 0) {
    announce("Add some MCQs to BANK before starting Quick Challenge.");
    return;
  }

  const question = questions[Math.floor(Math.random() * questions.length)];

  gameAnswer = String(question.correct);

  $("#gamePlayPanel")?.removeAttribute("hidden");
  if ($("#gameTitle")) $("#gameTitle").textContent = "Quick Challenge";

  if ($("#gameContent")) {
    $("#gameContent").innerHTML = `
      <p>${escapeHTML(question.q)}</p>
      ${question.options.map((option, index) => `
        <button data-game-option="${index}">
          ${escapeHTML(option)}
        </button>
      `).join("")}
    `;
  }

  if ($("#gameFeedback")) $("#gameFeedback").textContent = "";
}

function checkScramble(event) {
  event.preventDefault();

  const answer = ($("#scrambleInput")?.value || "")
    .trim()
    .toLowerCase();

  if (answer === gameAnswer.toLowerCase()) {
    if ($("#gameFeedback")) {
      $("#gameFeedback").textContent = "Correct! Great work.";
    }
  } else {
    if ($("#gameFeedback")) {
      $("#gameFeedback").textContent = "Try again!";
    }
  }
}

/* ---------- Progress ---------- */

function renderProgress() {
  const values = {
    "#progressQuizzes": progress.quizzes || 0,
    "#progressCorrect": progress.correct || 0,
    "#progressCards": progress.cards || 0,
    "#progressNotes": notes.length
  };

  Object.entries(values).forEach(([selector, value]) => {
    const element = $(selector);
    if (element) element.textContent = value;
  });

  const activity = $("#activityList");

  if (activity) {
    activity.innerHTML = `
      <p>Saved notes: ${notes.length}</p>
      <p>Quizzes completed: ${progress.quizzes || 0}</p>
      <p>Correct quiz answers: ${progress.correct || 0}</p>
      <p>Flashcards reviewed: ${progress.cards || 0}</p>
    `;
  }
}

/* ---------- Settings and appearance ---------- */

function applySettings() {
  document.documentElement.dataset.theme = settings.theme;
  document.documentElement.dataset.fontSize = settings.fontSize;

  document.body.classList.toggle(
    "reduced-motion",
    Boolean(settings.reducedMotion)
  );

  if ($("#themeSelect")) $("#themeSelect").value = settings.theme;
  if ($("#fontSizeSelect")) $("#fontSizeSelect").value = settings.fontSize;
  if ($("#reducedMotionToggle")) {
    $("#reducedMotionToggle").checked = Boolean(settings.reducedMotion);
  }
  if ($("#studyTipsToggle")) {
    $("#studyTipsToggle").checked = Boolean(settings.studyTips);
  }
  if ($("#shuffleToggle")) {
    $("#shuffleToggle").checked = Boolean(settings.shuffle);
  }

  const themeButton = $("#themeToggle");
  if (themeButton) {
    themeButton.textContent = settings.theme === "dark"
      ? "☀️"
      : "🌙";
    themeButton.setAttribute(
      "aria-label",
      settings.theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
    );
  }
}

function saveSettings() {
  writeStorage(STORAGE.settings, settings);
  applySettings();
}

function toggleTheme() {
  settings.theme = settings.theme === "dark" ? "light" : "dark";
  saveSettings();
}

function openSettingsDrawer() {
  $("#settingsDrawer")?.classList.add("open");
  $("#settingsDrawer")?.removeAttribute("hidden");
}

function closeSettingsDrawer() {
  $("#settingsDrawer")?.classList.remove("open");
}

/* ---------- Import, export and reset ---------- */
function exportData() {
  const data = {
    version: 1,
    exportedAt: new Date().toISOString(),
    notes,
    settings,
    progress
  };

  const blob = new Blob(
    [JSON.stringify(data, null, 2)],
    { type: "application/json" }
  );

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "class-10-hub-backup.json";
  link.click();

  URL.revokeObjectURL(url);
  announce("Backup export started.");
}

function importData(file) {
  if (!file) return;

  const reader = new FileReader();

  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);

      if (!data || typeof data !== "object") {
        throw new Error("Invalid backup file.");
      }

      if (Array.isArray(data.notes)) {
        notes = data.notes;
        writeStorage(STORAGE.notes, notes);
      }

      if (data.settings && typeof data.settings === "object") {
        settings = { ...defaultSettings, ...data.settings };
        writeStorage(STORAGE.settings, settings);
      }

      if (data.progress && typeof data.progress === "object") {
        progress = { ...progress, ...data.progress };
        writeStorage(STORAGE.progress, progress);
      }

      applySettings();
      renderDashboard();
      renderNotes();
      renderProgress();

      alert("Backup imported successfully.");
    } catch {
      alert("This file is not a valid Class 10 Hub backup.");
    }
  };

  reader.readAsText(file);
}

function resetAllData() {
  const confirmed = confirm(
    "Reset all saved notes, settings and progress on this device? This cannot be undone."
  );

  if (!confirmed) return;

  localStorage.removeItem(STORAGE.notes);
  localStorage.removeItem(STORAGE.settings);
  localStorage.removeItem(STORAGE.progress);

  notes = [];
  settings = { ...defaultSettings };
  progress = { quizzes: 0, correct: 0, cards: 0 };

  applySettings();
  renderDashboard();
  renderNotes();
  renderProgress();

  alert("Saved data has been reset.");
}

/* ---------- Event listeners ---------- */

function bindEvents() {
  document.addEventListener("click", (event) => {
    const pageButton = event.target.closest("[data-page]");

    if (pageButton) {
      showPage(pageButton.dataset.page);
      return;
    }

    const subjectButton = event.target.closest("[data-open-subject]");

    if (subjectButton) {
      openSubject(subjectButton.dataset.openSubject);
      return;
    }

    const chapterButton = event.target.closest("[data-open-chapter]");

    if (chapterButton) {
      openChapter(
        chapterButton.dataset.subjectId,
        chapterButton.dataset.openChapter
      );
      return;
    }

    const questionToggle = event.target.closest(".question-toggle");

    if (questionToggle) {
      const answer = questionToggle.nextElementSibling;
      const isHidden = answer.hidden;

      answer.hidden = !isHidden;
      questionToggle.setAttribute("aria-expanded", String(isHidden));
      return;
    }

    const optionButton = event.target.closest("[data-option-index]");

    if (optionButton) {
      chooseQuizOption(Number(optionButton.dataset.optionIndex));
      return;
    }

    const editButton = event.target.closest("[data-edit-note]");

    if (editButton) {
      editNote(editButton.dataset.editNote);
      return;
    }

    const deleteButton = event.target.closest("[data-delete-note]");

    if (deleteButton) {
      deleteNote(deleteButton.dataset.deleteNote);
      return;
    }

    const gameOption = event.target.closest("[data-game-option]");

    if (gameOption && activeGame === "quick") {
      if (gameOption.dataset.gameOption === gameAnswer) {
        if ($("#gameFeedback")) {
          $("#gameFeedback").textContent = "Correct! Well done.";
        }
      } else {
        if ($("#gameFeedback")) {
          $("#gameFeedback").textContent = "Not quite. Try another round!";
        }
      }
    }
  });

  $("#menuButton")?.addEventListener("click", () => {
    $("#sidebar")?.classList.add("open");
    $("#sidebarOverlay")?.classList.add("show");
  });

  $("#closeSidebar")?.addEventListener("click", () => {
    $("#sidebar")?.classList.remove("open");
    $("#sidebarOverlay")?.classList.remove("show");
  });

  $("#sidebarOverlay")?.addEventListener("click", () => {
    $("#sidebar")?.classList.remove("open");
    $("#sidebarOverlay")?.classList.remove("show");
  });

  $("#openSettings")?.addEventListener("click", openSettingsDrawer);
  $("#topSettings")?.addEventListener("click", openSettingsDrawer);
  $("#closeSettings")?.addEventListener("click", closeSettingsDrawer);

  $("#themeToggle")?.addEventListener("click", toggleTheme);

  $("#themeSelect")?.addEventListener("change", (event) => {
    settings.theme = event.target.value;
    saveSettings();
  });

  $("#fontSizeSelect")?.addEventListener("change", (event) => {
    settings.fontSize = event.target.value;
    saveSettings();
  });

  $("#reducedMotionToggle")?.addEventListener("change", (event) => {
    settings.reducedMotion = event.target.checked;
    saveSettings();
  });

  $("#studyTipsToggle")?.addEventListener("change", (event) => {
    settings.studyTips = event.target.checked;
    saveSettings();
  });

  $("#shuffleToggle")?.addEventListener("change", (event) => {
    settings.shuffle = event.target.checked;
    saveSettings();
  });

  $("#subjectSearch")?.addEventListener("input", renderSubjects);
  $("#subjectFilter")?.addEventListener("change", renderSubjects);

  $("#closeChapterPanel")?.addEventListener("click", () => {
    $("#chapterPanel")?.setAttribute("hidden", "");
  });

  ["#questionSubject", "#quizSubject", "#flashSubject", "#noteSubject"]
    .forEach((selector) => {
      $(selector)?.addEventListener("change", () => {
        updateChapterSelects();

        if (selector === "#questionSubject") renderQuestionBank();
        if (selector === "#flashSubject") renderFlashcards();
      });
    });

  $("#questionChapter")?.addEventListener("change", renderQuestionBank);
  $("#questionType")?.addEventListener("change", renderQuestionBank);
  $("#questionCount")?.addEventListener("change", renderQuestionBank);

  $("#startQuiz")?.addEventListener("click", startQuiz);
  $("#nextQuestion")?.addEventListener("click", nextQuizQuestion);
  $("#quitQuiz")?.addEventListener("click", resetQuizView);
  $("#retryQuiz")?.addEventListener("click", startQuiz);
  $("#backToQuizSetup")?.addEventListener("click", resetQuizView);

  $("#flashChapter")?.addEventListener("change", renderFlashcards);
  $("#previousCard")?.addEventListener("click", () => moveFlashcard(-1));
  $("#nextCard")?.addEventListener("click", () => moveFlashcard(1));

  $("#noteForm")?.addEventListener("submit", saveNote);
  $("#clearNoteForm")?.addEventListener("click", clearNoteForm);
  $("#noteSearch")?.addEventListener("input", renderNotes);

  $("#openScrambleGame")?.addEventListener("click", openScrambleGame);
  $("#openQuickGame")?.addEventListener("click", openQuickGame);
  $("#closeGame")?.addEventListener("click", () => {
    $("#gamePlayPanel")?.setAttribute("hidden", "");
  });
  $("#gameContent")?.addEventListener("submit", (event) => {
    if (event.target.id === "scrambleForm") {
      checkScramble(event);
    }
  });

  $("#exportData")?.addEventListener("click", exportData);

  $("#importData")?.addEventListener("click", () => {
    $("#importFile")?.click();
  });

  $("#importFile")?.addEventListener("change", (event) => {
    importData(event.target.files?.[0]);
    event.target.value = "";
  });

  $("#aboutButton")?.addEventListener("click", () => {
    closeSettingsDrawer();
    showPage("about");
  });

  $("#resetData")?.addEventListener("click", resetAllData);
}

/* ---------- Start app ---------- */

function initApp() {
  setupSubjectSelects();
  applySettings();
  bindEvents();

  renderDashboard();
  renderSubjects();
  renderQuestionBank();
  renderFlashcards();
  renderNotes();
  renderProgress();

  showPage("dashboard");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
    }
