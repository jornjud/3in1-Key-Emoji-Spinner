/*******************************************************
  script.js - ฉบับตัดระบบฐานข้อมูลและ Log ออก
  - เอา Firebase Authentication, Firestore ออกทั้งหมด
  - เอาฟังก์ชัน sendLog ออก
  - เครื่องมือเข้ารหัส/ถอดรหัสทำงานได้เลย ไม่ต้องล็อกอิน
********************************************************/

// ======== Element References (App Only) ========
const appContainer = document.getElementById('app-container'); // ควรจะแสดงผลเลย
const xorModeBtn = document.getElementById('xorModeBtn');
const wordSpinnerModeBtn = document.getElementById('wordSpinnerModeBtn');
const emojiModeBtn = document.getElementById('emojiModeBtn');
const keywordSection = document.getElementById('keywordSection');
const keywordInput = document.getElementById('keywordInput');
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const copyButton = document.getElementById('copyButton');
const clearButton = document.getElementById('clearButton');
const helpBtn = document.getElementById('helpBtn');
const helpModal = document.getElementById('helpModal');
const closeBtn = helpModal.querySelector('.close-btn');
const helpContent = document.getElementById('helpContent');

// ซ่อน auth-container และแสดง app-container ทันที
const authContainer = document.getElementById('auth-container');
if (authContainer) {
  authContainer.style.display = 'none';
}
if (appContainer) {
  appContainer.style.display = 'flex'; // หรือ 'block' ตามที่เหมาะสม
}


let currentMode = null;
let toastTimeout = null;

// ======== ฟังก์ชันแสดง Toast ========
function showToast(message, duration = 2500, isError = false) {
  const existingToast = document.querySelector('.toast-notification');
  if (existingToast) { clearTimeout(toastTimeout); existingToast.remove(); }
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.className = 'toast-notification';
  if (isError) { toast.style.backgroundColor = 'rgba(244, 67, 54, 0.85)'; } // สีแดงสำหรับ error
  document.body.appendChild(toast);
  toastTimeout = setTimeout(() => {
    if (toast.parentElement) { // เช็คว่า toast ยังอยู่ใน DOM ก่อนจะพยายามลบ
        toast.style.opacity = '0';
        setTimeout(() => {
            if (toast.parentElement) {
                toast.remove();
            }
        }, 300);
    }
  }, duration - 300);
}


// ######################################################################
// ########   โค้ดส่วน Spinner เดิม (ไม่แก้ไขส่วนนี้)                 ########
// ######################################################################

const ALLOWED_CHARS = 'กขคฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรลวศษสหฬอฮฤๆะัาิีึืุู็เแโใไๅำ่้๊๋abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,./<>?๐αβγδεζηθικλμνξοπρστυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ';
const DEFAULT_KEYWORD = 'jornjud';
const DEFAULT_PREFIX = '~';
const SEED_LENGTH = 4;
function generateShortSeed() { return Math.random().toString(36).slice(-SEED_LENGTH).padStart(SEED_LENGTH, '0'); }
function createPRNG(seed) { const seedHash = [...seed].reduce((hash, ch) => (hash * 31 + ch.charCodeAt(0)) & 0x7fffffff, 0); let state = seedHash; return () => { state = (state * 1103515245 + 12345) & 0x7fffffff; return state / 0x80000000; }; }
const pigpenEmojis = ['😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊', '😋','😎','😍','😘','😗','😙','😚','🙂','🤗','🤩','🤔','🤨','😐','😑','😶','🙄','😏','😣','😥','😮', '🤐','😯','😪','😫','😴','😌','😛','😜','😝','🤤','😒','😓','😔','😕','🙃','🤑','😲','☹️','🙁','😖', '😞','😟','😤','😢','😭','😦','😧','😨','😩','🤯','😬','😰','😱','🥵','🥶','😳','🤪','😵','😡','😠', '🤬','😷','🤒','🤕','🤢','🤮','🤧','😇','🥰','🤠','🤡','🥳','🥴','🥺','🤥','🤫','🤭','🧐','🤓','😈', '👿','👹','👺','💀','👻','👽','🤖','💩','😺','😸','😹','😻','😼','😽','🙀','😿','😾','🐶','🐱','🐭', '🐹','🐰','🦊','🐻','🐼','🐨','🐯','🦁','🐮','🐷','🐽','🐸','🐵','🙈','🙉','🙊','🐒','🐔','🐧','🐦', '🐤','🐣','🐥','🦆','🦅','🦉','🦇','🐺','🐗','🐴','🦄','🐝','🐛','🦋','🐌','🐞','🐜','🦗','🕷','🕸', '🦂','🐢','🐍','🦎','🦖','🦕','🐙','🦑','🦐','🦀','🐡','🐠','🐟','🐬','🐳','🐋','🦈','🐊','🐅','🐆', '🦓','🦍','🐘','🦏','🐪','🐫','🦒','🦘','🐃','🐂','🐄','🐎','🐖','🐏','🐑','🐐','🐓','🦃','🕊','🐇', '🐁','🐀','🐿','🦔','🐾','🐉','🐲','🌵','🎄','🌲','🌳','🌴','🌱','🌿','☘️','🍀','🎍','🎋','🍃','🍂', '🍁','🍄','🌾','💐','🌷','🌹','🥀','🌺','🌸','🌼','🌻','🌞','🌝','🌛','🌚','🌜','🌙','⭐','🌟','💫', '✨','⚡','☄️','💥','🔥','🌪','🌈','☀️','🌤','⛅','🌥','☁️','🌦','🌧','⛈','🌩','🌨','❄️','☃️','⛄', '🌬','💨','💧','💦','☔','☂️','🌊','🌫','🍏','🍎','🍐','🍊','🍋','🍌','🍉','🍇','🍓','🍈','🍒','🍑', '🥭','🍍','🥥','🥝','🍅','🍆','🥑','🥦','🥬','🥒','🌶','🌽','🥕','🥔','🍠','🥐','🍞','🥖','🥨','🧀', '🥚','🍳','🥞','🥓','🥩','🍗','🍖','🌭','🍔','🍟','🍕','🥪','🥙','🌮','🌯','🥗','🥘','🍝','🍜','🍲', '🍥','🥠','🍣','🍱','🍛','🍚','🍙','🍘','🍢','🍡','🍧','🍨','🍦','🥧','🧁','🍰','🎂','🍮','🍭','🍬', '🍫','🍿','🍩','🍪','🌰','🥜','🍯','🥛','🍼','☕','🍵','🥤','🍶','🍺','🍻','🥂','🍷','🥃','🍸','🍹', '🍾','🥄','🍴','🍽','🥣','🥡','🥢','🚗','🚕','🚙','🚌','🚎','🏎','🚓','🚑','🚒','🚐','🚚','🚛','🚜', '🛴','🚲','🛵','🏍','🚨','🚔','🚍','🚘','🚖','🚡','🚠','🚟','🚃','🚋','🚞','🚝','🚄','🚅','🚈','🚂', '🚆','🚇','🚊','🚉','✈️','🛫','🛬','🛩','💺','🛰','🚀','🛸','🚁','🛶','⛵','🚤','🛥','🛳','⛴','🚢', '⚓','🚧','⛽','🚏','🚦','🚥','🗺','🗿','🗽','⛲','🗼','🏰','🏯','🎡','🎢','🎠','⛱','🏖','🏝','🌋', '⛰','🏔','🗻','🏕','⛺','🏠','🏡','🏘','🏚','🏗','🏭','🏢','🏬','🏣','🏤','🏥','🏦','🏨','🏪','🏫', '🏩','💒','🏛','⛪','🕌','🕍','🕋','⛩','🛤','🛣','🗾','🎑','🏞','🌅','🌄','🌠','🎇','🎆','🌇','🌆', '🏙','🌃','🌌','🌉','🌁'];
const charToEmoji = new Map(); const emojiToChar = new Map();
for (let i = 0; i < ALLOWED_CHARS.length && i < pigpenEmojis.length; i++) { charToEmoji.set(ALLOWED_CHARS[i], pigpenEmojis[i]); emojiToChar.set(pigpenEmojis[i], ALLOWED_CHARS[i]); }
function encodeEmoji(text) { return [...text].map(ch => charToEmoji.get(ch) || ch).join(''); }
function decodeEmoji(text) { const emojiArray = Array.from(text); return emojiArray.map(emoji => emojiToChar.get(emoji) || emoji).join(''); }
function isAllEmoji(str) { const emojiArray = Array.from(str); return emojiArray.every(emoji => emojiToChar.has(emoji) || /\s/.test(emoji)); }
function encodeWordspinner(text) { const chars = [...text]; const seed = generateShortSeed(); const prng = createPRNG(seed); const positions = chars.map((_, i) => i).sort(() => prng() - 0.5); const shuffledText = positions.map(pos => chars[pos]).join(''); return `${DEFAULT_PREFIX}${seed}${shuffledText}`; }
function decodeWordspinner(text) { if (!text.startsWith(DEFAULT_PREFIX) || text.length < (DEFAULT_PREFIX.length + SEED_LENGTH)) return text; const seed = text.slice(DEFAULT_PREFIX.length, DEFAULT_PREFIX.length + SEED_LENGTH); const cipherText = text.slice(DEFAULT_PREFIX.length + SEED_LENGTH); if (cipherText.length === 0) return ''; const prng = createPRNG(seed); const positions = [...Array(cipherText.length).keys()].sort(() => prng() - 0.5); const reversePositions = new Array(cipherText.length); positions.forEach((shuffledIndex, originalIndex) => { reversePositions[shuffledIndex] = originalIndex; }); return reversePositions.map(pos => cipherText[pos]).join(''); }
function isLikelyWordspinner(text) { return text.startsWith(DEFAULT_PREFIX) && text.length >= (DEFAULT_PREFIX.length + SEED_LENGTH); }
function encodeThaiEng(text, keyword) { const seed = generateShortSeed(); const prng = createPRNG(seed + keyword); return seed + [...text].map(ch => { const idx = ALLOWED_CHARS.indexOf(ch); if (idx === -1) return ch; const randOffset = Math.floor(prng() * ALLOWED_CHARS.length); return ALLOWED_CHARS[(idx + randOffset) % ALLOWED_CHARS.length]; }).join(''); }
function decodeThaiEng(encText, keyword) { if (!encText || encText.length < SEED_LENGTH) return encText; const seed = encText.slice(0, SEED_LENGTH); const cipherText = encText.slice(SEED_LENGTH); if (cipherText.length === 0) return ''; const prng = createPRNG(seed + keyword); return [...cipherText].map(ch => { const idx = ALLOWED_CHARS.indexOf(ch); if (idx === -1) return ch; const randOffset = Math.floor(prng() * ALLOWED_CHARS.length); return ALLOWED_CHARS[(idx - randOffset % ALLOWED_CHARS.length + ALLOWED_CHARS.length) % ALLOWED_CHARS.length]; }).join(''); }
function isLikelyEncoded(text) { return /^[a-z0-9]{4}/.test(text) && text.length > SEED_LENGTH; }

function updateUI() {
    if(keywordSection) {
        keywordSection.style.display = (currentMode === 'xor') ? 'flex' : 'none';
    }
}

function processCurrentMode() {
    const text = inputText.value;
    let result = '';
    let action = '';

    if (text.trim() === '') {
        if(outputText) outputText.value = '';
        return;
    }

    if (!currentMode) {
        if(outputText) outputText.value = '⚠️ กรุณาเลือกโหมดก่อน';
        showToast('⚠️ กรุณาเลือกโหมดก่อน', 3000);
        return;
    }

    try {
        if (currentMode === 'xor') {
            let key = keywordInput.value.trim() || DEFAULT_KEYWORD;
            if (isLikelyEncoded(text)) {
                action = '🔑 กำลังถอดรหัส (Key)...';
                showToast(action);
                result = decodeThaiEng(text, key);
            } else {
                action = '🔒 กำลังเข้ารหัส (Key)...';
                showToast(action);
                result = encodeThaiEng(text.trim(), key);
            }
        } else if (currentMode === 'wordspinner') {
            if (isLikelyWordspinner(text)) {
                action = '🔄 กำลังถอดรหัส (Spinner)...';
                showToast(action);
                result = decodeWordspinner(text);
            } else {
                action = '✨ กำลังเข้ารหัส (Spinner)...';
                showToast(action);
                result = encodeWordspinner(text.trim());
            }
        } else if (currentMode === 'emoji') {
            if (isAllEmoji(text)) {
                action = '😃 กำลังถอดรหัส (Emoji)...';
                showToast(action);
                result = decodeEmoji(text);
            } else {
                action = '🤪 กำลังเข้ารหัส (Emoji)...';
                showToast(action);
                result = encodeEmoji(text.trim());
            }
        }
        if(outputText) outputText.value = result;
    } catch (error) {
        console.error("Processing Error:", error);
        showToast(`❌ เกิดข้อผิดพลาด: ${error.message}`, 4000, true);
        if(outputText) outputText.value = 'เกิดข้อผิดพลาด!';
    }
}

// Event Listeners สำหรับปุ่มเลือกโหมด
[xorModeBtn, wordSpinnerModeBtn, emojiModeBtn].forEach(btn => {
    if(!btn) return;
    btn.addEventListener('click', () => {
        const newMode = btn.id.replace('ModeBtn', '').toLowerCase();
        if (currentMode !== newMode) {
            currentMode = newMode;
            updateUI();
            processCurrentMode(); // ประมวลผลทันทีเมื่อเปลี่ยนโหมด
            [xorModeBtn, wordSpinnerModeBtn, emojiModeBtn].forEach(b => {
                if (b) b.classList.remove('active');
            });
            btn.classList.add('active');
            let modeName = '';
            if (currentMode === 'xor') modeName = 'Key Translator';
            else if (currentMode === 'wordspinner') modeName = 'Word Spinner';
            else if (currentMode === 'emoji') modeName = 'Emoji Code';
            showToast(`✅ เปลี่ยนเป็นโหมด ${modeName}`);
        }
    });
});

if(inputText) {
    inputText.addEventListener('input', processCurrentMode);
}

if(keywordInput) {
    keywordInput.addEventListener('input', () => {
        if (currentMode === 'xor') {
            processCurrentMode();
        }
    });
}

if(copyButton) {
    copyButton.addEventListener('click', () => {
        if (!outputText || !outputText.value) {
            showToast('❓ ไม่มีข้อความให้คัดลอก', 2000);
            return;
        }
        const outputToLog = outputText.value;
        navigator.clipboard.writeText(outputToLog).then(() => {
            showToast('📋 คัดลอกไปยังคลิปบอร์ดแล้ว');
            // ไม่มีการเรียก sendLog อีกต่อไป
        }).catch(err => {
            console.error('Clipboard API ล้มเหลว: ', err);
            try {
                if(outputText) {
                    outputText.select();
                    outputText.setSelectionRange(0, 99999); /* For mobile devices */
                }
                if (document.execCommand('copy')) {
                    showToast('📋 คัดลอกไปยังคลิปบอร์ดแล้ว (วิธีเก่า)');
                } else {
                    showToast('❌ ไม่สามารถคัดลอกได้ ลองกด Ctrl+C ด้วยตนเอง');
                }
            } catch (execErr) {
                console.error('การคัดลอกวิธีเก่าล้มเหลว', execErr);
                showToast('❌ ไม่สามารถคัดลอกได้ ลองกด Ctrl+C ด้วยตนเอง');
            }
        });
    });
}

if(clearButton) {
    clearButton.addEventListener('click', () => {
        if(inputText) inputText.value = '';
        if(outputText) outputText.value = '';
        showToast('🧹 ล้างข้อความแล้ว');
        if(inputText) inputText.focus();
    });
}

function showHelp() {
    if(!helpContent) return;
    helpContent.innerHTML = `
        <div><h3><i class="fas fa-key"></i> Key Translator Mode</h3><p>ใส่ข้อความและ Keyword (หากเว้นว่างจะใช้ค่าเริ่มต้น <code>${DEFAULT_KEYWORD}</code>) ระบบจะเข้ารหัส หากข้อความที่ป้อนดูเหมือนถูกเข้ารหัสแล้ว ระบบจะพยายามถอดรหัสด้วย Keyword เดียวกัน</p></div>
        <div><h3><i class="fas fa-smile"></i> Emoji Code Mode</h3><p>แปลงตัวอักษร (ไทย, อังกฤษ, ตัวเลข, สัญลักษณ์บางตัว) เป็น Emoji หรือแปลง Emoji กลับเป็นข้อความเดิม ระบบจะคาดเดาโดยอัตโนมัติว่าควรเข้ารหัสหรือถอดรหัส</p></div>
        <div><h3><i class="fas fa-sync-alt"></i> Word Spinner Mode</h3><p>สลับตำแหน่งตัวอักษรทั้งหมดในข้อความแบบสุ่ม พร้อมเพิ่ม Prefix <code>${DEFAULT_PREFIX}</code> และรหัส Seed 4 ตัวที่ด้านหน้า หากข้อความที่ป้อนขึ้นต้นด้วย Prefix และ Seed ระบบจะถอดรหัสกลับเป็นข้อความเดิม</p></div>
        <hr>
        <p style="font-size: 0.9em; color: #777;">ใช้งานได้เลย ไม่ต้องล็อกอิน 😉</p>`;
    if(helpModal) helpModal.style.display = 'block';
}

if(helpBtn) {
    helpBtn.addEventListener('click', showHelp);
}

if(closeBtn) {
    closeBtn.addEventListener('click', () => {
        if(helpModal) helpModal.style.display = 'none';
    });
}

window.addEventListener('click', (event) => {
    if (event.target === helpModal) {
        if(helpModal) helpModal.style.display = 'none';
    }
});

// เรียก updateUI ครั้งแรกเพื่อให้ keyword section ถูกต้อง (ถ้ามีโหมดเริ่มต้น)
updateUI();
console.log("สคริปต์ Spinner (Standalone) โหลดและพร้อมใช้งาน");

// ส่วน Service Worker registration ยังคงไว้
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then((registration) => {
        console.log('Service Worker registered successfully with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  });
} else {
  console.log('Service Worker is not supported by this browser.');
}

// ส่วนสลับฟอร์ม login/register ไม่จำเป็นอีกต่อไป สามารถลบออกได้
// const loginForm = document.getElementById('login-form');
// const registerForm = document.getElementById('register-form');
// const showRegisterLink = document.getElementById('show-register-link');
// const showLoginLink = document.getElementById('show-login-link');
// if (showRegisterLink && loginForm && registerForm) { ... }
// if (showLoginLink && loginForm && registerForm) { ... }
