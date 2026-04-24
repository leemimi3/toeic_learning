// ════════════════════════════════════════
//  roots.js — 字根字首：列表模式、卡片模式、渲染
// ════════════════════════════════════════

const list=document.getElementById('rootsList');
  list.innerHTML=ROOTS.map(r=>`
    <div class="root-item ${selectedRoot===r.id?'selected':''}" onclick="showRoot('${r.id}')">
      <div class="root-item-left">
        <div class="root-name">${r.name}</div>
        <div class="root-mean">${r.meaning}</div>
      </div>
      <span class="root-count">${r.words.length}</span>
    </div>`).join('');
  if(selectedRoot)showRoot(selectedRoot);
}

function showRoot(id){
  selectedRoot=id;
  const r=ROOTS.find(x=>x.id===id);
  if(!r)return;
  document.querySelectorAll('.root-item').forEach(el=>el.classList.remove('selected'));
  document.querySelectorAll('.root-item').forEach(el=>{if(el.onclick.toString().includes(`'${id}'`))el.classList.add('selected');});

  function hlWord(word,hl){
    const i=word.toLowerCase().indexOf(hl.toLowerCase());
    if(i<0)return esc(word);
    return esc(word.slice(0,i))+'<span class="rw-highlight">'+esc(word.slice(i,i+hl.length))+'</span>'+esc(word.slice(i+hl.length));
  }

  document.getElementById('rootDetail').innerHTML=`
    <div class="root-detail-name">${r.name}</div>
    <div class="root-detail-meaning">意義：${r.meaning}</div>
    <div class="root-detail-origin">來源：${r.origin}</div>
    <div class="root-words">
      ${r.words.map(w=>`<div class="root-word-row">
        <div class="rw-word">
          ${hlWord(w.w,w.hl)}
          <button class="speak-btn-sm" onclick="speak('${w.w}')">🔊</button>
        </div>
        <div class="rw-meaning">${esc(w.meaning)}</div>
      </div>`).join('')}
    </div>`;
}

// ── ROOT FLASHCARD functions ──
function rfcBuildOrder(){ rfcOrder=ROOTS.map((_,i)=>i); rfcIdx=0; }
function rfcShuffle(){
  for(let i=rfcOrder.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[rfcOrder[i],rfcOrder[j]]=[rfcOrder[j],rfcOrder[i]];}
  rfcIdx=0; rfcShow();
}
function rfcReset(){ rfcBuildOrder(); rfcShow(); }
function rfcFlip(){ document.getElementById('rfcInner').classList.toggle('flipped'); }
function rfcNext(){ if(rfcIdx<rfcOrder.length-1){rfcIdx++;rfcShow();} }
function rfcPrev(){ if(rfcIdx>0){rfcIdx--;rfcShow();} }

function rfcShow(){
  document.getElementById('rfcInner').classList.remove('flipped');
  const tot=rfcOrder.length;
  document.getElementById('rfcCounter').textContent=`${rfcIdx+1} / ${tot}`;
  document.getElementById('rfcBar').style.width=`${((rfcIdx+1)/tot)*100}%`;
  document.getElementById('rfcPrev').disabled=rfcIdx===0;
  document.getElementById('rfcNext').disabled=rfcIdx>=tot-1;

  const r=ROOTS[rfcOrder[rfcIdx]];
  document.getElementById('rfcRoot').textContent=r.name;
  document.getElementById('rfcOrigin').textContent=r.origin;
  document.getElementById('rfcMeaning').textContent=r.meaning;
  // show 3 sample words as chips on back
  document.getElementById('rfcWordsPreview').innerHTML=r.words.slice(0,3).map(w=>`<span class="rfc-word-chip">${w.w}</span>`).join('');
  // word list below
  function hlWord(word,hl){
    const i=word.toLowerCase().indexOf(hl.toLowerCase());
    if(i<0)return esc(word);
    return esc(word.slice(0,i))+'<span class="rw-highlight">'+esc(word.slice(i,i+hl.length))+'</span>'+esc(word.slice(i+hl.length));
  }
  document.getElementById('rfcWordlistBody').innerHTML=r.words.map(w=>`
    <div class="rfc-wordlist-row">
      <span class="rfc-wl-word">${hlWord(w.w,w.hl)} <button class="speak-btn-sm" onclick="speak('${w.w}')">🔊</button></span>
      <span class="rfc-wl-meaning">${esc(w.meaning)}</span>
    </div>`).join('');
}

// keyboard for card mode
document.addEventListener('keydown',e=>{
  if(rootMode!=='card')return;
  if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName))return;
  if(e.key==='ArrowRight')rfcNext();
  else if(e.key==='ArrowLeft')rfcPrev();
  else if(e.key===' '){e.preventDefault();rfcFlip();}
});