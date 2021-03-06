var login = require('./util/login');
var AnalysesPage = require('./analyses/analysesPage');

var analysisTitle = 'my title';
var analysisOutcomeTitle = 'my outcome';

module.exports = {
  "add csv analysis test": function(browser) {
    var analysesPage = new AnalysesPage(browser);
    login(browser, process.env.GEMTC_NIGHTWATCH_URL);

    analysesPage.waitForPageToLoad();
    analysesPage.addAnalysis(analysisTitle, analysisOutcomeTitle, '/parkinson-rel.csv');
    browser
      .waitForElementVisible('#analysis-header', 10000)
      .assert.containsText('#analysisTitle', analysisTitle)
      .assert.containsText('#analysisOutcome', analysisOutcomeTitle);
    analysesPage.end();
  }
};
