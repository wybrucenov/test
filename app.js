// ============= 状态 =============
let currentQ = 0;
let scores = {};
let resultId = null;
const PERSONALITY_KEYS = Object.keys(PERSONALITIES);

// ============= 初始化 =============
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-start').addEventListener('click', startQuiz);
  document.getElementById('btn-restart').addEventListener('click', restart);
  document.getElementById('btn-share').addEventListener('click', sharePoster);

  // 调试用 - URL hash 直接展示某结果(开发预览)
  const hash = window.location.hash;
  if (hash && hash.startsWith('#preview=')) {
    const id = hash.replace('#preview=', '');
    if (PERSONALITIES[id]) {
      scores = {}; PERSONALITY_KEYS.forEach(k => scores[k] = 0); scores[id] = 99;
      setTimeout(showResult, 100);
    }
  } else if (hash === '#quiz') {
    setTimeout(startQuiz, 100);
  }
});

// ============= 测试流程 =============
function startQuiz() {
  currentQ = 0;
  scores = {};
  PERSONALITY_KEYS.forEach(k => scores[k] = 0);
  document.getElementById('progress-fill').style.width = '0%';
  showScreen('quiz');
  renderQuestion();
}

function renderQuestion() {
  const q = QUESTIONS[currentQ];
  const num = String(currentQ + 1).padStart(2, '0');
  document.getElementById('quiz-num').textContent = num;
  document.getElementById('progress-fill').style.width = `${((currentQ) / QUESTIONS.length) * 100}%`;
  document.getElementById('quiz-question').textContent = q.q;

  const wrap = document.getElementById('quiz-options');
  wrap.innerHTML = '';
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.textContent = opt.text;
    btn.style.animationDelay = `${idx * 0.05}s`;
    btn.addEventListener('click', () => handleAnswer(opt.scores));
    wrap.appendChild(btn);
  });
}

function handleAnswer(s) {
  Object.entries(s).forEach(([k, v]) => {
    scores[k] = (scores[k] || 0) + v;
  });
  currentQ++;
  if (currentQ >= QUESTIONS.length) {
    document.getElementById('progress-fill').style.width = '100%';
    setTimeout(showResult, 300);
  } else {
    renderQuestion();
  }
}

// ============= 结果 =============
function showResult() {
  // 找最大分
  let maxK = PERSONALITY_KEYS[0], maxV = -1;
  Object.entries(scores).forEach(([k, v]) => { if (v > maxV) { maxV = v; maxK = k; } });
  resultId = maxK;
  const r = PERSONALITIES[maxK];
  const idx = PERSONALITY_KEYS.indexOf(maxK);
  const num = String(idx + 1).padStart(2, '0');

  const numEl = document.getElementById('result-num');
  numEl.textContent = num;
  numEl.setAttribute('data-text', num);

  document.getElementById('figure-emoji').textContent = r.emoji;
  document.getElementById('figure-circle').style.background = r.color1;
  document.getElementById('result-name').textContent = r.name;
  document.getElementById('result-tagline').textContent = r.tagline;
  document.getElementById('result-desc').textContent = r.desc;
  document.getElementById('result-question').textContent = r.question;
  document.getElementById('result-soulmate').textContent = r.soulmate;
  document.getElementById('result-enemy').textContent = r.enemy;
  document.getElementById('result-date').textContent = formatDate(new Date());

  const tags = document.getElementById('result-tags');
  tags.innerHTML = '';
  r.tags.forEach(t => {
    const s = document.createElement('span');
    s.className = 'tag';
    s.textContent = t;
    tags.appendChild(s);
  });

  showScreen('result');
}

// ============= 屏幕切换 =============
function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(`screen-${name}`).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============= 重新测试 =============
function restart() {
  showScreen('start');
}

// ============= 分享海报 =============
function sharePoster() {
  const card = document.getElementById('result-card');
  const btn = document.getElementById('btn-share');
  const origText = btn.querySelector('span').textContent;
  btn.querySelector('span').textContent = '生 成 中...';
  btn.disabled = true;

  loadHtml2Canvas().then(() => {
    html2canvas(card, {
      backgroundColor: '#FAF4E8',
      scale: 2,
      useCORS: true,
      logging: false
    }).then(canvas => {
      showPosterModal(canvas.toDataURL('image/png'));
    }).catch(err => {
      alert('生成失败,请截图保存');
      console.error(err);
    }).finally(() => {
      btn.querySelector('span').textContent = origText;
      btn.disabled = false;
    });
  });
}

function loadHtml2Canvas() {
  if (typeof html2canvas !== 'undefined') return Promise.resolve();
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

function showPosterModal(dataUrl) {
  const modal = document.createElement('div');
  modal.className = 'poster-modal';
  modal.innerHTML = `
    <div class="modal-mask"></div>
    <div class="modal-box">
      <div class="modal-title">
        <span class="riso-pink" style="color:var(--pink);font-weight:900">长 按 图 片 保 存</span>
      </div>
      <img src="${dataUrl}" class="modal-img" alt="美食人格海报"/>
      <div class="modal-tip">保存后发朋友圈 / 分享给朋友</div>
      <button class="modal-close">关 闭</button>
    </div>
  `;
  document.body.appendChild(modal);
  modal.querySelector('.modal-close').addEventListener('click', () => modal.remove());
  modal.querySelector('.modal-mask').addEventListener('click', () => modal.remove());
}

// ============= 工具 =============
function formatDate(d) {
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
}

// ============= 注入模态样式 =============
const modalStyle = document.createElement('style');
modalStyle.textContent = `
  .poster-modal {
    position: fixed;
    inset: 0;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    animation: fadeIn 0.3s ease;
  }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  .modal-mask {
    position: absolute;
    inset: 0;
    background: rgba(26, 26, 62, 0.85);
    backdrop-filter: blur(4px);
  }
  .modal-box {
    position: relative;
    background: var(--paper);
    border: 3px solid var(--dark);
    box-shadow: 8px 8px 0 var(--pink);
    padding: 20px;
    max-width: 380px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    animation: popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  @keyframes popIn { from { transform: scale(0.7); opacity: 0; } to { transform: scale(1); opacity: 1; } }
  .modal-title {
    text-align: center;
    font-size: 16px;
    margin-bottom: 14px;
    padding-bottom: 12px;
    border-bottom: 2px dashed var(--dark);
    letter-spacing: 2px;
  }
  .modal-img {
    width: 100%;
    height: auto;
    display: block;
    border: 2px solid var(--dark);
    margin-bottom: 12px;
  }
  .modal-tip {
    text-align: center;
    font-size: 12px;
    color: var(--dark);
    opacity: 0.6;
    margin-bottom: 14px;
  }
  .modal-close {
    display: block;
    width: 100%;
    padding: 12px;
    background: var(--cyan);
    border: 2.5px solid var(--dark);
    font-family: inherit;
    font-weight: 900;
    font-size: 14px;
    letter-spacing: 4px;
    color: var(--dark);
    cursor: pointer;
  }
  .modal-close:active { transform: translate(2px, 2px); }
`;
document.head.appendChild(modalStyle);