/* =========================================================
   CLASS 10 HUB — script.js
   Free, offline-first JavaScript. No API or paid service.
   ========================================================= */
(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const CONTENT = window.CONTENT || {};
  const STORAGE = {
    theme: "class10hub_theme",
    textSize: "class10hub_text_size",
    notes: "class10hub_notes",
    progress: "class10hub_progress",
    images: "class10hub_images"
  };

  const state = {
    page: "home",
    subject: "",
    chapter: "",
    flashcards: [],
    flashIndex: 0,
    flashRevealed: false,
    quizItems: [],
    quizIndex: 0,
    quizScore: 0,
    quizAnswered: false,
    mockItems: [],
    mockIndex: 0,
    mockAnswers: [],
    mockStarted: false,
    images: [],
    imageIndex: 0,
    currentImageKey: "",
    scrambleWord: "",
    scrambleAnswer: ""
  };

  function readStore(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value === null ? fallback : JSON.parse(value);
    } catch (error) {
      return fallback;
    }
  }

  function writeStore(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      toast("Device storage is full or unavailable. Try removing some saved images.");
      return false;
    }
  }

  function toast(message) {
    let node = $("appToast");
    if (!node) {
      node = document.createElement("div");
      node.id = "appToast";
      node.className = "hub-toast";
      node.setAttribute("role", "status");
      Object.assign(node.style, {
        position: "fixed", left: "50%", bottom: "22px",
        transform: "translateX(-50%)", zIndex: "9999",
        maxWidth: "90vw", padding: "12px 16px",
        borderRadius: "12px", background: "var(--card, #182235)",
        color: "var(--text, #fff)",
        border: "1px solid var(--border, #3a4960)",
        boxShadow: "0 8px 30px #0004", fontSize: "14px",
        opacity: "0", transition: "opacity .18s",
        pointerEvents: "none"
      });
      document.body.appendChild(node);
    }
    node.textContent = message;
    node.style.opacity = "1";
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => {
      node.style.opacity = "0";
    }, 2600);
  }

  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, (ch) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;",
      '"': "&quot;", "'": "&#39;"
    }[ch]));
  }

  function normalizeText(value) {
    return String(value ?? "").trim();
  }

  function getSubjects() {
    return Object.entries(CONTENT)
      .filter(([, value]) => value && value.chapters &&
        typeof value.chapters === "object")
      .map(([name, value]) => ({
        name,
        chapters: Object.entries(value.chapters)
          .filter(([, chapter]) => chapter &&
            typeof chapter === "object")
      }))
      .filter((subject) => subject.chapters.length);
  }

  function getChapter(subjectName, chapterName) {
    return CONTENT?.[subjectName]?.chapters?.[chapterName] || null;
  }

  function getQuestions(chapter) {
    return Array.isArray(chapter?.questions) ? chapter.questions : [];
  }

  function getFlashcards(chapter) {
    return Array.isArray(chapter?.flashcards) ? chapter.flashcards : [];
  }

  function getMCQs(chapter) {
    return Array.isArray(chapter?.mcqs) ? chapter.mcqs : [];
  }

  function questionText(item) {
    return item?.q ?? item?.question ?? item?.prompt ?? "Question";
  }

  function answerText(item) {
    return item?.a ?? item?.answerText ?? item?.answer_text ?? "";
  }

  function mcqOptions(item) {
    return Array.isArray(item?.options)
      ? item.options
      : (Array.isArray(item?.o) ? item.o : []);
  }

  function correctIndex(item) {
    const raw = item?.answer ?? item?.correctAnswer ??
      item?.correct ?? item?.aIndex;
    if (typeof raw === "number") return raw;
    if (typeof raw === "string") {
      const letter = raw.trim().toUpperCase();
      if (/^[A-D]$/.test(letter)) return letter.charCodeAt(0) - 65;
      const parsed = Number(raw);
      if (Number.isInteger(parsed)) return parsed;
    }
    return 0;
  }

  function explanationText(item) {
    return item?.explanation ?? item?.e ?? "";
  }

  function fillSelect(selectId, subjects, selectedSubject) {
    const select = $(selectId);
    if (!select) return;
    const previous = selectedSubject || select.value;
    select.innerHTML = "";
    subjects.forEach((subject) => {
      const option = document.createElement("option");
      option.value = subject.name;
      option.textContent = subject.name;
      select.appendChild(option);
    });
    if (subjects.some((s) => s.name === previous)) {
      select.value = previous;
    }
  }

  function fillChapterSelect(selectId, subjectName, selectedChapter) {
    const select = $(selectId);
    if (!select) return;
    const chapters = CONTENT?.[subjectName]?.chapters || {};
    const names = Object.keys(chapters);
    const previous = selectedChapter || select.value;
    select.innerHTML = "";
    names.forEach((name) => {
      const option = document.createElement("option");
      option.value = name;
      option.textContent = name;
      select.appendChild(option);
    });
    if (names.includes(previous)) select.value = previous;
  }

  function closeMenu() {
    $("sidebar")?.classList.remove("open", "active", "show");
    $("overlay")?.classList.remove("show", "active", "open");
    $("menuBtn")?.setAttribute("aria-expanded", "false");
  }

  function navigate(pageName) {
    const page = document.getElementById(`page-${pageName}`);
    if (!page) {
      toast("That section is not available.");
      return;
    }
    state.page = pageName;
    document.querySelectorAll(".page").forEach((section) => {
      section.classList.toggle("active",
        section.id === `page-${pageName}`);
    });
    document.querySelectorAll("[data-page]").forEach((button) => {
      if (button.matches("button")) {
        button.classList.toggle("active",
          button.dataset.page === pageName);
        if (button.dataset.page) {
          button.setAttribute("aria-current",
            button.dataset.page === pageName ? "page" : "false");
        }
      }
    });
    closeMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (pageName === "subjects") renderSubjects();
    if (pageName === "questions") renderQA();
    if (pageName === "flashcards") renderFlashcard();
    if (pageName === "quiz") prepareQuiz();
    if (pageName === "mock") renderMockHome();
    if (pageName === "notes") renderNotes();
    if (pageName === "infographics") refreshImages();
    if (pageName === "home") updateProgress();
  }

  function initNavigation() {
    document.addEventListener("click", (event) => {
      const target = event.target.closest("[data-page]");
      if (target) {
        event.preventDefault();
        navigate(target.dataset.page);
      }
      const go = event.target.closest("[data-go]");
      if (go) navigate(go.dataset.go);
    });

    $("menuBtn")?.addEventListener("click", () => {
      const sidebar = $("sidebar");
      const overlay = $("overlay");
      const opening = !sidebar?.classList.contains("open");
      sidebar?.classList.toggle("open", opening);
      overlay?.classList.toggle("show", opening);
      $("menuBtn")?.setAttribute("aria-expanded", String(opening));
    });
    $("overlay")?.addEventListener("click", closeMenu);
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }

  function applyTheme(theme) {
    const light = theme === "light";
    document.documentElement.dataset.theme = light ? "light" : "dark";
    document.body.classList.toggle("light-theme", light);
    document.body.classList.toggle("dark-theme", !light);
    const button = $("themeBtn");
        if (button) button.textContent = light ? "☀️" : "🌙";
    $("darkMode")?.classList.toggle("active", !light);
    $("lightMode")?.classList.toggle("active", light);
    localStorage.setItem(STORAGE.theme, light ? "light" : "dark");
  }

  function initTheme() {
    let theme = "dark";
    try {
      theme = localStorage.getItem(STORAGE.theme) || "dark";
    } catch (error) {}
    applyTheme(theme);
    $("themeBtn")?.addEventListener("click", () => {
      const current = document.documentElement.dataset.theme;
      applyTheme(current === "light" ? "dark" : "light");
    });
    $("darkMode")?.addEventListener("click", () => applyTheme("dark"));
    $("lightMode")?.addEventListener("click", () => applyTheme("light"));

    const sizeControl = $("textSize");
    if (sizeControl) {
      let size = "medium";
      try {
        size = localStorage.getItem(STORAGE.textSize) || "medium";
      } catch (error) {}
      sizeControl.value = size;
      applyTextSize(size);
      sizeControl.addEventListener("change", () => {
        applyTextSize(sizeControl.value);
      });
    }
  }

  function applyTextSize(size) {
    const sizes = { small: "14px", medium: "16px", large: "18px" };
    const value = sizes[size] || sizes.medium;
    document.documentElement.style.setProperty("--hub-font-size", value);
    document.body.style.fontSize = value;
    try {
      localStorage.setItem(STORAGE.textSize, size);
    } catch (error) {}
  }

  function renderSubjects() {
    const grid = $("subjectGrid");
    if (!grid) return;
    const subjects = getSubjects();
    if (!subjects.length) {
      grid.innerHTML = "<p>No subject content found. Check content.js.</p>";
      return;
    }
    grid.innerHTML = subjects.map((subject, index) => {
      const count = subject.chapters.length;
      const icons = ["📘", "🔬", "📐", "🌍", "💻", "📚"];
      return `
        <button type="button" class="subject-card"
          data-subject="${escapeHTML(subject.name)}">
          <span class="subject-icon">${icons[index % icons.length]}</span>
          <span class="subject-title">${escapeHTML(subject.name)}</span>
          <span class="subject-meta">${count} chapters</span>
          <span class="subject-arrow">Explore →</span>
        </button>`;
    }).join("");

    grid.querySelectorAll("[data-subject]").forEach((button) => {
      button.addEventListener("click", () => {
        state.subject = button.dataset.subject;
        renderChapterArea(state.subject);
      });
    });

    if (state.subject) renderChapterArea(state.subject);
  }

  function renderChapterArea(subjectName) {
    const area = $("chapterArea");
    if (!area) return;
    const chapters = CONTENT?.[subjectName]?.chapters || {};
    const names = Object.keys(chapters);
    area.innerHTML = `
      <div class="section-heading">
        <h3>${escapeHTML(subjectName)}</h3>
        <p>Select a chapter to study.</p>
      </div>
      <div class="chapter-grid">
        ${names.map((name, index) => `
          <article class="chapter-card">
            <span class="chapter-number">${String(index + 1).padStart(2, "0")}</span>
            <h4>${escapeHTML(name)}</h4>
            <div class="chapter-actions">
              <button type="button" data-chapter-action="questions"
                data-chapter="${escapeHTML(name)}">Q&A</button>
              <button type="button" data-chapter-action="flashcards"
                data-chapter="${escapeHTML(name)}">Flashcards</button>
              <button type="button" data-chapter-action="quiz"
                data-chapter="${escapeHTML(name)}">Quiz</button>
            </div>
          </article>`).join("")}
      </div>`;
    area.querySelectorAll("[data-chapter-action]").forEach((button) => {
      button.addEventListener("click", () => {
        state.subject = subjectName;
        state.chapter = button.dataset.chapter;
        const action = button.dataset.chapterAction;
        if (action === "questions") {
          navigate("questions");
          setTimeout(() => {
            setSelectValue("qaSubject", state.subject);
            fillChapterSelect("qaChapter", state.subject, state.chapter);
            renderQA();
          }, 0);
        } else if (action === "flashcards") {
          navigate("flashcards");
          setTimeout(() => {
            setSelectValue("flashSubject", state.subject);
            fillChapterSelect("flashChapter", state.subject, state.chapter);
            loadFlashcards();
          }, 0);
        } else {
          navigate("quiz");
          setTimeout(() => {
            setSelectValue("quizSubject", state.subject);
            fillChapterSelect("quizChapter", state.subject, state.chapter);
            prepareQuiz();
          }, 0);
        }
      });
    });
  }

  function setSelectValue(id, value) {
    const select = $(id);
    if (select && [...select.options].some((option) => option.value === value)) {
      select.value = value;
    }
  }

  function initSubjectSelects() {
    const subjects = getSubjects();
    [
      ["qaSubject", "qaChapter"],
      ["flashSubject", "flashChapter"],
      ["quizSubject", "quizChapter"],
      ["imageSubject", "imageChapter"]
    ].forEach(([subjectId, chapterId]) => {
      fillSelect(subjectId, subjects);
      const subjectSelect = $(subjectId);
      const chapterSelect = $(chapterId);
      const update = () => {
        fillChapterSelect(chapterId, subjectSelect?.value || "");
        if (subjectId === "qaSubject") renderQA();
        if (subjectId === "flashSubject") loadFlashcards();
        if (subjectId === "quizSubject") prepareQuiz();
        if (subjectId === "imageSubject") refreshImages();
      };
      subjectSelect?.addEventListener("change", update);
      chapterSelect?.addEventListener("change", () => {
        if (subjectId === "qaSubject") renderQA();
        if (subjectId === "flashSubject") loadFlashcards();
        if (subjectId === "quizSubject") prepareQuiz();
        if (subjectId === "imageSubject") refreshImages();
      });
      if (subjectSelect?.value) {
        fillChapterSelect(chapterId, subjectSelect.value);
      }
    });
  }

  function renderQA() {
    const list = $("qaList");
    if (!list) return;
    const subject = $("qaSubject")?.value || "";
    const chapterName = $("qaChapter")?.value || "";
    const chapter = getChapter(subject, chapterName);
    const questions = getQuestions(chapter);
    const filter = normalizeText($("qaFilter")?.value).toLowerCase();
    const search = normalizeText($("qaSearch")?.value).toLowerCase();

    const filtered = questions.filter((item) => {
      const type = normalizeText(item.type || "Question");
      const text = `${questionText(item)} ${answerText(item)} ${type}`.toLowerCase();
      return (!filter || type.toLowerCase() === filter) &&
        (!search || text.includes(search));
    });

    if (!chapter) {
      list.innerHTML = "<p>Select a subject and chapter.</p>";
      return;
    }
    if (!filtered.length) {
      list.innerHTML = "<p>No matching questions found in this chapter.</p>";
      return;
    }

    list.innerHTML = filtered.map((item, index) => `
      <details class="qa-item">
        <summary>
          <span class="qa-number">${index + 1}.</span>
          <span>${escapeHTML(questionText(item))}</span>
          <span class="qa-type">${escapeHTML(item.type || "Question")}</span>
        </summary>
        <div class="qa-answer">${escapeHTML(answerText(item))}</div>
      </details>`).join("");

    if (!list.dataset.bound) {
      list.dataset.bound = "true";
      list.addEventListener("toggle", (event) => {
        const detail = event.target;
        if (detail?.matches("details.qa-item") && detail.open) {
          detail.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }, true);
    }
  }

  function initQA() {
    $("qaSubject")?.addEventListener("change", renderQA);
    $("qaChapter")?.addEventListener("change", renderQA);
    $("qaFilter")?.addEventListener("change", renderQA);
    $("qaSearch")?.addEventListener("input", renderQA);
  }

  function loadFlashcards() {
    const subject = $("flashSubject")?.value || "";
    const chapterName = $("flashChapter")?.value || "";
    const chapter = getChapter(subject, chapterName);
    state.flashcards = getFlashcards(chapter);
    state.flashIndex = 0;
    state.flashRevealed = false;
    renderFlashcard();
  }

  function renderFlashcard() {
    const card = $("flashCard");
    if (!card) return;
    const items = state.flashcards;
    const item = items[state.flashIndex];
    if (!item) {
      card.innerHTML = `
        <div class="flashcard-empty">
          <h3>No flashcards available</h3>
          <p>This chapter does not have flashcards in content.js yet.</p>
        </div>`;
      if ($("flashCounter")) $("flashCounter").textContent = "0 / 0";
      return;
    }
    card.innerHTML = `
      <div class="flashcard-inner">
        <p class="flash-label">${state.flashRevealed ? "ANSWER" : "QUESTION"}</p>
        <div class="flashcard-text">${escapeHTML(
          state.flashRevealed ? answerText(item) : questionText(item)
        )}</div>
      </div>`;
    if ($("flashCounter")) {
      $("flashCounter").textContent =
        `${state.flashIndex + 1} / ${items.length}`;
    }
    if ($("flashReveal")) {
      $("flashReveal").textContent =
        state.flashRevealed ? "Show Question" : "Reveal Answer";
    }
  }

  function initFlashcards() {
    $("flashSubject")?.addEventListener("change", loadFlashcards);
    $("flashChapter")?.addEventListener("change", loadFlashcards);
    $("flashReveal")?.addEventListener("click", () => {
      if (!state.flashcards.length) return;
      state.flashRevealed = !state.flashRevealed;
      renderFlashcard();
    });
    $("flashNext")?.addEventListener("click", () => {
      if (!state.flashcards.length) return;
      state.flashIndex = (state.flashIndex + 1) % state.flashcards.length;
      state.flashRevealed = false;
      renderFlashcard();
    });
    $("flashPrev")?.addEventListener("click", () => {
      if (!state.flashcards.length) return;
      state.flashIndex =
        (state.flashIndex - 1 + state.flashcards.length) %
        state.flashcards.length;
      state.flashRevealed = false;
      renderFlashcard();
    });
  }

  function prepareQuiz() {
    const subject = $("quizSubject")?.value || "";
    const chapterName = $("quizChapter")?.value || "";
    const chapter = getChapter(subject, chapterName);
    state.quizItems = getMCQs(chapter);
    state.quizIndex = 0;
    state.quizScore = 0;
    state.quizAnswered = false;
    renderQuiz();
  }

  function renderQuiz() {
    const area = $("quizArea");
    if (!area) return;
    const items = state.quizItems;
    if (!items.length) {
      area.innerHTML = `
        <div class="empty-state">
          <h3>No MCQs available</h3>
          <p>There are no inbuilt MCQs for this chapter yet.</p>
        </div>`;
      return;
    }
    if (state.quizIndex >= items.length) {
      area.innerHTML = `
        <div class="quiz-result">
          <h3>Quiz complete!</h3>
          <p>Your score: <strong>${state.quizScore} / ${items.length}</strong></p>
          <button type="button" id="retryQuiz">Try Again</button>
        </div>`;
      $("retryQuiz")?.addEventListener("click", prepareQuiz);
      return;
    }

    const item = items[state.quizIndex];
    const options = mcqOptions(item);
    area.innerHTML = `
      <div class="quiz-progress">Question ${state.quizIndex + 1} of ${items.length}</div>
      <h3 class="quiz-question">${escapeHTML(questionText(item))}</h3>
      <div class="quiz-options">
        ${options.map((option, index) => `
          <button type="button" class="quiz-option"
            data-option="${index}" ${state.quizAnswered ? "disabled" : ""}>
            <span>${String.fromCharCode(65 + index)}.</span>
            ${escapeHTML(option)}
          </button>`).join("")}
      </div>
      <div id="quizFeedback" class="quiz-feedback" aria-live="polite"></div>
      <div class="quiz-footer">
        <span>Score: ${state.quizScore}</span>
        <button type="button" id="quizNext" ${state.quizAnswered ? "" : "disabled"}>
          ${state.quizIndex === items.length - 1 ? "Finish Quiz" : "Next"}
        </button>
      </div>`;

    area.querySelectorAll("[data-option]").forEach((button) => {
      button.addEventListener("click", () => answerQuiz(Number(button.dataset.option)));
    });
    $("quizNext")?.addEventListener("click", () => {
      if (!state.quizAnswered) return;
      state.quizIndex++;
      state.quizAnswered = false;
      renderQuiz();
    });
  }

  function answerQuiz(choice) {
    if (state.quizAnswered) return;
    const item = state.quizItems[state.quizIndex];
    if (!item) return;
    state.quizAnswered = true;
    const correct = correctIndex(item);
    if (choice === correct) state.quizScore++;

    document.querySelectorAll("#quizArea [data-option]").forEach((button) => {
      button.disabled = true;
      const index = Number(button.dataset.option);
      if (index === correct) button.classList.add("correct");
      else if (index === choice) button.classList.add("incorrect");
    });

    const feedback = $("quizFeedback");
    if (feedback) {
      const explanation = explanationText(item);
      feedback.innerHTML = `
        <p><strong>${choice === correct ? "Correct!" : "Not quite."}</strong>
        ${choice === correct ? "" : ` Correct answer: ${escapeHTML(
          mcqOptions(item)[correct] ?? "Option " + (correct + 1)
        )}`}</p>
        ${explanation ? `<p>${escapeHTML(explanation)}</p>` : ""}`;
    }
    const next = $("quizNext");
    if (next) next.disabled = false;
  }
    // ---------- SUBJECT MOCK TEST ----------
  function collectSubjectMCQs(subjectName) {
    const chapters = CONTENT?.[subjectName]?.chapters || {};
    const all = [];
    Object.entries(chapters).forEach(([chapterName, chapter]) => {
      getMCQs(chapter).forEach((item) => {
        all.push({ ...item, _chapterName: chapterName });
      });
    });
    return all;
  }

  function renderMockHome() {
    const area = $("mockArea");
    if (!area) return;
    if (state.mockStarted) {
      renderMockQuestion();
      return;
    }

    const subjects = getSubjects();
    area.innerHTML = `
      <div class="mock-intro">
        <h3>Subject Mock Test</h3>
        <p>Choose a subject to practise an 80-question mock test.</p>
        <label for="mockSubject">Subject</label>
        <select id="mockSubject">
          ${subjects.map((s) => `
            <option value="${escapeHTML(s.name)}">
              ${escapeHTML(s.name)}
            </option>`).join("")}
        </select>
        <button type="button" id="startMock">Start 80-Question Test</button>
        <p class="mock-note">Questions are taken from the inbuilt chapter MCQs.
        If the subject contains fewer than 80 MCQs, existing questions repeat
        to complete the test.</p>
      </div>`;
    $("startMock")?.addEventListener("click", startMock);
  }

  function startMock() {
    const subject = $("mockSubject")?.value || getSubjects()[0]?.name;
    if (!subject) {
      toast("No subjects found. Check content.js.");
      return;
    }

    const pool = collectSubjectMCQs(subject);
    if (!pool.length) {
      toast("This subject does not have any inbuilt MCQs yet.");
      return;
    }

    const shuffled = pool.slice().sort(() => Math.random() - 0.5);
    state.mockItems = [];
    while (state.mockItems.length < 80) {
      const cycle = shuffled.slice().sort(() => Math.random() - 0.5);
      state.mockItems.push(...cycle.slice(0, 80 - state.mockItems.length));
    }

    state.mockItems = state.mockItems.slice(0, 80);
    state.mockIndex = 0;
    state.mockAnswers = Array(80).fill(null);
    state.mockStarted = true;
    state.mockSubject = subject;
    renderMockQuestion();
  }

  function renderMockQuestion() {
    const area = $("mockArea");
    if (!area) return;

    if (state.mockIndex >= state.mockItems.length) {
      finishMock();
      return;
    }

    const item = state.mockItems[state.mockIndex];
    const options = mcqOptions(item);
    const selected = state.mockAnswers[state.mockIndex];

    area.innerHTML = `
      <div class="mock-header">
        <h3>${escapeHTML(state.mockSubject || "Mock Test")}</h3>
        <p>Question ${state.mockIndex + 1} of ${state.mockItems.length}</p>
        <progress value="${state.mockIndex + 1}"
          max="${state.mockItems.length}"></progress>
      </div>
      <h4 class="mock-question">${escapeHTML(questionText(item))}</h4>
      <div class="mock-options">
        ${options.map((option, index) => `
          <label class="mock-option">
            <input type="radio" name="mockAnswer" value="${index}"
              ${selected === index ? "checked" : ""}>
            <span>${String.fromCharCode(65 + index)}. ${escapeHTML(option)}</span>
          </label>`).join("")}
      </div>
      <div class="mock-controls">
        <button type="button" id="mockPrev"
          ${state.mockIndex === 0 ? "disabled" : ""}>Previous</button>
        <button type="button" id="mockNext">
          ${state.mockIndex === 79 ? "Submit Test" : "Next"}
        </button>
      </div>
      <p>Answered: ${state.mockAnswers.filter((a) => a !== null).length} / 80</p>`;

    area.querySelectorAll('input[name="mockAnswer"]').forEach((input) => {
      input.addEventListener("change", () => {
        state.mockAnswers[state.mockIndex] = Number(input.value);
      });
    });

    $("mockPrev")?.addEventListener("click", () => {
      if (state.mockIndex > 0) {
        state.mockIndex--;
        renderMockQuestion();
      }
    });

    $("mockNext")?.addEventListener("click", () => {
      const unanswered = state.mockAnswers[state.mockIndex] === null;
      if (unanswered && state.mockIndex !== 79) {
        const proceed = window.confirm(
          "You have not answered this question. Move to the next question?"
        );
        if (!proceed) return;
      }
      if (state.mockIndex === 79) {
        const confirmSubmit = window.confirm(
          "Submit your 80-question mock test?"
        );
        if (!confirmSubmit) return;
        finishMock();
      } else {
        state.mockIndex++;
        renderMockQuestion();
      }
    });
  }

  function finishMock() {
    const area = $("mockArea");
    if (!area) return;
    const correct = state.mockItems.reduce((score, item, index) => {
      return score + (state.mockAnswers[index] === correctIndex(item) ? 1 : 0);
    }, 0);

    state.mockStarted = false;
    const percentage = Math.round((correct / 80) * 100);
    area.innerHTML = `
      <div class="mock-result">
        <h3>Mock Test Complete!</h3>
        <p class="mock-score">${correct} / 80</p>
        <p>${percentage}% score</p>
        <p>Correct: ${correct} · Incorrect: ${
          state.mockAnswers.filter((a, i) =>
            a !== null && a !== correctIndex(state.mockItems[i])).length
        } · Unanswered: ${
          state.mockAnswers.filter((a) => a === null).length
        }</p>
        <button type="button" id="mockAgain">Try Another Test</button>
      </div>`;
    $("mockAgain")?.addEventListener("click", renderMockHome);
  }

  // ---------- NOTES ----------
  function getNotes() {
    const notes = readStore(STORAGE.notes, []);
    return Array.isArray(notes) ? notes : [];
  }

  function saveNotes(notes) {
    return writeStore(STORAGE.notes, notes);
  }

  function renderNotes() {
    const list = $("notesList");
    if (!list) return;
    const notes = getNotes();

    if (!notes.length) {
      list.innerHTML = `
        <div class="empty-state">
          <h3>No saved notes yet</h3>
          <p>Create a note using the fields above.</p>
        </div>`;
      return;
    }

    list.innerHTML = notes.slice().reverse().map((note) => `
      <article class="note-card" data-note-id="${escapeHTML(note.id)}">
        <div class="note-card-heading">
          <h3>${escapeHTML(note.title || "Untitled note")}</h3>
          <small>${escapeHTML(note.updated || "")}</small>
        </div>
        <p class="note-content">${escapeHTML(note.body || "")}</p>
        <div class="note-actions">
          <button type="button" data-edit-note="${escapeHTML(note.id)}">Edit</button>
          <button type="button" data-delete-note="${escapeHTML(note.id)}">Delete</button>
        </div>
      </article>`).join("");

    list.querySelectorAll("[data-edit-note]").forEach((button) => {
      button.addEventListener("click", () => editNote(button.dataset.editNote));
    });

    list.querySelectorAll("[data-delete-note]").forEach((button) => {
      button.addEventListener("click", () => deleteNote(button.dataset.deleteNote));
    });
  }

  function saveCurrentNote() {
    const titleInput = $("noteTitle");
    const bodyInput = $("noteBody");
    const title = normalizeText(titleInput?.value);
    const body = normalizeText(bodyInput?.value);

    if (!title && !body) {
      toast("Write a title or note first.");
      return;
    }

    const notes = getNotes();
    const editingId = state.editingNoteId;
    const timestamp = new Date().toLocaleString();

    if (editingId) {
      const index = notes.findIndex((note) => note.id === editingId);
      if (index >= 0) {
        notes[index] = {
          ...notes[index], title: title || "Untitled note",
          body, updated: timestamp
        };
      } else {
        notes.push({
          id: String(Date.now()), title: title || "Untitled note",
          body, updated: timestamp
        });
      }
    } else {
      notes.push({
        id: String(Date.now()) + Math.random().toString(36).slice(2, 7),
        title: title || "Untitled note",
        body, updated: timestamp
      });
    }

    if (saveNotes(notes)) {
      titleInput.value = "";
      bodyInput.value = "";
      state.editingNoteId = null;
      const saveButton = $("saveNote");
      if (saveButton) saveButton.textContent = "Save Note";
      renderNotes();
      toast("Note saved on this device.");
      updateProgress();
    }
  }

  function editNote(id) {
    const note = getNotes().find((item) => item.id === id);
    if (!note) return;
    $("noteTitle").value = note.title || "";
    $("noteBody").value = note.body || "";
    state.editingNoteId = id;
    if ($("saveNote")) $("saveNote").textContent = "Update Note";
    $("noteTitle")?.focus();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function deleteNote(id) {
    if (!window.confirm("Delete this note? This cannot be undone.")) return;
    const notes = getNotes().filter((item) => item.id !== id);
    if (saveNotes(notes)) {
      renderNotes();
      toast("Note deleted.");
      updateProgress();
    }
  }

  function initNotes() {
    $("saveNote")?.addEventListener("click", saveCurrentNote);
    $("clearNote")?.addEventListener("click", () => {
      $("noteTitle").value = "";
      $("noteBody").value = "";
      state.editingNoteId = null;
      if ($("saveNote")) $("saveNote").textContent = "Save Note";
    });
  }

  // ---------- STUDY PROGRESS ----------
  function getProgress() {
    const data = readStore(STORAGE.progress, {});
    return data && typeof data === "object" ? data : {};
  }

  function markChapterStudied(subject, chapter) {
    const progress = getProgress();
    progress[`${subject}::${chapter}`] = true;
    writeStore(STORAGE.progress, progress);
    updateProgress();
  }

  function updateProgress() {
    const subjects = getSubjects();
    const total = subjects.reduce((sum, subject) =>
      sum + subject.chapters.length, 0);
    const progress = getProgress();
    const studied = Object.keys(progress).filter((key) => progress[key]).length;
    const notesCount = getNotes().length;
    const percent = total ? Math.min(100, Math.round(studied / total * 100)) : 0;

    if ($("progressLabel")) $("progressLabel").textContent = `${percent}%`;
    if ($("progressFill")) $("progressFill").style.width = `${percent}%`;
    if ($("progressDetail")) {
      $("progressDetail").textContent =
        `${studied} of ${total} chapters marked studied · ${notesCount} saved notes`;
    }
    if ($("savedNotesCount")) $("savedNotesCount").textContent = notesCount;
    if ($("chapterCount")) $("chapterCount").textContent = total;
  }

  // ---------- IMAGE GALLERY ----------
  function imageStorageKey() {
    const subject = $("imageSubject")?.value || "";
    const chapter = $("imageChapter")?.value || "";
    return `${subject}::${chapter}`;
  }

  function getImageStore() {
    const store = readStore(STORAGE.images, {});
    return store && typeof store === "object" ? store : {};
  }

  function refreshImages() {
    const key = imageStorageKey();
    state.currentImageKey = key;
    const store = getImageStore();
    state.images = Array.isArray(store[key]) ? store[key] : [];
    state.imageIndex = Math.min(state.imageIndex, Math.max(0, state.images.length - 1));
    renderImageGallery();
  }

  function renderImageGallery() {
    const viewer = $("imageViewer");
    if (!viewer) return;
    const image = state.images[state.imageIndex];

    if (!image) {
      viewer.innerHTML = `
        <div class="empty-state">
          <h3>No images saved</h3>
          <p>Choose image files to add your study diagrams.</p>
        </div>`;
      if ($("imageCaption")) $("imageCaption").textContent = "0 images";
      if ($("imageCounter")) $("imageCounter").textContent = "0 / 0";
      return;
    }

    viewer.innerHTML = `
      <figure class="saved-image">
        <img src="${image.data}" alt="${escapeHTML(image.name)}"
          style="max-width:100%;max-height:420px;object-fit:contain">
        <figcaption>${escapeHTML(image.name)}</figcaption>
      </figure>`;
    if ($("imageCaption")) $("imageCaption").textContent = image.name;
    if ($("imageCounter")) {
      $("imageCounter").textContent =
        `${state.imageIndex + 1} / ${state.images.length}`;
    }
  }

  async function saveSelectedImages() {
    const input = $("imageFiles");
    const files = Array.from(input?.files || []);
    if (!files.length) {
      toast("Select at least one image first.");
      return;
    }

    const allowed = files.filter((file) => file.type.startsWith("image/"));
    if (!allowed.length) {
      toast("Please select image files.");
      return;
    }

    const store = getImageStore();
    const key = imageStorageKey();
    const existing = Array.isArray(store[key]) ? store[key] : [];
    const additions = [];

    for (const file of allowed) {
      try {
        const data = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = () => reject(new Error("Could not read image."));
          reader.readAsDataURL(file);
        });
        additions.push({
          id: String(Date.now()) + Math.random().toString(36).slice(2, 7),
          name: file.name,
          data
        });
      } catch (error) {
        toast(`Could not load ${file.name}.`);
      }
    }

    store[key] = existing.concat(additions);
    if (writeStore(STORAGE.images, store)) {
      state.imageIndex = Math.max(0, store[key].length - 1);
      refreshImages();
      input.value = "";
      toast("Images saved on this device.");
    }
  }

  function deleteCurrentImage() {
    if (!state.images.length) {
      toast("There is no image to delete.");
      return;
    }
    if (!window.confirm("Delete this saved image?")) return;
    const store = getImageStore();
    const key = state.currentImageKey;
    store[key] = state.images.filter((_, index) => index !== state.imageIndex);
    if (!store[key].length) delete store[key];
    if (writeStore(STORAGE.images, store)) {
      state.imageIndex = Math.max(0, state.imageIndex - 1);
      refreshImages();
      toast("Image deleted.");
    }
  }

  function initImages() {
    $("saveImages")?.addEventListener("click", saveSelectedImages);
    $("imagePrev")?.addEventListener("click", () => {
      if (!state.images.length) return;
      state.imageIndex = (state.imageIndex - 1 + state.images.length) % state.images.length;
      renderImageGallery();
    });
    $("imageNext")?.addEventListener("click", () => {
      if (!state.images.length) return;
      state.imageIndex = (state.imageIndex + 1) % state.images.length;
      renderImageGallery();
    });
    $("deleteImage")?.addEventListener("click", deleteCurrentImage);
                                    }
    // ---------- MINI GAMES ----------
  const recallQuestions = [
    { q: "What is the basic unit of life?", a: "The cell." },
    { q: "What is the SI unit of electric current?", a: "Ampere (A)." },
    { q: "Which gas do plants absorb during photosynthesis?", a: "Carbon dioxide (CO₂)." },
    { q: "What is the chemical formula of water?", a: "H₂O." },
    { q: "What is the process of cell division that produces two identical daughter cells?", a: "Mitosis." },
    { q: "What is the SI unit of force?", a: "Newton (N)." },
    { q: "Which organ pumps blood throughout the human body?", a: "The heart." },
    { q: "What is the value of the square root of 144?", a: "12." },
    { q: "What is the sum of the angles of a triangle?", a: "180°." },
    { q: "What is the full form of DNA?", a: "Deoxyribonucleic acid." },
    { q: "Which gas is released during photosynthesis?", a: "Oxygen." },
    { q: "What is the pH of a neutral solution at room temperature?", a: "Approximately 7." }
  ];

  let recallIndex = 0;
  let recallRevealed = false;

  function renderRecall() {
    const area = $("recallArea");
    if (!area) return;
    const item = recallQuestions[recallIndex % recallQuestions.length];
    area.innerHTML = `
      <div class="recall-card">
        <p>Question ${recallIndex + 1} of ${recallQuestions.length}</p>
        <h3>${escapeHTML(item.q)}</h3>
        ${recallRevealed
          ? `<p class="recall-answer"><strong>Answer:</strong> ${escapeHTML(item.a)}</p>`
          : `<button type="button" id="revealRecall">Reveal Answer</button>`}
        <button type="button" id="nextRecall">Next Question →</button>
      </div>`;

    $("revealRecall")?.addEventListener("click", () => {
      recallRevealed = true;
      renderRecall();
    });
    $("nextRecall")?.addEventListener("click", () => {
      recallIndex = (recallIndex + 1) % recallQuestions.length;
      recallRevealed = false;
      renderRecall();
    });
  }

  const scrambleWords = [
    { word: "CELL", hint: "Basic unit of life" },
    { word: "FORCE", hint: "A push or pull" },
    { word: "ENERGY", hint: "Capacity to do work" },
    { word: "OXYGEN", hint: "Gas needed for respiration" },
    { word: "PLANET", hint: "A body that orbits a star" },
    { word: "FRACTION", hint: "Represents part of a whole" },
    { word: "TRIANGLE", hint: "A polygon with three sides" },
    { word: "DEMOCRACY", hint: "Government by the people" },
    { word: "HABITAT", hint: "Natural home of an organism" },
    { word: "EQUATION", hint: "A mathematical statement with equality" },
    { word: "MAGNET", hint: "Object that attracts certain metals" },
    { word: "CLIMATE", hint: "Long-term weather pattern" }
  ];

  function scramble(text) {
    const chars = text.split("");
    for (let i = chars.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [chars[i], chars[j]] = [chars[j], chars[i]];
    }
    if (chars.join("") === text && text.length > 1) {
      chars.push(chars.shift());
    }
    return chars.join("");
  }

  function newScramble() {
    const item = scrambleWords[Math.floor(Math.random() * scrambleWords.length)];
    state.scrambleAnswer = item.word;
    state.scrambleWord = scramble(item.word);

    const wordElement = $("scrambleWord");
    if (wordElement) {
      wordElement.textContent = state.scrambleWord;
      wordElement.dataset.hint = item.hint;
      wordElement.title = `Hint: ${item.hint}`;
    }
    if ($("scrambleAnswer")) $("scrambleAnswer").value = "";
    if ($("scrambleResult")) {
      $("scrambleResult").textContent = `Hint: ${item.hint}`;
    }
  }

  function checkScramble() {
    const answer = normalizeText($("scrambleAnswer")?.value).toUpperCase();
    const result = $("scrambleResult");
    if (!answer) {
      if (result) result.textContent = "Type your answer first.";
      return;
    }
    if (answer === state.scrambleAnswer) {
      if (result) result.textContent = "Correct! Great work! 🎉";
      toast("Correct answer!");
    } else {
      if (result) result.textContent = "Not quite. Try again!";
    }
  }

  function initGames() {
    $("recallBtn")?.addEventListener("click", renderRecall);
    $("scrambleBtn")?.addEventListener("click", newScramble);
    $("checkScramble")?.addEventListener("click", checkScramble);
    $("scrambleAnswer")?.addEventListener("keydown", (event) => {
      if (event.key === "Enter") checkScramble();
    });
    if ($("scrambleWord")) newScramble();
  }

  // ---------- RESET SETTINGS ----------
  function initReset() {
    $("resetData")?.addEventListener("click", () => {
      const confirmed = window.confirm(
        "Reset all Class 10 Hub data saved on this device? This removes notes, progress, saved images, and preferences."
      );
      if (!confirmed) return;

      try {
        Object.values(STORAGE).forEach((key) => localStorage.removeItem(key));
      } catch (error) {
        toast("Could not reset all device data.");
        return;
      }

      state.editingNoteId = null;
      state.mockStarted = false;
      state.images = [];
      state.flashIndex = 0;
      state.flashRevealed = false;

      applyTheme("dark");
      applyTextSize("medium");

      if ($("noteTitle")) $("noteTitle").value = "";
      if ($("noteBody")) $("noteBody").value = "";
      if ($("saveNote")) $("saveNote").textContent = "Save Note";

      renderNotes();
      updateProgress();
      refreshImages();
      toast("Saved website data has been reset.");
    });
  }

  // ---------- CONTENT CHECKS ----------
  function checkContent() {
    const subjects = getSubjects();
    if (!subjects.length) {
      console.error(
        "Class 10 Hub: window.CONTENT is missing or has no valid chapters. Check that content.js loads before script.js."
      );
      const app = $("app");
      if (app) {
        const warning = document.createElement("div");
        warning.className = "content-warning";
        warning.setAttribute("role", "alert");
        warning.innerHTML = `
          <h3>Study content could not load</h3>
          <p>Check that <strong>content.js</strong> is in the same folder
          as index.html and is linked before script.js.</p>
          <p>Open the browser console to check for JavaScript errors.</p>`;
        app.prepend(warning);
      }
      return false;
    }
    return true;
  }

  // ---------- INITIALISE WEBSITE ----------
  function init() {
    initNavigation();
    initTheme();
    initSubjectSelects();
    initQA();
    initFlashcards();
    initNotes();
    initImages();
    initGames();
    initReset();

    if (checkContent()) {
      renderSubjects();
      renderQA();
      loadFlashcards();
      prepareQuiz();
      renderMockHome();
      renderNotes();
      refreshImages();
      updateProgress();
    }

    // Optional button: mark the currently selected Q&A chapter as studied.
    const markButton = $("markStudied");
    markButton?.addEventListener("click", () => {
      const subject = $("qaSubject")?.value || "";
      const chapter = $("qaChapter")?.value || "";
      if (!subject || !chapter) {
        toast("Choose a subject and chapter first.");
        return;
      }
      markChapterStudied(subject, chapter);
      toast("Chapter marked as studied.");
    });

    // Make internal navigation functions available for simple inline use.
    window.Class10Hub = {
      navigate,
      renderSubjects,
      renderQA,
      renderFlashcard,
      updateProgress
    };

    console.info("Class 10 Hub script.js initialised.");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
