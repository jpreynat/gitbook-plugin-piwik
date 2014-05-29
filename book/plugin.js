require(["gitbook"], function(gitbook) {
    gitbook.events.bind("start", function(e, config) {
        config.piwik = config.piwik || {};
    });

    gitbook.events.bind("page.change", function() {
        ga('send', 'pageview');
    });

    gitbook.events.bind("exercise.submit", function(e, data) {

    });
});