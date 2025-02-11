function doPost(e) {
  const sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getSheetByName('Sheet1');
  const data = JSON.parse(e.postData.contents);
  const action = data.action;

  if (action === 'register') {
    const username = data.username;
    const password = data.password;

    const existingUser = sheet.getRange('A:A').getValues().flat().indexOf(username);
    if (existingUser !== -1) {
      return ContentService.createTextOutput(JSON.stringify({ success: false, message: 'Username already exists' })).setMimeType(ContentService.MimeType.JSON);
    }

    sheet.appendRow([username, password]);
    return ContentService.createTextOutput(JSON.stringify({ success: true })).setMimeType(ContentService.MimeType.JSON);
  } else if (action === 'login') {
    const username = data.username;
    const password = data.password;

    const users = sheet.getRange('A:B').getValues();
    const user = users.find(row => row[0] === username && row[1] === password);

    if (user) {
      return ContentService.createTextOutput(JSON.stringify({ success: true })).setMimeType(ContentService.MimeType.JSON);
    } else {
      return ContentService.createTextOutput(JSON.stringify({ success: false, message: 'Invalid username or password' })).setMimeType(ContentService.MimeType.JSON);
    }
  }

  return ContentService.createTextOutput(JSON.stringify({ success: false, message: 'Invalid action' })).setMimeType(ContentService.MimeType.JSON);
}
