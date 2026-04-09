// ─── 記憶荘 顧客管理ポータル ─── app.js

const DATA_URL = 'data/cases.json';
const LS_KEY = 'kiokuso-crm-cases-v1';

// Phase definitions
const PHASES = [
  { label: '初回接触', color: '#333', bg: '#333', text: '#999' },
  { label: '情報収集中', color: '#6aacf0', bg: '#1a2a4a', text: '#6aacf0' },
  { label: '提案準備中', color: '#e0c060', bg: '#3a3010', text: '#e0c060' },
  { label: '提案済み', color: '#e09030', bg: '#3a2810', text: '#e09030' },
  { label: '検討中', color: '#b08ae0', bg: '#2a1a3a', text: '#b08ae0' },
  { label: '見積提出済', color: '#60c0b0', bg: '#1a3a3a', text: '#60c0b0' },
  { label: '成約', color: '#60c070', bg: '#1a3a2a', text: '#60c070' },
  { label: '失注', color: '#e06060', bg: '#3a1a1a', text: '#e06060' },
  { label: '保留', color: '#888', bg: '#2a2a2a', text: '#888' }
];

let cases = [];
let currentSort = { col: 'probability', dir: 'desc' };
let currentFilter = 'all';
let searchQuery = '';
let selectedCase = null;

// ─── DATA ───
async function loadCases() {
  const saved = localStorage.getItem(LS_KEY);
  if (saved) {
    cases = JSON.parse(saved);
    return;
  }
  try {
    const res = await fetch(DATA_URL);
    const data = await res.json();
    cases = data.cases || [];
    saveCases();
  } catch (e) {
    cases = [];
  }
}

function saveCases() {
  localStorage.setItem(LS_KEY, JSON.stringify(cases));
}

// ─── RENDER ───
function renderDashboard() {
  renderKPI();
  renderTable();
  updateClock();
}

function renderKPI() {
  const active = cases.filter(c => c.status === 'active');
  const byPhase = p => cases.filter(c => c.phase === p).length;
  const inProgress = cases.filter(c => !['成約','失注','保留'].includes(c.phase) && c.status === 'active').length;
  const waiting = cases.filter(c => ['情報収集中','初回接触'].includes(c.phase)).length;
  const won = byPhase('成約');
  const totalAmount = active.reduce((s, c) => s + (c.amount || 0), 0);

  document.getElementById('kpi-total').textContent = cases.length;
  document.getElementById('kpi-active').textContent = inProgress;
  document.getElementById('kpi-waiting').textContent = waiting;
  document.getElementById('kpi-won').textContent = won;
  document.getElementById('kpi-amount').textContent = totalAmount;
}

function getFilteredCases() {
  let filtered = [...cases];
  if (currentFilter !== 'all') {
    filtered = filtered.filter(c => c.phase === currentFilter);
  }
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(c =>
      (c.name || '').toLowerCase().includes(q) ||
      (c.shop || '').toLowerCase().includes(q) ||
      (c.type || '').toLowerCase().includes(q) ||
      (c.area || '').toLowerCase().includes(q) ||
      (c.staff || '').toLowerCase().includes(q) ||
      (c.memo || '').toLowerCase().includes(q)
    );
  }
  // Sort
  filtered.sort((a, b) => {
    let va = a[currentSort.col], vb = b[currentSort.col];
    if (typeof va === 'string') va = va.toLowerCase();
    if (typeof vb === 'string') vb = vb.toLowerCase();
    if (va < vb) return currentSort.dir === 'asc' ? -1 : 1;
    if (va > vb) return currentSort.dir === 'asc' ? 1 : -1;
    return 0;
  });
  return filtered;
}

function renderTable() {
  const tbody = document.getElementById('cases-tbody');
  const filtered = getFilteredCases();

  tbody.innerHTML = filtered.map((c, i) => {
    const stars = renderStars(c.probability);
    const pctLabel = c.probability + '%';
    return `<tr data-id="${c.id}" onclick="showDetail('${c.id}')">
      <td class="mono">${c.id}</td>
      <td><strong>${esc(c.name)}</strong></td>
      <td>${esc(c.shop)}</td>
      <td>${esc(c.type)}</td>
      <td>${esc(c.area)}</td>
      <td><span class="phase-tag phase-${c.phase}">${c.phase}</span></td>
      <td><div class="progress-bar"><div class="progress-fill" style="width:${c.progress}%"></div></div></td>
      <td><span class="stars">${stars}</span><span class="prob-pct">${pctLabel}</span></td>
      <td class="num">${c.amount || 0}<span style="font-size:11px;color:var(--text2)">万</span></td>
      <td>${esc(c.staff)}</td>
      <td><a href="staff/${c.id}.html" class="act-btn staff" target="_blank" onclick="event.stopPropagation()">🔒 最新カルテ</a></td>
      <td><a href="proposal/${c.id}.html" class="act-btn proposal" target="_blank" onclick="event.stopPropagation()">📄 最新提案</a></td>
      <td class="mono">${c.updated || ''}</td>
    </tr>`;
  }).join('');

  // Update sort arrows
  document.querySelectorAll('thead th[data-col]').forEach(th => {
    const arrow = th.querySelector('.sort-arrow');
    if (th.dataset.col === currentSort.col) {
      th.classList.add('sorted');
      if (arrow) arrow.textContent = currentSort.dir === 'asc' ? '▲' : '▼';
    } else {
      th.classList.remove('sorted');
      if (arrow) arrow.textContent = '';
    }
  });
}

function renderStars(prob) {
  const level = prob >= 80 ? 5 : prob >= 60 ? 4 : prob >= 40 ? 3 : prob >= 20 ? 2 : 1;
  let s = '';
  for (let i = 1; i <= 5; i++) {
    s += i <= level ? '★' : '<span class="off">☆</span>';
  }
  return s;
}

function esc(str) {
  if (!str) return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ─── CLOCK ───
function updateClock() {
  const el = document.getElementById('clock');
  if (!el) return;
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth()+1).padStart(2,'0');
  const d = String(now.getDate()).padStart(2,'0');
  const h = String(now.getHours()).padStart(2,'0');
  const min = String(now.getMinutes()).padStart(2,'0');
  const sec = String(now.getSeconds()).padStart(2,'0');
  el.textContent = `${y}.${m}.${d} ${h}:${min}:${sec}`;
}
setInterval(updateClock, 1000);

// ─── SORT ───
function sortBy(col) {
  if (currentSort.col === col) {
    currentSort.dir = currentSort.dir === 'asc' ? 'desc' : 'asc';
  } else {
    currentSort.col = col;
    currentSort.dir = 'desc';
  }
  renderTable();
}

// ─── FILTER ───
function filterByPhase(phase) {
  currentFilter = phase;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.phase === phase);
  });
  renderTable();
}

// ─── SEARCH ───
function search(query) {
  searchQuery = query;
  renderTable();
}

// ─── DETAIL PANEL ───
function showDetail(id) {
  selectedCase = cases.find(c => c.id === id);
  if (!selectedCase) return;
  const c = selectedCase;

  document.getElementById('detail-name').textContent = c.name + '　' + c.shop;
  document.getElementById('detail-type').textContent = c.type;
  document.getElementById('detail-area').textContent = c.area;
  document.getElementById('detail-phone').textContent = c.phone || '—';
  document.getElementById('detail-line').textContent = c.line || '—';
  document.getElementById('detail-staff').textContent = c.staff;
  document.getElementById('detail-amount').textContent = (c.amount || 0) + '万円';
  document.getElementById('detail-phase').innerHTML = `<span class="phase-tag phase-${c.phase}">${c.phase}</span>`;
  document.getElementById('detail-progress').value = c.progress || 0;
  document.getElementById('detail-progress-val').textContent = (c.progress || 0) + '%';
  document.getElementById('detail-probability').value = c.probability || 0;
  document.getElementById('detail-probability-val').textContent = (c.probability || 0) + '%';
  document.getElementById('detail-memo').value = c.memo || '';
  document.getElementById('detail-tags').textContent = (c.tags || []).join(', ');

  document.getElementById('detail-karte-link').href = 'staff/' + c.id + '.html';
  document.getElementById('detail-proposal-link').href = 'proposal/' + c.id + '.html';

  document.getElementById('detail-overlay').classList.add('active');
  document.getElementById('detail-panel').classList.add('active');
}

function closeDetail() {
  document.getElementById('detail-overlay').classList.remove('active');
  document.getElementById('detail-panel').classList.remove('active');
  selectedCase = null;
}

function updateDetailField(field, value) {
  if (!selectedCase) return;
  const idx = cases.findIndex(c => c.id === selectedCase.id);
  if (idx === -1) return;
  cases[idx][field] = value;
  cases[idx].updated = todayStr();
  saveCases();
  renderDashboard();
}

function changePhase(newPhase) {
  if (!selectedCase) return;
  updateDetailField('phase', newPhase);
  document.getElementById('detail-phase').innerHTML = `<span class="phase-tag phase-${newPhase}">${newPhase}</span>`;
}

function copyProposalURL(id) {
  const url = location.origin + '/c/proposal/' + (id || selectedCase?.id) + '.html';
  navigator.clipboard.writeText(url).then(() => {
    showToast('提案資料URLをコピーしました');
  });
}

// ─── ADD CASE ───
function openAddModal() {
  document.getElementById('add-modal').classList.add('active');
  document.getElementById('add-form').reset();
  document.getElementById('add-id').value = generateId();
}

function closeAddModal() {
  document.getElementById('add-modal').classList.remove('active');
}

function generateId() {
  const prefix = 'case';
  const num = String(cases.length + 1).padStart(3, '0');
  return prefix + '-' + num;
}

function todayStr() {
  const t = new Date();
  return t.getFullYear() + '-' + String(t.getMonth()+1).padStart(2,'0') + '-' + String(t.getDate()).padStart(2,'0');
}

function addCase(e) {
  e.preventDefault();
  const form = e.target;
  const id = form.querySelector('#add-id').value.trim();
  const pw_staff = id.replace(/-/g,'') + '2026';
  const pw_proposal = id + '-' + form.querySelector('#add-name').value.trim().split(' ')[0].toLowerCase();

  const newCase = {
    id: id,
    name: form.querySelector('#add-name').value.trim(),
    shop: form.querySelector('#add-shop').value.trim(),
    type: form.querySelector('#add-type').value.trim(),
    area: form.querySelector('#add-area').value.trim(),
    phone: form.querySelector('#add-phone').value.trim(),
    line: form.querySelector('#add-line').value.trim(),
    status: 'active',
    phase: form.querySelector('#add-phase').value,
    progress: parseInt(form.querySelector('#add-progress').value) || 0,
    probability: parseInt(form.querySelector('#add-probability').value) || 10,
    amount: parseInt(form.querySelector('#add-amount').value) || 0,
    staff: form.querySelector('#add-staff').value.trim() || 'DAI',
    pw_staff: pw_staff,
    pw_proposal: pw_proposal,
    memo: form.querySelector('#add-memo').value.trim(),
    tags: [],
    created: todayStr(),
    updated: todayStr()
  };

  cases.push(newCase);
  saveCases();
  closeAddModal();
  renderDashboard();
  showToast('案件「' + newCase.shop + '」を追加しました');
}

// ─── DELETE ───
function deleteCase(id) {
  if (!confirm('この案件を削除しますか？')) return;
  cases = cases.filter(c => c.id !== id);
  saveCases();
  closeDetail();
  renderDashboard();
  showToast('案件を削除しました');
}

// ─── CSV EXPORT ───
function exportCSV() {
  const headers = ['ID','顧客名','店舗名','業態','エリア','フェーズ','進捗%','成約可能性%','見込額(万)','担当','メモ','作成日','更新日'];
  const rows = cases.map(c => [
    c.id, c.name, c.shop, c.type, c.area, c.phase,
    c.progress, c.probability, c.amount, c.staff, c.memo,
    c.created, c.updated
  ]);
  const bom = '\uFEFF';
  const csv = bom + [headers, ...rows].map(r => r.map(v => '"' + String(v||'').replace(/"/g,'""') + '"').join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'kiokuso-cases-' + todayStr() + '.csv';
  a.click();
  showToast('CSVをダウンロードしました');
}

// ─── TOAST ───
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2500);
}

// ─── INIT ───
document.addEventListener('DOMContentLoaded', async () => {
  await loadCases();
  renderDashboard();

  // Search
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', e => search(e.target.value));
  }

  // Sort headers
  document.querySelectorAll('thead th[data-col]').forEach(th => {
    th.addEventListener('click', () => sortBy(th.dataset.col));
  });

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => filterByPhase(btn.dataset.phase));
  });

  // Detail sliders
  const progSlider = document.getElementById('detail-progress');
  if (progSlider) {
    progSlider.addEventListener('input', e => {
      document.getElementById('detail-progress-val').textContent = e.target.value + '%';
    });
    progSlider.addEventListener('change', e => {
      updateDetailField('progress', parseInt(e.target.value));
    });
  }
  const probSlider = document.getElementById('detail-probability');
  if (probSlider) {
    probSlider.addEventListener('input', e => {
      document.getElementById('detail-probability-val').textContent = e.target.value + '%';
    });
    probSlider.addEventListener('change', e => {
      updateDetailField('probability', parseInt(e.target.value));
    });
  }

  // Detail memo
  const memoArea = document.getElementById('detail-memo');
  if (memoArea) {
    memoArea.addEventListener('change', e => {
      updateDetailField('memo', e.target.value);
    });
  }

  // Add form
  const addForm = document.getElementById('add-form');
  if (addForm) {
    addForm.addEventListener('submit', addCase);
  }
});
