// LAMPU TAMU
function saklarTm() {
    let toggle1tm = document.getElementById("default-toggle1tm");
    let toggle2tm = document.getElementById("default-toggle2tm");
    let toggle3tm = document.getElementById("default-toggle3tm");
    let toggle4tm = document.getElementById("default-toggle4tm");
    let lamputm1 = document.getElementById("lamputm1");
    let lamputm2 = document.getElementById("lamputm2");
    let lamputm3 = document.getElementById("lamputm3");
    let lamputm4 = document.getElementById("lamputm4");


// INI LAMPU TAMU 

    if (toggle1tm.checked) {
        lamputm1.src = "assets/images/on.png"
    } else {
        lamputm1.src = "assets/images/off.png";
    }

    if (toggle2tm.checked) {
        lamputm2.src = "assets/images/on.png"
    } else {
        lamputm2.src = "assets/images/off.png";
    }

    if (toggle3tm.checked) {
        lamputm3.src = "assets/images/on.png"
    } else {
        lamputm3.src = "assets/images/off.png";
    }

    if (toggle4tm.checked) {
        lamputm4.src = "assets/images/on.png"
    } else {
        lamputm4.src = "assets/images/off.png";
    }

}
// END LAMPU TAMU

// LAMPU ALL TAMU
function toggleLampsTm() {

    let toggleAll = document.getElementById("all");

    if (toggleAll.checked) {
        lamputm1.src = "assets/images/on.png"
    } else {
        lamputm1.src = "assets/images/off.png";
    }

    if (toggleAll.checked) {
        lamputm2.src = "assets/images/on.png"
    } else {
        lamputm2.src = "assets/images/off.png";
    }

    if (toggleAll.checked) {
        lamputm3.src = "assets/images/on.png"
    } else {
        lamputm3.src = "assets/images/off.png";
    }

    if (toggleAll.checked) {
        lamputm4.src = "assets/images/on.png"
    } else {
        lamputm4.src = "assets/images/off.png";
    }
}
// END LAMPU ALL TAMU

// LAMPU KELUARGA 
function saklarkr() {
    let toggle1kr = document.getElementById("default-toggle1kr");
    let toggle2kr = document.getElementById("default-toggle2kr");
    let toggle3kr = document.getElementById("default-toggle3kr");
    let lampukr1 = document.getElementById("lampukr1");
    let lampukr2 = document.getElementById("lampukr2");
    let lampukr3 = document.getElementById("lampukr3");


// INI LAMPU TAMU 

    if (toggle1kr.checked) {
        lampukr1.src = "assets/images/on.png"
    } else {
        lampukr1.src = "assets/images/off.png";
    }

    if (toggle2kr.checked) {
        lampukr2.src = "assets/images/on.png"
    } else {
        lampukr2.src = "assets/images/off.png";
    }

    if (toggle3kr.checked) {
        lampukr3.src = "assets/images/on.png"
    } else {
        lampukr3.src = "assets/images/off.png";
    }
}
// END LAMPU KELARGA

// LAMPU ALL KELUARGA
function toggleLampsKr() {

    let toggleAllkr = document.getElementById("togglekr");

    if (toggleAllkr.checked) {
        lampukr1.src = "assets/images/on.png"
    } else {
        lampukr1.src = "assets/images/off.png";
    }

    if (toggleAllkr.checked) {
        lampukr2.src = "assets/images/on.png"
    } else {
        lampukr2.src = "assets/images/off.png";
    }

    if (toggleAllkr.checked) {
        lampukr3.src = "assets/images/on.png"
    } else {
        lampukr3.src = "assets/images/off.png";
    }
}