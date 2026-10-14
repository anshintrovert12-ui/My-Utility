// LocalStorage Keys Schema
const KEYS = {
  SETTINGS: 'class10hub_settings_v1',
  NOTES: 'class10hub_notes_v1',
  PROGRESS: 'class10hub_chapter_progress_v1',
  HISTORY: 'class10hub_mock_test_history_v1',
  SCHEMA: 'class10hub_schema_version'
};

// Inbuilt Educational Syllabus & Question Bank Data
const SYLLABUS_DATA = {
  Science: [
    {
      id: 'sci_1',
      title: 'Chemical Reactions & Equations',
      overview: 'Study of reactants, products, balancing chemical equations, combination, decomposition, displacement, and redox reactions.',
      notes: 'Key Concept: Law of Conservation of Mass states that mass can neither be created nor destroyed in a chemical reaction. Always balance chemical equations.',
      qna: [
        { q: 'Why should a magnesium ribbon be cleaned before burning in air?', a: 'To remove the protective layer of basic magnesium carbonate from its surface.' },
        { q: 'What is a redox reaction?', a: 'A reaction where oxidation (gain of oxygen) and reduction (loss of oxygen) occur simultaneously.' }
      ]
    },
    {
      id: 'sci_2',
      title: 'Light - Reflection and Refraction',
      overview: 'Laws of reflection, spherical mirrors, mirror formula, magnification, refraction laws, and lens formula.',
      notes: 'Mirror Formula: 1/f = 1/v + 1/u. Convex mirror always forms a virtual, erect, and diminished image.',
      qna: [
        { q: 'Define 1 Dioptre of power of a lens.', a: '1 Dioptre is the power of a lens whose focal length is 1 metre.' }
      ]
    }
  ],
  Mathematics: [
    {
      id: 'math_1',
      title: 'Real Numbers',
      overview: 'Fundamental Theorem of Arithmetic, proving irrationality of numbers, decimal expansions.',
      notes: 'Fundamental Theorem: Every composite number can be expressed as a product of primes uniquely.',
      qna: [
        { q: 'State Fundamental Theorem of Arithmetic.', a: 'Every composite number can be factorized uniquely into prime factors.' }
      ]
    }
  ],
  'Social Science': [
    {
      id: 'sst_1',
      title: 'Power Sharing (Civics)',
      overview: 'Belgiums ethnic composition, Sri Lankan majoritarianism, and forms of power sharing.',
      notes: 'Power sharing is the very spirit of democracy. It prevents power concentration.',
      qna: [
        { q: 'What is Community Government in Belgium?', a: 'A government elected by people belonging to one language community, responsible for cultural/language issues.' }
      ]
    }
  ]
};

const FLASHCARDS = [
  { subject: 'Science', q: 'What is the speed of light in vacuum?', a: '3 × 10^8 m/s' },
  { subject: 'Science', q: 'Formulas for Power of Lens?', a: 'P = 1 / f (in metres)' },
  { subject: 'Mathematics', q: 'Quadratic Formula for ax² + bx + c = 0?', a: 'x = [-b ± √(b² - 4ac)] / 2a' },
  { subject: 'Social Science', q: 'In which year did Sri Lanka gain independence?', a: '1948' }
];

// App State
let state = {
  completedChapters: JSON.parse(localStorage.getItem(KEYS.PROGRESS)) || [],
  notes: JSON.parse(localStorage.getItem(KEYS.NOTES)) || [],
  history: JSON.parse(localStorage.getItem(KEYS.HISTORY)) || [],
  currentFlashcardIndex: 0
};

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
  initUI();
  renderSubjects();
  renderFlashcard();
  renderNotes();
  updateProgressUI();
});

function initUI() {
  // Sidebar Toggle
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  
  document.getElementById('hamburger-btn').addEventListener('click', () => {
    sidebar.classList.add('open');
    overlay.classList.add('active');
  });

  document.getElementById('close-sidebar').addEventListener('click', closeSidebar);
  overlay.addEventListener('click', closeSidebar);

  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  }

  // Dark/Light Theme Toggle
  const themeBtn = document.getElementById('theme-toggle-btn');
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });

  // Navigation Tabs Switching
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      const target = tab.getAttribute('data-section');
      document.querySelectorAll('.content-section').forEach(sec => sec.classList.add('hidden'));
      document.getElementById(target).classList.remove('hidden');
    });
  });

  // Note Modal Trigger
  document.getElementById('create-note-btn').addEventListener('click', () => {
    document.getElementById('note-modal').classList.remove('hidden');
  });

  document.getElementById('close-note-modal').addEventListener('click', () => {
    document.getElementById('note-modal').classList.add('hidden');
  });

  // Save Note Event
  document.getElementById('save-note-btn').addEventListener('click', saveNote);

  // Live Character and Word Counter
  const noteText = document.getElementById('note-text-input');
  noteText.addEventListener('input', () => {
    const chars = noteText.value.length;
    const words = noteText.value.trim() ? noteText.value.trim().split(/\s+/).length : 0;
    document.getElementById('note-char-count').innerText = `${chars} / 1000 characters`;
    document.getElementById('note-word-count').innerText = `${words} words`;
  });

  // Flashcards Flipping & Nav
  const flashcardEl = document.getElementById('flashcard');
  flashcardEl.addEventListener('click', () => flashcardEl.classList.toggle('flipped'));

  document.getElementById('next-card-btn').addEventListener('click', () => {
    state.currentFlashcardIndex = (state.currentFlashcardIndex + 1) % FLASHCARDS.length;
    renderFlashcard();
  });

  document.getElementById('prev-card-btn').addEventListener('click', () => {
    state.currentFlashcardIndex = (state.currentFlashcardIndex - 1 + FLASHCARDS.length) % FLASHCARDS.length;
    renderFlashcard();
  });

  // Reset Data Buttons
  document.getElementById('reset-progress-btn').addEventListener('click', () => {
    if (confirm('Are you sure you want to reset all chapter progress?')) {
      state.completedChapters = [];
      localStorage.setItem(KEYS.PROGRESS, JSON.stringify([]));
      updateProgressUI();
      alert('Chapter progress has been reset.');
    }
  });

  document.getElementById('reset-all-btn').addEventListener('click', () => {
    if (confirm('WARNING: This will delete ALL saved notes, progress, and history! Continue?')) {
      localStorage.clear();
      location.reload();
    }
  });
}

// Render Subject Grid
function renderSubjects() {
  const container = document.getElementById('subjects-grid');
  container.innerHTML = '';

  Object.keys(SYLLABUS_DATA).forEach(subject => {
    const card = document.createElement('div');
    card.className = 'glass-card';
    card.innerHTML = `
      <h3><i class="fas fa-book"></i> ${subject}</h3>
      <p>${SYLLABUS_DATA[subject].length} CBSE Chapters Available</p>
      <button class="btn btn-primary mt-15 full-width">Explore Chapters</button>
    `;
    card.addEventListener('click', () => showChapters(subject));
    container.appendChild(card);
  });
}

function showChapters(subject) {
  document.getElementById('subjects-grid').classList.add('hidden');
  const chapterView = document.getElementById('chapter-view');
  chapterView.classList.remove('hidden');
  document.getElementById('current-subject-title').innerText = subject;

  const listContainer = document.getElementById('chapters-list');
  listContainer.innerHTML = '';

  SYLLABUS_DATA[subject].forEach(ch => {
    const isDone = state.completedChapters.includes(ch.id);
    const item = document.createElement('div');
    item.className = 'glass-panel mb-10';
    item.style.display = 'flex';
    item.style.justifyContent = 'space-between';
    item.style.alignItems = 'center';

    item.innerHTML = `
      <div>
        <h4>${ch.title} ${isDone ? '✅' : ''}</h4>
        <p><small>${ch.overview}</small></p>
      </div>
      <button class="btn btn-secondary">Read Notes</button>
    `;
    item.querySelector('button').addEventListener('click', () => showChapterContent(ch));
    listContainer.appendChild(item);
  });

  document.getElementById('back-to-subjects').onclick = () => {
    chapterView.classList.add('hidden');
    document.getElementById('subjects-grid').classList.remove('hidden');
  };
}

function showChapterContent(chapter) {
  document.getElementById('chapter-view').classList.add('hidden');
  const contentView = document.getElementById('chapter-content-view');
  contentView.classList.remove('hidden');

  document.getElementById('chapter-content-title').innerText = chapter.title;
  
  let qnaHTML = chapter.qna.map(item => `
    <div style="margin-top: 10px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px;">
      <strong>Q: ${item.q}</strong>
      <p style="margin-top: 5px;">A: ${item.a}</p>
    </div>
  `).join('');

  document.getElementById('chapter-body-text').innerHTML = `
    <p><strong>Overview:</strong> ${chapter.overview}</p>
    <hr style="margin: 15px 0;">
    <h4>Detailed Chapter Notes:</h4>
    <p>${chapter.notes}</p>
    <hr style="margin: 15px 0;">
    <h4>Important Q&A:</h4>
    ${qnaHTML}
  `;

  const completeBtn = document.getElementById('mark-chapter-complete-btn');
  completeBtn.onclick = () => {
    if (!state.completedChapters.includes(chapter.id)) {
      state.completedChapters.push(chapter.id);
      localStorage.setItem(KEYS.PROGRESS, JSON.stringify(state.completedChapters));
      alert('Chapter marked as Completed!');
      updateProgressUI();
    }
  };

  document.getElementById('back-to-chapters').onclick = () => {
    contentView.classList.add('hidden');
    document.getElementById('chapter-view').classList.remove('hidden');
  };
}

// Flashcard Renderer
function renderFlashcard() {
  const card = FLASHCARDS[state.currentFlashcardIndex];
  document.getElementById('flashcard').classList.remove('flipped');
  document.getElementById('flashcard-tag').innerText = card.subject;
  document.getElementById('flashcard-question').innerText = card.q;
  document.getElementById('flashcard-answer').innerText = card.a;
  document.getElementById('card-counter').innerText = `${state.currentFlashcardIndex + 1} / ${FLASHCARDS.length}`;
}

// Notes Section Functions
function saveNote() {
  const title = document.getElementById('note-title-input').value.trim();
  const subject = document.getElementById('note-subject-input').value;
  const content = document.getElementById('note-text-input').value.trim();

  if (!title || !content) {
    alert('Please provide both title and note content.');
    return;
  }

  const newNote = {
    id: 'note_' + Date.now(),
    title,
    subject,
    content,
    date: new Date().toLocaleDateString()
  };

  state.notes.unshift(newNote);
  localStorage.setItem(KEYS.NOTES, JSON.stringify(state.notes));
  
  document.getElementById('note-title-input').value = '';
  document.getElementById('note-text-input').value = '';
  document.getElementById('note-modal').classList.add('hidden');
  renderNotes();
}

function renderNotes() {
  const grid = document.getElementById('notes-grid');
  grid.innerHTML = '';

  if (state.notes.length === 0) {
    grid.innerHTML = '<p>No personal notes saved yet. Click "Create Note" to add one.</p>';
    return;
  }

  state.notes.forEach(note => {
    const card = document.createElement('div');
    card.className = 'glass-card';
    card.innerHTML = `
      <small style="color: var(--accent-color)">${note.subject} • ${note.date}</small>
      <h3 style="margin: 5px 0;">${note.title}</h3>
      <p style="font-size: 0.9rem; color: var(--text-muted);">${note.content}</p>
      <div style="margin-top: 15px; display: flex; gap: 10px;">
        <button class="btn btn-secondary export-btn"><i class="fas fa-download"></i> TXT</button>
        <button class="btn btn-danger delete-btn"><i class="fas fa-trash"></i></button>
      </div>
    `;

    card.querySelector('.delete-btn').onclick = () => {
      if (confirm('Delete this note?')) {
        state.notes = state.notes.filter(n => n.id !== note.id);
        localStorage.setItem(KEYS.NOTES, JSON.stringify(state.notes));
        renderNotes();
      }
    };

    card.querySelector('.export-btn').onclick = () => {
      const blob = new Blob([`${note.title}\nSubject: ${note.subject}\nDate: ${note.date}\n\n${note.content}`], { type: 'text/plain' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `${note.title.replace(/\s+/g, '_')}.txt`;
      a.click();
    };

    grid.appendChild(card);
  });
}

// Progress Analytics
function updateProgressUI() {
  let totalChapters = 0;
  Object.keys(SYLLABUS_DATA).forEach(sub => totalChapters += SYLLABUS_DATA[sub].length);
  const doneCount = state.completedChapters.length;

  document.getElementById('completed-chapters-count').innerText = `${doneCount} / ${totalChapters}`;
  const pct = totalChapters > 0 ? Math.round((doneCount / totalChapters) * 100) : 0;
  document.getElementById('overall-progress-percentage').innerText = `${pct}%`;
}
