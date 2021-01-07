const IN = document.getElementById("input");
var empty = document.getElementById("empty");
var my = 0;


function add(numbers) {
    if (IN.value.length >= 2) {
        if (IN.value[IN.value.length - 2].match(/[/*+-]/) && numbers === '.') {alert("STOP CLICKING PLZ");
        return;}}
        if (IN.value.length === 1 && IN.value === '0' && numbers.match(/[0-9]/)) {
            IN.value = numbers;
            empty.innerText = numbers;
        } else if (IN.value.length === 1 && IN.value === '0' && numbers.match(/[.]/)) {
            if (numbers === '.' && my !== 1) { my = 1;  
        }  else if (numbers === '.') {alert("STOP CLICKING PLZ");return;}
            IN.value += numbers;
            empty.innerText += numbers;
        } else if (numbers.match(/[0-9.]/)) {
            if (numbers === '.' && my !== 1) { my = 1; 
                } else if (numbers === '.') {alert("STOP CLICKING PLZ"); return;}
            IN.value += numbers;
            if (IN.value[IN.value.length - 2].match(/[0-9.]/)) { empty.innerText += numbers;
                } else { empty.innerText = numbers }
        } else {
            if (IN.value.length >= 2) {
                if (IN.value[IN.value.length - 2].match(/[/*+-]/) || IN.value[IN.value.length - 1] === '.') {alert("STOP CLICKING PLZ"); return;}}
            IN.value = IN.value+ ' ' + numbers + ' ';
            empty.innerText = " " + numbers + " ";
            my = 0;
        }
    }


function delet() {
    if (IN.value.length === 1) {
        IN.value = '0';
        empty.innerText = "0";
    } else if (IN.value[IN.value.length - 1].match(/[0-9.]/)) {
        IN.value = IN.value.substring(0, IN.value.length - 1);
        var i = 1;
        my = 0;
        if (IN.value[IN.value.length - i] === '.') my = 1;
        while (IN.value[IN.value.length - i] !== " " && (i) <= IN.value.length) {
            i++;
            if (IN.value[IN.value.length - i] === '.') my = 1;
        }
        empty.innerText = IN.value.substring(IN.value.length - i + 1, IN.value.length);
    } else {
        IN.value = IN.value.substring(0, IN.value.length - 3)
        i = 1;
        my = 0;
        if (IN.value[IN.value.length - i] === '.') my = 1;
        while (IN.value[IN.value.length - i] !== " " && (i) <= IN.value.length) {
            i++;
            if (IN.value[IN.value.length - i] === '.') my = 1;
        }
        empty.innerText = IN.value.substring(IN.value.length - i + 1, IN.value.length);
    }
}

function equal() {
    IN.value = eval(IN.value);
    empty.innerText = eval(IN.value);
}

function cancel() {
  IN.value = "0";
  empty.innerText = "0";
  my = 0;
}