/* ==========================================================
   Quiz STS-01 / STS-02 — logika
   Wszystko w 100% w przeglądarce (localStorage).
   ========================================================== */
'use strict';

// ===================== STAŁE =====================
const STORAGE = {
  current: 'sts_quiz_current',
  history: 'sts_quiz_history',
  settings: 'sts_quiz_settings',
};

const CATEGORIES = {
  'przepisy':         { name: 'Przepisy lotnicze',                          weight: 20 },
  'procedury':        { name: 'Procedury operacyjne',                       weight: 20 },
  'ryzyko-ziemia':    { name: 'Ryzyko na ziemi',                            weight: 20 },
  'systemy-bsp':      { name: 'Systemy BSP',                                weight: 10 },
  'osiagi':           { name: 'Osiągi BSP w locie',                         weight: 10 },
  'ryzyko-powietrze': { name: 'Ryzyko w powietrzu',                         weight: 10 },
  'czlowiek':         { name: 'Ograniczenia człowieka',                     weight: 5  },
  'meteo':            { name: 'Meteorologia',                               weight: 5  },
};

const PASS_THRESHOLD = 0.75;

// Globalny stan UI (nie zapisywany w localStorage)
const UI = {
  numQuestions: 40,
  mode: 'exam',                // 'exam' | 'study'
  shuffleOptions: true,
  selectedCategories: Object.keys(CATEGORIES),  // domyślnie wszystkie
  reviewFilter: 'all',          // 'all' | 'wrong' | 'right'
  timerInterval: null,
};

// ===================== UTILS =====================
function $(sel) { return document.querySelector(sel); }
function $all(sel) { return Array.from(document.querySelectorAll(sel)); }

function shuffle(array) {
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatTime(ms) {
  const sec = Math.floor(ms / 1000);
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('pl-PL', { day: '2-digit', month: '2-digit', year: 'numeric' })
       + ' ' + d.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' });
}

function letterFor(i) { return ['A', 'B', 'C', 'D', 'E', 'F'][i] || '?'; }

// ===================== STORAGE =====================
function loadCurrent() {
  try {
    const raw = localStorage.getItem(STORAGE.current);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

function saveCurrent(state) {
  localStorage.setItem(STORAGE.current, JSON.stringify(state));
}

function clearCurrent() {
  localStorage.removeItem(STORAGE.current);
}

function loadHistory() {
  try {
    const raw = localStorage.getItem(STORAGE.history);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

function saveHistory(arr) {
  localStorage.setItem(STORAGE.history, JSON.stringify(arr));
}

function loadSettings() {
  try {
    const raw = localStorage.getItem(STORAGE.settings);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

function saveSettings() {
  localStorage.setItem(STORAGE.settings, JSON.stringify({
    numQuestions: UI.numQuestions,
    mode: UI.mode,
    shuffleOptions: UI.shuffleOptions,
    selectedCategories: UI.selectedCategories,
  }));
}

// ===================== POOL / LOSOWANIE =====================
function poolByCategory() {
  const result = {};
  for (const cat of Object.keys(CATEGORIES)) result[cat] = [];
  for (const q of QUESTIONS) {
    if (result[q.category]) result[q.category].push(q);
  }
  return result;
}

function selectQuestions(total, selectedCats) {
  const pool = poolByCategory();
  // Suma wag dla wybranych kategorii (proporcjonalnie)
  let totalWeight = 0;
  for (const cat of selectedCats) totalWeight += CATEGORIES[cat].weight;

  // Ile pytań z każdej kategorii (zaokrąglenie w górę zgodnie z wytycznymi ULC § 14 ust. 4)
  const plan = {};
  let allocated = 0;
  for (const cat of selectedCats) {
    const ideal = (CATEGORIES[cat].weight / totalWeight) * total;
    plan[cat] = Math.min(pool[cat].length, Math.max(1, Math.ceil(ideal)));
    allocated += plan[cat];
  }

  // Korekta jeśli przekroczyliśmy total
  while (allocated > total) {
    // odejmij z najliczniejszej (po jednym) — ale nigdy poniżej 1
    let maxCat = null, maxN = 0;
    for (const cat of selectedCats) {
      if (plan[cat] > 1 && plan[cat] > maxN) { maxCat = cat; maxN = plan[cat]; }
    }
    if (!maxCat) break;
    plan[maxCat]--; allocated--;
  }

  // Jeśli mamy mniej (np. bo pula za mała) — dobieramy z największej puli rezerwy
  while (allocated < total) {
    let bestCat = null, bestReserve = 0;
    for (const cat of selectedCats) {
      const reserve = pool[cat].length - plan[cat];
      if (reserve > bestReserve) { bestReserve = reserve; bestCat = cat; }
    }
    if (!bestCat) break;
    plan[bestCat]++; allocated++;
  }

  // Losujemy konkretne pytania
  const selected = [];
  for (const cat of selectedCats) {
    const shuffled = shuffle(pool[cat]);
    for (let i = 0; i < plan[cat] && i < shuffled.length; i++) selected.push(shuffled[i]);
  }
  return shuffle(selected);
}

// ===================== INIT / NAVIGATION =====================
function show(screen) {
  $all('.screen').forEach(el => el.classList.add('hidden'));
  $('#screen-' + screen).classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function init() {
  // Wczytaj zapisane ustawienia
  const settings = loadSettings();
  if (settings) {
    UI.numQuestions = settings.numQuestions || 40;
    UI.mode = settings.mode || 'exam';
    UI.shuffleOptions = settings.shuffleOptions !== false;
    if (Array.isArray(settings.selectedCategories) && settings.selectedCategories.length) {
      UI.selectedCategories = settings.selectedCategories.filter(c => CATEGORIES[c]);
    }
  }

  // Pool size
  $('#pool-size').textContent = QUESTIONS.length;

  // Render chips
  syncNumChips();
  syncModeChips();
  renderCategoryGrid();
  $('#shuffle-options').checked = UI.shuffleOptions;

  bindEvents();

  // Resume?
  const current = loadCurrent();
  if (current && current.questions && !current.finished) {
    const answered = current.answers.filter(a => a !== null).length;
    $('#resume-info').textContent =
      `Rozpoczęty ${formatDate(current.startedAt)}, ${answered}/${current.questions.length} odpowiedzi.`;
    $('#resume-card').classList.remove('hidden');
  }

  show('start');
}

function syncNumChips() {
  $all('#num-chips .chip').forEach(c => {
    c.classList.toggle('chip-active', parseInt(c.dataset.num) === UI.numQuestions);
  });
  $('#num-questions').value = UI.numQuestions;
}

function syncModeChips() {
  $all('#mode-chips .chip').forEach(c => {
    c.classList.toggle('chip-active', c.dataset.mode === UI.mode);
  });
}

function renderCategoryGrid() {
  const grid = $('#category-grid');
  grid.innerHTML = '';
  const counts = poolByCategory();
  for (const [cat, meta] of Object.entries(CATEGORIES)) {
    const id = 'cat-' + cat;
    const checked = UI.selectedCategories.includes(cat);
    const div = document.createElement('label');
    div.className = 'cat-item';
    div.innerHTML = `
      <input type="checkbox" id="${id}" data-cat="${cat}" ${checked ? 'checked' : ''}>
      <span class="cat-item-info">
        <span class="cat-item-name">${meta.name}</span>
        <span class="cat-item-meta">${meta.weight}% egzaminu · ${counts[cat].length} pytań w puli</span>
      </span>
    `;
    grid.appendChild(div);
  }
}

function bindEvents() {
  // Number chips
  $all('#num-chips .chip').forEach(c => {
    c.addEventListener('click', () => {
      UI.numQuestions = parseInt(c.dataset.num);
      syncNumChips();
      saveSettings();
    });
  });

  // Mode chips
  $all('#mode-chips .chip').forEach(c => {
    c.addEventListener('click', () => {
      UI.mode = c.dataset.mode;
      syncModeChips();
      saveSettings();
    });
  });

  // Category checkboxes (event delegation)
  $('#category-grid').addEventListener('change', e => {
    if (e.target.matches('input[data-cat]')) {
      const cat = e.target.dataset.cat;
      if (e.target.checked) {
        if (!UI.selectedCategories.includes(cat)) UI.selectedCategories.push(cat);
      } else {
        UI.selectedCategories = UI.selectedCategories.filter(c => c !== cat);
        if (UI.selectedCategories.length === 0) {
          alert('Musisz wybrać co najmniej jedną dziedzinę.');
          e.target.checked = true;
          UI.selectedCategories.push(cat);
        }
      }
      saveSettings();
    }
  });

  $('#shuffle-options').addEventListener('change', e => {
    UI.shuffleOptions = e.target.checked;
    saveSettings();
  });

  // Start / Resume / Abandon
  $('#btn-start').addEventListener('click', startNewTest);
  $('#btn-resume').addEventListener('click', resumeTest);
  $('#btn-abandon').addEventListener('click', () => {
    confirmDialog('Porzucić niedokończony test?',
      'Stracisz odpowiedzi z bieżącego podejścia. Tej operacji nie da się cofnąć.',
      () => { clearCurrent(); $('#resume-card').classList.add('hidden'); }
    );
  });

  // Quiz controls
  $('#btn-prev').addEventListener('click', () => navigateQuiz(-1));
  $('#btn-next').addEventListener('click', () => navigateQuiz(+1));
  $('#btn-skip').addEventListener('click', () => navigateQuiz(+1));
  $('#btn-finish').addEventListener('click', tryFinish);

  // Result screen
  $('#btn-new-test').addEventListener('click', () => { show('start'); });
  $all('#screen-result [data-filter]').forEach(c => {
    c.addEventListener('click', () => {
      UI.reviewFilter = c.dataset.filter;
      $all('#screen-result [data-filter]').forEach(b =>
        b.classList.toggle('chip-active', b.dataset.filter === UI.reviewFilter));
      renderReview();
    });
  });

  // History
  $('#btn-history').addEventListener('click', () => { renderHistory(); show('history'); });
  $('#btn-history-back').addEventListener('click', () => show('start'));
  $('#btn-clear-history').addEventListener('click', () => {
    confirmDialog('Wyczyścić historię?',
      'Wszystkie zapisane wyniki zostaną usunięte.',
      () => { saveHistory([]); renderHistory(); });
  });

  // Modal
  $('#modal-cancel').addEventListener('click', closeModal);
  $('#modal-overlay').addEventListener('click', e => {
    if (e.target === $('#modal-overlay')) closeModal();
  });

  // Keyboard shortcuts (during quiz)
  document.addEventListener('keydown', onKeydown);
}

function onKeydown(e) {
  // Modal otwarty → nie ruszaj quizu skrótami (Enter ma kliknąć OK w modalu)
  if (!$('#modal-overlay').classList.contains('hidden')) {
    if (e.key === 'Escape') closeModal();
    return;
  }
  if ($('#screen-quiz').classList.contains('hidden')) return;
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if (e.key >= '1' && e.key <= '4') {
    const idx = parseInt(e.key) - 1;
    const btn = $all('.option')[idx];
    if (btn && !btn.disabled && !btn.classList.contains('option-locked')) btn.click();
  }
  if (e.key === 'ArrowLeft') $('#btn-prev').click();
  if (e.key === 'ArrowRight' || e.key === 'Enter') $('#btn-next').click();
}

// ===================== START / RESUME =====================
function startNewTest() {
  if (UI.selectedCategories.length === 0) {
    alert('Wybierz co najmniej jedną dziedzinę.');
    return;
  }
  // Sprawdź czy mamy wystarczająco pytań
  const availableInSelected = UI.selectedCategories.reduce((sum, cat) => {
    return sum + QUESTIONS.filter(q => q.category === cat).length;
  }, 0);
  const target = Math.min(UI.numQuestions, availableInSelected);

  const questions = selectQuestions(target, UI.selectedCategories);

  // Mieszanie opcji
  const enrichedQuestions = questions.map(q => {
    const orderIdx = q.options.map((_, i) => i);
    const order = UI.shuffleOptions ? shuffle(orderIdx) : orderIdx;
    return {
      id: q.id,
      category: q.category,
      question: q.question,
      options: order.map(i => q.options[i]),
      correct: order.indexOf(q.correct),     // nowy indeks poprawnej w shuffled order
      explanation: q.explanation || '',
    };
  });

  const state = {
    startedAt: new Date().toISOString(),
    finishedAt: null,
    finished: false,
    mode: UI.mode,
    questions: enrichedQuestions,
    answers: enrichedQuestions.map(() => null),
    currentIndex: 0,
    elapsedMs: 0,         // suma czasu spędzonego (offset, gdy wracasz po przerwie)
    lastStartedAt: Date.now(),
  };
  saveCurrent(state);
  $('#resume-card').classList.add('hidden');
  enterQuiz(state);
}

function resumeTest() {
  const state = loadCurrent();
  if (!state || !state.questions) {
    alert('Brak niedokończonego testu.');
    $('#resume-card').classList.add('hidden');
    return;
  }
  // Reset timera offset
  state.lastStartedAt = Date.now();
  saveCurrent(state);
  enterQuiz(state);
}

function enterQuiz(state) {
  startTimer(state);
  renderQuestion(state);
  show('quiz');
}

// ===================== QUIZ RENDER =====================
function renderQuestion(state) {
  const q = state.questions[state.currentIndex];
  const isStudy = state.mode === 'study';
  const answer = state.answers[state.currentIndex];
  const answered = answer !== null;

  $('#q-category').textContent = CATEGORIES[q.category].name;
  $('#q-progress-text').textContent = `Pytanie ${state.currentIndex + 1} z ${state.questions.length}`;
  $('#q-text').textContent = q.question;

  // Progress bar — % udzielonych odpowiedzi
  const answeredCount = state.answers.filter(a => a !== null).length;
  $('#q-progress-fill').style.width = ((answeredCount / state.questions.length) * 100) + '%';

  // Opcje
  const optionsHtml = q.options.map((opt, i) => {
    let cls = 'option';
    if (answered) {
      cls += ' option-locked';
      if (isStudy) {
        if (i === q.correct) cls += ' option-correct';
        else if (i === answer) cls += ' option-wrong';
      } else {
        if (i === answer) cls += ' option-selected';
      }
    } else if (i === answer) {
      cls += ' option-selected';
    }
    return `
      <button type="button" class="${cls}" data-idx="${i}">
        <span class="option-letter">${letterFor(i)}</span>
        <span>${escapeHtml(opt)}</span>
      </button>
    `;
  }).join('');
  $('#q-options').innerHTML = optionsHtml;

  $all('#q-options .option').forEach(btn => {
    btn.addEventListener('click', () => onAnswer(parseInt(btn.dataset.idx)));
  });

  // Feedback (tylko w trybie nauki, po odpowiedzi)
  const fb = $('#q-feedback');
  if (isStudy && answered) {
    const correct = answer === q.correct;
    fb.className = 'feedback ' + (correct ? 'feedback-correct' : 'feedback-wrong');
    fb.innerHTML = `
      <strong>${correct ? '✓ Poprawnie!' : '✗ Niepoprawnie'}</strong>
      ${correct ? '' : `Poprawna odpowiedź: <strong>${letterFor(q.correct)}</strong>.`}
      ${q.explanation ? `<div style="margin-top:.5rem;">${escapeHtml(q.explanation)}</div>` : ''}
    `;
    fb.classList.remove('hidden');
  } else {
    fb.classList.add('hidden');
  }

  // Kontrolki
  $('#btn-prev').disabled = state.currentIndex === 0;
  const isLast = state.currentIndex === state.questions.length - 1;
  $('#btn-next').textContent = isLast ? 'Ostatnie ✓' : 'Następne →';

  renderOverview(state);
  updateUnanswered(state);
}

function onAnswer(idx) {
  const state = loadCurrent();
  if (!state) return;
  state.answers[state.currentIndex] = idx;
  saveCurrent(state);
  renderQuestion(state);
}

function navigateQuiz(delta) {
  const state = loadCurrent();
  if (!state) return;
  const next = state.currentIndex + delta;
  if (next < 0) return;
  if (next >= state.questions.length) {
    // Klik "Next" na ostatnim pytaniu — propozycja zakończenia
    tryFinish();
    return;
  }
  state.currentIndex = next;
  saveCurrent(state);
  renderQuestion(state);
}

function renderOverview(state) {
  const grid = $('#q-overview-grid');
  grid.innerHTML = '';
  const isStudy = state.mode === 'study';
  state.questions.forEach((q, i) => {
    let cls = 'overview-cell';
    if (i === state.currentIndex) cls += ' overview-cell-current';
    else if (state.answers[i] !== null) {
      if (isStudy) {
        cls += state.answers[i] === q.correct ? ' overview-cell-correct' : ' overview-cell-wrong';
      } else {
        cls += ' overview-cell-answered';
      }
    }
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = cls;
    btn.textContent = i + 1;
    btn.addEventListener('click', () => {
      const s = loadCurrent();
      if (!s) return;
      s.currentIndex = i;
      saveCurrent(s);
      renderQuestion(s);
    });
    grid.appendChild(btn);
  });
}

function updateUnanswered(state) {
  const n = state.answers.filter(a => a === null).length;
  $('#unanswered-count').textContent = n;
}

// ===================== TIMER =====================
function startTimer(state) {
  stopTimer();
  state.lastStartedAt = Date.now();
  saveCurrent(state);
  UI.timerInterval = setInterval(() => {
    const s = loadCurrent();
    if (!s) { stopTimer(); return; }
    const total = s.elapsedMs + (Date.now() - s.lastStartedAt);
    $('#q-timer').textContent = formatTime(total);
  }, 1000);
}

function stopTimer() {
  if (UI.timerInterval) clearInterval(UI.timerInterval);
  UI.timerInterval = null;
}

function persistElapsed(state) {
  state.elapsedMs += Date.now() - state.lastStartedAt;
  state.lastStartedAt = Date.now();
  saveCurrent(state);
}

// ===================== FINISH =====================
function tryFinish() {
  const state = loadCurrent();
  if (!state) return;
  const unanswered = state.answers.filter(a => a === null).length;
  const msg = unanswered > 0
    ? `Masz <strong>${unanswered}</strong> nieodpowiedziane pytania. Zakończyć i sprawdzić wynik?`
    : 'Wszystkie pytania mają odpowiedzi. Zakończyć test i sprawdzić wynik?';
  confirmDialog('Zakończyć test?', msg, () => finishTest());
}

function finishTest() {
  const state = loadCurrent();
  if (!state) return;
  state.finished = true;
  state.finishedAt = new Date().toISOString();
  persistElapsed(state);
  state.lastStartedAt = null;
  saveCurrent(state);
  stopTimer();

  // Dopisz do historii
  const history = loadHistory();
  const score = computeScore(state);
  history.unshift({
    id: 'h_' + Date.now(),
    startedAt: state.startedAt,
    finishedAt: state.finishedAt,
    elapsedMs: state.elapsedMs,
    numQuestions: state.questions.length,
    correct: score.correct,
    percent: score.percent,
    passed: score.percent >= PASS_THRESHOLD * 100,
    mode: state.mode,
    byCategory: score.byCategory,
  });
  // Trzymamy max 50 historii
  if (history.length > 50) history.length = 50;
  saveHistory(history);

  // Wyczyść aktywny test
  clearCurrent();

  renderResult(state, score);
  show('result');
}

function computeScore(state) {
  let correct = 0;
  const byCat = {};
  for (const cat of Object.keys(CATEGORIES)) {
    byCat[cat] = { total: 0, correct: 0 };
  }
  state.questions.forEach((q, i) => {
    const a = state.answers[i];
    byCat[q.category].total++;
    if (a !== null && a === q.correct) {
      correct++;
      byCat[q.category].correct++;
    }
  });
  const percent = state.questions.length ? Math.round((correct / state.questions.length) * 100) : 0;
  return { correct, total: state.questions.length, percent, byCategory: byCat };
}

// ===================== RESULT SCREEN =====================
let lastResultState = null;
let lastResultScore = null;

function renderResult(state, score) {
  lastResultState = state;
  lastResultScore = score;

  const passed = score.percent >= PASS_THRESHOLD * 100;
  const cls = passed ? 'result-passed' : 'result-failed';
  const badgeCls = passed ? 'result-badge-pass' : 'result-badge-fail';

  $('#result-summary').innerHTML = `
    <div class="result-percent ${cls}">${score.percent}%</div>
    <div class="result-score muted">${score.correct} / ${score.total} poprawnych</div>
    <div class="result-badge ${badgeCls}">${passed ? '✓ ZDANE (≥ 75%)' : '✗ NIEZDANE (< 75%)'}</div>
    <div class="result-meta">
      <span>⏱ ${formatTime(state.elapsedMs)}</span>
      <span>Tryb: ${state.mode === 'exam' ? 'egzaminacyjny' : 'nauki'}</span>
      <span>${formatDate(state.finishedAt)}</span>
    </div>
  `;

  // Wynik wg dziedzin
  const catWrap = $('#result-by-category');
  catWrap.innerHTML = '';
  for (const [cat, data] of Object.entries(score.byCategory)) {
    if (data.total === 0) continue;
    const pct = Math.round((data.correct / data.total) * 100);
    const row = document.createElement('div');
    row.className = 'cat-result-row';
    row.innerHTML = `
      <span class="cat-result-label">${CATEGORIES[cat].name}</span>
      <div class="cat-result-bar"><div class="cat-result-fill" style="width:${pct}%"></div></div>
      <span class="cat-result-score">${data.correct}/${data.total} (${pct}%)</span>
    `;
    catWrap.appendChild(row);
  }

  // Filtr default
  UI.reviewFilter = 'all';
  $all('#screen-result [data-filter]').forEach(b =>
    b.classList.toggle('chip-active', b.dataset.filter === 'all'));
  renderReview();
}

function renderReview() {
  if (!lastResultState) return;
  const state = lastResultState;
  const container = $('#result-review');
  container.innerHTML = '';
  state.questions.forEach((q, i) => {
    const a = state.answers[i];
    const correct = a === q.correct;
    if (UI.reviewFilter === 'wrong' && correct) return;
    if (UI.reviewFilter === 'right' && !correct) return;

    let cls = 'review-item';
    if (a === null) cls += ' review-item-unanswered';
    else if (correct) cls += ' review-item-correct';
    else cls += ' review-item-wrong';

    const div = document.createElement('div');
    div.className = cls;
    div.innerHTML = `
      <div class="review-meta">Pytanie ${i + 1} · ${CATEGORIES[q.category].name}</div>
      <div class="review-question">${escapeHtml(q.question)}</div>
      <div class="review-options">
        ${q.options.map((opt, j) => {
          let optCls = 'review-option';
          if (j === q.correct) optCls += ' review-option-correct';
          if (a === j && a !== q.correct) optCls += ' review-option-user-wrong';
          const marker = j === q.correct
            ? '✓'
            : (a === j ? '✗' : letterFor(j));
          return `<span class="${optCls}"><strong>${marker}</strong> ${escapeHtml(opt)}</span>`;
        }).join('')}
      </div>
      ${a === null ? '<div class="review-explanation">Nie odpowiedziano.</div>' : ''}
      ${q.explanation ? `<div class="review-explanation">${escapeHtml(q.explanation)}</div>` : ''}
    `;
    container.appendChild(div);
  });
  if (container.children.length === 0) {
    container.innerHTML = '<p class="muted">Brak pytań spełniających ten filtr.</p>';
  }
}

// ===================== HISTORY =====================
function renderHistory() {
  const history = loadHistory();
  const list = $('#history-list');
  list.innerHTML = '';
  if (history.length === 0) {
    list.innerHTML = '<div class="history-empty">Brak zapisanych podejść.</div>';
    return;
  }
  history.forEach(h => {
    const row = document.createElement('div');
    row.className = 'history-row';
    row.innerHTML = `
      <span>${formatDate(h.startedAt)}</span>
      <span>${h.correct}/${h.numQuestions}</span>
      <span class="${h.passed ? 'history-pass' : 'history-fail'}">${h.percent}%</span>
      <span>${h.passed ? '✓ zdane' : '✗ niezdane'}</span>
    `;
    list.appendChild(row);
  });
}

// ===================== MODAL =====================
let pendingConfirm = null;

function confirmDialog(title, body, onConfirm) {
  $('#modal-title').textContent = title;
  $('#modal-body').innerHTML = body;
  pendingConfirm = onConfirm;
  $('#modal-confirm').onclick = () => {
    // Najpierw zachowaj referencję — closeModal() zeruje pendingConfirm
    const fn = pendingConfirm;
    closeModal();
    if (typeof fn === 'function') fn();
  };
  $('#modal-overlay').classList.remove('hidden');
}

function closeModal() {
  $('#modal-overlay').classList.add('hidden');
  pendingConfirm = null;
}

// ===================== HELPERS =====================
function escapeHtml(s) {
  if (s == null) return '';
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

// ===================== START =====================
document.addEventListener('DOMContentLoaded', () => {
  if (typeof QUESTIONS === 'undefined' || !Array.isArray(QUESTIONS)) {
    document.body.innerHTML = '<div style="padding:2rem;text-align:center;"><h2>Błąd ładowania bazy pytań</h2><p>Plik <code>questions.js</code> nie został wczytany.</p></div>';
    return;
  }
  init();
});

// Zapisuj elapsed gdy użytkownik zamyka kartę
window.addEventListener('beforeunload', () => {
  const state = loadCurrent();
  if (state && !state.finished && state.lastStartedAt) {
    persistElapsed(state);
  }
});
