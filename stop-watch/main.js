'use strict';

(function() {
    var timer = document.getElementById('timer')
    var start = document.getElementById('start')
    var stop = document.getElementById('stop')
    var reset = document.getElementById('reset')
})

var startTime;

var elapsedTtime = 0;

var timerId;

var timeToadd = 0;

function updateTImeText () {
    var m = Math.floor(elapsedTtime / 60000);

    var s = Math.floor(elapsedTtime % 60000 / 1000);

    var ms = elapsedTtime % 1000;

    m = ('0' + m).slice(-2);
    s = ('0' + s).slice(-2);
    ms = ('0' + ms).slice(-3);
}

function countUp () {
    timerId = setTimeout(function() {
        elapsedTtime = 
    })
}