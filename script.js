"use strict";

/* =========================================
   CLASS 10 HUB — CORE SCRIPT
   Navigation, themes, notes, bookmarks,
   settings, local storage and utilities
========================================= */

(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) =>
    Array.from(root.querySelectorAll(selector));

  const STORAGE = {
    settings: "class10hub_settings",
    notes: "class10hub_notes",
    bookmarks: "class10hub_bookmarks",
    progress: "class10hub_progress",
    history: "class10hub_quiz_history",
    completed: "class10hub_completed_chapters"
  };

  const defaults = {
    theme: "dark",
    textSize: "normal",
    motion: "on",
    festival: "off"
  };

  function readData(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch (error) {
      console.warn("Could not read saved data:", key, error);
      return fallback;
    }
  }

  function saveData(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      showToast("Could not save data. Device storage may be full.");
      console.error(error);
      return false;
    }
  }

  let settings = {
    ...defaults,
    ...readData(STORAGE.settings, {})
  };

  let notes = readData(STORAGE.notes, []);
  let bookmarks = readData(STORAGE.bookmarks, []);
  let progress = readData(STORAGE.progress, {});
  let history = readData(STORAGE.history, []);
  let completed = readData(STORAGE.completed, []);

  let currentPage = "home";
  let editingNoteId = null;

  /* ---------- Toast messages ---------- */

  let toastTimer;

  function showToast(message) {
    const toast = $("#toast");
    if (!toast) return;

    toast.textContent = String(message);
    toast.classList.add("show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2600);
  }

  /* ---------- Navigation ---------- */

  const pageTitles = {
    home: "Dashboard",
    subjects: "Subject Library",
    flashcards: "Flashcards",
    quiz: "Chapter Quiz",
    mock: "80 MCQ Mock Test",
    infographics: "Infographic Notes",
    notes: "My Notes",
    bookmarks: "Bookmarks",
    games: "Mini Games",
    progress: "My Progress",
    settings: "Settings",
    about: "About & Help"
  };

  function navigate(page) {
    const target = $("#page-" + page);

    if (!target) {
      showToast("This page is not available.");
      return;
    }

    currentPage = page;

    $$(".page").forEach(section => {
      section.classList.toggle("active", section.id === "page-" + page);
    });

    $$("[data-page]").forEach(button => {
      button.classList.toggle(
        "active",
        button.dataset.page === page &&
        button.classList.contains("nav-item")
      );
    });

    const title = $("#pageTitle");
    if (title) title.textContent = pageTitles[page] || "Class 10 Hub";

    closeMobileMenu();

    if (page === "notes") renderNotes();
    if (page === "bookmarks") renderBookmarks();
    if (page === "progress") renderProgress();
    if (page === "settings") syncSettingsControls();

    window.scrollTo({ top: 0, behavior: settings.motion === "off" ? "auto" : "smooth" });
  }

  document.addEventListener("click", event => {
    const button = event.target.closest("[data-page]");
    if (!button) return;

    event.preventDefault();
    navigate(button.dataset.page);
  });

  /* ---------- Responsive sidebar ---------- */

  const menuToggle = $("#menuToggle");
  const sidebar = $("#sidebar");
  const appShell = $(".app-shell");

  function closeMobileMenu() {
    if (window.innerWidth <= 1050) {
      if (sidebar) sidebar.classList.remove("is-open");
      if (appShell) appShell.classList.remove("menu-open");
      if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
    }
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      if (window.innerWidth <= 1050) {
        const isOpen = sidebar?.classList.toggle("is-open") || false;
        if (appShell) appShell.classList.toggle("menu-open", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
      } else {
        const collapsed = appShell?.classList.toggle("sidebar-collapsed") || false;
        if (sidebar) sidebar.classList.toggle("is-collapsed", collapsed);
        menuToggle.setAttribute("aria-expanded", String(!collapsed));
      }
    });
  }

  document.addEventListener("click", event => {
    if (window.innerWidth > 1050 || !sidebar?.classList.contains("is-open")) return;
    if (sidebar.contains(event.target) || menuToggle?.contains(event.target)) return;
    closeMobileMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1050) closeMobileMenu();
  });

  /* ---------- Theme and appearance ---------- */

  function applyTheme() {
    let theme = settings.theme;

    if (theme === "system") {
      theme = window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
    }

    document.documentElement.dataset.theme = theme;
    document.body.classList.toggle("light-theme", theme === "light");
    document.body.classList.toggle("dark-theme", theme === "dark");

    document.documentElement.style.colorScheme = theme;

    const themeButton = $("#themeToggle");
    if (themeButton) {
      themeButton.textContent = theme === "light" ? "☀" : "◐";
      themeButton.setAttribute(
        "aria-label",
        theme === "light" ? "Switch to dark mode" : "Switch to light mode"
      );
    }

    applyTextSize();
  }

  function applyTextSize() {
    document.documentElement.classList.remove(
      "text-normal",
      "text-large",
      "text-xlarge"
    );

    document.documentElement.classList.add(
      "text-" + (settings.textSize || "normal")
    );

    document.body.classList.toggle(
      "reduce-motion",
      settings.motion === "off"
    );
  }

  function saveSettings() {
    saveData(STORAGE.settings, settings);
    applyTheme();
    syncSettingsControls();
  }

  const themeToggle = $("#themeToggle");

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      settings.theme = settings.theme === "light" ? "dark" : "light";
      saveSettings();
      showToast("Appearance updated.");
    });
  }

  const themeSelect = $("#themeSelect");
  const textSize = $("#textSize");
  const motionSelect = $("#motionSelect");

  if (themeSelect) {
    themeSelect.addEventListener("change", () => {
      settings.theme = themeSelect.value;
      saveSettings();
      showToast("Theme saved.");
    });
  }

  if (textSize) {
    textSize.addEventListener("change", () => {
      settings.textSize = textSize.value;
      saveSettings();
      showToast("Text size updated.");
    });
  }

  if (motionSelect) {
    motionSelect.addEventListener("change", () => {
      settings.motion = motionSelect.value;
      saveSettings();
      showToast("Animation preference saved.");
    });
  }

  function syncSettingsControls() {
    if (themeSelect) themeSelect.value = settings.theme;
    if (textSize) textSize.value = settings.textSize;
    if (motionSelect) motionSelect.value = settings.motion;

    const diwali = $("#diwaliSetting");
    const christmas = $("#christmasSetting");

    if (diwali) diwali.value = settings.festival === "diwali" ? "on" : "off";
    if (christmas) christmas.value = settings.festival === "christmas" ? "on" : "off";
  }

  /* ---------- Festival appearances ---------- */

  function removeFestivalEffects() {
    $$(".festival-effects").forEach(element => element.remove());

    document.body.classList.remove(
      "festival-diwali",
      "festival-christmas"
    );
  }

  function makeFestivalEffects(type) {
    removeFestivalEffects();

    if (type === "off") return;

    document.body.classList.add("festival-" + type);

    const effects = document.createElement("div");
    effects.className = "festival-effects";
    effects.setAttribute("aria-hidden", "true");

    if (type === "diwali") {
      for (let i = 0; i < 12; i++) {
        const light = document.createElement("span");
        light.className = "diwali-light";
        light.style.left = (i * 8.5) + "%";
        light.style.animationDelay = (i * 0.13) + "s";
        effects.appendChild(light);
      }

      for (let i = 0; i < 5; i++) {
        const diya = document.createElement("span");
        diya.className = "festival-diya";
        diya.textContent = "🪔";
        diya.style.left = (8 + i * 21) + "%";
        diya.style.animationDelay = (i * 0.25) + "s";
        effects.appendChild(diya);
      }
    }

    if (type === "christmas") {
      for (let i = 0; i < 32; i++) {
        const snow = document.createElement("span");
        snow.className = "christmas-snow";
        snow.textContent = "❄";
        snow.style.left = Math.random() * 100 + "%";
        snow.style.animationDuration = (5 + Math.random() * 8) + "s";
        snow.style.animationDelay = (-Math.random() * 10) + "s";
        snow.style.opacity = String(0.3 + Math.random() * 0.6);
        effects.appendChild(snow);
      }
    }

    document.body.appendChild(effects);
  }

  function setFestival(type) {
    settings.festival = settings.festival === type ? "off" : type;
    saveData(STORAGE.settings, settings);
    makeFestivalEffects(settings.festival);
    syncSettingsControls();

    showToast(
      settings.festival === "off"
        ? "Festival appearance turned off."
        : type === "diwali"
          ? "Diwali appearance enabled."
          : "Christmas appearance enabled."
    );
  }

  $$("[data-festival]").forEach(button => {
    button.addEventListener("click", () => {
      setFestival(button.dataset.festival);
    });
  });

  const diwaliSetting = $("#diwaliSetting");
  const christmasSetting = $("#christmasSetting");

  if (diwaliSetting) {
    diwaliSetting.addEventListener("change", () => {
      settings.festival = diwaliSetting.value === "on" ? "diwali" : "off";
      saveData(STORAGE.settings, settings);
      makeFestivalEffects(settings.festival);
      syncSettingsControls();
    });
  }

  if (christmasSetting) {
    christmasSetting.addEventListener("change", () => {
      settings.festival = christmasSetting.value === "on" ? "christmas" : "off";
      saveData(STORAGE.settings, settings);
      makeFestivalEffects(settings.festival);
      syncSettingsControls();
    });
  }

  /* ---------- Notes ---------- */

  const noteTitle = $("#noteTitle");
  const noteBody = $("#noteBody");
  const saveNoteButton = $("#saveNote");

  function renderNotes() {
    const list = $("#notesList");
    if (!list) return;

    list.replaceChildren();

    if (!notes.length) {
      const empty = document.createElement("div");
      empty.className = "content-panel";
      empty.textContent = "No notes yet. Create your first revision note above.";
      list.appendChild(empty);
      updateStats();
      return;
    }

    notes.slice().reverse().forEach(note => {
      const card = document.createElement("article");
      card.className = "content-panel note-card";

      const heading = document.createElement("h3");
      heading.textContent = note.title || "Untitled note";

      const body = document.createElement("p");
      body.textContent = note.body || "";
      body.style.whiteSpace = "pre-wrap";

      const date = document.createElement("small");
      date.className = "muted";
      date.textContent = note.updatedAt
        ? "Updated: " + new Date(note.updatedAt).toLocaleString()
        : "";

      const actions = document.createElement("div");
      actions.className = "button-row";

      const edit = document.createElement("button");
      edit.className = "secondary-btn";
      edit.textContent = "Edit";
      edit.addEventListener("click", () => {
        editingNoteId = note.id;
        if (noteTitle) noteTitle.value = note.title;
        if (noteBody) noteBody.value = note.body;
        noteTitle?.focus();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      const remove = document.createElement("button");
      remove.className = "danger-btn";
      remove.textContent = "Delete";
      remove.addEventListener("click", () => {
        if (!confirm("Delete this note?")) return;
        notes = notes.filter(item => item.id !== note.id);
        saveData(STORAGE.notes, notes);
        renderNotes();
        showToast("Note deleted.");
      });

      actions.append(edit, remove);
      card.append(heading, body, date, actions);
      list.appendChild(card);
    });

    updateStats();
  }

  if (saveNoteButton) {
    saveNoteButton.addEventListener("click", () => {
      const title = noteTitle?.value.trim() || "";
      const body = noteBody?.value.trim() || "";

      if (!title && !body) {
        showToast("Write a title or some note content first.");
        return;
      }

      const now = new Date().toISOString();

      if (editingNoteId !== null) {
        notes = notes.map(note =>
          note.id === editingNoteId
            ? { ...note, title: title || "Untitled note", body, updatedAt: now }
            : note
        );
      } else {
        notes.push({
          id: Date.now(),
          title: title || "Untitled note",
          body,
          createdAt: now,
          updatedAt: now
        });
      }

      if (!saveData(STORAGE.notes, notes)) return;

      editingNoteId = null;
      if (noteTitle) noteTitle.value = "";
      if (noteBody) noteBody.value = "";

      renderNotes();
      showToast("Note saved on this device.");
    });
  }

  /* ---------- Bookmarks ---------- */

  function renderBookmarks() {
    const container = $("#bookmarksList");
    if (!container) return;

    container.replaceChildren();

    if (!bookmarks.length) {
      const empty = document.createElement("p");
      empty.textContent = "No bookmarks yet.";
      container.appendChild(empty);
      updateStats();
      return;
    }

    bookmarks.forEach((item, index) => {
      const card = document.createElement("article");
      card.className = "bookmark-item";

      const title = document.createElement("h3");
      title.textContent = item.title || "Saved item";

      const description = document.createElement("p");
      description.textContent = item.text || item.chapter || "";

      const remove = document.createElement("button");
      remove.className = "danger-btn";
      remove.textContent = "Remove bookmark";
      remove.addEventListener("click", () => {
        bookmarks.splice(index, 1);
        saveData(STORAGE.bookmarks, bookmarks);
        renderBookmarks();
        showToast("Bookmark removed.");
      });

      card.append(title, description, remove);
      container.appendChild(card);
    });

    updateStats();
  }

  function addBookmark(item) {
    const key = JSON.stringify(item);

    if (bookmarks.some(saved => JSON.stringify(saved) === key)) {
      showToast("Already bookmarked.");
      return;
    }

    bookmarks.push(item);
    saveData(STORAGE.bookmarks, bookmarks);
    updateStats();
    showToast("Added to bookmarks.");
  }

  /* ---------- Dashboard stats ---------- */

  function updateStats() {
    const chaptersStat = $("#statChapters");
    const quizzesStat = $("#statQuizzes");
    const notesStat = $("#statNotes");
    const bookmarksStat = $("#statBookmarks");

    if (chaptersStat) chaptersStat.textContent = completed.length;
    if (quizzesStat) quizzesStat.textContent = history.length;
    if (notesStat) notesStat.textContent = notes.length;
    if (bookmarksStat) bookmarksStat.textContent = bookmarks.length;
  }

  /* ---------- Progress page ---------- */

  function renderProgress() {
    const area = $("#progressArea");
    const historyList = $("#historyList");

    if (area) {
      area.replaceChildren();

      const cards = [
        ["Completed chapters", completed.length],
        ["Quiz attempts", history.length],
        ["Saved notes", notes.length],
        ["Bookmarks", bookmarks.length]
      ];

      cards.forEach(([label, value]) => {
        const card = document.createElement("article");
        card.className = "stat-card";

        const name = document.createElement("span");
        name.textContent = label;

        const number = document.createElement("strong");
        number.textContent = value;

        card.append(name, number);
        area.appendChild(card);
      });
    }

    if (historyList) {
      historyList.replaceChildren();

      if (!history.length) {
        historyList.textContent = "No quiz attempts recorded yet.";
      } else {
        history.slice().reverse().slice(0, 20).forEach(attempt => {
          const row = document.createElement("p");
          row.textContent =
            `${attempt.title || "Quiz"} — ${attempt.score}/${attempt.total} — ` +
            `${new Date(attempt.date).toLocaleDateString()}`;
          historyList.appendChild(row);
        });
      }
    }
  }

  /* ---------- Export saved data ---------- */

  const exportButton = $("#exportData");

  if (exportButton) {
    exportButton.addEventListener("click", () => {
      const exportObject = {
        exportedAt: new Date().toISOString(),
        settings,
        notes,
        bookmarks,
        progress,
        history,
        completed
      };

      const blob = new Blob(
        [JSON.stringify(exportObject, null, 2)],
        { type: "application/json" }
      );

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "class-10-hub-data.json";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);

      showToast("Data export started.");
    });
  }

  /* ---------- Reset local data ---------- */

  const resetButton = $("#resetData");

  if (resetButton) {
    resetButton.addEventListener("click", () => {
      const confirmed = confirm(
        "Reset all saved notes, bookmarks, settings and progress on this device? This cannot be undone."
      );

      if (!confirmed) return;

      Object.values(STORAGE).forEach(key => localStorage.removeItem(key));

      notes = [];
      bookmarks = [];
      progress = {};
      history = [];
      completed = [];
      settings = { ...defaults };
      editingNoteId = null;

      if (noteTitle) noteTitle.value = "";
      if (noteBody) noteBody.value = "";

      removeFestivalEffects();
      applyTheme();
      syncSettingsControls();
      renderNotes();
      renderBookmarks();
      renderProgress();
      updateStats();

      showToast("Saved website data has been reset.");
    });
  }

  /* ---------- Initialise ---------- */

  function initialise() {
    applyTheme();
    makeFestivalEffects(settings.festival);
    syncSettingsControls();
    updateStats();
    renderNotes();
    renderBookmarks();

    if (!$("#page-" + currentPage)) navigate("home");

    console.info("Class 10 Hub core script loaded.");
  }

  initialise();

  /* Expose helpers for the study-content module. */
  window.Class10Hub = {
    navigate,
    showToast,
    readData,
    saveData,
    addBookmark,
    renderBookmarks,
    renderProgress,
    updateStats,
    getSettings: () => ({ ...settings }),
    getProgress: () => ({ ...progress }),
    setProgress: value => {
      progress = value;
      saveData(STORAGE.progress, progress);
    },
    markChapterComplete: chapterKey => {
      if (!completed.includes(chapterKey)) {
        completed.push(chapterKey);
        saveData(STORAGE.completed, completed);
        updateStats();
      }
    },
    recordQuiz: attempt => {
      history.push({
        ...attempt,
        date: new Date().toISOString()
      });
      saveData(STORAGE.history, history);
      updateStats();
      renderProgress();
    }
  };
})();

/* =========================================================
   CLASS 10 HUB — SCRIPT.JS PART 2
   Subjects • Chapters • Q&A • Flashcards • Quiz • Bookmarks
   Requires content.js and Part 1 of script.js
========================================================= */

(() => {
  "use strict";

  const DB = window.CLASS10_CONTENT;
  const HUB = window.Class10Hub;

  if (!DB || !HUB) {
    console.error(
      "Class 10 Hub: content.js or script.js Part 1 is missing."
    );
    return;
  }

  const $ = (selector, root = document) =>
    root.querySelector(selector);

  const $$ = (selector, root = document) =>
    [...root.querySelectorAll(selector)];

  const esc = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);

  const shuffle = (items) => {
    const result = [...items];

    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
  };

  const normalize = (value) =>
    String(value ?? "").trim().toLowerCase();

  function getSubjects() {
    return Array.isArray(DB.subjects) ? DB.subjects : [];
  }

  function getSubjectId(subject) {
    return subject?.id || subject?.subjectId || "";
  }

  function getSubjectName(subject) {
    return subject?.name || subject?.title || getSubjectId(subject);
  }

  function getChapters(subjectId) {
    if (typeof DB.getChapters === "function") {
      const result = DB.getChapters(subjectId);
      if (Array.isArray(result)) return result;
    }

    const subject = getSubjects().find(
      (item) => getSubjectId(item) === subjectId
    );

    if (Array.isArray(subject?.chapters)) {
      return subject.chapters;
    }

    return [];
  }

  function getChapterName(chapter) {
    if (typeof chapter === "string") return chapter;

    return chapter?.name ||
      chapter?.title ||
      chapter?.chapter ||
      "";
  }

  function getChapterData(subjectId, chapterName) {
    if (typeof DB.getChapterContent === "function") {
      const data = DB.getChapterContent(subjectId, chapterName);
      if (data) return data;
    }

    const store = DB.chapterContent || {};
    const exactKey = `${subjectId}::${chapterName}`;

    if (store[exactKey]) return store[exactKey];

    const matchingKey = Object.keys(store).find((key) => {
      const parts = key.split("::");

      return normalize(parts[0]) === normalize(subjectId) &&
        normalize(parts.slice(1).join("::")) === normalize(chapterName);
    });

    return matchingKey ? store[matchingKey] : null;
  }

  function getSelectedSubject(selectId) {
    return $(selectId)?.value || "";
  }

  function populateSubjectSelect(select, includeAll = false) {
    if (!select) return;

    const previous = select.value;
    const subjects = getSubjects();

    select.innerHTML = [
      includeAll
        ? '<option value="all">All subjects</option>'
        : '<option value="">Select subject</option>',
      ...subjects.map((subject) => {
        const id = getSubjectId(subject);
        return `<option value="${esc(id)}">${esc(getSubjectName(subject))}</option>`;
      })
    ].join("");

    if (
      previous &&
      [...select.options].some((option) => option.value === previous)
    ) {
      select.value = previous;
    }
  }

  function populateChapterSelect(subjectSelect, chapterSelect) {
    if (!subjectSelect || !chapterSelect) return;

    const subjectId = subjectSelect.value;
    const chapters = getChapters(subjectId);

    chapterSelect.innerHTML = [
      '<option value="">Select chapter</option>',
      ...chapters.map((chapter) => {
        const name = getChapterName(chapter);

        return `<option value="${esc(name)}">${esc(name)}</option>`;
      })
    ].join("");

    chapterSelect.disabled = !subjectId || chapters.length === 0;
  }

  function showMessage(container, message) {
    if (!container) return;

    container.innerHTML = `
      <div class="content-panel">
        <p>${esc(message)}</p>
      </div>
    `;
  }

  /* ---------------------------------------------------------
     SUBJECT LIBRARY
  --------------------------------------------------------- */

  function renderSubjectCards() {
    const grid = $("#subjectGrid");
    if (!grid) return;

    const subjects = getSubjects();

    if (!subjects.length) {
      showMessage(grid, "Subject data is not available in content.js.");
      return;
    }

    const icons = {
      maths: "∑",
      mathematics: "∑",
      science: "⚗",
      "social-science": "🌍",
      english: "A",
      hindi: "अ",
      it: "⌘"
    };

    grid.innerHTML = subjects.map((subject) => {
      const id = getSubjectId(subject);
      const name = getSubjectName(subject);
      const count = getChapters(id).length;
      const icon = icons[normalize(id)] || "📘";

      return `
        <button
          type="button"
          class="subject-card"
          data-open-subject="${esc(id)}"
          aria-label="Open ${esc(name)}"
        >
          <span class="subject-icon">${icon}</span>
          <span class="subject-card-title">${esc(name)}</span>
          <span class="subject-card-meta">
            ${count} chapter${count === 1 ? "" : "s"}
          </span>
          <span class="subject-card-arrow">Explore →</span>
        </button>
      `;
    }).join("");
  }

  function openSubject(subjectId) {
    const subject = getSubjects().find(
      (item) => getSubjectId(item) === subjectId
    );

    if (!subject) {
      HUB.showToast("Subject not found.");
      return;
    }

    const area = $("#chapterArea");
    const grid = $("#subjectGrid");
    const heading = $("#chapterHeading");
    const list = $("#chapterList");
    const detail = $("#chapterDetail");

    if (!area || !list) return;

    if (heading) {
      heading.textContent = getSubjectName(subject);
    }

    if (grid) grid.classList.add("hidden");

    area.classList.remove("hidden");

    if (detail) {
      detail.innerHTML = "";
    }

    const chapters = getChapters(subjectId);

    if (!chapters.length) {
      showMessage(list, "Is subject ke chapters content.js mein nahi mile.");
      return;
    }

    list.innerHTML = chapters.map((chapter, index) => {
      const name = getChapterName(chapter);
      const hasContent = Boolean(getChapterData(subjectId, name));

      return `
        <button
          type="button"
          class="chapter-item"
          data-open-chapter="${esc(name)}"
          data-subject-id="${esc(subjectId)}"
        >
          <span class="chapter-number">${index + 1}</span>
          <span class="chapter-item-text">
            <strong>${esc(name)}</strong>
            <small>${hasContent ? "Study material available" : "Content not added yet"}</small>
          </span>
          <span aria-hidden="true">→</span>
        </button>
      `;
    }).join("");
  }

  function closeSubject() {
    $("#chapterArea")?.classList.add("hidden");
    $("#subjectGrid")?.classList.remove("hidden");

    const detail = $("#chapterDetail");
    if (detail) detail.innerHTML = "";
  }

  function isChapterBookmarked(subjectId, chapterName) {
    const bookmarks = HUB.readData("bookmarks", []);

    return bookmarks.some((item) =>
      item &&
      item.type === "chapter" &&
      item.subjectId === subjectId &&
      item.chapterName === chapterName
    );
  }

  function toggleChapterBookmark(subjectId, chapterName) {
    const bookmarks = HUB.readData("bookmarks", []);

    const index = bookmarks.findIndex((item) =>
      item &&
      item.type === "chapter" &&
      item.subjectId === subjectId &&
      item.chapterName === chapterName
    );

    if (index >= 0) {
      bookmarks.splice(index, 1);
      HUB.saveData("bookmarks", bookmarks);
      HUB.renderBookmarks();
      HUB.showToast("Chapter bookmark removed.");
      return;
    }

    bookmarks.push({
      type: "chapter",
      subjectId,
      chapterName,
      createdAt: new Date().toISOString()
    });

    HUB.saveData("bookmarks", bookmarks);
    HUB.renderBookmarks();
    HUB.showToast("Chapter bookmarked.");
  }

  function renderQuestionGroup(title, questions) {
    if (!Array.isArray(questions) || !questions.length) {
      return `
        <section class="content-panel">
          <h3>${esc(title)}</h3>
          <p>Questions have not been added yet.</p>
        </section>
      `;
    }

    return `
      <section class="content-panel">
        <h3>${esc(title)} (${questions.length})</h3>
        <div class="question-list">
          ${questions.map((item, index) => `
            <article class="question-item">
              <h4>Q${index + 1}. ${esc(item.q)}</h4>
              <p>${esc(item.a)}</p>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }

  function openChapter(subjectId, chapterName) {
    const data = getChapterData(subjectId, chapterName);
    const detail = $("#chapterDetail");

    if (!detail) return;

    if (!data) {
      showMessage(
        detail,
        "Is chapter ka content abhi content.js mein available nahi hai."
      );
      HUB.showToast("Chapter content not found.");
      return;
    }

    const subject = getSubjects().find(
      (item) => getSubjectId(item) === subjectId
    );

    const bookmarked = isChapterBookmarked(subjectId, chapterName);

    const points = Array.isArray(data.keyPoints)
      ? data.keyPoints
      : [];

    detail.innerHTML = `
      <div class="content-panel chapter-detail-heading">
        <p class="eyebrow">${esc(getSubjectName(subject || {}))}</p>
        <h2>${esc(chapterName)}</h2>
        <div class="chapter-action-row">
          <button type="button" class="secondary-btn"
            data-toggle-bookmark="1"
            data-subject-id="${esc(subjectId)}"
            data-chapter-name="${esc(chapterName)}">
            ${bookmarked ? "★ Bookmarked" : "☆ Bookmark chapter"}
          </button>

          <button type="button" class="secondary-btn"
            data-mark-complete="1"
            data-subject-id="${esc(subjectId)}"
            data-chapter-name="${esc(chapterName)}">
            Mark as completed
          </button>
        </div>
      </div>

      <section class="content-panel">
        <h3>Chapter overview</h3>
        <p>${esc(data.overview || "Overview not added yet.")}</p>
        ${
          points.length
            ? `<h4>Key points</h4>
               <ul>${points.map((point) => `<li>${esc(point)}</li>`).join("")}</ul>`
            : ""
        }
      </section>

      ${renderQuestionGroup("Very Short Answer Questions", data.questions?.veryShort)}
      ${renderQuestionGroup("Short Answer Questions", data.questions?.short)}
      ${renderQuestionGroup("Long Answer Questions", data.questions?.long)}

      <section class="content-panel">
        <h3>Chapter flashcards</h3>
        <p>${Array.isArray(data.flashcards) ? data.flashcards.length : 0} flashcards available.</p>
        <button type="button" class="primary-btn"
          data-practice-flashcards="1"
          data-subject-id="${esc(subjectId)}"
          data-chapter-name="${esc(chapterName)}">
          Practise flashcards
        </button>
      </section>

      <section class="content-panel">
        <h3>Chapter quiz</h3>
        <p>${Array.isArray(data.mcqs) ? data.mcqs.length : 0} MCQs available.</p>
        <button type="button" class="primary-btn"
          data-practice-quiz="1"
          data-subject-id="${esc(subjectId)}"
          data-chapter-name="${esc(chapterName)}">
          Start chapter quiz
        </button>
      </section>
    `;

    detail.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  /* ---------------------------------------------------------
     FLASHCARDS
  --------------------------------------------------------- */

  let flashcards = [];
  let flashIndex = 0;
  let flashFlipped = false;

  function startFlashcards(subjectId, chapterName) {
    const data = getChapterData(subjectId, chapterName);

    flashcards = Array.isArray(data?.flashcards)
      ? data.flashcards
      : [];

    flashIndex = 0;
    flashFlipped = false;

    if (!flashcards.length) {
      HUB.showToast("Is chapter ke flashcards available nahi hain.");
      return;
    }

    const subjectSelect = $("#flashSubject");
    const chapterSelect = $("#flashChapter");

    if (subjectSelect) subjectSelect.value = subjectId;

    populateChapterSelect(subjectSelect, chapterSelect);

    if (chapterSelect) chapterSelect.value = chapterName;

    HUB.navigate("flashcards");
    renderFlashcard();
  }

  function renderFlashcard() {
    const box = $("#flashcardBox");
    if (!box || !flashcards.length) return;

    const card = flashcards[flashIndex] || {};
    const text = flashFlipped ? card.a : card.q;

    box.innerHTML = `
      <button type="button" class="flashcard-face ${flashFlipped ? "is-flipped" : ""}"
        data-flash-flip="1"
        aria-label="Flip flashcard">
        <span class="flashcard-label">${flashFlipped ? "ANSWER" : "QUESTION"}</span>
        <span class="flashcard-content">${esc(text || "No content")}</span>
        <span class="flashcard-hint">Tap to flip</span>
      </button>
    `;

    const count = $("#flashCount");
    if (count) {
      count.textContent = `${flashIndex + 1} / ${flashcards.length}`;
    }

    const previous = $("#flashPrev");
    const next = $("#flashNext");

    if (previous) previous.disabled = flashIndex === 0;
    if (next) next.disabled = flashIndex === flashcards.length - 1;
  }

  function flipFlashcard() {
    if (!flashcards.length) return;

    flashFlipped = !flashFlipped;
    renderFlashcard();
  }

  function moveFlashcard(direction) {
    if (!flashcards.length) return;

    flashIndex = Math.max(
      0,
      Math.min(flashcards.length - 1, flashIndex + direction)
    );

    flashFlipped = false;
    renderFlashcard();
  }

  /* ---------------------------------------------------------
     CHAPTER QUIZ — NO TIMER
  --------------------------------------------------------- */

  let quizQuestions = [];
  let quizAnswers = {};
  let quizSubmitted = false;
  let quizSubjectId = "";
  let quizChapterName = "";

  function startChapterQuiz(subjectId, chapterName) {
    const data = getChapterData(subjectId, chapterName);

    quizQuestions = Array.isArray(data?.mcqs) ? data.mcqs : [];
    quizAnswers = {};
    quizSubmitted = false;
    quizSubjectId = subjectId;
    quizChapterName = chapterName;

    if (!quizQuestions.length) {
      HUB.showToast("Is chapter ke MCQs available nahi hain.");
      return;
    }

    const subjectSelect = $("#quizSubject");
    const chapterSelect = $("#quizChapter");

    if (subjectSelect) subjectSelect.value = subjectId;

    populateChapterSelect(subjectSelect, chapterSelect);

    if (chapterSelect) chapterSelect.value = chapterName;

    HUB.navigate("quiz");
    renderChapterQuiz();
  }

  function renderChapterQuiz() {
    const area = $("#quizArea");
    if (!area) return;

    if (!quizQuestions.length) {
      showMessage(area, "Subject aur chapter select karke quiz start karo.");
      return;
    }

    area.innerHTML = `
      <div class="content-panel">
        <h2>${esc(quizChapterName)} — Chapter Quiz</h2>
        <p>${quizQuestions.length} questions · No timer</p>
      </div>

      ${quizQuestions.map((question, index) => {
        const options = Array.isArray(question.options)
          ? question.options
          : [];

        const selected = quizAnswers[index];
        const correct = Number(question.answer);

        return `
          <section class="content-panel quiz-question">
            <h3>Q${index + 1}. ${esc(question.q)}</h3>

            <div class="quiz-options">
              ${options.map((option, optionIndex) => {
                let stateClass = "";
                let disabled = "";

                if (quizSubmitted) {
                  disabled = "disabled";

                  if (optionIndex === correct) {
                    stateClass = "correct-option";
                  } else if (selected === optionIndex) {
                    stateClass = "wrong-option";
                  }
                }

                return `
                  <label class="quiz-option ${stateClass}">
                    <input
                      type="radio"
                      name="chapter-question-${index}"
                      value="${optionIndex}"
                      data-quiz-answer="${index}"
                      ${selected === optionIndex ? "checked" : ""}
                      ${disabled}
                    >
                    <span>${esc(option)}</span>
                  </label>
                `;
              }).join("")}
            </div>

            ${
              quizSubmitted && selected !== correct
                ? `<p class="answer-feedback">Correct answer: ${esc(options[correct] ?? "Not available")}</p>`
                : ""
            }
          </section>
        `;
      }).join("")}

      ${
        quizSubmitted
          ? `
            <section class="content-panel quiz-result">
              <h2>Result: ${quizQuestions.filter((q, i) => quizAnswers[i] === Number(q.answer)).length} / ${quizQuestions.length}</h2>
              <p>Answers are now visible. Wrong answers show only the correct option.</p>
              <button type="button" class="primary-btn" data-restart-quiz="1">Try again</button>
            </section>
          `
          : `
            <button type="button" class="primary-btn" data-submit-chapter-quiz="1">
              Submit answers
            </button>
          `
      }
    `;
  }

  function submitChapterQuiz() {
    if (!quizQuestions.length || quizSubmitted) return;

    quizSubmitted = true;

    const correct = quizQuestions.filter(
      (question, index) =>
        quizAnswers[index] === Number(question.answer)
    ).length;

    if (typeof HUB.recordQuiz === "function") {
      HUB.recordQuiz({
        subjectId: quizSubjectId,
        chapterName: quizChapterName,
        score: correct,
        total: quizQuestions.length,
        date: new Date().toISOString()
      });
    }

    renderChapterQuiz();
    HUB.showToast(`Quiz completed: ${correct}/${quizQuestions.length}`);
  }

  /* ---------------------------------------------------------
     CHAPTER PROGRESS
  --------------------------------------------------------- */

  function markChapterComplete(subjectId, chapterName) {
    const current = HUB.readData("completed_chapters", []);

    const alreadyDone = current.some((item) =>
      item.subjectId === subjectId &&
      item.chapterName === chapterName
    );

    if (!alreadyDone) {
      current.push({
        subjectId,
        chapterName,
        completedAt: new Date().toISOString()
      });

      HUB.saveData("completed_chapters", current);
    }

    if (typeof HUB.updateStats === "function") {
      HUB.updateStats();
    }

    HUB.showToast("Chapter progress saved.");
  }

  /* ---------------------------------------------------------
     EVENT HANDLERS
  --------------------------------------------------------- */

  document.addEventListener("click", (event) => {
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

    if (event.target.closest("#backSubjects")) {
      closeSubject();
      return;
    }

    const bookmarkButton = event.target.closest("[data-toggle-bookmark]");

    if (bookmarkButton) {
      toggleChapterBookmark(
        bookmarkButton.dataset.subjectId,
        bookmarkButton.dataset.chapterName
      );

      openChapter(
        bookmarkButton.dataset.subjectId,
        bookmarkButton.dataset.chapterName
      );
      return;
    }

    const completeButton = event.target.closest("[data-mark-complete]");

    if (completeButton) {
      markChapterComplete(
        completeButton.dataset.subjectId,
        completeButton.dataset.chapterName
      );
      return;
    }

    const flashButton = event.target.closest("[data-practice-flashcards]");

    if (flashButton) {
      startFlashcards(
        flashButton.dataset.subjectId,
        flashButton.dataset.chapterName
      );
      return;
    }

    const quizButton = event.target.closest("[data-practice-quiz]");

    if (quizButton) {
      startChapterQuiz(
        quizButton.dataset.subjectId,
        quizButton.dataset.chapterName
      );
      return;
    }

    if (event.target.closest("[data-flash-flip]")) {
      flipFlashcard();
      return;
    }

    if (event.target.closest("#flashPrev")) {
      moveFlashcard(-1);
      return;
    }

    if (event.target.closest("#flashNext")) {
      moveFlashcard(1);
      return;
    }

    if (event.target.closest("#flashFlip")) {
      flipFlashcard();
      return;
    }

    if (event.target.closest("[data-submit-chapter-quiz]")) {
      submitChapterQuiz();
      return;
    }

    if (event.target.closest("[data-restart-quiz]")) {
      startChapterQuiz(quizSubjectId, quizChapterName);
    }
  });

  document.addEventListener("change", (event) => {
    const answerInput = event.target.closest("[data-quiz-answer]");

    if (answerInput && !quizSubmitted) {
      quizAnswers[Number(answerInput.dataset.quizAnswer)] =
        Number(answerInput.value);
      return;
    }

    const flashSubject = event.target.closest("#flashSubject");

    if (flashSubject) {
      populateChapterSelect($("#flashSubject"), $("#flashChapter"));
      return;
    }

    const quizSubject = event.target.closest("#quizSubject");

    if (quizSubject) {
      populateChapterSelect($("#quizSubject"), $("#quizChapter"));
      return;
    }

    const mockSubject = event.target.closest("#mockSubject");

    if (mockSubject) {
      // Mock-test logic will be added in Part 3.
      return;
    }
  });

  /* ---------------------------------------------------------
     INITIALISE SELECTS AND SUBJECT LIBRARY
  --------------------------------------------------------- */

  function initializeStudyContent() {
    renderSubjectCards();

    populateSubjectSelect($("#flashSubject"));
    populateSubjectSelect($("#quizSubject"));
    populateSubjectSelect($("#mockSubject"));

    populateChapterSelect($("#flashSubject"), $("#flashChapter"));
    populateChapterSelect($("#quizSubject"), $("#quizChapter"));

    $("#flashcardBox") &&
      showMessage($("#flashcardBox"), "Select a subject and chapter to begin.");

    $("#quizArea") &&
      showMessage($("#quizArea"), "Select a subject and chapter, then start your quiz.");

    const subjectSelect = $("#flashSubject");
    const chapterSelect = $("#flashChapter");

    $("#flashFlip")?.addEventListener("click", flipFlashcard);

    $("#startQuiz")?.addEventListener("click", () => {
      const subjectId = getSelectedSubject("#quizSubject");
      const chapterName = $("#quizChapter")?.value || "";

      if (!subjectId || !chapterName) {
        HUB.showToast("Please select a subject and chapter.");
        return;
      }

      startChapterQuiz(subjectId, chapterName);
    });

    $("#startMock")?.addEventListener("click", () => {
      HUB.showToast("Full-subject mock tests will be connected in Part 3.");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeStudyContent, {
      once: true
    });
  } else {
    initializeStudyContent();
  }

  // Other script sections can use these methods.
  window.Class10HubStudy = {
    getSubjects,
    getChapters,
    getChapterData,
    openSubject,
    openChapter,
    startFlashcards,
    startChapterQuiz,
    markChapterComplete
  };

})();
/* =========================================================
   CLASS 10 HUB — SCRIPT.JS PART 3
   Mock Tests • Infographics • Mini Games • Progress
   Remaining Controls • Notes Autosave
========================================================= */

(() => {
  "use strict";

  const DB = window.CLASS10_CONTENT;
  const HUB = window.Class10Hub;
  const STUDY = window.Class10HubStudy;

  if (!DB || !HUB || !STUDY) {
    console.error("Class 10 Hub: Parts 1 and 2 must load first.");
    return;
  }

  const $ = (selector, root = document) =>
    root.querySelector(selector);

  const esc = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);

  const shuffle = (items) => {
    const output = [...items];

    for (let i = output.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [output[i], output[j]] = [output[j], output[i]];
    }

    return output;
  };

  const read = (key, fallback = []) =>
    HUB.readData(key, fallback);

  const save = (key, value) =>
    HUB.saveData(key, value);

  const notify = (message) =>
    HUB.showToast(message);

  function subjectId(subject) {
    return subject?.id || subject?.subjectId || "";
  }

  function subjectName(subject) {
    return subject?.name || subject?.title || subjectId(subject);
  }

  function chaptersFor(id) {
    return STUDY.getChapters(id);
  }

  function chapterName(chapter) {
    return typeof chapter === "string"
      ? chapter
      : chapter?.name || chapter?.title || "";
  }

  function chapterData(id, name) {
    return STUDY.getChapterData(id, name);
  }

  function allSubjects() {
    return Array.isArray(DB.subjects) ? DB.subjects : [];
  }

  function allMCQs(id) {
    const output = [];

    chaptersFor(id).forEach((chapter) => {
      const name = chapterName(chapter);
      const data = chapterData(id, name);

      if (!Array.isArray(data?.mcqs)) return;

      data.mcqs.forEach((question) => {
        if (
          question &&
          question.q &&
          Array.isArray(question.options) &&
          question.options.length >= 2 &&
          Number.isInteger(Number(question.answer)) &&
          Number(question.answer) >= 0 &&
          Number(question.answer) < question.options.length
        ) {
          output.push({
            ...question,
            chapterName: name
          });
        }
      });
    });

    return output;
  }

  /* =========================================================
     1. FULL SUBJECT MOCK TEST — EXACTLY 80 QUESTIONS
  ========================================================= */

  let mockQuestions = [];
  let mockAnswers = {};
  let mockSubmitted = false;
  let mockSubject = "";
  let mockTimeLeft = 90 * 60;
  let mockTimerId = null;
  let mockStartedAt = null;

  function stopMockTimer() {
    if (mockTimerId !== null) {
      clearInterval(mockTimerId);
      mockTimerId = null;
    }
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainder = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`;
  }

  function startMockTest() {
    const select = $("#mockSubject");
    const id = select?.value || "";

    if (!id || id === "all") {
      notify("Pehle ek subject select karo.");
      return;
    }

    const pool = allMCQs(id);

    if (pool.length < 80) {
      const area = $("#mockArea");

      if (area) {
        area.innerHTML = `
          <section class="content-panel">
            <h2>Mock test not ready yet</h2>
            <p>
              Is subject ke content.js mein abhi ${pool.length} valid MCQs
              mile. Full mock test ke liye kam se kam 80 valid MCQs chahiye.
            </p>
            <p>Missing questions ko fake karke test nahi banaya jayega.</p>
          </section>
        `;
      }

      notify(`80 MCQs required; currently ${pool.length} available.`);
      return;
    }

    stopMockTimer();

    mockQuestions = shuffle(pool).slice(0, 80);
    mockAnswers = {};
    mockSubmitted = false;
    mockSubject = id;
    mockTimeLeft = 90 * 60;
    mockStartedAt = new Date().toISOString();

    HUB.navigate("mock");
    renderMockTest();
    startMockTimer();
  }

  function startMockTimer() {
    stopMockTimer();

    const timer = $("#mockTimer");

    if (timer) {
      timer.textContent = formatTime(mockTimeLeft);
    }

    mockTimerId = setInterval(() => {
      if (mockSubmitted) {
        stopMockTimer();
        return;
      }

      mockTimeLeft = Math.max(0, mockTimeLeft - 1);

      if (timer) {
        timer.textContent = formatTime(mockTimeLeft);
      }

      if (mockTimeLeft <= 0) {
        submitMockTest(true);
      }
    }, 1000);
  }

  function renderMockTest() {
    const area = $("#mockArea");
    if (!area) return;

    if (!mockQuestions.length) {
      area.innerHTML = `
        <section class="content-panel">
          <p>Select a subject and start your 80-question mock test.</p>
        </section>
      `;
      return;
    }

    area.innerHTML = `
      <section class="content-panel mock-test-header">
        <div>
          <h2>${esc(
            subjectName(
              allSubjects().find((item) => subjectId(item) === mockSubject) || {}
            )
          )} — Mock Test</h2>
          <p>80 questions · 90 minutes · Answers after submission</p>
        </div>
        <div class="mock-timer" aria-live="polite">
          <span>Time left</span>
          <strong id="mockTimer">${formatTime(mockTimeLeft)}</strong>
        </div>
      </section>

      ${mockQuestions.map((question, index) => {
        const selected = mockAnswers[index];
        const answer = Number(question.answer);

        return `
          <section class="content-panel quiz-question">
            <p class="eyebrow">Question ${index + 1} of 80</p>
            <h3>${esc(question.q)}</h3>

            <div class="quiz-options">
              ${question.options.map((option, optionIndex) => {
                let state = "";

                if (mockSubmitted && optionIndex === answer) {
                  state = "correct-option";
                } else if (
                  mockSubmitted &&
                  selected === optionIndex &&
                  selected !== answer
                ) {
                  state = "wrong-option";
                }

                return `
                  <label class="quiz-option ${state}">
                    <input
                      type="radio"
                      name="mock-question-${index}"
                      data-mock-answer="${index}"
                      value="${optionIndex}"
                      ${selected === optionIndex ? "checked" : ""}
                      ${mockSubmitted ? "disabled" : ""}
                    >
                    <span>${esc(option)}</span>
                  </label>
                `;
              }).join("")}
            </div>

            ${
              mockSubmitted && selected !== answer
                ? `<p class="answer-feedback">Correct answer: ${esc(question.options[answer])}</p>`
                : ""
            }
          </section>
        `;
      }).join("")}

      ${
        mockSubmitted
          ? `<section class="content-panel quiz-result" id="mockResult"></section>`
          : `
            <section class="content-panel">
              <p>Answered: ${Object.keys(mockAnswers).length} / 80</p>
              <button type="button" class="primary-btn" data-submit-mock="1">
                Submit mock test
              </button>
            </section>
          `
      }
    `;

    if (mockSubmitted) renderMockResult();
  }

  function submitMockTest(autoSubmit = false) {
    if (!mockQuestions.length || mockSubmitted) return;

    mockSubmitted = true;
    stopMockTimer();

    const correct = mockQuestions.filter(
      (question, index) =>
        mockAnswers[index] === Number(question.answer)
    ).length;

    const history = read("quiz_history", []);

    history.push({
      type: "mock",
      subjectId: mockSubject,
      score: correct,
      total: 80,
      autoSubmitted: autoSubmit,
      date: new Date().toISOString()
    });

    save("quiz_history", history);

    if (typeof HUB.updateStats === "function") {
      HUB.updateStats();
    }

    renderMockTest();

    notify(
      autoSubmit
        ? "Time is up. Mock test submitted."
        : "Mock test submitted successfully."
    );
  }

  function renderMockResult() {
    const result = $("#mockResult");
    if (!result) return;

    const correct = mockQuestions.filter(
      (question, index) =>
        mockAnswers[index] === Number(question.answer)
    ).length;

    const attempted = Object.keys(mockAnswers).length;

    result.innerHTML = `
      <h2>Mock Test Result</h2>
      <p><strong>Score:</strong> ${correct} / 80</p>
      <p><strong>Attempted:</strong> ${attempted} / 80</p>
      <p><strong>Unanswered:</strong> ${80 - attempted}</p>
      <p>Wrong answers show only the correct option.</p>
      <button type="button" class="primary-btn" data-new-mock="1">
        Start another mock test
      </button>
    `;
  }

  /* =========================================================
     2. INFOGRAPHICS
     Images must actually exist in the repository.
  ========================================================= */

  let infoImages = [];
  let infoIndex = 0;

  function findInfographic(id, name) {
    if (typeof DB.getInfographic === "function") {
      const found = DB.getInfographic(id, name);
      if (found) return found;
    }

    const store = DB.infographicImages || {};
    return store[`${id}::${name}`] || null;
  }

  function startInfographic() {
    const id = $("#infoSubject")?.value || "";
    const name = $("#infoChapter")?.value || "";

    if (!id || !name) {
      notify("Select a subject and chapter first.");
      return;
    }

    const record = findInfographic(id, name);

    if (!record || !Array.isArray(record.images) || !record.images.length) {
      const screen = $("#infoScreen");

      if (screen) {
        screen.innerHTML = `
          <section class="content-panel">
            <h2>${esc(name)}</h2>
            <p>Infographic image paths have not been added for this chapter.</p>
            <p>Add the actual image file to the images/infographics folder and register its path in content.js.</p>
          </section>
        `;
      }

      notify("No infographic images registered for this chapter.");
      return;
    }

    infoImages = record.images;
    infoIndex = 0;

    HUB.navigate("infographics");
    renderInfographic();
  }

  function renderInfographic() {
    const screen = $("#infoScreen");
    if (!screen || !infoImages.length) return;

    const path = infoImages[infoIndex];

    screen.innerHTML = `
      <section class="content-panel">
        <h2>Infographic ${infoIndex + 1} / ${infoImages.length}</h2>
        <div class="infographic-frame">
          <img
            src="${esc(path)}"
            alt="Study infographic ${infoIndex + 1}"
            loading="lazy"
          >
        </div>
        <div class="chapter-action-row">
          <button type="button" class="secondary-btn"
            data-info-prev="1" ${infoIndex === 0 ? "disabled" : ""}>
            ← Previous
          </button>
          <button type="button" class="secondary-btn"
            data-info-next="1" ${infoIndex >= infoImages.length - 1 ? "disabled" : ""}>
            Next →
          </button>
        </div>
      </section>
    `;

    const img = $("img", screen);

    img?.addEventListener("error", () => {
      const frame = img.parentElement;

      if (frame) {
        frame.innerHTML = `
          <p class="image-missing">
            Image file not found: ${esc(path)}
          </p>
        `;
      }
    }, { once: true });
  }

  function populateInfoChapters() {
    const subject = $("#infoSubject");
    const chapter = $("#infoChapter");

    if (!subject || !chapter) return;

    chapter.innerHTML = [
      '<option value="">Select chapter</option>',
      ...chaptersFor(subject.value).map((item) => {
        const name = chapterName(item);
        return `<option value="${esc(name)}">${esc(name)}</option>`;
      })
    ].join("");

    chapter.disabled = !subject.value;
  }

  /* =========================================================
     3. SEVEN MINI-GAMES
  ========================================================= */

  const gameDefinitions = [
    {
      id: "quick-quiz",
      name: "Quick Quiz",
      description: "Answer random chapter MCQs."
    },
    {
      id: "true-false",
      name: "True or False",
      description: "Check whether a statement is correct."
    },
    {
      id: "flash-challenge",
      name: "Flashcard Challenge",
      description: "Recall an answer before revealing it."
    },
    {
      id: "math-sprint",
      name: "Math Sprint",
      description: "Solve a short calculation."
    },
    {
      id: "word-scramble",
      name: "Word Scramble",
      description: "Unscramble a study-related word."
    },
    {
      id: "memory-match",
      name: "Memory Match",
      description: "Match study terms with their meanings."
    },
    {
      id: "random-question",
      name: "Random Question",
      description: "Get a question from your study library."
    }
  ];

  let activeGame = "";
  let gameQuestion = null;
  let gameScore = 0;
  let gameWord = "";

  const scrambleWords = [
    { word: "REPRODUCTION", hint: "Process by which organisms produce offspring." },
    { word: "ELECTRICITY", hint: "Study of electric charge and current." },
    { word: "HEREDITY", hint: "Passing of traits from parents to offspring." },
    { word: "PROBABILITY", hint: "Measure of the chance of an event." },
    { word: "ECOSYSTEM", hint: "Organisms interacting with their environment." }
  ];

  const memoryPairs = [
    ["Reactant", "Starting substance in a chemical reaction"],
    ["Osmosis", "Movement of water through a selectively permeable membrane"],
    ["Gene", "Unit of heredity"],
    ["Voltage", "Potential difference between two points"],
    ["Democracy", "Government elected by the people"]
  ];

  function renderGames() {
    const grid = $("#gamesGrid");
    if (!grid) return;

    grid.innerHTML = gameDefinitions.map((game, index) => `
      <button type="button" class="game-card"
        data-start-game="${esc(game.id)}">
        <span class="game-number">${String(index + 1).padStart(2, "0")}</span>
        <strong>${esc(game.name)}</strong>
        <span>${esc(game.description)}</span>
        <span class="game-open">Play →</span>
      </button>
    `).join("");
  }

  function renderGameArea(html) {
    const area = $("#gameArea");
    if (area) area.innerHTML = html;
  }

  function getRandomMCQ() {
    const subjectPool = allSubjects().flatMap((subject) =>
      allMCQs(subjectId(subject)).map((question) => ({
        ...question,
        subjectName: subjectName(subject)
      }))
    );

    return subjectPool.length
      ? subjectPool[Math.floor(Math.random() * subjectPool.length)]
      : null;
  }

  function startGame(id) {
    activeGame = id;
    gameQuestion = getRandomMCQ();
    gameScore = 0;

    switch (id) {
      case "quick-quiz":
        if (!gameQuestion) {
          renderGameArea("<p>No MCQs available yet.</p>");
          return;
        }

        renderGameArea(`
          <section class="content-panel">
            <h2>Quick Quiz</h2>
            <p>${esc(gameQuestion.subjectName)}</p>
            <h3>${esc(gameQuestion.q)}</h3>
            <div class="quiz-options">
              ${gameQuestion.options.map((option, index) => `
                <button type="button" class="quiz-option"
                  data-game-answer="${index}">
                  ${esc(option)}
                </button>
              `).join("")}
            </div>
            <div id="gameFeedback"></div>
          </section>
        `);
        break;

      case "true-false":
        if (!gameQuestion) {
          renderGameArea("<p>No MCQs available yet.</p>");
          return;
        }

        renderGameArea(`
          <section class="content-panel">
            <h2>True or False</h2>
            <p>${esc(gameQuestion.q)}</p>
            <p>Choose whether the correct option is the first option.</p>
            <button class="primary-btn" data-true-false="true">True</button>
            <button class="secondary-btn" data-true-false="false">False</button>
            <p id="gameFeedback"></p>
          </section>
        `);
        break;

      case "flash-challenge": {
        const cards = allSubjects().flatMap((subject) =>
          chaptersFor(subjectId(subject)).flatMap((chapter) => {
            const data = chapterData(subjectId(subject), chapterName(chapter));
            return Array.isArray(data?.flashcards) ? data.flashcards : [];
          })
        );

        if (!cards.length) {
          renderGameArea("<p>No flashcards available yet.</p>");
          return;
        }

        gameQuestion = cards[Math.floor(Math.random() * cards.length)];

        renderGameArea(`
          <section class="content-panel">
            <h2>Flashcard Challenge</h2>
            <h3>${esc(gameQuestion.q)}</h3>
            <button class="primary-btn" data-reveal-game-answer="1">Reveal answer</button>
            <p id="gameFeedback"></p>
          </section>
        `);
        break;
      }

      case "math-sprint": {
        const a = Math.floor(Math.random() * 20) + 1;
        const b = Math.floor(Math.random() * 20) + 1;
        const operator = ["+", "-", "×"][Math.floor(Math.random() * 3)];

        gameQuestion = {
          prompt: `${a} ${operator} ${b}`,
          answer: operator === "+"
            ? a + b
            : operator === "-"
              ? a - b
              : a * b
        };

        renderGameArea(`
          <section class="content-panel">
            <h2>Math Sprint</h2>
            <h3>${gameQuestion.prompt} = ?</h3>
            <input id="mathSprintAnswer" type="number" placeholder="Your answer">
            <button class="primary-btn" data-check-math="1">Check</button>
            <p id="gameFeedback"></p>
          </section>
        `);
        break;
      }

      case "word-scramble": {
        const item = scrambleWords[Math.floor(Math.random() * scrambleWords.length)];
        gameWord = item.word;

        let scrambled = item.word;

        while (scrambled === item.word && item.word.length > 3) {
          scrambled = shuffle(item.word.split("")).join("");
        }

        renderGameArea(`
          <section class="content-panel">
            <h2>Word Scramble</h2>
            <h3>${esc(scrambled)}</h3>
            <p>Hint: ${esc(item.hint)}</p>
            <input id="scrambleAnswer" type="text" placeholder="Enter the correct word">
            <button class="primary-btn" data-check-word="1">Check</button>
            <p id="gameFeedback"></p>
          </section>
        `);
        break;
      }

      case "memory-match": {
        const pairs = shuffle(memoryPairs).slice(0, 4);

        renderGameArea(`
          <section class="content-panel">
            <h2>Memory Match</h2>
            <p>Choose a term to see its meaning.</p>
            <div class="memory-grid">
              ${pairs.map(([term, meaning], index) => `
                <button type="button" class="memory-card"
                  data-memory-index="${index}"
                  data-memory-meaning="${esc(meaning)}">
                  ${esc(term)}
                </button>
              `).join("")}
            </div>
            <p id="gameFeedback"></p>
          </section>
        `);
        break;
      }

      case "random-question":
        if (!gameQuestion) {
          renderGameArea("<p>No questions available yet.</p>");
          return;
        }

        renderGameArea(`
          <section class="content-panel">
            <h2>Random Study Question</h2>
            <p>${esc(gameQuestion.subjectName)}</p>
            <h3>${esc(gameQuestion.q)}</h3>
            <button class="primary-btn" data-reveal-game-answer="1">Show correct answer</button>
            <p id="gameFeedback"></p>
          </section>
        `);
        break;
    }
  }

  /* =========================================================
     4. NOTES AUTOSAVE + EDITING
  ========================================================= */

  let editingNoteId = null;
  let noteSaveTimer = null;

  function renderNotes() {
    const list = $("#notesList");
    if (!list) return;

    const notes = read("notes", []);

    if (!notes.length) {
      list.innerHTML = `
        <section class="content-panel">
          <p>No notes saved yet. Create your first note above.</p>
        </section>
      `;
      return;
    }

    list.innerHTML = notes.map((note) => `
      <article class="content-panel note-item">
        <h3>${esc(note.title || "Untitled note")}</h3>
        <p>${esc(note.body || "")}</p>
        <div class="chapter-action-row">
          <button type="button" class="secondary-btn"
            data-edit-note="${esc(note.id)}">Edit</button>
          <button type="button" class="danger-btn"
            data-delete-note="${esc(note.id)}">Delete</button>
        </div>
      </article>
    `).join("");
  }

  function saveCurrentNote(showNotice = true) {
    const titleInput = $("#noteTitle");
    const bodyInput = $("#noteBody");

    if (!titleInput || !bodyInput) return;

    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();

    if (!title && !body) return;

    const notes = read("notes", []);
    const id = editingNoteId || `note-${Date.now()}`;

    const existingIndex = notes.findIndex((note) => note.id === id);

    const item = {
      id,
      title: title || "Untitled note",
      body,
      updatedAt: new Date().toISOString()
    };

    if (existingIndex >= 0) {
      notes[existingIndex] = item;
    } else {
      notes.unshift(item);
    }

    save("notes", notes);
    editingNoteId = id;
    renderNotes();

    if (typeof HUB.updateStats === "function") {
      HUB.updateStats();
    }

    if (showNotice) notify("Note saved.");
  }

  function scheduleNoteAutosave() {
    clearTimeout(noteSaveTimer);

    noteSaveTimer = setTimeout(() => {
      saveCurrentNote(false);
    }, 700);
  }

  function editNote(id) {
    const note = read("notes", []).find((item) => item.id === id);
    if (!note) return;

    editingNoteId = id;

    if ($("#noteTitle")) $("#noteTitle").value = note.title || "";
    if ($("#noteBody")) $("#noteBody").value = note.body || "";

    HUB.navigate("notes");
    notify("Note opened for editing.");
  }

  function deleteNote(id) {
    const notes = read("notes", []);
    const updated = notes.filter((item) => item.id !== id);

    if (updated.length === notes.length) return;

    save("notes", updated);

    if (editingNoteId === id) {
      editingNoteId = null;
      if ($("#noteTitle")) $("#noteTitle").value = "";
      if ($("#noteBody")) $("#noteBody").value = "";
    }

    renderNotes();

    if (typeof HUB.updateStats === "function") {
      HUB.updateStats();
    }

    notify("Note deleted.");
  }

  /* =========================================================
     5. BOOKMARKS — CHAPTER LEVEL
  ========================================================= */

  function renderChapterBookmarks() {
    const list = $("#bookmarksList");
    if (!list) return;

    const bookmarks = read("bookmarks", []).filter(
      (item) => item && item.type === "chapter"
    );

    if (!bookmarks.length) {
      list.innerHTML = `
        <section class="content-panel">
          <p>No chapter bookmarks yet.</p>
          <p>Open a chapter and select “Bookmark chapter”.</p>
        </section>
      `;
      return;
    }

    list.innerHTML = bookmarks.map((item) => {
      const subject = allSubjects().find(
        (entry) => subjectId(entry) === item.subjectId
      );

      return `
        <article class="content-panel bookmark-item">
          <h3>${esc(item.chapterName)}</h3>
          <p>${esc(subjectName(subject || { name: item.subjectId }))}</p>
          <div class="chapter-action-row">
            <button type="button" class="primary-btn"
              data-open-bookmark="${esc(item.subjectId)}"
              data-bookmark-chapter="${esc(item.chapterName)}">
              Open chapter
            </button>
            <button type="button" class="danger-btn"
              data-remove-bookmark="${esc(item.subjectId)}"
              data-bookmark-chapter="${esc(item.chapterName)}">
              Remove
            </button>
          </div>
        </article>
      `;
    }).join("");
  }

  /* =========================================================
     6. PROGRESS DASHBOARD
  ========================================================= */

  function renderProgress() {
    const area = $("#progressArea");
    const historyList = $("#historyList");

    const completed = read("completed_chapters", []);
    const history = read("quiz_history", []);
    const notes = read("notes", []);
    const bookmarks = read("bookmarks", []).filter(
      (item) => item?.type === "chapter"
    );

    if (area) {
      area.innerHTML = `
        <div class="stat-grid">
          <article class="stat-card">
            <span>Completed chapters</span>
            <strong>${completed.length}</strong>
          </article>
          <article class="stat-card">
            <span>Quiz attempts</span>
            <strong>${history.length}</strong>
          </article>
          <article class="stat-card">
            <span>Saved notes</span>
            <strong>${notes.length}</strong>
          </article>
          <article class="stat-card">
            <span>Bookmarked chapters</span>
            <strong>${bookmarks.length}</strong>
          </article>
        </div>
      `;
    }

    if (historyList) {
      if (!history.length) {
        historyList.innerHTML = `
          <section class="content-panel">
            <p>Your quiz history will appear here after you submit a quiz or mock test.</p>
          </section>
        `;
      } else {
        historyList.innerHTML = [...history].reverse().map((item) => `
          <article class="content-panel">
            <h3>${esc(item.type === "mock" ? "Mock Test" : "Chapter Quiz")}</h3>
            <p>${esc(item.chapterName || item.subjectId || "Study practice")}</p>
            <p>Score: ${Number(item.score) || 0} / ${Number(item.total) || 0}</p>
            <small>${esc(item.date || "")}</small>
          </article>
        `).join("");
      }
    }
  }

  /* =========================================================
     7. TEXT EXPORT + RESET SAVED DATA
  ========================================================= */

  function exportTextData() {
    const notes = read("notes", []);
    const bookmarks = read("bookmarks", []);
    const completed = read("completed_chapters", []);
    const history = read("quiz_history", []);

    const lines = [
      "CLASS 10 HUB — MY STUDY DATA",
      "================================",
      "",
      "NOTES",
      "--------------------------------"
    ];

    notes.forEach((note, index) => {
      lines.push(
        `${index + 1}. ${note.title || "Untitled note"}`,
        note.body || "",
        ""
      );
    });

    lines.push(
      "",
      "BOOKMARKED CHAPTERS",
      "--------------------------------"
    );

    bookmarks.forEach((item) => {
      lines.push(`${item.subjectId || ""} — ${item.chapterName || ""}`);
    });

    lines.push(
      "",
      "COMPLETED CHAPTERS",
      "--------------------------------"
    );

    completed.forEach((item) => {
      lines.push(`${item.subjectId} — ${item.chapterName}`);
    });

    lines.push(
      "",
      "QUIZ HISTORY",
      "--------------------------------"
    );

    history.forEach((item) => {
      lines.push(
        `${item.type || "Quiz"}: ${item.score}/${item.total} — ${item.date || ""}`
      );
    });

    const blob = new Blob(
      [lines.join("\n")],
      { type: "text/plain;charset=utf-8" }
    );

    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = "class-10-hub-study-data.txt";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();

    setTimeout(() => URL.revokeObjectURL(url), 1000);

    notify("Text export prepared.");
  }

  function resetSavedData() {
    const confirmed = window.confirm(
      "Reset all saved notes, bookmarks, progress and quiz history on this device? This cannot be undone."
    );

    if (!confirmed) return;

    [
      "class10hub_notes",
      "class10hub_bookmarks",
      "class10hub_progress",
      "class10hub_quiz_history",
      "class10hub_completed_chapters"
    ].forEach((key) => localStorage.removeItem(key));

    stopMockTimer();

    notify("Saved study data reset.");

    renderNotes();
    renderChapterBookmarks();
    renderProgress();

    if (typeof HUB.updateStats === "function") {
      HUB.updateStats();
    }
  }
   /* =========================================================
     8. WIRE BUTTONS AND SELECTS
  ========================================================= */

  document.addEventListener("click", (event) => {
    const target = event.target;

    if (target.closest("#startMock")) {
      startMockTest();
      return;
    }

    if (target.closest("[data-submit-mock]")) {
      submitMockTest(false);
      return;
    }

    if (target.closest("[data-new-mock]")) {
      stopMockTimer();
      mockQuestions = [];
      mockAnswers = {};
      mockSubmitted = false;

      if ($("#mockArea")) {
        $("#mockArea").innerHTML = "";
      }

      notify("Select a subject to begin another test.");
      return;
    }

    if (target.closest("#openInfo")) {
      startInfographic();
      return;
    }

    if (target.closest("[data-info-prev]")) {
      infoIndex = Math.max(0, infoIndex - 1);
      renderInfographic();
      return;
    }

    if (target.closest("[data-info-next]")) {
      infoIndex = Math.min(infoImages.length - 1, infoIndex + 1);
      renderInfographic();
      return;
    }

    const gameButton = target.closest("[data-start-game]");

    if (gameButton) {
      startGame(gameButton.dataset.startGame);
      return;
    }

    const gameAnswer = target.closest("[data-game-answer]");

    if (gameAnswer && activeGame === "quick-quiz" && gameQuestion) {
      const chosen = Number(gameAnswer.dataset.gameAnswer);
      const correct = chosen === Number(gameQuestion.answer);
      const feedback = $("#gameFeedback");

      if (feedback) {
        feedback.textContent = correct
          ? "Correct! Well done."
          : `Correct answer: ${gameQuestion.options[Number(gameQuestion.answer)]}`;
      }

      $$DisableGameOptions();
      return;
    }

    const tf = target.closest("[data-true-false]");

    if (tf && activeGame === "true-false" && gameQuestion) {
      const chosenTrue = tf.dataset.trueFalse === "true";
      const correctTrue = Number(gameQuestion.answer) === 0;

      const feedback = $("#gameFeedback");

      if (feedback) {
        feedback.textContent = chosenTrue === correctTrue
          ? "Correct!"
          : `Correct answer: ${gameQuestion.options[Number(gameQuestion.answer)]}`;
      }

      return;
    }

    if (target.closest("[data-reveal-game-answer]") && gameQuestion) {
      const feedback = $("#gameFeedback");

      if (feedback) {
        feedback.textContent =
          gameQuestion.a ||
          gameQuestion.options?.[Number(gameQuestion.answer)] ||
          "Answer not available.";
      }

      return;
    }

    if (target.closest("[data-check-math]")) {
      const input = $("#mathSprintAnswer");
      const feedback = $("#gameFeedback");

      if (feedback) {
        feedback.textContent =
          Number(input?.value) === gameQuestion?.answer
            ? "Correct!"
            : `Correct answer: ${gameQuestion?.answer}`;
      }

      return;
    }

    if (target.closest("[data-check-word]")) {
      const input = $("#scrambleAnswer");
      const feedback = $("#gameFeedback");

      if (feedback) {
        feedback.textContent =
          normalizeWord(input?.value) === normalizeWord(gameWord)
            ? "Correct!"
            : `Correct word: ${gameWord}`;
      }

      return;
    }

    const memoryButton = target.closest("[data-memory-index]");

    if (memoryButton) {
      const feedback = $("#gameFeedback");

      if (feedback) {
        feedback.textContent = memoryButton.dataset.memoryMeaning;
      }

      return;
    }

    const editButton = target.closest("[data-edit-note]");

    if (editButton) {
      editNote(editButton.dataset.editNote);
      return;
    }

    const deleteButton = target.closest("[data-delete-note]");

    if (deleteButton) {
      deleteNote(deleteButton.dataset.deleteNote);
      return;
    }

    const openBookmark = target.closest("[data-open-bookmark]");

    if (openBookmark) {
      HUB.navigate("subjects");

      STUDY.openSubject(openBookmark.dataset.openBookmark);

      setTimeout(() => {
        STUDY.openChapter(
          openBookmark.dataset.openBookmark,
          openBookmark.dataset.bookmarkChapter
        );
      }, 0);

      return;
    }

    const removeBookmark = target.closest("[data-remove-bookmark]");

    if (removeBookmark) {
      const updated = read("bookmarks", []).filter((item) =>
        !(
          item.subjectId === removeBookmark.dataset.removeBookmark &&
          item.chapterName === removeBookmark.dataset.bookmarkChapter &&
          item.type === "chapter"
        )
      );

      save("bookmarks", updated);
      renderChapterBookmarks();

      if (typeof HUB.renderBookmarks === "function") {
        HUB.renderBookmarks();
      }

      notify("Bookmark removed.");
      return;
    }

    if (target.closest("#saveNote")) {
      clearTimeout(noteSaveTimer);
      saveCurrentNote(true);
      return;
    }

    if (target.closest("#exportData")) {
      exportTextData();
      return;
    }

    if (target.closest("#resetData")) {
      resetSavedData();
      return;
    }
  });

  function $$DisableGameOptions() {
    document.querySelectorAll("[data-game-answer]").forEach((button) => {
      button.disabled = true;
    });
  }

  function normalizeWord(value) {
    return String(value || "").replace(/\s+/g, "").toUpperCase();
  }

  document.addEventListener("change", (event) => {
    const select = event.target;

    if (select.matches("#infoSubject")) {
      populateInfoChapters();
      return;
    }

    if (select.matches("#mockSubject")) {
      // The user starts the test explicitly with Start Mock Test.
      return;
    }
  });

  $("#noteTitle")?.addEventListener("input", scheduleNoteAutosave);
  $("#noteBody")?.addEventListener("input", scheduleNoteAutosave);

  /* =========================================================
     9. STARTUP
  ========================================================= */

  function initializePart3() {
    renderGames();
    renderNotes();
    renderChapterBookmarks();
    renderProgress();
    populateInfoChapters();

    if (typeof HUB.updateStats === "function") {
      HUB.updateStats();
    }

    const infoSubject = $("#infoSubject");

    if (infoSubject && !infoSubject.options.length) {
      infoSubject.innerHTML = allSubjects().map((subject) => `
        <option value="${esc(subjectId(subject))}">
          ${esc(subjectName(subject))}
        </option>
      `).join("");

      populateInfoChapters();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializePart3, {
      once: true
    });
  } else {
    initializePart3();
  }

})();
