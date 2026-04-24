// ════════════════════════════════════════
//  notes.js — 學習筆記：新增/編輯/刪除、篩選、渲染
// ════════════════════════════════════════

let curNoteType = 'all';   // 類型篩選
let curNotePart = 'all';   // Part 篩選

// ── Modal 開關 ──
function openNoteModal(id = null) {
  editNoteId = id;
  if (id) {
    const n = notes.find(x => x.id === id);
    document.getElementById('n-type').value  = n.type;
    document.getElementById('n-part').value  = n.part;
    document.getElementById('n-title').value = n.title;
    document.getElementById('n-body').value  = n.body;
    document.getElementById('n-tip').value   = n.tip || '';
    document.getElementById('n-hard').value  = n.hard ? 'yes' : 'no';
    document.getElementById('noteModalTitle').textContent = '編輯筆記';
  } else {
    ['n-title','n-body','n-tip'].forEach(i => document.getElementById(i).value = '');
    document.getElementById('n-type').value = 'listen';
    document.getElementById('n-part').value = 'Part 1';
    document.getElementById('n-hard').value = 'no';
    document.getElementById('noteModalTitle').textContent = '新增筆記';
  }
  document.getElementById('ovNote').classList.add('show');
}

// ── 儲存 ──
function saveNote() {
  const title = document.getElementById('n-title').value.trim();
  if (!title) { alert('請填寫標題！'); return; }

  const existing = editNoteId ? notes.find(x => x.id === editNoteId) : null;
  const n = {
    id:   editNoteId || Date.now().toString(),
    type: document.getElementById('n-type').value,
    part: document.getElementById('n-part').value,
    title,
    body: document.getElementById('n-body').value.trim(),
    tip:  document.getElementById('n-tip').value.trim(),
    hard: document.getElementById('n-hard').value === 'yes',
    date: existing ? existing.date : new Date().toISOString(),
  };

  if (editNoteId) notes[notes.findIndex(x => x.id === editNoteId)] = n;
  else            notes.unshift(n);

  persist();
  closeOv('ovNote');
  renderNotes();
  renderDash();
}

// ── 刪除 ──
function deleteNote(id) {
  if (!confirm('刪除此筆記？')) return;
  notes = notes.filter(x => x.id !== id);
  persist();
  renderNotes();
  renderDash();
}

// ── 類型篩選 ──
function setNoteType(f, btn) {
  curNoteType = f;
  document.querySelectorAll('#noteTypeFilters button').forEach(b => {
    b.style.borderColor = '';
    b.style.color       = '';
    b.style.background  = '';
  });
  btn.style.borderColor = 'var(--gold)';
  btn.style.color       = 'var(--gold)';
  renderNotes();
}

// ── Part 篩選 ──
function setNotePart(p, btn) {
  curNotePart = p;
  document.querySelectorAll('#notePartFilters button').forEach(b => {
    b.style.borderColor = '';
    b.style.color       = '';
  });
  btn.style.borderColor = 'var(--blue)';
  btn.style.color       = 'var(--blue)';
  renderNotes();
}

// ── 渲染 ──
function renderNotes() {
  const list = notes.filter(n => {
    if (curNoteType !== 'all' && n.type !== curNoteType) return false;
    if (curNotePart !== 'all' && n.part !== curNotePart) return false;
    return true;
  });

  const c = document.getElementById('notesList');
  const e = document.getElementById('notesEmpty');
  if (!list.length) { c.innerHTML = ''; e.style.display = 'block'; return; }
  e.style.display = 'none';

  const typeColor = { listen:'var(--red)', read:'var(--blue)', grammar:'var(--green)', vocab:'var(--gold)' };
  const typeLabel = { listen:'聽力', read:'閱讀', grammar:'文法', vocab:'單字' };

  c.innerHTML = list.map(n => `
    <div class="note-card ${n.type}">
      <div class="note-top">
        <span class="tag" style="background:rgba(255,255,255,.05);color:${typeColor[n.type]};border:1px solid ${typeColor[n.type]}33">${typeLabel[n.type]}</span>
        <span class="tag tag-blue">${n.part}</span>
        ${n.hard ? '<span class="tag tag-red">⚑ 困難</span>' : ''}
      </div>
      <div class="note-title">${esc(n.title)}</div>
      ${n.body ? `<div class="note-body">${esc(n.body)}</div>` : ''}
      <div class="note-footer">
        <span class="note-tip">${n.tip ? '💡 ' + esc(n.tip) : ''}</span>
        <div class="card-actions">
          <button class="icon-btn"     onclick="openNoteModal('${n.id}')">✏️</button>
          <button class="icon-btn del" onclick="deleteNote('${n.id}')">🗑</button>
        </div>
      </div>
    </div>`).join('');
}
