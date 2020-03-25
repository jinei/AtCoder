function doGet(){
  var template = 'index';
  return HtmlService.createTemplateFromFile(template).evaluate();
}

function input_to_sheet_gs(title,day,score,method,comment,radioValue,git,probrem) {
  var sheet = SpreadsheetApp.getActiveSheet(); //シート全体のうち入力されているシートを取得
  var lastRow = sheet.getLastRow() + 1; //取得したシートの一番最後に入力された行からプラス１したもの
  sheet.getRange("B"+lastRow).setValue('=HYPERLINK("'+git+'","'+title+'")')
  sheet.getRange("A"+lastRow).setValue(day);
  sheet.getRange("C"+lastRow).setValue(score);
  sheet.getRange("D"+lastRow).setValue(method);
  sheet.getRange("F"+lastRow).setValue(comment);
  sheet.getRange("C"+lastRow).setBackground(radioValue);
  sheet.getRange("E"+lastRow).setValue('=HYPERLINK("'+probrem+'","'+probrem+'")')
}
