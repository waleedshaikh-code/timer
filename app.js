var x;
function start() {
    if (document.getElementById('input1') != null) {
        var btn = document.getElementById('button1');
        btn.disabled = true;
        let initval = document.getElementById('input1').value
        initval = parseInt(initval)
        x = setInterval(() => {
            document.getElementById('counter').innerHTML = initval
            initval -= 1
            if (initval < 0) {
                clearInterval(x);
                document.getElementById("counter").innerHTML = "EXPIRED";
            }
            console.log(initval)
        }, 1000);
    }
}

function stop() {
    cur_val = parseInt(document.getElementById('counter').innerHTML)
    clearInterval(x);
    document.getElementById("counter").innerHTML = "Timer Stopped"
    var btn = document.getElementById('button1');
    btn.disabled = false;
}

function reset() {
    stop()
    document.getElementById('counter').innerHTML = "Timer Reset"
    var btn = document.getElementById('button1');
    btn.disabled = false;
}