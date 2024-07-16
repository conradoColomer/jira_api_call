//See README first

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Jira')
      .addItem('Get Jira Issue Title', 'getJiraTitlesForAll')
      .addToUi();
}

function getJiraTitlesForAll() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  // Procesar la columna B
  processJiraLinks(sheet, "B", "C");
  // Procesar la columna F
  processJiraLinks(sheet, "F", "G");
    // Procesar la columna K
  processJiraLinks(sheet, "K", "L");
}

function processJiraLinks(sheet, sourceColumn, targetColumn) {
  var sourceColumnIndex = columnToIndex(sourceColumn);
  var range = sheet.getRange(sourceColumn + "2:" + sourceColumn); // Cambia este rango según tus necesidades
  var values = range.getValues();

  for (var i = 0; i < values.length; i++) {
    var cellValue = values[i][0];
    if (typeof cellValue === 'string' && cellValue.includes("https://my_company.atlassian.net/browse/")) {
      var cellRange = sheet.getRange(i + 2, sourceColumnIndex); // Ajusta la fila (i + 2) y la columna (sourceColumnIndex)
      getJiraTitle(cellRange, targetColumn);
    }
  }
}

function getJiraTitle(range, targetColumn) {
  var sheet = range.getSheet();
  var jiraLink = range.getValue();

  Logger.log("Jira Link: " + jiraLink);

  if (!jiraLink || !jiraLink.includes("https://my_company.net/browse/")) {
    Logger.log("No valid Jira link found in the cell");
    return;
  }

  var issueKey = jiraLink.split('/').pop();
  var jiraDomain = "my_company.atlassian.net";
  var url = `https://${jiraDomain}/rest/api/2/issue/${issueKey}`;

  Logger.log("Jira API URL: " + url);

  var email = "your_company_email";
  var apiToken = "your_api_token";

  var options = {
    "method": "GET",
    "headers": {
      "Authorization": "Basic " + Utilities.base64Encode(email + ':' + apiToken),
      "Content-Type": "application/json"
    }
  };

  try {
    var response = UrlFetchApp.fetch(url, options);
    Logger.log("API Response: " + response.getContentText());

    var data = JSON.parse(response.getContentText());
    var issueTitle = data.fields.summary;

    Logger.log("Issue Title: " + issueTitle);

    var targetColumnIndex = columnToIndex(targetColumn);
    var titleCell = sheet.getRange(range.getRow(), targetColumnIndex); // Celda de destino en la misma fila
    titleCell.setValue(issueTitle);
  } catch (e) {
    Logger.log("Error fetching Jira issue: " + e.message);
  }
}

function columnToIndex(column) {
  var columnIndex = 0;
  for (var i = 0; i < column.length; i++) {
    columnIndex = columnIndex * 26 + column.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
  }
  return columnIndex;
}
