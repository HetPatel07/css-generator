document.getElementById('constant').innerHTML = "<p class='mb-0'>16px</p>";

document.getElementById('constant').contentEditable = "true";
var a = document.getElementById('heading');

function user() {
    var text = document.getElementById('constant').innerText;

    var main = parseFloat(text);

    var c = a.style.fontSize = (main) + 'px';
    console.log(c);
}

function fontplus() {

    var x =
        window.getComputedStyle(document.getElementById("heading")).fontSize;

    var fontSize = parseFloat(x);

    var b = a.style.fontSize = (fontSize + 1) + 'px';
    document.getElementById('constant').innerHTML = b;

}

function fontminus() {
    var x = window.getComputedStyle(document.getElementById("heading")).fontSize;
    var fontSize = parseFloat(x);
    var b = a.style.fontSize = (fontSize - 1) + 'px';
    document.getElementById('constant').innerHTML = b;
}

function colored() {
    a.style.color = "#FF6347";
}

function cologreen() {
    a.style.color = "green";
}

function coloblue() {
    a.style.color = "blue";
}

//background color


function backred() {
    a.style.background = "#FF6347";
}

function backgreen() {
    a.style.background = "green";
}

function backblue() {
    a.style.background = "blue";
}




function pt() {
    var x = window.getComputedStyle(document.getElementById("heading")).paddingTop;
    var fontSize = parseFloat(x);
    var b = a.style.paddingTop = (fontSize + 1) + 'px';
}

function ptminus() {
    var x = window.getComputedStyle(document.getElementById("heading")).paddingTop;
    var fontSize = parseFloat(x);
    var b = a.style.paddingTop = (fontSize - 1) + 'px';
}

function pr() {
    var x = window.getComputedStyle(document.getElementById("heading")).paddingRight;
    var fontSize = parseFloat(x);
    var b = a.style.paddingRight = (fontSize + 1) + 'px';
}

function prminus() {
    var x = window.getComputedStyle(document.getElementById("heading")).paddingRight;
    var fontSize = parseFloat(x);
    var b = a.style.paddingRight = (fontSize - 1) + 'px';
}


function pb() {
    var x = window.getComputedStyle(document.getElementById("heading")).paddingBottom;
    var fontSize = parseFloat(x);
    var b = a.style.paddingBottom = (fontSize + 1) + 'px';
}

function pbminus() {
    var x = window.getComputedStyle(document.getElementById("heading")).paddingBottom;
    var fontSize = parseFloat(x);
    var b = a.style.paddingBottom = (fontSize - 1) + 'px';
}

function pl() {
    var x = window.getComputedStyle(document.getElementById("heading")).paddingLeft;
    var fontSize = parseFloat(x);
    var b = a.style.paddingLeft = (fontSize + 1) + 'px';
}

function plminus() {
    var x = window.getComputedStyle(document.getElementById("heading")).paddingLeft;
    var fontSize = parseFloat(x);
    var b = a.style.paddingLeft = (fontSize - 1) + 'px';
}

function pa() {
    var x = window.getComputedStyle(document.getElementById("heading")).padding;
    var fontSize = parseFloat(x);
    var b = a.style.padding = (fontSize + 1) + 'px';
}

function paminus() {
    var x = window.getComputedStyle(document.getElementById("heading")).padding;
    var fontSize = parseFloat(x);
    var b = a.style.padding = (fontSize - 1) + 'px';
}



//marign protion

function mt() {
    var x = window.getComputedStyle(document.getElementById("heading")).marginTop;
    var fontSize = parseFloat(x);
    var b = a.style.marginTop = (fontSize + 1) + 'px';
}

function mtminus() {
    var x = window.getComputedStyle(document.getElementById("heading")).marginTop;
    var fontSize = parseFloat(x);
    var b = a.style.marginTop = (fontSize - 1) + 'px';
}

function mr() {
    var x = window.getComputedStyle(document.getElementById("heading")).marginRight;
    var fontSize = parseFloat(x);
    var b = a.style.marginRight = (fontSize + 1) + 'px';
}

function mrminus() {
    var x = window.getComputedStyle(document.getElementById("heading")).marginRight;
    var fontSize = parseFloat(x);
    var b = a.style.marginRight = (fontSize - 1) + 'px';
}


function mb() {
    var x = window.getComputedStyle(document.getElementById("heading")).marginBottom;
    var fontSize = parseFloat(x);
    var b = a.style.marginBottom = (fontSize + 1) + 'px';
}

function mbminus() {
    var x = window.getComputedStyle(document.getElementById("heading")).marginBottom;
    var fontSize = parseFloat(x);
    var b = a.style.marginBottom = (fontSize - 1) + 'px';
}

function ml() {
    var x = window.getComputedStyle(document.getElementById("heading")).marginLeft;
    var fontSize = parseFloat(x);
    var b = a.style.marginLeft = (fontSize + 1) + 'px';
}

function mlminus() {
    var x = window.getComputedStyle(document.getElementById("heading")).marginLeft;
    var fontSize = parseFloat(x);
    var b = a.style.marginLeft = (fontSize - 1) + 'px';
}

function ma() {
    var x = window.getComputedStyle(document.getElementById("heading")).margin;
    var fontSize = parseFloat(x);
    var b = a.style.margin = (fontSize + 1) + 'px';
}

function maminus() {
    var x = window.getComputedStyle(document.getElementById("heading")).margin;
    var fontSize = parseFloat(x);
    var b = a.style.margin= (fontSize - 1) + 'px';
}


//border portion


function bt() {
    var x = window.getComputedStyle(document.getElementById("heading")).borderTopLeftRadius;
    var fontSize = parseFloat(x);
    var b = a.style.borderTopLeftRadius = (fontSize + 1) + 'px';
}

function btminus() {
    var x = window.getComputedStyle(document.getElementById("heading")).borderTopRightRadius;
    var fontSize = parseFloat(x);
    var b = a.style.borderTopRightRadius = (fontSize - 1) + 'px';
}

function br() {
    var x = window.getComputedStyle(document.getElementById("heading")).borderTopRightRadius;
    var fontSize = parseFloat(x);
    var b = a.style.borderTopRightRadius = (fontSize + 1) + 'px';
}

function brminus() {
    var x = window.getComputedStyle(document.getElementById("heading")).borderTopRightRadius;
    var fontSize = parseFloat(x);
    var b = a.style.borderTopRightRadius = (fontSize - 1) + 'px';
}


function bb() {
    var x = window.getComputedStyle(document.getElementById("heading")).borderBottomLeftRadius;
    var fontSize = parseFloat(x);
    var b = a.style.borderBottomLeftRadius = (fontSize + 1) + 'px';
}

function bbminus() {
    var x = window.getComputedStyle(document.getElementById("heading")).borderBottomLeftRadius;
    var fontSize = parseFloat(x);
    var b = a.style.borderBottomLeftRadius = (fontSize - 1) + 'px';
}

function bl() {
    var x = window.getComputedStyle(document.getElementById("heading")).borderBottomRightRadius;
    var fontSize = parseFloat(x);
    var b = a.style.borderBottomRightRadius = (fontSize + 1) + 'px';
}

function blminus() {
    var x = window.getComputedStyle(document.getElementById("heading")).borderBottomRightRadius;
    var fontSize = parseFloat(x);
    var b = a.style.borderBottomRightRadius = (fontSize - 1) + 'px';
}

function ba() {
    var x = window.getComputedStyle(document.getElementById("heading")).borderRadius;
    var fontSize = parseFloat(x);
    var b = a.style.borderRadius = (fontSize + 1) + 'px';
}

function baminus() {
    var x = window.getComputedStyle(document.getElementById("heading")).borderRadius;
    var fontSize = parseFloat(x);
    var b = a.style.borderRadius= (fontSize - 1) + 'px';
}












































