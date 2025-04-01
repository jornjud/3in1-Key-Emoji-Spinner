/*******************************************************
  script.js - ฉบับ Username Login + Firestore 
********************************************************/

// ======== Element References (Auth + App) ========
const authContainer = document.getElementById('auth-container');
const appContainer = document.getElementById('app-container');
const loginUsernameInput = document.getElementById('login-username');
const loginPasswordInput = document.getElementById('login-password');
const loginButton = document.getElementById('login-button');
const registerUsernameInput = document.getElementById('register-username');
const registerEmailInput = document.getElementById('register-email');
const registerPasswordInput = document.getElementById('register-password');
const registerButton = document.getElementById('register-button');
const logoutButton = document.getElementById('logout-button');
const authErrorDisplay = document.getElementById('auth-error');
const userDisplay = document.getElementById('user-display');
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

let currentMode = null;
let toastTimeout = null;

// ======== ฟังก์ชันแสดง Toast ========
function showToast(message, duration = 2500, isError = false) {
  const existingToast = document.querySelector('.toast-notification');
  if (existingToast) { clearTimeout(toastTimeout); existingToast.remove(); }
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.className = 'toast-notification';
  if (isError) { toast.style.backgroundColor = 'rgba(244, 67, 54, 0.85)'; }
  document.body.appendChild(toast);
  toastTimeout = setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, duration - 300);
}

// ======== ฟังก์ชันแสดง Error ของ Auth ========
function showAuthError(message) {
    let displayMessage = message;
    if (message.includes('auth/invalid-email')) { displayMessage = 'รูปแบบอีเมลไม่ถูกต้อง'; }
    else if (message.includes('auth/user-not-found') || message.includes('auth/invalid-credential')) { displayMessage = 'Username (หรือ Email) หรือรหัสผ่านไม่ถูกต้อง'; }
    else if (message.includes('auth/wrong-password')) { displayMessage = 'รหัสผ่านไม่ถูกต้อง'; }
    else if (message.includes('auth/email-already-in-use')) { displayMessage = 'อีเมลนี้ถูกใช้งานแล้ว'; }
    else if (message.includes('auth/weak-password')) { displayMessage = 'รหัสผ่านสั้นหรือคาดเดาง่ายเกินไป (ต้องมีอย่างน้อย 6 ตัวอักษร)'; }
    else if (message.includes('auth/missing-password')) { displayMessage = 'กรุณากรอกรหัสผ่าน'; }
    else if (message.includes('auth/missing-email')) { displayMessage = 'กรุณากรอกอีเมล'; }
    else if (message.includes('Username check failed') || message.includes('Firestore write failed')) { displayMessage = 'เกิดปัญหาเกี่ยวกับฐานข้อมูล Username ลองใหม่อีกครั้ง'; }
    else if (message.includes('Username already exists')) { displayMessage = `Username นี้มีคนใช้แล้ว!`; }
    else if (message.includes('Username not found')) { displayMessage = `ไม่พบ Username นี้ในระบบ!`; }
    else if (message.includes('Invalid Username format')) { displayMessage = `Username ใช้ได้เฉพาะตัวอักษรภาษาอังกฤษ (a-z), ตัวเลข (0-9) และขีดล่าง (_) เท่านั้น`; }
    else if (message.includes('Username too short') || message.includes('Username too long')) { displayMessage = `Username ต้องมีความยาว 3-30 ตัวอักษร`; }

    if(authErrorDisplay) authErrorDisplay.textContent = `🚫 ${displayMessage}`; // Check if element exists
    showToast(`🚫 ${displayMessage}`, 4000, true);
}

// ======== Event Listener ของปุ่ม Register ========
if (registerButton) { // ตรวจสอบว่า element ปุ่มมีอยู่จริงหรือไม่
    registerButton.addEventListener('click', async () => {
        // ตรวจสอบว่า input elements มีอยู่จริงหรือไม่ ก่อนอ่าน value
        if (!registerUsernameInput || !registerEmailInput || !registerPasswordInput) {
            console.error("Register form inputs not found!");
            showAuthError("เกิดข้อผิดพลาดกับฟอร์มลงทะเบียน");
            return;
        }
        const username = registerUsernameInput.value.trim().toLowerCase();
        const email = registerEmailInput.value.trim();
        const password = registerPasswordInput.value;
        if(authErrorDisplay) authErrorDisplay.textContent = '';

        // Input Validation
        if (!username || !email || !password) { showAuthError("กรุณากรอก Username, Email, และ Password ให้ครบถ้วน"); return; }
        const usernameRegex = /^[a-z0-9_]+$/;
        if (!usernameRegex.test(username)) { showAuthError("Invalid Username format"); return; }
        if (username.length < 3 || username.length > 30) { showAuthError("Username too short or Username too long"); return; }
        if (password.length < 6) { showAuthError("auth/weak-password"); return; }

        try {
            // 1. เช็ค Username ซ้ำใน Firestore
            console.log(`Checking username: ${username}`);
            const usernameRef = db.collection('usernames').doc(username);
            const usernameDoc = await usernameRef.get();
            if (usernameDoc.exists) {
                console.log(`Username ${username} already exists.`);
                showAuthError(`Username already exists`); return;
            }
            console.log(`Username ${username} is available.`);

            // 3. สร้าง User ใน Firebase Auth
            console.log(`Creating user in Auth for email: ${email}`);
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;
            console.log('Auth user created successfully! UID:', user.uid);

            // 4. บันทึกข้อมูลลง Firestore
            console.log(`Writing user data to Firestore for UID: ${user.uid} and Username: ${username}`);
            const batch = db.batch();
            const userDocRef = db.collection('users').doc(user.uid);
            batch.set(userDocRef, {
                username: username,
                email: user.email,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            });
            batch.set(usernameRef, { // usernameRef จากขั้นตอนที่ 1
                userId: user.uid,
                email: user.email
            });

            // 5. Commit Batch Write
            await batch.commit();
            console.log('Firestore write successful!');

            showToast(`✅ ลงทะเบียนสำเร็จ! ยินดีต้อนรับ ${username}!`);
            registerUsernameInput.value = '';
            registerEmailInput.value = '';
            registerPasswordInput.value = '';

        } catch (error) {
            console.error('Registration failed:', error);
            if (error.code && error.code.startsWith('auth/')) {
                showAuthError(error.message);
            } else {
                showAuthError('เกิดข้อผิดพลาดบางอย่างระหว่างการลงทะเบียน โปรดลองอีกครั้ง');
                if (auth.currentUser) {
                    console.warn("Auth user might have been created but Firestore write failed.");
                }
            }
        }
    });
} else {
    console.error("Register button not found!");
}


// ======== Event Listener ของปุ่ม Login ========
if (loginButton) { // ตรวจสอบว่า element ปุ่มมีอยู่จริงหรือไม่
    loginButton.addEventListener('click', async () => {
        // ตรวจสอบว่า input elements มีอยู่จริงหรือไม่ ก่อนอ่าน value
        if (!loginUsernameInput || !loginPasswordInput) {
             console.error("Login form inputs not found!");
             showAuthError("เกิดข้อผิดพลาดกับฟอร์มล็อกอิน");
             return;
        }
        const usernameOrEmail = loginUsernameInput.value.trim();
        const password = loginPasswordInput.value;
        if(authErrorDisplay) authErrorDisplay.textContent = '';

        if (!usernameOrEmail || !password) { showAuthError("กรุณากรอก Username (หรือ Email) และรหัสผ่าน"); return; }

        try {
            let emailToLogin = usernameOrEmail;

            // ตรวจสอบว่าเป็น Username หรือ Email
            if (!usernameOrEmail.includes('@')) {
                const usernameLower = usernameOrEmail.toLowerCase();
                console.log(`Input looks like username: ${usernameLower}. Querying Firestore...`);
                const usernameRef = db.collection('usernames').doc(usernameLower);
                const usernameDoc = await usernameRef.get();

                if (usernameDoc.exists) {
                    emailToLogin = usernameDoc.data().email;
                    console.log(`Username found! Corresponding email: ${emailToLogin}`);
                } else {
                    console.log(`Username ${usernameLower} not found in Firestore.`);
                    showAuthError(`Username not found`); return;
                }
            } else {
                console.log(`Input looks like email: ${emailToLogin}`);
            }

            // ใช้ Email ที่ได้มา Login Auth
            console.log(`Attempting Firebase Auth sign-in with email: ${emailToLogin}`);
            const userCredential = await auth.signInWithEmailAndPassword(emailToLogin, password);
            console.log('Login successful! User:', userCredential.user);

            loginUsernameInput.value = '';
            loginPasswordInput.value = '';

        } catch (error) {
            console.error('Login failed:', error);
            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential' || error.code === 'auth/invalid-email') {
                showAuthError('Username (หรือ Email) หรือรหัสผ่านไม่ถูกต้อง โปรดตรวจสอบ');
            } else {
                showAuthError('เกิดข้อผิดพลาดในการล็อกอิน: ' + error.message);
            }
        }
    });
} else {
     console.error("Login button not found!");
}


// ======== Event Listener ของปุ่ม Logout ========
if (logoutButton) { // ตรวจสอบว่า element ปุ่มมีอยู่จริงหรือไม่
    logoutButton.addEventListener('click', () => {
        auth.signOut().then(() => {
            console.log('ออกจากระบบแล้ว!');
            showToast('👋 ออกจากระบบเรียบร้อยแล้ว');
        }).catch((error) => {
            console.error('Logout Error:', error);
            showAuthError('เกิดข้อผิดพลาดในการออกจากระบบ: ' + error.message);
        });
    });
} else {
    console.error("Logout button not found!");
}


// ======== onAuthStateChanged ========
auth.onAuthStateChanged(async (user) => {
    if (user) {
        // ผู้ใช้ล็อกอินอยู่
        console.log('ผู้ใช้ล็อกอินอยู่:', user.email, 'UID:', user.uid);
        let displayNameToShow = user.email;
        try {
            console.log(`กำลังดึงข้อมูลผู้ใช้จาก Firestore สำหรับ UID: ${user.uid}`);
            const userDocRef = db.collection('users').doc(user.uid);
            const userDoc = await userDocRef.get();
            if (userDoc.exists) {
                const userData = userDoc.data();
                console.log('พบข้อมูลผู้ใช้ใน Firestore:', userData);
                if (userData.username) {
                    displayNameToShow = userData.username;
                    console.log(`กำลังแสดง username: ${displayNameToShow}`);
                } else { console.log('ไม่พบฟิลด์ username ในเอกสาร Firestore, ใช้ email แทน'); }
            } else { console.warn(`ไม่พบเอกสารผู้ใช้สำหรับ UID ${user.uid} ใน Firestore!`); }
        } catch (error) { console.error("เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้จาก Firestore:", error); }

        // อัปเดต UI
        if(userDisplay) userDisplay.textContent = `| ${displayNameToShow}`;
        if(authContainer) authContainer.style.display = 'none';
        if(appContainer) appContainer.style.display = 'flex';
        if(authErrorDisplay) authErrorDisplay.textContent = '';

    } else {
        // ผู้ใช้ไม่ได้ล็อกอิน
        console.log('ผู้ใช้ออกจากระบบแล้ว');
        if(authContainer) authContainer.style.display = 'block';
        if(appContainer) appContainer.style.display = 'none';
        if(userDisplay) userDisplay.textContent = '';

        // ล้าง Spinner Inputs
        if (inputText) inputText.value = ''; if (outputText) outputText.value = ''; if (keywordInput) keywordInput.value = '';
        if (currentMode) {
           if(xorModeBtn) xorModeBtn.classList.remove('active'); if(wordSpinnerModeBtn) wordSpinnerModeBtn.classList.remove('active'); if(emojiModeBtn) emojiModeBtn.classList.remove('active');
           currentMode = null; if (typeof updateUI === 'function') updateUI();
        }
         // ล้าง Auth Forms
        if(loginUsernameInput) loginUsernameInput.value = ''; if(loginPasswordInput) loginPasswordInput.value = '';
        if(registerUsernameInput) registerUsernameInput.value = ''; if(registerEmailInput) registerEmailInput.value = ''; if(registerPasswordInput) registerPasswordInput.value = '';
        if(authErrorDisplay) authErrorDisplay.textContent = '';
    }
});


// ######################################################################
// ########   โค้ดส่วน Spinner เดิม (ไม่แก้ไข)                       ########
// ######################################################################

const ALLOWED_CHARS = 'กขคฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรลวศษสหฬอฮฤๆะัาิีึืุูเแโใไๅำ่้๊๋abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,./<>?๐αβγδεζηθικλμνξοπρστυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ';
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
function updateUI() { if(keywordSection) keywordSection.style.display = (currentMode === 'xor') ? 'flex' : 'none'; }
function processCurrentMode() { if (!auth.currentUser) { console.warn("User not logged in, cannot process."); showToast("⚠️ กรุณาล็อกอินก่อนใช้งานฟังก์ชันนี้", 3000, true); return; } const text = inputText.value; let result = ''; let action = ''; if (text.trim() === '') { if(outputText) outputText.value = ''; return; } if (!currentMode) { if(outputText) outputText.value = '⚠️ กรุณาเลือกโหมดก่อน'; showToast('⚠️ กรุณาเลือกโหมดก่อน', 3000); return; } try { if (currentMode === 'xor') { let key = keywordInput.value.trim() || DEFAULT_KEYWORD; if (isLikelyEncoded(text)) { action = '🔑 กำลังถอดรหัส (Key)...'; showToast(action); result = decodeThaiEng(text, key); } else { action = '🔒 กำลังเข้ารหัส (Key)...'; showToast(action); result = encodeThaiEng(text.trim(), key); } } else if (currentMode === 'wordspinner') { if (isLikelyWordspinner(text)) { action = '🔄 กำลังถอดรหัส (Spinner)...'; showToast(action); result = decodeWordspinner(text); } else { action = '✨ กำลังเข้ารหัส (Spinner)...'; showToast(action); result = encodeWordspinner(text.trim()); } } else if (currentMode === 'emoji') { if (isAllEmoji(text)) { action = '😃 กำลังถอดรหัส (Emoji)...'; showToast(action); result = decodeEmoji(text); } else { action = '🤪 กำลังเข้ารหัส (Emoji)...'; showToast(action); result = encodeEmoji(text.trim()); } } if(outputText) outputText.value = result; } catch (error) { console.error("Processing Error:", error); showToast(`❌ เกิดข้อผิดพลาด: ${error.message}`, 4000, true); if(outputText) outputText.value = 'เกิดข้อผิดพลาด!'; } }

// ======== แก้ไข sendLog ให้ถูกต้องและเปิดใช้งาน ========
function sendLog(input, output, mode, keyword) {
    // *** ใส่ URL ที่ถูกต้องของมึงที่ได้จากการ Deploy Apps Script ล่าสุด! ***
    const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxkIJMiPz5HbBSDBKw-nmMvs3LPUa6RsR8AHtUoMMZcVpvHZbRhgGKYO62AoESBs8dufw/exec'; // <-- ตรวจ URL นี้ให้ดี! ต้องมี ' ปิดท้าย!

    const userIdentifier = auth.currentUser ? (auth.currentUser.email || auth.currentUser.uid) : 'anonymous';

    // เปิดใช้งาน fetch
    fetch(WEB_APP_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify({ input: input, output: output, mode: mode, keyword: keyword, user: userIdentifier }),
      mode: 'no-cors'
    })
    .then(response => { console.log('Log request sent (status might be opaque with no-cors).'); })
    .catch(error => { console.error('Logging failed:', error); showToast('⚠️ เกิดปัญหาในการส่ง Log', 3000, true); });
}

// --- Event Listeners ที่เหลือ ---
[xorModeBtn, wordSpinnerModeBtn, emojiModeBtn].forEach(btn => { if(!btn) return; btn.addEventListener('click', () => { if (!auth.currentUser) { showToast("⚠️ กรุณาล็อกอินก่อนเปลี่ยนโหมด", 3000, true); return; } const newMode = btn.id.replace('ModeBtn', '').toLowerCase(); if (currentMode !== newMode) { currentMode = newMode; updateUI(); processCurrentMode(); [xorModeBtn, wordSpinnerModeBtn, emojiModeBtn].forEach(b => b.classList.remove('active')); btn.classList.add('active'); let modeName = ''; if (currentMode === 'xor') modeName = 'Key Translator'; else if (currentMode === 'wordspinner') modeName = 'Word Spinner'; else if (currentMode === 'emoji') modeName = 'Emoji Code'; showToast(`✅ เปลี่ยนเป็นโหมด ${modeName}`); } }); });
if(inputText) inputText.addEventListener('input', processCurrentMode);
if(keywordInput) keywordInput.addEventListener('input', () => { if (currentMode === 'xor' && auth.currentUser) { processCurrentMode(); } });
if(copyButton) copyButton.addEventListener('click', () => { if (!auth.currentUser) { showToast("⚠️ กรุณาล็อกอินก่อนคัดลอก", 3000, true); return; } if (!outputText || !outputText.value) { showToast('❓ ไม่มีข้อความให้คัดลอก', 2000); return; } const inputToLog = inputText.value.trim(); const outputToLog = outputText.value; const modeToLog = currentMode; const keywordToLog = keywordInput.value.trim(); navigator.clipboard.writeText(outputToLog).then(() => { showToast('📋 คัดลอกไปยังคลิปบอร์ดแล้ว'); sendLog(inputToLog, outputToLog, modeToLog, keywordToLog); }).catch(err => { console.error('Clipboard API ล้มเหลว: ', err); try { if(outputText) { outputText.select(); outputText.setSelectionRange(0, 99999); } if (document.execCommand('copy')) { showToast('📋 คัดลอกไปยังคลิปบอร์ดแล้ว (วิธีเก่า)'); sendLog(inputToLog, outputToLog, modeToLog, keywordToLog); } else { showToast('❌ ไม่สามารถคัดลอกได้ ลองกด Ctrl+C ด้วยตนเอง'); } } catch (execErr) { console.error('การคัดลอกวิธีเก่าล้มเหลว', execErr); showToast('❌ ไม่สามารถคัดลอกได้ ลองกด Ctrl+C ด้วยตนเอง'); } }); });
if(clearButton) clearButton.addEventListener('click', () => { if (!auth.currentUser) { showToast("⚠️ กรุณาล็อกอินก่อนล้างข้อความ", 3000, true); return; } if(inputText) inputText.value = ''; if(outputText) outputText.value = ''; showToast('🧹 ล้างข้อความแล้ว'); if(inputText) inputText.focus(); });
function showHelp() { if(!helpContent) return; helpContent.innerHTML = `<div><h3><i class="fas fa-key"></i> Key Translator Mode</h3><p>ใส่ข้อความและ Keyword (หากเว้นว่างจะใช้ค่าเริ่มต้น <code>${DEFAULT_KEYWORD}</code>) ระบบจะเข้ารหัส หากข้อความที่ป้อนดูเหมือนถูกเข้ารหัสแล้ว ระบบจะพยายามถอดรหัสด้วย Keyword เดียวกัน</p></div><div><h3><i class="fas fa-smile"></i> Emoji Code Mode</h3><p>แปลงตัวอักษร (ไทย, อังกฤษ, ตัวเลข, สัญลักษณ์บางตัว) เป็น Emoji หรือแปลง Emoji กลับเป็นข้อความเดิม ระบบจะคาดเดาโดยอัตโนมัติว่าควรเข้ารหัสหรือถอดรหัส</p></div><div><h3><i class="fas fa-sync-alt"></i> Word Spinner Mode</h3><p>สลับตำแหน่งตัวอักษรทั้งหมดในข้อความแบบสุ่ม พร้อมเพิ่ม Prefix <code>${DEFAULT_PREFIX}</code> และรหัส Seed 4 ตัวที่ด้านหน้า หากข้อความที่ป้อนขึ้นต้นด้วย Prefix และ Seed ระบบจะถอดรหัสกลับเป็นข้อความเดิม</p></div><hr><p style="font-size: 0.9em; color: #777;">คุณต้องล็อกอินก่อนจึงจะสามารถใช้งานโหมดเหล่านี้ได้ 😉</p>`; if(helpModal) helpModal.style.display = 'block'; }
if(helpBtn) helpBtn.addEventListener('click', showHelp);
if(closeBtn) closeBtn.addEventListener('click', () => { if(helpModal) helpModal.style.display = 'none'; });
window.addEventListener('click', (event) => { if (event.target === helpModal) { if(helpModal) helpModal.style.display = 'none'; } });

if (typeof updateUI === 'function') updateUI();
console.log("สคริปต์ Spinner โหลดและพร้อมใช้งาน (รอการล็อกอิน)");
// ---- จบสคริปต์ ----
