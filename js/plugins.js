// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
window.onload = function () {

    var readOnlyCodeMirror = CodeMirror.fromTextArea(document.getElementById('codesnippet_readonly'), {
        mode: "javascript",
        theme: "default",
        lineNumbers: true,
        readOnly: true
    });

    var editableCodeMirror = CodeMirror.fromTextArea(document.getElementById('codesnippet_editable'), {
        mode: "javascript",
        theme: "default",
        lineNumbers: true
    });

};
