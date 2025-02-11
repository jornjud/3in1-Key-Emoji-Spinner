/*******************************************************
  script.js - Refactored Version
  - รองรับโหมด: XOR (auto-detect), Wordspinner (Shuffle), Emojicode
  - ใช้ seed สำหรับ Wordspinner
  - แสดง/ซ่อน UI อัตโนมัติตามโหมดที่เลือก
********************************************************/

/* ------------------ กำหนดตัวอักษรและ DEFAULT KEYWORD ------------------ */
const ALLOWED_CHARS = 'กขคฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรลวศษสหฬอฮฤๆะัาิีึืุูเแโใไๅำ่้๊๋abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,./<>?๐';
const DEFAULT_KEYWORD = 'jornjud'; // ถ้า user ไม่กรอก keyword จะใช้ค่านี้
const DEFAULT_PREFIX = '~'; // ใช้ระบุโหมด Wordspinner
const SEED_LENGTH = 4; // ความยาว seed

/* ------------------ ฟังก์ชัน Utility ------------------ */
// สร้าง seed แบบสุ่ม
function generateShortSeed() {
  return Math.random().toString(36).slice(-SEED_LENGTH).padStart(SEED_LENGTH, '0');
}

// ฟังก์ชันสร้าง PRNG (Pseudo-Random Number Generator)
function createPRNG(seed) {
  const seedHash = [...seed].reduce((hash, ch) => (hash * 31 + ch.charCodeAt(0)) & 0x7fffffff, 0);
  let state = seedHash;
  return () => {
    state = (state * 1103515245 + 12345) & 0x7fffffff;
    return state / 0x80000000;
  };
}

/* ------------------ Emojicode ------------------ */
const pigpenEmojis = [
  '😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊',
  '😋','😎','😍','😘','😗','😙','😚','🙂','🤗','🤩',
  '🤔','🤨','😐','😑','😶','🙄','😏','😣','😥','😮',
  '🤐','😯','😪','😫','😴','😌','😛','😜','😝','🤤',
  '😒','😓','😔','😕','🙃','🤑','😲','☹️','🙁','😖',
  '😞','😟','😤','😢','😭','😦','😧','😨','😩','🤯',
  '😬','😰','😱','🥵','🥶','😳','🤪','😵','😡','😠',
  '🤬','😷','🤒','🤕','🤢','🤮','🤧','😇','🥰','🤠',
  '🤡','🥳','🥴','🥺','🤥','🤫','🤭','🧐','🤓','😈',
  '👿','👹','👺','💀','👻','👽','🤖','💩','😺','😸',
  '😹','😻','😼','😽','🙀','😿','😾','🐶','🐱','🐭',
  '🐹','🐰','🦊','🐻','🐼','🐨','🐯','🦁','🐮','🐷',
  '🐽','🐸','🐵','🙈','🙉','🙊','🐒','🐔','🐧','🐦',
  '🐤','🐣','🐥','🦆','🦅','🦉','🦇','🐺','🐗','🐴',
  '🦄','🐝','🐛','🦋','🐌','🐞','🐜','🦗','🕷','🕸',
  '🦂','🐢','🐍','🦎','🦖','🦕','🐙','🦑','🦐','🦀',
  '🐡','🐠','🐟','🐬','🐳','🐋','🦈','🐊','🐅','🐆',
  '🦓','🦍','🐘','🦏','🐪','🐫','🦒','🦘','🐃','🐂',
  '🐄','🐎','🐖','🐏','🐑','🐐','🐓','🦃','🕊','🐇',
  '🐁','🐀','🐿','🦔','🐾','🐉','🐲','🌵','🎄','🌲',
  '🌳','🌴','🌱','🌿','☘️','🍀','🎍','🎋','🍃','🍂',
  '🍁','🍄','🌾','💐','🌷','🌹','🥀','🌺','🌸','🌼',
  '🌻','🌞','🌝','🌛','🌚','🌜','🌙','⭐','🌟','💫',
  '✨','⚡','☄️','💥','🔥','🌪','🌈','☀️','🌤','⛅',
  '🌥','☁️','🌦','🌧','⛈','🌩','🌨','❄️','☃️','⛄',
  '🌬','💨','💧','💦','☔','☂️','🌊','🌫','🍏','🍎',
  '🍐','🍊','🍋','🍌','🍉','🍇','🍓','🍈','🍒','🍑',
  '🥭','🍍','🥥','🥝','🍅','🍆','🥑','🥦','🥬','🥒',
  '🌶','🌽','🥕','🥔','🍠','🥐','🍞','🥖','🥨','🧀',
  '🥚','🍳','🥞','🥓','🥩','🍗','🍖','🌭','🍔','🍟',
  '🍕','🥪','🥙','🌮','🌯','🥗','🥘','🍝','🍜','🍲',
  '🍥','🥠','🍣','🍱','🍛','🍚','🍙','🍘','🍢','🍡',
  '🍧','🍨','🍦','🥧','🧁','🍰','🎂','🍮','🍭','🍬',
  '🍫','🍿','🍩','🍪','🌰','🥜','🍯','🥛','🍼','☕',
  '🍵','🥤','🍶','🍺','🍻','🥂','🍷','🥃','🍸','🍹',
  '🍾','🥄','🍴','🍽','🥣','🥡','🥢','🚗','🚕','🚙',
  '🚌','🚎','🏎','🚓','🚑','🚒','🚐','🚚','🚛','🚜',
  '🛴','🚲','🛵','🏍','🚨','🚔','🚍','🚘','🚖','🚡',
  '🚠','🚟','🚃','🚋','🚞','🚝','🚄','🚅','🚈','🚂',
  '🚆','🚇','🚊','🚉','✈️','🛫','🛬','🛩','💺','🛰',
  '🚀','🛸','🚁','🛶','⛵','🚤','🛥','🛳','⛴','🚢',
  '⚓','🚧','⛽','🚏','🚦','🚥','🗺','🗿','🗽','⛲',
  '🗼','🏰','🏯','🎡','🎢','🎠','⛱','🏖','🏝','🌋',
  '⛰','🏔','🗻','🏕','⛺','🏠','🏡','🏘','🏚','🏗',
  '🏭','🏢','🏬','🏣','🏤','🏥','🏦','🏨','🏪','🏫',
  '🏩','💒','🏛','⛪','🕌','🕍','🕋','⛩','🛤','🛣',
  '🗾','🎑','🏞','🌅','🌄','🌠','🎇','🎆','🌇','🌆',
  '🏙','🌃','🌌','🌉','🌁'
];

const charToEmoji = new Map();
const emojiToChar = new Map();
for (let i = 0; i < ALLOWED_CHARS.length && i < pigpenEmojis.length; i++) {
  charToEmoji.set(ALLOWED_CHARS[i], pigpenEmojis[i]);
  emojiToChar.set(pigpenEmojis[i], ALLOWED_CHARS[i]);
}

function encodeEmoji(text) {
  return [...text].map(ch => charToEmoji.get(ch) || ch).join('');
}

function decodeEmoji(text) {
  return [...text].map(ch => emojiToChar.has(ch) ? emojiToChar.get(ch) : ch).join('');
}

function isAllEmoji(str) {
  return [...str].every(ch => emojiToChar.has(ch) || ch === ' '); // อนุญาตให้มีช่องว่าง
}

/* ------------------ Wordspinner (Shuffle) ------------------ */
function encodeWordspinner(text) {
  const chars = [...text];
  const seed = generateShortSeed();
  const prng = createPRNG(seed);

  // สร้างตำแหน่ง shuffle
  const positions = chars.map((_, i) => i).sort(() => prng() - 0.5);
  const shuffledText = positions.map(pos => chars[pos]).join('');

  return `${DEFAULT_PREFIX}${seed}${shuffledText}`;
}

function decodeWordspinner(text) {
  if (!text.startsWith(DEFAULT_PREFIX)) return text;

  const seed = text.slice(DEFAULT_PREFIX.length, DEFAULT_PREFIX.length + SEED_LENGTH);
  const cipherText = text.slice(DEFAULT_PREFIX.length + SEED_LENGTH);
  const prng = createPRNG(seed);

  const positions = [...Array(cipherText.length).keys()].sort(() => prng() - 0.5);
  const reversePositions = new Array(cipherText.length);

  positions.forEach((shuffledIndex, originalIndex) => {
    reversePositions[shuffledIndex] = originalIndex;
  });

  return reversePositions.map(pos => cipherText[pos]).join('');
}

function isLikelyWordspinner(text) {
  return text.startsWith(DEFAULT_PREFIX);
}

/* ------------------ XOR ------------------ */
function encodeThaiEng(text, keyword) {
  const seed = generateShortSeed();
  const prng = createPRNG(seed + keyword);
  return seed + [...text].map(ch => {
    const idx = ALLOWED_CHARS.indexOf(ch);
    if (idx === -1) return ch;
    const randOffset = Math.floor(prng() * ALLOWED_CHARS.length);
    return ALLOWED_CHARS[(idx + randOffset) % ALLOWED_CHARS.length];
  }).join('');
}

function decodeThaiEng(encText, keyword) {
  const seed = encText.slice(0, SEED_LENGTH);
  const cipherText = encText.slice(SEED_LENGTH);
  const prng = createPRNG(seed + keyword);
  return [...cipherText].map(ch => {
    const idx = ALLOWED_CHARS.indexOf(ch);
    if (idx === -1) return ch;
    const randOffset = Math.floor(prng() * ALLOWED_CHARS.length);
    return ALLOWED_CHARS[(idx - randOffset + ALLOWED_CHARS.length) % ALLOWED_CHARS.length];
  }).join('');
}

function isLikelyEncoded(text) {
  return /^[0-9a-z]{4}/.test(text);
}

/* ------------------ Main Script ------------------ */
const xorModeBtn = document.getElementById('xorModeBtn');
const wordSpinnerModeBtn = document.getElementById('wordSpinnerModeBtn');
const emojiModeBtn = document.getElementById('emojiModeBtn');

const keywordSection = document.getElementById('keywordSection');
const keywordInput = document.getElementById('keywordInput');

const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');

const copyButton = document.getElementById('copyButton');
const clearButton = document.getElementById('clearButton');

let currentMode = null;

function updateUI() {
  keywordSection.style.display = (currentMode === 'xor') ? 'flex' : 'none';
}

function processCurrentMode() {
  const text = inputText.value.trim(); // ใช้ trim() เพื่อลบช่องว่างที่ไม่จำเป็น
  let result = '';

  // ถ้าช่อง input ว่าง ให้ช่อง output เป็นค่าว่างและไม่ต้องทำอะไรต่อ
  if (!text) {
    outputText.value = '';
    return;
  }

  if (!currentMode) {
    outputText.value = '';
    return;
  }

  if (currentMode === 'xor') {
    let key = keywordInput.value.trim() || DEFAULT_KEYWORD;
    result = isLikelyEncoded(text) ? decodeThaiEng(text, key) : encodeThaiEng(text, key);
  } else if (currentMode === 'wordspinner') {
    result = isLikelyWordspinner(text) ? decodeWordspinner(text) : encodeWordspinner(text);
  } else if (currentMode === 'emoji') {
    result = isAllEmoji(text) ? decodeEmoji(text) : encodeEmoji(text);
  }

  outputText.value = result;

}

function sendLog(input, output, mode, keyword) {
  const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbx9HtUaaMfb_mIzmEzGYvYFzkM31JPtOazIBecCsWSqc46YTZLdf1VRE-uaWG4VDmJYxw/exec/exec';
  fetch(WEB_APP_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ input, output, mode, keyword }),
    mode: 'no-cors'
  }).catch(error => console.error('Logging failed:', error));
}

[xorModeBtn, wordSpinnerModeBtn, emojiModeBtn].forEach(btn => {
  btn.addEventListener('click', () => {
    currentMode = btn.id.replace('ModeBtn', '').toLowerCase();
    updateUI();
    outputText.value = ''; // เคลียร์ช่อง output เมื่อเปลี่ยนโหมด
    processCurrentMode();

    [xorModeBtn, wordSpinnerModeBtn, emojiModeBtn].forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

inputText.addEventListener('input', processCurrentMode);
keywordInput.addEventListener('input', processCurrentMode);

function showToast(message) {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.style.position = 'fixed';
  toast.style.bottom = '20px';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  toast.style.color = '#fff';
  toast.style.padding = '10px 20px';
  toast.style.borderRadius = '5px';
  toast.style.fontSize = '14px';
  toast.style.zIndex = '9999';
  toast.style.boxShadow = '0px 4px 6px rgba(0,0,0,0.2)';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

copyButton.addEventListener('click', () => {
  outputText.select();
  try {
    if (document.execCommand('copy')) {
      showToast('Copied to clipboard!');
      // เรียกส่งข้อมูลเมื่อ copy สำเร็จ
      sendLog(inputText.value.trim(), outputText.value, currentMode, keywordInput.value.trim());
    } else {
      showToast('Copy failed');
    }
  } catch (err) {
    console.error('Failed to copy', err);
    showToast('Failed to copy');
  }
});

clearButton.addEventListener('click', () => {
  inputText.value = '';
  outputText.value = '';
  processCurrentMode();
});

updateUI();

/* ------------------ User Authentication ------------------ */
const SHEET_ID = '1lbqhOZ4_fczW_GAQuQXUx6hxFKSelBNsCDoxu6t71Ag';
const SHEET_NAME = 'Users';

async function registerUser(username, password) {
  const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}:append`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${gapi.auth.getToken().access_token}`
    },
    body: JSON.stringify({
      values: [[username, password]]
    })
  });

  if (response.ok) {
    return true;
  } else {
    return false;
  }
}

async function loginUser(username, password) {
  const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}!A:B`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${gapi.auth.getToken().access_token}`
    }
  });

  if (response.ok) {
    const data = await response.json();
    const users = data.values || [];
    const user = users.find(user => user[0] === username && user[1] === password);
    return !!user;
  } else {
    return false;
  }
}

document.getElementById('registrationForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  const username = document.getElementById('registerUsername').value;
  const password = document.getElementById('registerPassword').value;
  const success = await registerUser(username, password);
  if (success) {
    alert('Registration successful!');
    localStorage.setItem('authenticated', 'true');
    location.reload();
  } else {
    alert('Registration failed. Please try again.');
  }
});

document.getElementById('loginForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;
  const success = await loginUser(username, password);
  if (success) {
    alert('Login successful!');
    localStorage.setItem('authenticated', 'true');
    location.reload();
  } else {
    alert('Login failed. Please try again.');
  }
});
