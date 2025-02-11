function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index');
}

function registerUser(username, password) {
  var sheet = SpreadsheetApp.openById('1lbqhOZ4_fczW_GAQuQXUx6hxFKSelBNsCDoxu6t71Ag').getSheetByName('Users');
  var data = sheet.getDataRange().getValues();
  
  for (var i = 0; i < data.length; i++) {
    if (data[i][0] === username) {
      return 'Username already exists';
    }
  }
  
  sheet.appendRow([username, password]);
  return 'Registration successful';
}

function loginUser(username, password) {
  var sheet = SpreadsheetApp.openById('1lbqhOZ4_fczW_GAQuQXUx6hxFKSelBNsCDoxu6t71Ag').getSheetByName('Users');
  var data = sheet.getDataRange().getValues();
  
  for (var i = 0; i < data.length; i++) {
    if (data[i][0] === username && data[i][1] === password) {
      return 'Login successful';
    }
  }
  
  return 'Invalid username or password';
}
