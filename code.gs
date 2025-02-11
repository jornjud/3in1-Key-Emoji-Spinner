const SHEET_ID = '1lbqhOZ4_fczW_GAQuQXUx6hxFKSelBNsCDoxu6t71Ag';
const SHEET_NAME = 'Logs';
const USERS_SHEET_NAME = 'Users';

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    const data = JSON.parse(e.postData.contents);
    
    if (data.action === 'register') {
      return handleRegister(data);
    } else if (data.action === 'login') {
      return handleLogin(data);
    } else {
      // รับข้อมูลจากเว็บแอป
      const timestamp = new Date();
      const inputText = data.input || '';
      const outputText = data.output || '';
      const mode = data.mode || '';
      const keyword = data.keyword || '';
      const user_id = data.user_id || '';
      
      // บันทึกลงใน Sheet
      sheet.appendRow([timestamp, inputText, outputText, mode, keyword, user_id]);
      
      // ส่งกลับการตอบสนองสำเร็จ
      return ContentService.createTextOutput(
        JSON.stringify({ status: 'success' })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    
  } catch (error) {
    // กรณีเกิดข้อผิดพลาด
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function handleRegister(data) {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(USERS_SHEET_NAME);
  const username = data.username;
  const password = data.password;
  
  // ตรวจสอบว่าผู้ใช้มีอยู่แล้วหรือไม่
  const existingUser = sheet.getRange('A:A').getValues().flat().indexOf(username);
  if (existingUser !== -1) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: 'Username already exists' })
    ).setMimeType(ContentService.MimeType.JSON);
  }
  
  // สร้าง user_id และ password
  const user_id = Utilities.getUuid();
  const created_at = new Date();
  
  // บันทึกผู้ใช้ใหม่ลงใน Sheet
  sheet.appendRow([user_id, username, password, created_at]);
  
  return ContentService.createTextOutput(
    JSON.stringify({ status: 'success', user_id })
  ).setMimeType(ContentService.MimeType.JSON);
}

function handleLogin(data) {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(USERS_SHEET_NAME);
  const username = data.username;
  const password = data.password;
  
  // ค้นหาผู้ใช้
  const users = sheet.getDataRange().getValues();
  const user = users.find(row => row[1] === username);
  
  if (!user) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: 'Invalid username or password' })
    ).setMimeType(ContentService.MimeType.JSON);
  }
  
  const user_id = user[0];
  const stored_password = user[2];
  
  if (stored_password !== password) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: 'Invalid username or password' })
    ).setMimeType(ContentService.MimeType.JSON);
  }
  
  return ContentService.createTextOutput(
    JSON.stringify({ status: 'success', user_id })
  ).setMimeType(ContentService.MimeType.JSON);
}
