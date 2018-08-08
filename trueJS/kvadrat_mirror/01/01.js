window.onload = function() {
    var result = document.getElementById('result');
    for (var i = 0; i < 36; i++) {
        document.getElementById('cage').innerHTML += '<span class="cell"></span>';
    }
    document.getElementById('cage').onclick = function(event) {
        if (event.target.tagName == 'SPAN') {
            event.target.classList.toggle('bg');
        }
        if (result.innerHTML == '0') {
            timer();
        }
    }

    function timer() {
        var time = 0;
        var timer = setInterval(function() {
            time += 1;
            result.innerHTML = time;
        }, 1000);
    }
    document.getElementById('btn-rotate').onclick = function() {
        document.getElementById('cage').classList.toggle('rotateX');
    }
}