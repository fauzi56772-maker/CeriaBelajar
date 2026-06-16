/* ============================================================
   CERIABELAJAR - script.js
   Platform Edukasi Interaktif Anak Indonesia
   ============================================================ */

'use strict';

/* ============================================================
   1. DATA & CONSTANTS
   ============================================================ */

const HURUF_DATA = [
  { huruf: 'A', emoji: '🐔', kata: 'Ayam' },
  { huruf: 'B', emoji: '⚽', kata: 'Bola' },
  { huruf: 'C', emoji: '🍒', kata: 'Ceri' },
  { huruf: 'D', emoji: '🍏', kata: 'Durian' },
  { huruf: 'E', emoji: '🦅', kata: 'Elang' },
  { huruf: 'F', emoji: '🖊️', kata: 'Fulpen' },
  { huruf: 'G', emoji: '🐘', kata: 'Gajah' },
  { huruf: 'H', emoji: '🌿', kata: 'Hijau' },
  { huruf: 'I', emoji: '🐟', kata: 'Ikan' },
  { huruf: 'J', emoji: '🦒', kata: 'Jerapah' },
  { huruf: 'K', emoji: '🐰', kata: 'Kelinci' },
  { huruf: 'L', emoji: '🕊️', kata: 'Layang' },
  { huruf: 'M', emoji: '🐒', kata: 'Monyet' },
  { huruf: 'N', emoji: '🍍', kata: 'Nanas' },
  { huruf: 'O', emoji: '🦧', kata: 'Orangutan' },
  { huruf: 'P', emoji: '🦜', kata: 'Parkit' },
  { huruf: 'Q', emoji: '👑', kata: 'Qalbi' },
  { huruf: 'R', emoji: '🦁', kata: 'Raja Singa' },
  { huruf: 'S', emoji: '🐍', kata: 'Singa' },
  { huruf: 'T', emoji: '🐅', kata: 'Tikus' },
  { huruf: 'U', emoji: '🐛', kata: 'Ulat' },
  { huruf: 'V', emoji: '🎻', kata: 'Violin' },
  { huruf: 'W', emoji: '🎨', kata: 'Warna' },
  { huruf: 'X', emoji: '🎵', kata: 'Xilofon' },
  { huruf: 'Y', emoji: '⚓', kata: 'Yoyo' },
  { huruf: 'Z', emoji: '🦓', kata: 'Zebra' }
];

const ANGKA_NAMA = [
  '', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima',
  'Enam', 'Tujuh', 'Delapan', 'Sembilan', 'Sepuluh',
  'Sebelas', 'Dua Belas', 'Tiga Belas', 'Empat Belas', 'Lima Belas',
  'Enam Belas', 'Tujuh Belas', 'Delapan Belas', 'Sembilan Belas', 'Dua Puluh',
  'Dua Puluh Satu', 'Dua Puluh Dua', 'Dua Puluh Tiga', 'Dua Puluh Empat', 'Dua Puluh Lima',
  'Dua Puluh Enam', 'Dua Puluh Tujuh', 'Dua Puluh Delapan', 'Dua Puluh Sembilan', 'Tiga Puluh',
  'Tiga Puluh Satu', 'Tiga Puluh Dua', 'Tiga Puluh Tiga', 'Tiga Puluh Empat', 'Tiga Puluh Lima',
  'Tiga Puluh Enam', 'Tiga Puluh Tujuh', 'Tiga Puluh Delapan', 'Tiga Puluh Sembilan', 'Empat Puluh',
  'Empat Puluh Satu', 'Empat Puluh Dua', 'Empat Puluh Tiga', 'Empat Puluh Empat', 'Empat Puluh Lima',
  'Empat Puluh Enam', 'Empat Puluh Tujuh', 'Empat Puluh Delapan', 'Empat Puluh Sembilan', 'Lima Puluh',
  'Lima Puluh Satu', 'Lima Puluh Dua', 'Lima Puluh Tiga', 'Lima Puluh Empat', 'Lima Puluh Lima',
  'Lima Puluh Enam', 'Lima Puluh Tujuh', 'Lima Puluh Delapan', 'Lima Puluh Sembilan', 'Enam Puluh',
  'Enam Puluh Satu', 'Enam Puluh Dua', 'Enam Puluh Tiga', 'Enam Puluh Empat', 'Enam Puluh Lima',
  'Enam Puluh Enam', 'Enam Puluh Tujuh', 'Enam Puluh Delapan', 'Enam Puluh Sembilan', 'Tujuh Puluh',
  'Tujuh Puluh Satu', 'Tujuh Puluh Dua', 'Tujuh Puluh Tiga', 'Tujuh Puluh Empat', 'Tujuh Puluh Lima',
  'Tujuh Puluh Enam', 'Tujuh Puluh Tujuh', 'Tujuh Puluh Delapan', 'Tujuh Puluh Sembilan', 'Delapan Puluh',
  'Delapan Puluh Satu', 'Delapan Puluh Dua', 'Delapan Puluh Tiga', 'Delapan Puluh Empat', 'Delapan Puluh Lima',
  'Delapan Puluh Enam', 'Delapan Puluh Tujuh', 'Delapan Puluh Delapan', 'Delapan Puluh Sembilan', 'Sembilan Puluh',
  'Sembilan Puluh Satu', 'Sembilan Puluh Dua', 'Sembilan Puluh Tiga', 'Sembilan Puluh Empat', 'Sembilan Puluh Lima',
  'Sembilan Puluh Enam', 'Sembilan Puluh Tujuh', 'Sembilan Puluh Delapan', 'Sembilan Puluh Sembilan', 'Seratus'
];

const ANGKA_EMOJI = ['🍎', '🌟', '🐱', '🎈', '🌸', '🍭', '🐶', '🦋', '🍊', '🌈'];

const WARNA_DATA = [
  { nama: 'Merah',  hex: '#E74C3C', emoji: '🍎', text: '#fff' },
  { nama: 'Biru',   hex: '#4A90E2', emoji: '🌊', text: '#fff' },
  { nama: 'Hijau',  hex: '#2ECC71', emoji: '🌿', text: '#fff' },
  { nama: 'Kuning', hex: '#F1C40F', emoji: '⭐', text: '#333' },
  { nama: 'Hitam',  hex: '#2C3E50', emoji: '🌑', text: '#fff' },
  { nama: 'Putih',  hex: '#ECF0F1', emoji: '☁️', text: '#333' },
  { nama: 'Ungu',   hex: '#9B59B6', emoji: '🍇', text: '#fff' },
  { nama: 'Orange', hex: '#E67E22', emoji: '🍊', text: '#fff' }
];

const HEWAN_DATA = [
  { emoji: '🐱', nama: 'Kucing' }, { emoji: '🐶', nama: 'Anjing' },
  { emoji: '🐰', nama: 'Kelinci' }, { emoji: '🐸', nama: 'Katak' },
  { emoji: '🐯', nama: 'Harimau' }, { emoji: '🦁', nama: 'Singa' },
  { emoji: '🐮', nama: 'Sapi' }, { emoji: '🐷', nama: 'Babi' },
  { emoji: '🦊', nama: 'Rubah' }, { emoji: '🐻', nama: 'Beruang' },
  { emoji: '🐼', nama: 'Panda' }, { emoji: '🐨', nama: 'Koala' },
  { emoji: '🦒', nama: 'Jerapah' }, { emoji: '🐘', nama: 'Gajah' },
  { emoji: '🦓', nama: 'Zebra' }, { emoji: '🐍', nama: 'Ular' },
  { emoji: '🦜', nama: 'Parkit' }, { emoji: '🐬', nama: 'Lumba-lumba' }
];

const BUAH_DATA = [
  { emoji: '🍎', nama: 'Apel' }, { emoji: '🍌', nama: 'Pisang' },
  { emoji: '🍊', nama: 'Jeruk' }, { emoji: '🍇', nama: 'Anggur' },
  { emoji: '🍓', nama: 'Stroberi' }, { emoji: '🍉', nama: 'Semangka' },
  { emoji: '🍋', nama: 'Lemon' }, { emoji: '🍑', nama: 'Persik' },
  { emoji: '🥭', nama: 'Mangga' }, { emoji: '🍍', nama: 'Nanas' },
  { emoji: '🥝', nama: 'Kiwi' }, { emoji: '🍒', nama: 'Ceri' }
];

const BENDA_DATA = [
  { emoji: '🚗', nama: 'Mobil' }, { emoji: '✈️', nama: 'Pesawat' },
  { emoji: '🚢', nama: 'Kapal' }, { emoji: '🚂', nama: 'Kereta' },
  { emoji: '📚', nama: 'Buku' }, { emoji: '✏️', nama: 'Pensil' },
  { emoji: '🎒', nama: 'Tas' }, { emoji: '⛵', nama: 'Perahu' },
  { emoji: '🏠', nama: 'Rumah' }, { emoji: '🌂', nama: 'Payung' },
  { emoji: '⌚', nama: 'Jam' }, { emoji: '📱', nama: 'Ponsel' }
];

const PUZZLE_CATEGORIES = {
  hewan:     ['🐱', '🐶', '🐰', '🐸', '🦊', '🐻', '🦁', '🐼', '🐘'],
  buah:      ['🍎', '🍌', '🍊', '🍇', '🍓', '🍉', '🥭', '🍍', '🥝'],
  kendaraan: ['🚗', '✈️', '🚢', '🚂', '🚁', '🚀', '🛻', '🏎️', '🛸']
};

const DAILY_CHALLENGES = [
  { text: 'Pelajari 5 huruf baru hari ini!', type: 'huruf', target: 5 },
  { text: 'Hitung 10 soal matematika!', type: 'hitung', target: 10 },
  { text: 'Tebak 8 gambar dengan benar!', type: 'tebak', target: 8 },
  { text: 'Selesaikan 1 puzzle!', type: 'puzzle', target: 1 },
  { text: 'Pelajari semua warna hari ini!', type: 'warna', target: 8 },
  { text: 'Cocokkan 6 huruf dan gambar!', type: 'cocok', target: 6 },
  { text: 'Pelajari angka 1 sampai 10!', type: 'angka', target: 10 }
];

/* ============================================================
   2. APP STATE
   ============================================================ */
let state = {
  xp:             0,
  level:          1,
  badges:         [],
  soundOn:        true,
  darkMode:       false,
  currentSection: 'home',

  hurufIndex: 0,

  angkaIndex: 0,
  angkaMin:   1,
  angkaMax:   10,

  puzzleCategory: 'hewan',
  puzzleSize:     4,
  puzzlePieces:   [],
  puzzleOrder:    [],
  puzzleTimer:    0,
  puzzleTimerInt: null,
  puzzleScore:    0,
  puzzleMoves:    0,
  puzzleCurrentEmoji: '🐱',
  dragSrc:        null,

  tebakCategory:  'hewan',
  tebakScore:     0,
  tebakBenar:     0,
  tebakSoalNum:   0,
  tebakAnswered:  false,

  hitungType:  'tambah',
  hitungScore: 0,
  hitungBenar: 0,
  hitungSalah: 0,
  hitungSoal:  0,
  hitungAnswered: false,

  warnaQuizAnswered: false,

  cocokScore: 0,
  cocokMatch: 0,
  cocokPairs: [],
  cocokDropped: {},
  cocokDragLetter: null,

  stats: {
    hurufViewed:   0,
    angkaViewed:   0,
    warnaViewed:   0,
    tebakBenar:    0,
    hitungBenar:   0,
    puzzleFinished:0,
    cocokFinished: 0,
    totalAnswered: 0
  },

  dailyDone: false
};

/* ============================================================
   3. LOCAL STORAGE
   ============================================================ */
function saveState() {
  try {
    const toSave = {
      xp: state.xp, level: state.level, badges: state.badges,
      soundOn: state.soundOn, darkMode: state.darkMode,
      stats: state.stats, dailyDone: state.dailyDone
    };
    localStorage.setItem('ceriaBelajar_state', JSON.stringify(toSave));
  } catch(e) {}
}

function loadState() {
  try {
    const saved = localStorage.getItem('ceriaBelajar_state');
    if (saved) {
      const parsed = JSON.parse(saved);
      Object.assign(state, parsed);
    }
  } catch(e) {}
}

/* ============================================================
   4. AUDIO SYSTEM (Web Audio API – no external files needed)
   ============================================================ */
let audioCtx = null;

function getAudioCtx() {
  if (!audioCtx) {
    try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}
  }
  return audioCtx;
}

function playTone(freq, duration = 0.15, type = 'sine', vol = 0.3) {
  if (!state.soundOn) return;
  const ctx = getAudioCtx();
  if (!ctx) return;
  try {
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = freq;
    osc.type = type;
    gain.gain.setValueAtTime(vol, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  } catch(e) {}
}

function playChord(freqs, duration = 0.25) {
  freqs.forEach((f, i) => setTimeout(() => playTone(f, duration, 'triangle', 0.2), i * 60));
}

function playSoundClick()   { playTone(660, 0.1, 'square', 0.2); }
function playSoundCorrect() { playChord([523, 659, 784], 0.3); }
function playSoundWrong()   { playChord([200, 180], 0.3); }
function playSoundWin()     { [523,587,659,698,784,880].forEach((f,i) => setTimeout(() => playTone(f, 0.2, 'triangle', 0.3), i * 100)); }
function playSoundBadge()   { [784,880,988,1047].forEach((f,i) => setTimeout(() => playTone(f, 0.2, 'sine', 0.3), i * 80)); }

function speakText(text) {
  if (!state.soundOn) return;
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'id-ID';
    utt.rate = 0.85;
    utt.pitch = 1.2;
    utt.volume = 1;
    window.speechSynthesis.speak(utt);
  }
}

/* ============================================================
   5. UTILITY FUNCTIONS
   ============================================================ */
function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getWrongChoices(correct, pool, count = 3) {
  const others = pool.filter(i => i.nama !== correct);
  return shuffle(others).slice(0, count);
}

function showToast(msg, duration = 2500) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), duration);
}

function openModal(id) {
  document.getElementById(id).classList.add('open');
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

/* ============================================================
   6. CONFETTI
   ============================================================ */
const confettiCanvas = document.getElementById('confetti-canvas');
const confettiCtx    = confettiCanvas.getContext('2d');
let confettiParts    = [];
let confettiRAF      = null;

function launchConfetti(duration = 3000) {
  confettiCanvas.width  = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
  confettiParts = [];
  const colors = ['#4A90E2','#FF6B9D','#2ECC71','#F39C12','#9B59B6','#E67E22','#1ABC9C','#E74C3C'];
  for (let i = 0; i < 140; i++) {
    confettiParts.push({
      x:     Math.random() * confettiCanvas.width,
      y:     -Math.random() * confettiCanvas.height * 0.5,
      w:     rand(8, 18), h: rand(5, 12),
      color: colors[rand(0, colors.length - 1)],
      rot:   Math.random() * Math.PI * 2,
      rotS:  (Math.random() - 0.5) * 0.12,
      speedX:(Math.random() - 0.5) * 3,
      speedY: rand(2, 6),
      opacity: 1
    });
  }
  if (confettiRAF) cancelAnimationFrame(confettiRAF);
  const endTime = Date.now() + duration;
  function draw() {
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confettiParts.forEach(p => {
      confettiCtx.save();
      confettiCtx.globalAlpha = p.opacity;
      confettiCtx.translate(p.x, p.y);
      confettiCtx.rotate(p.rot);
      confettiCtx.fillStyle = p.color;
      confettiCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      confettiCtx.restore();
      p.x += p.speedX;
      p.y += p.speedY;
      p.rot += p.rotS;
      if (Date.now() > endTime - 800) p.opacity -= 0.015;
    });
    confettiParts = confettiParts.filter(p => p.opacity > 0 && p.y < confettiCanvas.height + 30);
    if (Date.now() < endTime && confettiParts.length > 0) {
      confettiRAF = requestAnimationFrame(draw);
    } else {
      confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
  }
  draw();
}

window.addEventListener('resize', () => {
  confettiCanvas.width  = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
});

/* ============================================================
   7. GAMIFICATION
   ============================================================ */
const XP_PER_LEVEL = 100;

function addXP(amount) {
  state.xp += amount;
  const newLevel = Math.floor(state.xp / XP_PER_LEVEL) + 1;
  if (newLevel > state.level) {
    state.level = newLevel;
    showToast(`🎉 Level naik! Kamu sekarang Level ${state.level}!`);
    launchConfetti(2500);
    playSoundWin();
  }
  updateGamificationUI();
  saveState();
}

function unlockBadge(badgeId, badgeName) {
  if (state.badges.includes(badgeId)) return;
  state.badges.push(badgeId);
  playSoundBadge();
  launchConfetti(3000);
  showWinModal(`🎖️ Badge Baru!`, `Kamu mendapat badge "${badgeName}"! 🌟`, `+${20} XP`, badgeName);
  addXP(20);
  updateBadgesUI();
  saveState();
}

function checkBadges() {
  const s = state.stats;
  if (s.hurufViewed   >= 26)  unlockBadge('huruf',      'Ahli Huruf');
  if (s.angkaViewed   >= 20)  unlockBadge('angka',      'Ahli Angka');
  if (s.warnaViewed   >= 8)   unlockBadge('warna',      'Pelukis');
  if (s.hitungBenar   >= 20)  unlockBadge('matematika', 'Ahli Hitung');
  if (s.puzzleFinished >= 1)  unlockBadge('puzzle',     'Puzzle Master');
  if (s.cocokFinished >= 1)   unlockBadge('cocok',      'Pencocok');
  if (s.totalAnswered >= 10)  unlockBadge('pintar',     'Pintar');
  if (state.dailyDone)        unlockBadge('daily',      'Rajin');
}

function updateGamificationUI() {
  const xpInLevel   = state.xp % XP_PER_LEVEL;
  const xpNextLevel = XP_PER_LEVEL;
  const pct         = Math.min((xpInLevel / xpNextLevel) * 100, 100);

  const els = {
    'stat-xp':        state.xp,
    'stat-level':     state.level,
    'stat-badges':    state.badges.length,
    'level-display':  state.level,
    'xp-display':     state.xp,
    'xp-next-display':state.level * XP_PER_LEVEL
  };
  Object.entries(els).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  });

  const bar = document.getElementById('xp-bar-fill');
  if (bar) bar.style.width = pct + '%';

  // Stars
  const starsRow = document.getElementById('stars-row');
  if (starsRow) {
    const stars = starsRow.querySelectorAll('span');
    const filledCount = Math.min(state.level - 1, 5);
    stars.forEach((s, i) => {
      s.className = i < filledCount ? 'star-filled' : 'star-empty';
    });
  }
}

function updateBadgesUI() {
  document.querySelectorAll('.badge-item').forEach(el => {
    const id = el.dataset.badge;
    if (state.badges.includes(id)) {
      el.classList.remove('locked');
      el.classList.add('unlocked');
    }
  });
  const statBadges = document.getElementById('stat-badges');
  if (statBadges) statBadges.textContent = state.badges.length;
}

function showWinModal(title, msg, xpText, badgeEmoji) {
  document.getElementById('win-title').textContent   = title;
  document.getElementById('win-message').textContent = msg;
  document.getElementById('win-xp').textContent      = xpText;
  document.getElementById('win-badge-earned').textContent = badgeEmoji ? `🎖️ ${badgeEmoji}` : '';
  openModal('win-modal');
}

/* ============================================================
   8. SECTION NAVIGATION
   ============================================================ */
function showSection(name) {
  playSoundClick();
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const sec = document.getElementById('section-' + name);
  if (sec) sec.classList.add('active');
  document.querySelectorAll(`[data-section="${name}"]`).forEach(b => b.classList.add('active'));
  state.currentSection = name;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Init sections on first visit
  if (name === 'huruf')  initHuruf();
  if (name === 'angka')  initAngka();
  if (name === 'warna')  initWarna();
  if (name === 'tebak')  initTebak();
  if (name === 'hitung') initHitung();
  if (name === 'puzzle') initPuzzle();
  if (name === 'cocok')  initCocokkan();
}

/* ============================================================
   9. HEADER CONTROLS
   ============================================================ */
function toggleMenu() {
  const nav = document.getElementById('mobile-nav');
  const btn = document.getElementById('hamburger');
  const isOpen = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', isOpen);
}

function toggleSound() {
  state.soundOn = !state.soundOn;
  document.getElementById('sound-toggle').textContent = state.soundOn ? '🔊' : '🔇';
  showToast(state.soundOn ? '🔊 Suara Aktif' : '🔇 Suara Mati');
  saveState();
}

function toggleDark() {
  state.darkMode = !state.darkMode;
  document.getElementById('app-body').classList.toggle('dark-mode', state.darkMode);
  document.getElementById('dark-toggle').textContent = state.darkMode ? '☀️' : '🌙';
  showToast(state.darkMode ? '🌙 Dark Mode Aktif' : '☀️ Light Mode Aktif');
  saveState();
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
    document.getElementById('fullscreen-btn').textContent = '⛶';
  } else {
    document.exitFullscreen().catch(() => {});
  }
}

/* ============================================================
   10. DAILY CHALLENGE
   ============================================================ */
function initDailyChallenge() {
  const today     = new Date().toDateString();
  const dayIndex  = new Date().getDate() % DAILY_CHALLENGES.length;
  const challenge = DAILY_CHALLENGES[dayIndex];
  document.getElementById('dc-text').textContent = challenge.text;

  const savedDay = localStorage.getItem('ceriaBelajar_dailyDay');
  if (savedDay === today) {
    state.dailyDone = true;
    document.getElementById('dc-btn').textContent = '✅ Selesai!';
    document.getElementById('dc-btn').disabled = true;
  }
}

function startDailyChallenge() {
  const today    = new Date().toDateString();
  const dayIndex = new Date().getDate() % DAILY_CHALLENGES.length;
  const ch       = DAILY_CHALLENGES[dayIndex];

  const content = `
    <div style="text-align:center;padding:20px 0">
      <div style="font-size:3rem;margin-bottom:12px">📅</div>
      <h3 style="font-size:1.4rem;font-weight:800;margin-bottom:12px">${ch.text}</h3>
      <p style="color:var(--text-muted);font-weight:600;margin-bottom:24px">
        Selesaikan tantangan ini untuk mendapatkan badge Rajin dan 30 XP bonus!
      </p>
      <button class="btn-primary" onclick="completeDailyChallenge('${today}','${ch.type}');closeModal('daily-modal')">
        🚀 Mulai Sekarang!
      </button>
    </div>
  `;
  document.getElementById('daily-challenge-content').innerHTML = content;
  openModal('daily-modal');
}

function completeDailyChallenge(today, type) {
  localStorage.setItem('ceriaBelajar_dailyDay', today);
  state.dailyDone = true;
  document.getElementById('dc-btn').textContent = '✅ Selesai!';
  document.getElementById('dc-btn').disabled = true;
  addXP(30);
  unlockBadge('daily', 'Rajin');
  showSection(type);
}

/* ============================================================
   11. BELAJAR HURUF
   ============================================================ */
function initHuruf() {
  renderHurufGrid();
  displayHuruf(state.hurufIndex);
}

function renderHurufGrid() {
  const grid = document.getElementById('huruf-grid');
  if (!grid || grid.children.length > 0) return;
  HURUF_DATA.forEach((d, i) => {
    const el = document.createElement('div');
    el.className = 'huruf-grid-item' + (i === 0 ? ' active-huruf' : '');
    el.innerHTML = `<span class="grid-letter">${d.huruf}</span><span class="grid-emoji">${d.emoji}</span>`;
    el.addEventListener('click', () => { playSoundClick(); jumpToHuruf(i); });
    grid.appendChild(el);
  });
}

function displayHuruf(idx) {
  const d = HURUF_DATA[idx];
  const bigEl = document.getElementById('huruf-big');
  const emojiEl = document.getElementById('huruf-emoji');
  const wordEl  = document.getElementById('huruf-word');
  const counter = document.getElementById('huruf-counter');

  if (bigEl)   { bigEl.textContent = d.huruf; bigEl.style.animation = 'none'; requestAnimationFrame(() => { bigEl.style.animation = ''; }); }
  if (emojiEl) { emojiEl.textContent = d.emoji; }
  if (wordEl)  { wordEl.textContent  = d.kata; }
  if (counter) counter.textContent = `${idx + 1} / 26`;

  // Update grid active state
  document.querySelectorAll('.huruf-grid-item').forEach((el, i) => {
    el.classList.toggle('active-huruf', i === idx);
  });

  // Speak
  speakText(d.huruf + '... ' + d.kata);

  // Stats
  if (!state._hurufSeen) state._hurufSeen = new Set();
  if (!state._hurufSeen.has(idx)) {
    state._hurufSeen.add(idx);
    state.stats.hurufViewed++;
    if (state.stats.hurufViewed % 5 === 0) addXP(5);
    checkBadges();
    saveState();
  }
}

function nextHuruf() {
  playSoundClick();
  state.hurufIndex = (state.hurufIndex + 1) % HURUF_DATA.length;
  displayHuruf(state.hurufIndex);
}

function prevHuruf() {
  playSoundClick();
  state.hurufIndex = (state.hurufIndex - 1 + HURUF_DATA.length) % HURUF_DATA.length;
  displayHuruf(state.hurufIndex);
}

function jumpToHuruf(idx) {
  state.hurufIndex = idx;
  displayHuruf(idx);
}

function playHurufSound() {
  playSoundClick();
  const d = HURUF_DATA[state.hurufIndex];
  speakText(d.huruf + '... ' + d.kata);
}

/* ============================================================
   12. BELAJAR ANGKA
   ============================================================ */
function initAngka() {
  renderAngkaGrid();
  displayAngka(state.angkaIndex);
}

function renderAngkaGrid() {
  const grid = document.getElementById('angka-grid');
  if (!grid) return;
  grid.innerHTML = '';
  for (let n = state.angkaMin; n <= state.angkaMax; n++) {
    const el = document.createElement('div');
    el.className = 'angka-grid-item' + (n - state.angkaMin === state.angkaIndex ? ' active-angka' : '');
    el.textContent = n;
    el.addEventListener('click', () => { playSoundClick(); jumpToAngka(n - 1); });
    grid.appendChild(el);
  }
}

function displayAngka(idx) {
  const n     = idx + 1;
  const clamp = Math.max(1, Math.min(n, 100));
  const bigEl  = document.getElementById('angka-big');
  const visEl  = document.getElementById('angka-visual');
  const namaEl = document.getElementById('angka-nama');
  const cntEl  = document.getElementById('angka-counter');

  if (bigEl)  { bigEl.textContent = clamp; bigEl.style.animation = 'none'; requestAnimationFrame(() => bigEl.style.animation = ''); }
  if (namaEl)  namaEl.textContent = ANGKA_NAMA[clamp] || clamp;
  if (cntEl)   cntEl.textContent = `${clamp} / ${state.angkaMax}`;

  // Visual – show emoji dots (max 20 for readability)
  if (visEl) {
    const shown  = Math.min(clamp, 20);
    const emoji  = ANGKA_EMOJI[(clamp - 1) % ANGKA_EMOJI.length];
    let vis = emoji.repeat(shown);
    if (clamp > 20) vis += ` (${clamp})`;
    visEl.textContent = vis;
  }

  speakText(ANGKA_NAMA[clamp] || String(clamp));

  if (!state._angkaSeen) state._angkaSeen = new Set();
  if (!state._angkaSeen.has(clamp)) {
    state._angkaSeen.add(clamp);
    state.stats.angkaViewed++;
    if (state.stats.angkaViewed % 10 === 0) addXP(5);
    checkBadges();
    saveState();
  }
}

function nextAngka() {
  playSoundClick();
  if (state.angkaIndex < state.angkaMax - state.angkaMin) {
    state.angkaIndex++;
    displayAngka(state.angkaMin - 1 + state.angkaIndex);
  }
}

function prevAngka() {
  playSoundClick();
  if (state.angkaIndex > 0) {
    state.angkaIndex--;
    displayAngka(state.angkaMin - 1 + state.angkaIndex);
  }
}

function jumpToAngka(idx) {
  state.angkaIndex = idx - state.angkaMin + 1;
  displayAngka(idx);
}

function setAngkaRange(min, max) {
  playSoundClick();
  state.angkaMin   = min;
  state.angkaMax   = max;
  state.angkaIndex = 0;
  document.querySelectorAll('.range-btns .cat-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  renderAngkaGrid();
  displayAngka(min - 1);
}

function playAngkaSound() {
  playSoundClick();
  const n = state.angkaMin + state.angkaIndex;
  speakText(ANGKA_NAMA[n] || String(n));
}

/* ============================================================
   13. BELAJAR WARNA
   ============================================================ */
function initWarna() {
  const grid = document.getElementById('warna-grid');
  if (!grid || grid.children.length > 0) return;

  WARNA_DATA.forEach(w => {
    const card = document.createElement('div');
    card.className = 'warna-card';
    card.style.cssText = `background:${w.hex}; color:${w.text}`;
    card.innerHTML = `<span class="warna-emoji">${w.emoji}</span>${w.nama}`;
    card.addEventListener('click', () => selectWarna(w));
    grid.appendChild(card);
  });

  newWarnaQuiz();
}

function selectWarna(w) {
  playSoundClick();
  const overlay  = document.getElementById('warna-overlay');
  const nameEl   = document.getElementById('warna-current-name');
  const circleEl = document.getElementById('warna-current-circle');

  overlay.style.background = w.hex;
  overlay.classList.add('active');
  setTimeout(() => overlay.classList.remove('active'), 1200);

  nameEl.textContent   = w.nama;
  circleEl.style.background = w.hex;
  circleEl.style.boxShadow  = `0 8px 32px ${w.hex}88`;

  nameEl.style.animation = 'none';
  requestAnimationFrame(() => nameEl.style.animation = '');

  speakText('Warna ' + w.nama);

  if (!state._warnaSeen) state._warnaSeen = new Set();
  if (!state._warnaSeen.has(w.nama)) {
    state._warnaSeen.add(w.nama);
    state.stats.warnaViewed++;
    addXP(3);
    checkBadges();
    saveState();
  }
}

function newWarnaQuiz() {
  state.warnaQuizAnswered = false;
  const correct = WARNA_DATA[rand(0, WARNA_DATA.length - 1)];
  const wrongs  = shuffle(WARNA_DATA.filter(w => w.nama !== correct.nama)).slice(0, 3);
  const choices = shuffle([correct, ...wrongs]);

  document.getElementById('quiz-color-box').style.background = correct.hex;
  document.getElementById('warna-quiz-result').textContent = '';

  const choicesEl = document.getElementById('warna-quiz-choices');
  choicesEl.innerHTML = '';
  choices.forEach(c => {
    const btn = document.createElement('button');
    btn.className = 'warna-choice-btn';
    btn.textContent = c.nama;
    btn.addEventListener('click', () => {
      if (state.warnaQuizAnswered) return;
      state.warnaQuizAnswered = true;
      if (c.nama === correct.nama) {
        btn.classList.add('correct-warna');
        document.getElementById('warna-quiz-result').innerHTML = '✅ Benar! Itu warna <strong>' + correct.nama + '</strong>!';
        playSoundCorrect();
        addXP(5);
        state.stats.totalAnswered++;
        checkBadges();
      } else {
        btn.classList.add('wrong-warna');
        document.getElementById('warna-quiz-result').innerHTML = '❌ Salah! Itu warna <strong>' + correct.nama + '</strong>.';
        playSoundWrong();
        // Highlight correct
        choicesEl.querySelectorAll('.warna-choice-btn').forEach(b => {
          if (b.textContent === correct.nama) b.classList.add('correct-warna');
        });
      }
      saveState();
    });
    choicesEl.appendChild(btn);
  });
}

/* ============================================================
   14. PUZZLE CERIA
   ============================================================ */
function initPuzzle() {
  buildPuzzle();
}

function setPuzzleCategory(cat) {
  playSoundClick();
  state.puzzleCategory = cat;
  document.querySelectorAll('.puzzle-category-select .cat-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  buildPuzzle();
}

function setPuzzleSize(size) {
  playSoundClick();
  state.puzzleSize = size;
  document.querySelectorAll('.puzzle-size-select .cat-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  buildPuzzle();
}

function buildPuzzle() {
  const cats   = PUZZLE_CATEGORIES[state.puzzleCategory];
  const emoji  = cats[rand(0, cats.length - 1)];
  state.puzzleCurrentEmoji = emoji;

  const previewEl = document.getElementById('puzzle-preview-img');
  if (previewEl) previewEl.textContent = emoji;

  const size = state.puzzleSize; // 4 or 9
  const cols = Math.sqrt(size);  // 2 or 3

  // Create pieces with index
  state.puzzlePieces = Array.from({ length: size }, (_, i) => i);
  state.puzzleOrder  = shuffle([...state.puzzlePieces]);

  // Reset stats
  clearInterval(state.puzzleTimerInt);
  state.puzzleTimer = 0;
  state.puzzleMoves = 0;
  updatePuzzleStats();

  // Start timer
  state.puzzleTimerInt = setInterval(() => {
    state.puzzleTimer++;
    const timerEl = document.getElementById('puzzle-timer');
    if (timerEl) timerEl.textContent = state.puzzleTimer;
  }, 1000);

  renderPuzzle(emoji, size, cols);
}

function renderPuzzle(emoji, size, cols) {
  const board = document.getElementById('puzzle-board');
  if (!board) return;
  board.innerHTML = '';
  board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

  // Sub-emojis for variety: each piece shows part of the emoji collection
  const cats      = PUZZLE_CATEGORIES[state.puzzleCategory];
  const pieceEmojis = shuffle([...cats, ...cats, ...cats]).slice(0, size);

  state.puzzleOrder.forEach((originalIdx, pos) => {
    const piece = document.createElement('div');
    piece.className    = 'puzzle-piece';
    piece.dataset.pos  = pos;
    piece.dataset.orig = originalIdx;
    piece.textContent  = pieceEmojis[originalIdx];
    piece.setAttribute('draggable', 'true');

    // Desktop drag
    piece.addEventListener('dragstart', (e) => { state.dragSrc = pos; piece.classList.add('dragging'); e.dataTransfer.effectAllowed = 'move'; });
    piece.addEventListener('dragend',   ()  => { piece.classList.remove('dragging'); });
    piece.addEventListener('dragover',  (e) => { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; });
    piece.addEventListener('drop',      (e) => { e.preventDefault(); swapPuzzlePieces(state.dragSrc, pos); });

    // Mobile touch
    piece.addEventListener('touchstart', (e) => { state.dragSrc = pos; piece.classList.add('dragging'); }, { passive: true });
    piece.addEventListener('touchend',   (e) => {
      piece.classList.remove('dragging');
      const touch  = e.changedTouches[0];
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      const tgtPiece = target && target.closest('.puzzle-piece');
      if (tgtPiece) swapPuzzlePieces(state.dragSrc, parseInt(tgtPiece.dataset.pos));
    }, { passive: true });

    board.appendChild(piece);
  });
}

function swapPuzzlePieces(posA, posB) {
  if (posA === posB || posA == null) return;
  playSoundClick();
  state.puzzleMoves++;
  [state.puzzleOrder[posA], state.puzzleOrder[posB]] = [state.puzzleOrder[posB], state.puzzleOrder[posA]];

  // Re-render
  const board      = document.getElementById('puzzle-board');
  const pieces     = board.querySelectorAll('.puzzle-piece');
  const cats       = PUZZLE_CATEGORIES[state.puzzleCategory];
  const size       = state.puzzleSize;
  const pieceEmojis = shuffle([...cats, ...cats, ...cats]).slice(0, size);

  // Update positions
  state.puzzleOrder.forEach((origIdx, pos) => {
    if (pieces[pos]) {
      pieces[pos].dataset.orig = origIdx;
      pieces[pos].dataset.pos  = pos;
      pieces[pos].textContent  = pieceEmojis[origIdx];
    }
  });

  updatePuzzleStats();
  checkPuzzleSolved();
  state.dragSrc = null;
}

function checkPuzzleSolved() {
  const isSolved = state.puzzleOrder.every((val, idx) => val === idx);
  if (isSolved) {
    clearInterval(state.puzzleTimerInt);
    const xpEarned = Math.max(50 - state.puzzleTimer, 10);
    playSoundWin();
    launchConfetti(4000);
    state.puzzleScore += xpEarned;
    state.stats.puzzleFinished++;
    addXP(xpEarned);
    checkBadges();
    updatePuzzleStats();
    setTimeout(() => showWinModal('🧩 Puzzle Selesai!', `Kamu menyusun puzzle dalam ${state.puzzleTimer} detik!`, `+${xpEarned} XP`, ''), 500);
    // Mark pieces correct
    document.querySelectorAll('.puzzle-piece').forEach(p => p.classList.add('correct'));
    saveState();
  }
}

function updatePuzzleStats() {
  const timerEl = document.getElementById('puzzle-timer');
  const scoreEl = document.getElementById('puzzle-score');
  const movesEl = document.getElementById('puzzle-moves');
  if (timerEl) timerEl.textContent = state.puzzleTimer;
  if (scoreEl) scoreEl.textContent = state.puzzleScore;
  if (movesEl) movesEl.textContent = state.puzzleMoves;
}

function shufflePuzzle() {
  playSoundClick();
  buildPuzzle();
}

function solvePuzzle() {
  playSoundClick();
  showToast('💡 Petunjuk: Susun dari kiri ke kanan, atas ke bawah!');
}

function nextPuzzle() {
  playSoundClick();
  buildPuzzle();
}

/* ============================================================
   15. TEBAK GAMBAR
   ============================================================ */
const TEBAK_POOLS = { hewan: HEWAN_DATA, buah: BUAH_DATA, benda: BENDA_DATA };

function initTebak() {
  state.tebakScore   = 0;
  state.tebakBenar   = 0;
  state.tebakSoalNum = 0;
  updateTebakUI();
  newTebakSoal();
}

function setTebakCategory(cat) {
  playSoundClick();
  state.tebakCategory = cat;
  document.querySelectorAll('.tebak-controls .cat-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  state.tebakSoalNum = 0;
  state.tebakScore   = 0;
  state.tebakBenar   = 0;
  updateTebakUI();
  newTebakSoal();
}

function newTebakSoal() {
  state.tebakAnswered = false;
  const pool   = TEBAK_POOLS[state.tebakCategory];
  const correct = pool[rand(0, pool.length - 1)];
  const wrongs  = getWrongChoices(correct.nama, pool, 3);
  const choices = shuffle([correct, ...wrongs]);

  state.tebakSoalNum++;
  document.getElementById('tebak-soal-num').textContent = state.tebakSoalNum;

  const gambarEl = document.getElementById('tebak-gambar');
  if (gambarEl) { gambarEl.textContent = correct.emoji; gambarEl.style.animation = 'none'; requestAnimationFrame(() => gambarEl.style.animation = ''); }

  const feedback = document.getElementById('tebak-feedback');
  if (feedback) feedback.innerHTML = '';

  const choicesEl = document.getElementById('tebak-choices');
  choicesEl.innerHTML = '';
  choices.forEach(c => {
    const btn = document.createElement('button');
    btn.className   = 'tebak-choice-btn';
    btn.textContent = c.nama;
    btn.addEventListener('click', () => answerTebak(c.nama, correct.nama));
    choicesEl.appendChild(btn);
  });
}

function answerTebak(chosen, correct) {
  if (state.tebakAnswered) return;
  state.tebakAnswered = true;
  state.stats.totalAnswered++;
  const feedback = document.getElementById('tebak-feedback');

  document.querySelectorAll('.tebak-choice-btn').forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct)  btn.classList.add('correct-answer');
    if (btn.textContent === chosen && chosen !== correct) btn.classList.add('wrong-answer');
  });

  if (chosen === correct) {
    playSoundCorrect();
    state.tebakScore += 10;
    state.tebakBenar++;
    state.stats.tebakBenar++;
    feedback.innerHTML = '✅ <span style="color:#2ECC71">Benar! Kamu hebat! 🌟</span>';
    addXP(10);
  } else {
    playSoundWrong();
    feedback.innerHTML = `❌ <span style="color:#E74C3C">Salah! Itu adalah ${correct}.</span>`;
  }

  updateTebakUI();
  checkBadges();
  saveState();
}

function nextTebakSoal() {
  playSoundClick();
  newTebakSoal();
}

function updateTebakUI() {
  document.getElementById('tebak-score').textContent = state.tebakScore;
  document.getElementById('tebak-benar').textContent = state.tebakBenar;
}

/* ============================================================
   16. HITUNG-HITUNGAN
   ============================================================ */
function initHitung() {
  state.hitungScore   = 0;
  state.hitungBenar   = 0;
  state.hitungSalah   = 0;
  state.hitungSoal    = 0;
  updateHitungUI();
  newHitungSoal();
}

function setHitungType(type) {
  playSoundClick();
  state.hitungType = type;
  document.querySelectorAll('.hitung-controls .cat-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  newHitungSoal();
}

function newHitungSoal() {
  state.hitungAnswered = false;
  let a, b, answer, soalText, visualText, op;
  const type = state.hitungType === 'acak' ? ['tambah','kurang','kali'][rand(0,2)] : state.hitungType;

  if (type === 'tambah') {
    a = rand(1, 10); b = rand(1, 10);
    answer = a + b; op = '+';
    soalText   = `${a} + ${b} = ?`;
    const emoji = ANGKA_EMOJI[a % ANGKA_EMOJI.length];
    const emoji2 = ANGKA_EMOJI[b % ANGKA_EMOJI.length];
    visualText = emoji.repeat(a) + ' + ' + emoji2.repeat(b);
  } else if (type === 'kurang') {
    a = rand(2, 15); b = rand(1, a);
    answer = a - b; op = '-';
    soalText   = `${a} - ${b} = ?`;
    const emoji = ANGKA_EMOJI[a % ANGKA_EMOJI.length];
    visualText = emoji.repeat(a) + ' - ' + emoji.repeat(b);
  } else {
    a = rand(1, 5); b = rand(1, 5);
    answer = a * b; op = '×';
    soalText   = `${a} × ${b} = ?`;
    const emoji = ANGKA_EMOJI[a % ANGKA_EMOJI.length];
    visualText = Array.from({length: b}, () => emoji.repeat(a)).join(' | ');
  }

  document.getElementById('hitung-soal-display').textContent = soalText;
  const visEl = document.getElementById('hitung-visual');
  if (visEl) visEl.textContent = visualText.length < 80 ? visualText : `${a} ${op} ${b}`;
  document.getElementById('hitung-feedback').innerHTML = '';

  // Generate wrong choices
  const wrongs = new Set();
  while (wrongs.size < 3) {
    const w = answer + rand(-5, 5);
    if (w !== answer && w >= 0) wrongs.add(w);
  }
  const allChoices = shuffle([answer, ...[...wrongs]]);

  const choicesEl = document.getElementById('hitung-choices');
  choicesEl.innerHTML = '';
  allChoices.forEach(c => {
    const btn = document.createElement('button');
    btn.className   = 'hitung-choice-btn';
    btn.textContent = c;
    btn.addEventListener('click', () => answerHitung(c, answer));
    choicesEl.appendChild(btn);
  });

  // Animate soal
  const soalEl = document.getElementById('hitung-soal-display');
  soalEl.style.animation = 'none';
  requestAnimationFrame(() => soalEl.style.animation = '');
}

function answerHitung(chosen, correct) {
  if (state.hitungAnswered) return;
  state.hitungAnswered = true;
  state.hitungSoal++;
  state.stats.totalAnswered++;
  const feedback = document.getElementById('hitung-feedback');

  document.querySelectorAll('.hitung-choice-btn').forEach(btn => {
    btn.disabled = true;
    if (parseInt(btn.textContent) === correct) btn.classList.add('correct-answer');
    if (parseInt(btn.textContent) === chosen && chosen !== correct) btn.classList.add('wrong-answer');
  });

  if (chosen === correct) {
    playSoundCorrect();
    state.hitungScore += 10;
    state.hitungBenar++;
    state.stats.hitungBenar++;
    feedback.innerHTML = '✅ <span style="color:#2ECC71">Benar sekali! 🌟</span>';
    addXP(10);
    if (state.hitungBenar === 5)  showToast('🎯 Hebat! 5 soal berturut-turut benar!');
    if (state.hitungBenar === 10) showWinModal('🏆 Luar Biasa!', 'Kamu menjawab 10 soal matematika dengan benar!', '+50 XP', '');
  } else {
    playSoundWrong();
    state.hitungSalah++;
    feedback.innerHTML = `❌ <span style="color:#E74C3C">Jawaban yang benar adalah ${correct}.</span>`;
    const soalEl = document.getElementById('hitung-soal-display');
    soalEl.classList.add('wrong');
    setTimeout(() => soalEl.classList.remove('wrong'), 600);
  }

  updateHitungUI();
  checkBadges();
  saveState();
}

function updateHitungUI() {
  document.getElementById('hitung-score').textContent = state.hitungScore;
  document.getElementById('hitung-benar').textContent = state.hitungBenar;
  document.getElementById('hitung-salah').textContent = state.hitungSalah;
  document.getElementById('hitung-soal').textContent  = state.hitungSoal;
}

/* ============================================================
   17. COCOKKAN HURUF & GAMBAR
   ============================================================ */
const COCOK_PAIRS_ALL = [
  { huruf: 'A', emoji: '🐔', kata: 'Ayam' },
  { huruf: 'B', emoji: '⚽', kata: 'Bola' },
  { huruf: 'C', emoji: '🍒', kata: 'Ceri' },
  { huruf: 'D', emoji: '🍏', kata: 'Durian' },
  { huruf: 'E', emoji: '🦅', kata: 'Elang' },
  { huruf: 'G', emoji: '🐘', kata: 'Gajah' },
  { huruf: 'I', emoji: '🐟', kata: 'Ikan' },
  { huruf: 'K', emoji: '🐰', kata: 'Kelinci' },
  { huruf: 'M', emoji: '🐒', kata: 'Monyet' },
  { huruf: 'N', emoji: '🍍', kata: 'Nanas' },
  { huruf: 'S', emoji: '🦁', kata: 'Singa' },
  { huruf: 'Z', emoji: '🦓', kata: 'Zebra' }
];

function initCocokkan() {
  state.cocokScore = 0;
  state.cocokMatch = 0;
  state.cocokDropped = {};
  newCocokRound();
}

function newCocokRound() {
  state.cocokMatch   = 0;
  state.cocokDropped = {};
  state.cocokPairs   = shuffle([...COCOK_PAIRS_ALL]).slice(0, 6);

  document.getElementById('cocok-score').textContent = state.cocokScore;
  document.getElementById('cocok-match').textContent = 0;
  document.getElementById('cocok-total').textContent = state.cocokPairs.length;
  document.getElementById('cocok-feedback').innerHTML = '';

  renderCocokLetters();
  renderCocokImages();
}

function renderCocokLetters() {
  const el = document.getElementById('cocok-letters');
  el.innerHTML = '';
  const shuffledPairs = shuffle([...state.cocokPairs]);
  shuffledPairs.forEach(pair => {
    const div = document.createElement('div');
    div.className   = 'cocok-letter-item';
    div.textContent = pair.huruf;
    div.dataset.huruf = pair.huruf;
    div.setAttribute('draggable', 'true');

    // Desktop drag
    div.addEventListener('dragstart', (e) => {
      state.cocokDragLetter = pair.huruf;
      div.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
    });
    div.addEventListener('dragend', () => div.classList.remove('dragging'));

    // Mobile touch
    div.addEventListener('touchstart', (e) => {
      state.cocokDragLetter = pair.huruf;
      div.classList.add('dragging');
    }, { passive: true });
    div.addEventListener('touchend', (e) => {
      div.classList.remove('dragging');
      const touch  = e.changedTouches[0];
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      const slot   = target && target.closest('.cocok-image-slot');
      if (slot) dropOnCocokSlot(slot);
    }, { passive: true });

    el.appendChild(div);
  });
}

function renderCocokImages() {
  const el = document.getElementById('cocok-images');
  el.innerHTML = '';
  const shuffled = shuffle([...state.cocokPairs]);
  shuffled.forEach(pair => {
    const slot = document.createElement('div');
    slot.className = 'cocok-image-slot';
    slot.dataset.huruf = pair.huruf;
    slot.innerHTML = `
      <span class="slot-emoji">${pair.emoji}</span>
      <span class="slot-word">${pair.kata}</span>
      <div class="slot-drop-zone" data-huruf="${pair.huruf}">?</div>
    `;

    // Desktop drop
    slot.addEventListener('dragover', (e) => { e.preventDefault(); slot.classList.add('drag-over'); });
    slot.addEventListener('dragleave', () => slot.classList.remove('drag-over'));
    slot.addEventListener('drop', (e) => { e.preventDefault(); slot.classList.remove('drag-over'); dropOnCocokSlot(slot); });

    el.appendChild(slot);
  });
}

function dropOnCocokSlot(slot) {
  if (!state.cocokDragLetter) return;
  const targetHuruf = slot.dataset.huruf;
  const dropZone    = slot.querySelector('.slot-drop-zone');
  if (!dropZone) return;

  // Remove from previous slot if already placed
  const prevSlot = document.querySelector(`.slot-drop-zone[data-huruf]`);
  document.querySelectorAll('.slot-drop-zone').forEach(z => {
    if (z.textContent === state.cocokDragLetter && z !== dropZone) {
      z.textContent = '?';
      z.classList.remove('has-letter');
    }
  });

  dropZone.textContent = state.cocokDragLetter;
  dropZone.classList.add('has-letter');
  state.cocokDropped[targetHuruf] = state.cocokDragLetter;
  playSoundClick();
  state.cocokDragLetter = null;

  // Mark source letter as placed
  document.querySelectorAll('.cocok-letter-item').forEach(li => {
    if (li.dataset.huruf === dropZone.textContent) li.classList.add('placed');
  });
}

function checkCocokkan() {
  playSoundClick();
  let allCorrect = 0;
  let totalFilled = 0;

  document.querySelectorAll('.cocok-image-slot').forEach(slot => {
    const targetHuruf = slot.dataset.huruf;
    const dropZone    = slot.querySelector('.slot-drop-zone');
    const placed      = dropZone ? dropZone.textContent : '?';

    if (placed !== '?') {
      totalFilled++;
      if (placed === targetHuruf) {
        allCorrect++;
        slot.classList.remove('wrong-match');
        slot.classList.add('matched');
      } else {
        slot.classList.remove('matched');
        slot.classList.add('wrong-match');
        setTimeout(() => slot.classList.remove('wrong-match'), 800);
      }
    }
  });

  state.cocokMatch = allCorrect;
  document.getElementById('cocok-match').textContent = allCorrect;

  const fb = document.getElementById('cocok-feedback');
  if (allCorrect === state.cocokPairs.length) {
    playSoundWin();
    launchConfetti(3000);
    fb.innerHTML = '🎉 <span style="color:#2ECC71;font-size:1.4rem">Sempurna! Semua cocok!</span>';
    state.cocokScore += 30;
    state.stats.cocokFinished++;
    document.getElementById('cocok-score').textContent = state.cocokScore;
    addXP(30);
    checkBadges();
    saveState();
  } else if (totalFilled === 0) {
    fb.innerHTML = '⚠️ <span style="color:#F39C12">Kamu belum menaruh huruf apapun!</span>';
  } else {
    playSoundWrong();
    fb.innerHTML = `😊 <span style="color:#4A90E2">${allCorrect} dari ${state.cocokPairs.length} yang benar. Coba lagi!</span>`;
    state.cocokScore += allCorrect * 5;
    document.getElementById('cocok-score').textContent = state.cocokScore;
    addXP(allCorrect * 5);
  }
}

function resetCocokkan() {
  playSoundClick();
  state.cocokDropped = {};
  state.cocokDragLetter = null;
  document.querySelectorAll('.cocok-image-slot').forEach(slot => {
    slot.classList.remove('matched', 'wrong-match');
    const dz = slot.querySelector('.slot-drop-zone');
    if (dz) { dz.textContent = '?'; dz.classList.remove('has-letter'); }
  });
  document.querySelectorAll('.cocok-letter-item').forEach(li => li.classList.remove('placed'));
  document.getElementById('cocok-feedback').innerHTML = '';
  document.getElementById('cocok-match').textContent = 0;
}

/* ============================================================
   18. STATS MODAL
   ============================================================ */
function showStatsModal() {
  playSoundClick();
  const s = state.stats;
  document.getElementById('stats-grid').innerHTML = `
    <div class="stats-item"><span class="s-num">${state.xp}</span><span class="s-label">Total XP</span></div>
    <div class="stats-item"><span class="s-num">${state.level}</span><span class="s-label">Level</span></div>
    <div class="stats-item"><span class="s-num">${state.badges.length}</span><span class="s-label">Badge</span></div>
    <div class="stats-item"><span class="s-num">${s.hurufViewed}</span><span class="s-label">Huruf Dipelajari</span></div>
    <div class="stats-item"><span class="s-num">${s.angkaViewed}</span><span class="s-label">Angka Dipelajari</span></div>
    <div class="stats-item"><span class="s-num">${s.warnaViewed}</span><span class="s-label">Warna Dikenali</span></div>
    <div class="stats-item"><span class="s-num">${s.tebakBenar}</span><span class="s-label">Tebak Gambar Benar</span></div>
    <div class="stats-item"><span class="s-num">${s.hitungBenar}</span><span class="s-label">Soal Hitung Benar</span></div>
    <div class="stats-item"><span class="s-num">${s.puzzleFinished}</span><span class="s-label">Puzzle Selesai</span></div>
    <div class="stats-item"><span class="s-num">${s.cocokFinished}</span><span class="s-label">Ronde Cocokkan</span></div>
  `;
  openModal('stats-modal');
}

function confirmResetProgress() {
  if (confirm('Yakin ingin menghapus semua progress? Ini tidak bisa dibatalkan.')) {
    localStorage.removeItem('ceriaBelajar_state');
    localStorage.removeItem('ceriaBelajar_dailyDay');
    location.reload();
  }
}

/* ============================================================
   19. INIT APP
   ============================================================ */
function initApp() {
  loadState();

  // Apply saved preferences
  if (state.darkMode) {
    document.getElementById('app-body').classList.add('dark-mode');
    document.getElementById('dark-toggle').textContent = '☀️';
  }
  if (!state.soundOn) {
    document.getElementById('sound-toggle').textContent = '🔇';
  }

  updateGamificationUI();
  updateBadgesUI();
  initDailyChallenge();

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (state.currentSection === 'huruf') {
      if (e.key === 'ArrowRight') nextHuruf();
      if (e.key === 'ArrowLeft')  prevHuruf();
    }
    if (state.currentSection === 'angka') {
      if (e.key === 'ArrowRight') nextAngka();
      if (e.key === 'ArrowLeft')  prevAngka();
    }
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
    }
  });

  // Close modal on overlay click
  document.querySelectorAll('.modal-overlay').forEach(m => {
    m.addEventListener('click', (e) => { if (e.target === m) m.classList.remove('open'); });
  });

  // Keyboard cards
  document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('keydown', (e) => { if (e.key === 'Enter') card.click(); });
  });

  console.log('🌟 CeriaBelajar - Siap digunakan!');
}

document.addEventListener('DOMContentLoaded', initApp);
