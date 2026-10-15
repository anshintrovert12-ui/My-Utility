/* =====================================================
   CLASS 10 HUB — SCRIPT.JS
   PART 1: CORE NAVIGATION & APPEARANCE
   Free • GitHub Pages compatible
   Do not modify content.js
===================================================== */

(function () {
  "use strict";

  /* ---------- SAFE LOCAL STORAGE ---------- */

  const HubStorage = {
    get: function (key, fallback) {
      try {
        const value = localStorage.getItem(key);
        return value === null ? fallback : value;
      } catch (error) {
        return fallback;
      }
    },

    set: function (key, value) {
      try {
        localStorage.setItem(key, String(value));
      } catch (error) {
        console.warn("Class 10 Hub: Setting could not be saved.");
      }
    }
  };

  const $ = function (id) {
    return document.getElementById(id);
  };

  const $$ = function (selector) {
    return Array.from(document.querySelectorAll(selector));
  };

  function listen(element, eventName, callback) {
    if (element) {
      element.addEventListener(eventName, callback);
    }
  }

  /* ---------- SIDEBAR ---------- */

  function setSidebar(open) {
    const sidebar = $("sidebar");
    const overlay = $("overlay");
    const menuButton = $("menuBtn");

    if (!sidebar) return;

    sidebar.classList.toggle("open", open);

    if (overlay) {
      overlay.classList.toggle("active", open);
    }

    if (menuButton) {
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute(
        "aria-label",
        open ? "Close navigation menu" : "Open navigation menu"
      );
    }
  }

  function toggleSidebar() {
    const sidebar = $("sidebar");

    if (!sidebar) return;

    setSidebar(!sidebar.classList.contains("open"));
  }

  function initialiseSidebar() {
    // Always start closed, even if a previous CSS rule opened it.
    setSidebar(false);

    listen($("menuBtn"), "click", toggleSidebar);

    listen($("overlay"), "click", function () {
      setSidebar(false);
    });

    listen(document, "keydown", function (event) {
      if (event.key === "Escape") {
        setSidebar(false);
      }
    });
  }

  /* ---------- PAGE NAVIGATION ---------- */

  function showPage(pageName) {
    if (!pageName) return;

    const target = $("page-" + pageName);

    if (!target) {
      console.warn("Class 10 Hub: Unknown page:", pageName);
      return;
    }

    $$(".page").forEach(function (page) {
      page.classList.toggle("active", page === target);
      page.setAttribute(
        "aria-hidden",
        page === target ? "false" : "true"
      );
    });

    $$(".nav-link[data-page]").forEach(function (button) {
      const active = button.dataset.page === pageName;

      button.classList.toggle("active", active);

      if (active) {
        button.setAttribute("aria-current", "page");
      } else {
        button.removeAttribute("aria-current");
      }
    });

    setSidebar(false);
    HubStorage.set("class10hub-last-page", pageName);

    // Do not force scrolling here. Let the browser scroll naturally.
  }

  function initialiseNavigation() {
    $$(".nav-link[data-page]").forEach(function (button) {
      listen(button, "click", function () {
        showPage(button.dataset.page);
      });
    });

    $$("[data-go]").forEach(function (button) {
      listen(button, "click", function () {
        showPage(button.dataset.go);
      });
    });
  }

  /* ---------- DARK / LIGHT MODE ---------- */

  function applyTheme(theme, save) {
    const selected = theme === "light" ? "light" : "dark";
    const isLight = selected === "light";

    document.documentElement.dataset.theme = selected;
    document.body.classList.toggle("light-mode", isLight);
    document.body.classList.toggle("dark-mode", !isLight);
    document.body.classList.toggle("light-theme", isLight);

    const themeButton = $("themeBtn");

    if (themeButton) {
      themeButton.textContent = isLight ? "☀" : "☾";
      themeButton.title = isLight ? "Switch to dark mode" : "Switch to light mode";
      themeButton.setAttribute(
        "aria-label",
        isLight ? "Switch to dark mode" : "Switch to light mode"
      );
    }

    if (save !== false) {
      HubStorage.set("class10hub-theme", selected);
    }
  }

  function toggleTheme() {
    const current =
      document.documentElement.dataset.theme ||
      HubStorage.get("class10hub-theme", "dark");

    applyTheme(current === "dark" ? "light" : "dark");
  }

  function initialiseTheme() {
    listen($("themeBtn"), "click", toggleTheme);
    listen($("settingsThemeBtn"), "click", toggleTheme);

    listen($("darkMode"), "click", function () {
      applyTheme("dark");
    });

    listen($("lightMode"), "click", function () {
      applyTheme("light");
    });

    applyTheme(
      HubStorage.get("class10hub-theme", "dark"),
      false
    );
  }

  /* ---------- SEASONAL APPEARANCE ---------- */

  function applySeasonalTheme(theme, save) {
    const valid = ["normal", "diwali", "christmas"];
    const selected = valid.includes(theme) ? theme : "normal";

    if (selected === "normal") {
      document.documentElement.removeAttribute("data-seasonal-theme");
    } else {
      document.documentElement.dataset.seasonalTheme = selected;
    }

    const selector = $("seasonalThemeSelect");

    if (selector) {
      selector.value = selected;
    }

    if (save !== false) {
      HubStorage.set("class10hub-seasonal-theme", selected);
    }
  }

  function initialiseSeasonalTheme() {
    listen($("seasonalThemeSelect"), "change", function (event) {
      applySeasonalTheme(event.target.value);
    });

    applySeasonalTheme(
      HubStorage.get("class10hub-seasonal-theme", "normal"),
      false
    );
  }

  /* ---------- TEXT SIZE ---------- */

  function applyTextSize(size, save) {
    const valid = ["small", "medium", "large"];
    const selected = valid.includes(size) ? size : "medium";

    document.documentElement.dataset.textSize = selected;

    document.body.classList.remove(
      "text-small",
      "text-medium",
      "text-large"
    );

    document.body.classList.add("text-" + selected);

    const selector = $("textSize") || $("textSizeSelect");

    if (selector) {
      selector.value = selected;
    }

    if (save !== false) {
      HubStorage.set("class10hub-text-size", selected);
    }
  }

  function initialiseTextSize() {
    const selector = $("textSize") || $("textSizeSelect");

    listen(selector, "change", function (event) {
      applyTextSize(event.target.value);
    });

    applyTextSize(
      HubStorage.get("class10hub-text-size", "medium"),
      false
    );
  }

  /* ---------- STARTUP ---------- */

  function initialise() {
    initialiseSidebar();
    initialiseNavigation();
    initialiseTheme();
    initialiseSeasonalTheme();
    initialiseTextSize();

    const savedPage = HubStorage.get("class10hub-last-page", "home");

    showPage($("page-" + savedPage) ? savedPage : "home");
  }

  // Expose helpers for the remaining script parts.
  window.Class10Hub = window.Class10Hub || {};

  window.Class10Hub.storage = HubStorage;
  window.Class10Hub.showPage = showPage;
  window.Class10Hub.setSidebar = setSidebar;
  window.Class10Hub.applyTheme = applyTheme;
  window.Class10Hub.applySeasonalTheme = applySeasonalTheme;
  window.Class10Hub.applyTextSize = applyTextSize;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialise, {
      once: true
    });
  } else {
    initialise();
  }
})();
/* =====================================================
   CLASS 10 HUB — SCRIPT.JS
   PART 2: SUBJECTS, CHAPTERS & CONTENT READING
   Append this below Part 1.
===================================================== */

(function class10HubPart2() {
  "use strict";

  const Hub = window.Class10Hub;

  if (!Hub) {
    console.error("Class 10 Hub Part 1 was not loaded.");
    return;
  }

  const $ = Hub.getElement;

  function listen(element, eventName, callback) {
    if (element) {
      element.addEventListener(eventName, callback);
    }
  }

  function safeText(value) {
    return String(value == null ? "" : value);
  }

  function normaliseKey(value) {
    return safeText(value)
      .trim()
      .toLowerCase()
      .replace(/[_-]+/g, " ")
      .replace(/\s+/g, " ");
  }

  /*
   * Read the existing content.js data without changing it.
   * Supports several common content-bank structures.
   */
  function getContentBank() {
    const possibleNames = [
      "chapterContent",
      "subjectContent",
      "contentBank",
      "questionBank",
      "flashcardBank",
      "quizBank",
      "class10Content",
      "studyContent"
    ];

    for (const name of possibleNames) {
      try {
        if (
          Object.prototype.hasOwnProperty.call(window, name) &&
          window[name] &&
          typeof window[name] === "object"
        ) {
          return window[name];
        }
      } catch (error) {
        // Ignore unavailable global data.
      }
    }

    return null;
  }

  /*
   * Identify subjects and chapters from the content bank.
   * Example structures:
   * Science: { "Chapter Name": [...] }
   * "Science::Chapter Name": [...]
   */
  function getSubjectsFromBank(bank) {
    if (!bank || typeof bank !== "object") return [];

    const subjects = new Set();

    Object.keys(bank).forEach(function (key) {
      const parts = key.split("::");

      if (parts.length > 1) {
        subjects.add(parts[0].trim());
      } else if (
        bank[key] &&
        typeof bank[key] === "object" &&
        !Array.isArray(bank[key])
      ) {
        subjects.add(key.trim());
      }
    });

    return Array.from(subjects);
  }

  function getChaptersForSubject(bank, subject) {
    if (!bank || !subject) return [];

    const chapters = new Set();
    const wantedSubject = normaliseKey(subject);

    Object.keys(bank).forEach(function (key) {
      const parts = key.split("::");

      if (
        parts.length > 1 &&
        normaliseKey(parts[0]) === wantedSubject
      ) {
        chapters.add(parts.slice(1).join("::").trim());
        return;
      }

      if (
        normaliseKey(key) === wantedSubject &&
        bank[key] &&
        typeof bank[key] === "object" &&
        !Array.isArray(bank[key])
      ) {
        Object.keys(bank[key]).forEach(function (chapter) {
          chapters.add(chapter.trim());
        });
      }
    });

    return Array.from(chapters).filter(Boolean);
  }

  function getChapterData(bank, subject, chapter) {
    if (!bank || !subject || !chapter) return null;

    const directKey = subject + "::" + chapter;

    if (
      Object.prototype.hasOwnProperty.call(bank, directKey)
    ) {
      return bank[directKey];
    }

    const wantedSubject = normaliseKey(subject);
    const wantedChapter = normaliseKey(chapter);

    for (const key of Object.keys(bank)) {
      const parts = key.split("::");

      if (
        parts.length > 1 &&
        normaliseKey(parts[0]) === wantedSubject &&
        normaliseKey(parts.slice(1).join("::")) === wantedChapter
      ) {
        return bank[key];
      }

      if (
        normaliseKey(key) === wantedSubject &&
        bank[key] &&
        typeof bank[key] === "object" &&
        Object.prototype.hasOwnProperty.call(bank[key], chapter)
      ) {
        return bank[key][chapter];
      }
    }

    return null;
  }

  function populateSelect(select, options, placeholder) {
    if (!select) return;

    const previousValue = select.value;

    select.replaceChildren();

    const firstOption = document.createElement("option");
    firstOption.value = "";
    firstOption.textContent = placeholder;
    select.appendChild(firstOption);

    options.forEach(function (item) {
      const option = document.createElement("option");
      option.value = item;
      option.textContent = item;
      select.appendChild(option);
    });

    if (options.includes(previousValue)) {
      select.value = previousValue;
    }
  }

  function showMessage(container, message) {
    if (!container) return;

    const paragraph = document.createElement("p");
    paragraph.textContent = message;
    container.replaceChildren(paragraph);
  }

  function renderChapterData(container, data) {
    if (!container) return;

    container.replaceChildren();

    if (data == null) {
      showMessage(
        container,
        "No content was found for this chapter in the available content bank."
      );
      return;
    }

    /*
     * Display plain text safely.
     * Detailed question rendering is handled in Part 3.
     */
    if (typeof data === "string" || typeof data === "number") {
      const paragraph = document.createElement("p");
      paragraph.textContent = String(data);
      container.appendChild(paragraph);
      return;
    }

    if (Array.isArray(data)) {
      if (data.length === 0) {
        showMessage(container, "No items are available in this chapter yet.");
        return;
      }

      data.forEach(function (item, index) {
        const card = document.createElement("article");
        card.className = "question-card";

        const heading = document.createElement("h3");
        heading.textContent =
          item && typeof item === "object"
            ? safeText(item.q || item.question || item.title || "Item " + (index + 1))
            : "Item " + (index + 1);

        card.appendChild(heading);

        if (item && typeof item === "object") {
          const answerText =
            item.a || item.answer || item.definition || "";

          if (answerText) {
            const answer = document.createElement("p");
            answer.textContent = safeText(answerText);
            card.appendChild(answer);
          }
        } else {
          const paragraph = document.createElement("p");
          paragraph.textContent = safeText(item);
          card.appendChild(paragraph);
        }

        container.appendChild(card);
      });

      return;
    }

    /*
     * Render object data as readable key-value sections.
     */
    if (typeof data === "object") {
      Object.keys(data).forEach(function (key) {
        const section = document.createElement("section");
        section.className = "content-section";

        const heading = document.createElement("h3");
        heading.textContent = key;
        section.appendChild(heading);

        const value = data[key];

        if (Array.isArray(value)) {
          value.forEach(function (item) {
            const paragraph = document.createElement("p");

            if (item && typeof item === "object") {
              paragraph.textContent = safeText(
                item.q || item.question || item.title || JSON.stringify(item)
              );
            } else {
              paragraph.textContent = safeText(item);
            }

            section.appendChild(paragraph);
          });
        } else if (value && typeof value === "object") {
          const paragraph = document.createElement("p");
          paragraph.textContent = JSON.stringify(value, null, 2);
          section.appendChild(paragraph);
        } else {
          const paragraph = document.createElement("p");
          paragraph.textContent = safeText(value);
          section.appendChild(paragraph);
        }

        container.appendChild(section);
      });
    }
  }

  function initialiseSubjectLibrary() {
    const bank = getContentBank();

    const subjectSelect = $("subjectSelect");
    const chapterSelect = $("chapterSelect");
    const openButton = $("openChapterBtn");
    const chapterContainer = $("chapterContent");

    const subjects = getSubjectsFromBank(bank);

    /*
     * Keep the existing HTML subject options if the data bank
     * uses a structure that cannot be identified automatically.
     */
    if (subjects.length > 0) {
      populateSelect(subjectSelect, subjects, "Select subject");
    }

    function updateChapters() {
      const selectedSubject = subjectSelect
        ? subjectSelect.value
        : "";

      const chapters = getChaptersForSubject(bank, selectedSubject);

      populateSelect(
        chapterSelect,
        chapters,
        chapters.length ? "Select chapter" : "No chapters found"
      );

      showMessage(
        chapterContainer,
        chapters.length
          ? "Choose a chapter and tap Open Chapter."
          : "Chapter data could not be detected. The content.js structure may need a matching reader."
      );
    }

    listen(subjectSelect, "change", updateChapters);

    listen(openButton, "click", function () {
      const subject = subjectSelect ? subjectSelect.value : "";
      const chapter = chapterSelect ? chapterSelect.value : "";

      if (!subject || !chapter) {
        showMessage(
          chapterContainer,
          "Please select both a subject and a chapter."
        );
        return;
      }

      const data = getChapterData(bank, subject, chapter);
      renderChapterData(chapterContainer, data);
    });

    if (subjectSelect && subjectSelect.value) {
      updateChapters();
    }
  }

  /*
   * Expose read-only helpers for later parts.
   * Existing content.js is never modified.
   */
  Hub.getContentBank = getContentBank;
  Hub.getSubjectsFromBank = getSubjectsFromBank;
  Hub.getChaptersForSubject = getChaptersForSubject;
  Hub.getChapterData = getChapterData;
  Hub.renderChapterData = renderChapterData;
  Hub.populateSelect = populateSelect;
  Hub.showMessage = showMessage;

  function initialisePart2() {
    initialiseSubjectLibrary();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialisePart2, {
      once: true
    });
  } else {
    initialisePart2();
  }
})();
/* =====================================================
   CLASS 10 HUB — SCRIPT.JS
   PART 3: QUESTIONS, FLASHCARDS & CHAPTER QUIZ
   Append below Part 2.
===================================================== */

(function class10HubPart3() {
  "use strict";

  const Hub = window.Class10Hub;

  if (
    !Hub ||
    typeof Hub.getContentBank !== "function" ||
    typeof Hub.getChapterData !== "function"
  ) {
    console.error("Class 10 Hub: Parts 1 and 2 must load first.");
    return;
  }

  const $ = Hub.getElement;

  function listen(element, eventName, callback) {
    if (element) {
      element.addEventListener(eventName, callback);
    }
  }

  function message(container, text) {
    if (Hub.showMessage) {
      Hub.showMessage(container, text);
    } else if (container) {
      container.textContent = text;
    }
  }

  function normalise(value) {
    return String(value == null ? "" : value)
      .trim()
      .toLowerCase();
  }

  function getSelectedData(subjectId, chapterId) {
    const subject = $(subjectId);
    const chapter = $(chapterId);

    if (!subject || !chapter || !subject.value || !chapter.value) {
      return null;
    }

    return Hub.getChapterData(
      Hub.getContentBank(),
      subject.value,
      chapter.value
    );
  }

  /*
   * Convert common question objects into a consistent format.
   * Original content is read, never modified.
   */
  function normaliseItems(data) {
    if (Array.isArray(data)) {
      return data.map(function (item, index) {
        if (typeof item === "string") {
          return {
            question: item,
            answer: "",
            original: item,
            index: index
          };
        }

        if (!item || typeof item !== "object") {
          return null;
        }

        return {
          question: String(
            item.q || item.question || item.prompt || item.title || ""
          ),
          answer: String(
            item.a || item.answer || item.solution ||
            item.definition || item.explanation || ""
          ),
          options: Array.isArray(item.options) ? item.options : null,
          correct: item.correct,
          original: item,
          index: index
        };
      }).filter(function (item) {
        return item && (item.question || item.answer);
      });
    }

    if (data && typeof data === "object") {
      const items = [];

      Object.keys(data).forEach(function (key) {
        const value = data[key];

        if (Array.isArray(value)) {
          value.forEach(function (item, index) {
            if (typeof item === "string") {
              items.push({
                question: item,
                answer: "",
                original: item,
                index: index,
                category: key
              });
            } else if (item && typeof item === "object") {
              items.push({
                question: String(
                  item.q || item.question || item.prompt || item.title || ""
                ),
                answer: String(
                  item.a || item.answer || item.solution ||
                  item.definition || item.explanation || ""
                ),
                options: Array.isArray(item.options) ? item.options : null,
                correct: item.correct,
                original: item,
                index: index,
                category: key
              });
            }
          });
        }
      });

      return items.filter(function (item) {
        return item.question || item.answer;
      });
    }

    return [];
  }

  /* ---------- QUESTIONS & ANSWERS ---------- */

  let questionItems = [];
  let questionFilter = "all";

  function classifyQuestion(item) {
    const category = normalise(item.category || "");
    const original = item.original || {};
    const explicitType = normalise(
      original.type || original.category || original.length || category
    );

    if (
      explicitType.includes("very short") ||
      explicitType.includes("very-short") ||
      explicitType.includes("vsa")
    ) {
      return "very-short";
    }

    if (
      explicitType.includes("long") ||
      explicitType.includes("lsa")
    ) {
      return "long";
    }

    if (
      explicitType.includes("short") ||
      explicitType.includes("sa")
    ) {
      return "short";
    }

    return "all";
  }

  function renderQuestions() {
    const container = $("questionsList");
    if (!container) return;

    const search = normalise($("questionSearch")?.value || "");

    const filtered = questionItems.filter(function (item) {
      const text = normalise(item.question + " " + item.answer);
      const matchesSearch = !search || text.includes(search);
      const type = classifyQuestion(item);

      const matchesFilter =
        questionFilter === "all" ||
        type === questionFilter ||
        (type === "all" && questionFilter === "all");

      return matchesSearch && matchesFilter;
    });

    container.replaceChildren();

    if (filtered.length === 0) {
      message(
        container,
        questionItems.length
          ? "No questions match your search or selected filter."
          : "No question data was found for this chapter."
      );
      return;
    }

    filtered.forEach(function (item, index) {
      const card = document.createElement("article");
      card.className = "question-card";

      const heading = document.createElement("h3");
      heading.textContent =
        (index + 1) + ". " + (item.question || "Question");

      card.appendChild(heading);

      if (item.category) {
        const category = document.createElement("p");
        category.className = "muted-text";
        category.textContent = item.category;
        card.appendChild(category);
      }

      if (item.answer) {
        const details = document.createElement("details");
        const summary = document.createElement("summary");
        summary.textContent = "Show Answer";

        const answer = document.createElement("p");
        answer.textContent = item.answer;

        details.appendChild(summary);
        details.appendChild(answer);
        card.appendChild(details);
      }

      container.appendChild(card);
    });
  }

  function initialiseQuestions() {
    listen($("loadQuestionsBtn"), "click", function () {
      const data = getSelectedData("questionSubject", "questionChapter");

      if (data === null) {
        message(
          $("questionsList"),
          "Please select a subject and chapter first."
        );
        return;
      }

      questionItems = normaliseItems(data);
      renderQuestions();
    });

    listen($("questionSearch"), "input", renderQuestions);

    const filterContainer = $("questionFilters");

    listen(filterContainer, "click", function (event) {
      const button = event.target.closest("[data-filter]");
      if (!button) return;

      questionFilter = button.dataset.filter;

      filterContainer.querySelectorAll("[data-filter]").forEach(function (item) {
        item.classList.toggle("active", item === button);
      });

      renderQuestions();
    });
  }

  /* ---------- FLASHCARDS ---------- */

  let flashcards = [];
  let flashcardIndex = 0;
  let flashcardRevealed = false;

  function renderFlashcard() {
    const container = $("flashcardArea");
    const counter = $("flashcardCounter");

    if (!container) return;

    container.replaceChildren();

    if (flashcards.length === 0) {
      message(container, "Select a subject and chapter to load flashcards.");

      if (counter) counter.textContent = "No flashcards loaded";
      return;
    }

    const item = flashcards[flashcardIndex];

    const card = document.createElement("article");
    card.className = "flashcard";

    const label = document.createElement("p");
    label.className = "eyebrow";
    label.textContent = flashcardRevealed ? "ANSWER" : "QUESTION";
    card.appendChild(label);

    const content = document.createElement("h3");
    content.textContent = flashcardRevealed
      ? (item.answer || "No answer is available for this item.")
      : (item.question || "Question");
    card.appendChild(content);

    container.appendChild(card);

    const flipButton = $("flipFlashcardBtn");

    if (flipButton) {
      flipButton.textContent = flashcardRevealed
        ? "Show Question"
        : "Reveal Answer";
    }

    if (counter) {
      counter.textContent =
        "Card " + (flashcardIndex + 1) + " of " + flashcards.length;
    }
  }

  function initialiseFlashcards() {
    listen($("loadFlashcardsBtn"), "click", function () {
      const data = getSelectedData("flashcardSubject", "flashcardChapter");

      if (data === null) {
        message($("flashcardArea"), "Please select a subject and chapter first.");
        return;
      }

      flashcards = normaliseItems(data);
      flashcardIndex = 0;
      flashcardRevealed = false;
      renderFlashcard();

      if (flashcards.length === 0) {
        message(
          $("flashcardArea"),
          "No flashcard items were found for this chapter."
        );
      }
    });

    listen($("flipFlashcardBtn"), "click", function () {
      if (flashcards.length === 0) return;

      flashcardRevealed = !flashcardRevealed;
      renderFlashcard();
    });

    listen($("nextFlashcardBtn"), "click", function () {
      if (flashcards.length === 0) return;

      flashcardIndex = (flashcardIndex + 1) % flashcards.length;
      flashcardRevealed = false;
      renderFlashcard();
    });

    listen($("prevFlashcardBtn"), "click", function () {
      if (flashcards.length === 0) return;

      flashcardIndex =
        (flashcardIndex - 1 + flashcards.length) % flashcards.length;

      flashcardRevealed = false;
      renderFlashcard();
    });
  }

  /* ---------- CHAPTER QUIZ ---------- */

  let quizQuestions = [];
  let quizIndex = 0;
  let quizScore = 0;
  let quizAnswered = false;

  function renderQuiz() {
    const container = $("quizArea");
    if (!container) return;

    container.replaceChildren();

    if (quizQuestions.length === 0) {
      message(container, "Choose a subject and chapter to start a quiz.");
      return;
    }

    if (quizIndex >= quizQuestions.length) {
      const heading = document.createElement("h2");
      heading.textContent = "Quiz Complete!";
      container.appendChild(heading);

      const score = document.createElement("p");
      score.textContent =
        "Your score: " + quizScore + " / " + quizQuestions.length;
      container.appendChild(score);

      const restart = document.createElement("button");
      restart.type = "button";
      restart.className = "btn btn-primary";
      restart.textContent = "Restart Quiz";

      restart.addEventListener("click", function () {
        quizIndex = 0;
        quizScore = 0;
        quizAnswered = false;
        renderQuiz();
      });

      container.appendChild(restart);
      return;
    }

    const item = quizQuestions[quizIndex];

    const progress = document.createElement("p");
    progress.className = "muted-text";
    progress.textContent =
      "Question " + (quizIndex + 1) + " of " + quizQuestions.length;
    container.appendChild(progress);

    const heading = document.createElement("h3");
    heading.textContent = item.question;
    container.appendChild(heading);

    if (!item.options || item.options.length < 2) {
      const note = document.createElement("p");
      note.textContent =
        "This item does not contain multiple-choice options. " +
        "Use the Questions & Answers section to study it.";
      container.appendChild(note);
      return;
    }

    const optionsContainer = document.createElement("div");
    optionsContainer.className = "quiz-options";

    item.options.forEach(function (option, index) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "quiz-option";
      button.textContent = String(option);

      button.addEventListener("click", function () {
        if (quizAnswered) return;

        quizAnswered = true;

        const correctValue = item.correct;
        const isCorrect =
          String(correctValue) === String(index) ||
          normalise(correctValue) === normalise(option) ||
          String(correctValue) === String(index + 1);

        if (isCorrect) quizScore++;

        const feedback = document.createElement("p");
        feedback.className = "quiz-feedback";
        feedback.textContent = isCorrect
          ? "Correct!"
          : "Not quite. Review the answer in your study material.";

        container.appendChild(feedback);

        const nextButton = document.createElement("button");
        nextButton.type = "button";
        nextButton.className = "btn btn-primary";
        nextButton.textContent =
          quizIndex === quizQuestions.length - 1
            ? "See Results"
            : "Next Question";

        nextButton.addEventListener("click", function () {
          quizIndex++;
          quizAnswered = false;
          renderQuiz();
        });

        container.appendChild(nextButton);

        optionsContainer.querySelectorAll("button").forEach(function (optionButton) {
          optionButton.disabled = true;
        });
      });

      optionsContainer.appendChild(button);
    });

    container.appendChild(optionsContainer);
  }

  function initialiseQuiz() {
    listen($("startQuizBtn"), "click", function () {
      const data = getSelectedData("quizSubject", "quizChapter");

      if (data === null) {
        message($("quizArea"), "Please select a subject and chapter first.");
        return;
      }

      quizQuestions = normaliseItems(data).filter(function (item) {
        return item.options && item.options.length >= 2;
      });

      quizIndex = 0;
      quizScore = 0;
      quizAnswered = false;

      if (quizQuestions.length === 0) {
        message(
          $("quizArea"),
          "No multiple-choice questions with options were detected for this chapter."
        );
        return;
      }

      renderQuiz();
    });
  }

  /* ---------- INITIALISE PART 3 ---------- */

  function initialisePart3() {
    initialiseQuestions();
    initialiseFlashcards();
    initialiseQuiz();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialisePart3, {
      once: true
    });
  } else {
    initialisePart3();
  }
})();
/* =====================================================
   CLASS 10 HUB — SCRIPT.JS — PART 4
   Notes, Mock Test, Mini Games, Infographics & Reset
   Keep content.js unchanged.
===================================================== */

(function () {
  "use strict";

  const Hub = window.Class10Hub;
  if (!Hub) {
    console.error("Class10Hub missing. Add Parts 1–3 before Part 4.");
    return;
  }

  const $ = (id) => document.getElementById(id);

  function readJSON(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch (error) {
      return fallback;
    }
  }

  function saveJSON(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      return false;
    }
  }

  function message(area, text) {
    if (!area) return;
    area.replaceChildren();
    const p = document.createElement("p");
    p.textContent = text;
    area.appendChild(p);
  }

  function makeButton(text, action) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = text;
    button.addEventListener("click", action);
    return button;
  }

  function normalizeQuestions(data) {
    if (!data) return [];

    if (Array.isArray(data)) {
      return data.map((item) => {
        if (typeof item === "string") {
          return { question: item, answer: "" };
        }

        return {
          question:
            item.question || item.q || item.questionText || item.text || "",
          answer:
            item.answer || item.a || item.answerText || item.explanation || "",
          options: Array.isArray(item.options) ? item.options : [],
          correct:
            item.correct ?? item.correctAnswer ?? item.answerIndex ?? null
        };
      }).filter((item) => item.question);
    }

    if (typeof data === "object") {
      return Object.entries(data).map(([question, answer]) => ({
        question,
        answer:
          typeof answer === "string"
            ? answer
            : answer?.answer || answer?.a || answer?.explanation || "",
        options: Array.isArray(answer?.options) ? answer.options : [],
        correct:
          answer?.correct ?? answer?.correctAnswer ?? answer?.answerIndex ?? null
      }));
    }

    return [];
  }

  function getSelectedChapterData(subjectSelectId, chapterSelectId) {
    const subject = $(subjectSelectId)?.value;
    const chapter = $(chapterSelectId)?.value;

    if (!subject || !chapter) return null;

    try {
      return Hub.getChapterData(subject, chapter);
    } catch (error) {
      return null;
    }
  }

  /* =========================
     MY NOTES
  ========================= */

  const NOTES_KEY = "class10hub-notes";

  function renderNotes() {
    const list = $("notesList");
    if (!list) return;

    const notes = readJSON(NOTES_KEY, []);
    list.replaceChildren();

    if (!notes.length) {
      message(list, "No saved notes yet. Create your first note above.");
      return;
    }

    notes.slice().reverse().forEach((note) => {
      const card = document.createElement("article");
      card.className = "note-card";

      const heading = document.createElement("h3");
      heading.textContent = note.title || "Untitled note";

      const content = document.createElement("p");
      content.textContent = note.content || "";
      content.style.whiteSpace = "pre-wrap";

      const date = document.createElement("small");
      date.textContent = note.date || "";

      const edit = makeButton("Edit", () => {
        if ($("noteTitle")) $("noteTitle").value = note.title || "";
        if ($("noteContent")) $("noteContent").value = note.content || "";
        if ($("saveNoteBtn")) {
          $("saveNoteBtn").dataset.editId = String(note.id);
          $("saveNoteBtn").textContent = "Update Note";
        }
        $("noteTitle")?.focus();
      });

      const remove = makeButton("Delete", () => {
        if (!confirm("Delete this note?")) return;
        const updated = readJSON(NOTES_KEY, [])
          .filter((item) => item.id !== note.id);
        saveJSON(NOTES_KEY, updated);
        renderNotes();
      });

      card.append(heading, content, date, edit, remove);
      list.appendChild(card);
    });
  }

  function initNotes() {
    const saveButton = $("saveNoteBtn");
    if (!saveButton) return;

    saveButton.addEventListener("click", () => {
      const titleInput = $("noteTitle");
      const contentInput = $("noteContent");

      const title = titleInput?.value.trim() || "";
      const content = contentInput?.value.trim() || "";

      if (!title && !content) {
        alert("Please enter a note title or note content.");
        return;
      }

      const notes = readJSON(NOTES_KEY, []);
      const editId = saveButton.dataset.editId;

      if (editId) {
        const index = notes.findIndex(
          (note) => String(note.id) === editId
        );

        if (index !== -1) {
          notes[index].title = title || "Untitled note";
          notes[index].content = content;
          notes[index].date = new Date().toLocaleString();
        }

        delete saveButton.dataset.editId;
        saveButton.textContent = "Save Note";
      } else {
        notes.push({
          id: Date.now(),
          title: title || "Untitled note",
          content,
          date: new Date().toLocaleString()
        });
      }

      if (!saveJSON(NOTES_KEY, notes)) {
        alert("Could not save. Your browser storage may be full or disabled.");
        return;
      }

      if (titleInput) titleInput.value = "";
      if (contentInput) contentInput.value = "";

      renderNotes();
      alert("Note saved on this device.");
    });

    $("clearNoteBtn")?.addEventListener("click", () => {
      if ($("noteTitle")) $("noteTitle").value = "";
      if ($("noteContent")) $("noteContent").value = "";
      delete saveButton.dataset.editId;
      saveButton.textContent = "Save Note";
    });

    renderNotes();
  }

  /* =========================
     MOCK TEST
  ========================= */

  function initMockTest() {
    const startButton = $("startMockBtn");
    const area = $("mockArea");

    if (!startButton || !area) return;

    startButton.addEventListener("click", () => {
      const subject = $("mockSubject")?.value;
      if (!subject) {
        message(area, "Please select a subject first.");
        return;
      }

      const bank = Hub.getContentBank();
      const chapters = Hub.getChaptersForSubject(subject) || [];
      let questions = [];

      chapters.forEach((chapter) => {
        const data = Hub.getChapterData(subject, chapter);
        questions = questions.concat(normalizeQuestions(data));
      });

      questions = questions.filter((q) => q.question);

      if (!questions.length) {
        message(
          area,
          "No mock-test questions were found for this subject. Check whether content.js exposes the question bank in a supported format."
        );
        return;
      }

      const mcqs = questions.filter(
        (q) => Array.isArray(q.options) && q.options.length >= 2
      );

      if (!mcqs.length) {
        message(
          area,
          "Questions were found, but no MCQs with options were detected. This mock test needs MCQ data in content.js."
        );
        return;
      }

      const selected = mcqs.slice()
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.min(80, mcqs.length));

      area.replaceChildren();

      const heading = document.createElement("h2");
      heading.textContent = subject + " Mock Test";

      const info = document.createElement("p");
      info.textContent =
        "Questions available in this test: " + selected.length;

      const form = document.createElement("form");
      const questionElements = [];

      selected.forEach((q, index) => {
        const field = document.createElement("fieldset");
        const legend = document.createElement("legend");
        legend.textContent = (index + 1) + ". " + q.question;
        field.appendChild(legend);

        q.options.forEach((option, optionIndex) => {
          const label = document.createElement("label");
          label.style.display = "block";

          const input = document.createElement("input");
          input.type = "radio";
          input.name = "mock-question-" + index;
          input.value = String(optionIndex);

          const text = document.createElement("span");
          text.textContent = " " + (
            typeof option === "object"
              ? option.text || option.label || option.answer || ""
              : option
          );

          label.append(input, text);
          field.appendChild(label);
        });

        form.appendChild(field);
        questionElements.push({ question: q, field });
      });

      const submit = document.createElement("button");
      submit.type = "submit";
      submit.textContent = "Submit Test";
      form.appendChild(submit);

      form.addEventListener("submit", (event) => {
        event.preventDefault();

        let score = 0;
        let checkedCount = 0;

        questionElements.forEach(({ question, field }, index) => {
          const chosen = form.querySelector(
            'input[name="mock-question-' + index + '"]:checked'
          );

          if (chosen) checkedCount++;

          let correct = question.correct;

          if (typeof correct === "string") {
            const matchingOption = question.options.findIndex(
              (option) =>
                String(
                  typeof option === "object"
                    ? option.text || option.label || option.answer || ""
                    : option
                ) === correct
            );

            if (matchingOption !== -1) correct = matchingOption;
          }

          if (
            chosen &&
            correct !== null &&
            correct !== undefined &&
            Number(chosen.value) === Number(correct)
          ) {
            score++;
          }
        });

        const result = document.createElement("h3");
        result.textContent =
          "Score: " + score + " / " + selected.length;

        const attempted = document.createElement("p");
        attempted.textContent =
          "Attempted: " + checkedCount + " / " + selected.length;

        const note = document.createElement("p");
        note.textContent =
          "Score is calculated only when the correct-answer data is available in the question bank.";

        area.replaceChildren(result, attempted, note);
      });

      area.append(heading, info, form);
    });
  }

  /* =========================
     MINI GAMES
  ========================= */

  function collectStudyWords() {
    const subjects = Hub.getSubjectsFromBank() || [];
    const words = [];

    subjects.forEach((subject) => {
      const chapters = Hub.getChaptersForSubject(subject) || [];

      chapters.forEach((chapter) => {
        const data = Hub.getChapterData(subject, chapter);
        normalizeQuestions(data).forEach((item) => {
          if (item.question && item.answer) {
            words.push({
              question: item.question,
              answer: item.answer
            });
          }
        });
      });
    });

    return words;
  }

  function initRecallGame() {
    const start = $("recallStartBtn");
    const area = $("recallArea");
    if (!start || !area) return;

    let cards = [];
    let index = 0;

    function showCard() {
      area.replaceChildren();

      if (!cards.length) {
        message(area, "No question-answer cards were found in the available content.");
        return;
      }

      const item = cards[index];
      const question = document.createElement("h3");
      question.textContent = item.question;

      const answer = document.createElement("p");
      answer.textContent = item.answer;
      answer.hidden = true;

      const reveal = makeButton("Reveal Answer", () => {
        answer.hidden = false;
      });

      const next = makeButton("Next Question", () => {
        index = (index + 1) % cards.length;
        showCard();
      });

      const count = document.createElement("small");
      count.textContent = "Card " + (index + 1) + " of " + cards.length;

      area.append(question, answer, reveal, next, count);
    }

    start.addEventListener("click", () => {
      cards = collectStudyWords()
        .sort(() => Math.random() - 0.5);
      index = 0;
      showCard();
    });
  }

  function initScrambleGame() {
    const start = $("scrambleStartBtn");
    const area = $("scrambleArea");
    if (!start || !area) return;

    let answer = "";

    start.addEventListener("click", () => {
      const words = collectStudyWords();
      const usable = words.filter((item) =>
        /^[a-zA-Z ]+$/.test(item.answer) &&
        item.answer.trim().length >= 4 &&
        item.answer.trim().length <= 24
      );

      if (!usable.length) {
        message(
          area,
          "No suitable English answers were found for the word-scramble game."
        );
        return;
      }

      const item = usable[Math.floor(Math.random() * usable.length)];
      answer = item.answer.trim();

      const letters = answer.split("");
      const original = answer.toLowerCase();

      for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
      }

      if (letters.join("").toLowerCase() === original) {
        letters.reverse();
      }

      area.replaceChildren();

      const prompt = document.createElement("p");
      prompt.textContent = "Unscramble this answer: " + letters.join("");

      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = "Type your answer";

      const check = makeButton("Check Answer", () => {
        const result = document.createElement("p");

        if (
          input.value.trim().toLowerCase() ===
          answer.toLowerCase()
        ) {
          result.textContent = "Correct! Well done.";
        } else {
          result.textContent = "Not quite. Try again.";
        }

        const previous = area.querySelector(".scramble-result");
        if (previous) previous.remove();

        result.className = "scramble-result";
        area.appendChild(result);
      });

      area.append(prompt, input, check);
    });
  }

  /* =========================
     INFOGRAPHICS
  ========================= */

  function initInfographics() {
    const subjectSelect = $("infographicSubject");
    const gallery = $("infographicGallery");
    if (!gallery) return;

    function renderGallery() {
      const subject = subjectSelect?.value || "";
      const possibleBanks = [
        window.infographicBank,
        window.infographics,
        window.class10Infographics
      ];

      let entries = [];

      possibleBanks.forEach((bank) => {
        if (!bank || typeof bank !== "object") return;

        const selected = subject && bank[subject]
          ? bank[subject]
          : bank;

        if (Array.isArray(selected)) {
          entries = entries.concat(selected);
        }
      });

      gallery.replaceChildren();

      if (!entries.length) {
        message(
          gallery,
          "No inbuilt infographic data was detected. This section will need infographic entries in the existing content structure or image files referenced by your site."
        );
        return;
      }

      entries.forEach((item) => {
        const card = document.createElement("article");
        card.className = "infographic-card";

        const title = document.createElement("h3");
        title.textContent = item.title || item.name || "Study Infographic";
        card.appendChild(title);

        if (item.image || item.src || item.url) {
          const img = document.createElement("img");
          img.src = item.image || item.src || item.url;
          img.alt = item.title || item.name || "Study infographic";
          img.loading = "lazy";
          img.style.maxWidth = "100%";
          card.appendChild(img);
        }

        if (item.description || item.caption) {
          const caption = document.createElement("p");
          caption.textContent = item.description || item.caption;
          card.appendChild(caption);
        }

        gallery.appendChild(card);
      });
    }

    subjectSelect?.addEventListener("change", renderGallery);
    renderGallery();
  }

  /* =========================
     RESET & PROGRESS
  ========================= */

  function initResetButtons() {
    $("resetData")?.addEventListener("click", () => {
      const confirmed = confirm(
        "Reset Class 10 Hub saved data, notes, preferences and progress on this device? This cannot be undone."
      );

      if (!confirmed) return;

      try {
        const keys = [];

        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && key.startsWith("class10hub-")) {
            keys.push(key);
          }
        }

        keys.forEach((key) => localStorage.removeItem(key));
      } catch (error) {
        alert("Browser storage could not be reset.");
        return;
      }

      alert("Class 10 Hub saved data has been reset. The page will reload.");
      location.reload();
    });

    $("resetProgressBtn")?.addEventListener("click", () => {
      if (!confirm("Reset saved study progress? Your notes will be kept.")) {
        return;
      }

      try {
        [
          "class10hub-progress",
          "class10hub-completed-activities",
          "class10hub-quiz-results",
          "class10hub-mock-results"
        ].forEach((key) => localStorage.removeItem(key));

        alert("Study progress reset. Your notes have been kept.");
      } catch (error) {
        alert("Could not reset progress.");
      }
    });
  }

  /* =========================
     START PART 4 FEATURES
  ========================= */

  function initPart4() {
    initNotes();
    initMockTest();
    initRecallGame();
    initScrambleGame();
    initInfographics();
    initResetButtons();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPart4, { once: true });
  } else {
    initPart4();
  }
})();
