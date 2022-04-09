let nameSpan = document.getElementById("myName");
let clockDiv = document.getElementById("myClock");

let name = prompt("İsminizi Giriniz: ");

nameSpan.innerHTML = `${name}`;

function showTime() {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let day = date.getDay();
    hour = mainChecker(hour);
    minute = mainChecker(minute);
    second = mainChecker(second);
    day = dayChecker(day);
    
    clockDiv.innerHTML = `${hour}:${minute}:${second} ${day}`;
    t = setTimeout(`showTime()`, 1000);
}

function dayChecker(day) {
    switch(day) {
        case 1:
            return "Pazartesi";
        break;
        case 2:
            return "Salı";
        break;
        case 3:
            return "Çarşamba";
        break;
        case 4:
            return "Perşembe";
        break;
        case 5:
            return "Cuma";
        break;
        case 6:
            return "Cumartesi";
        break;
        case 7:
            return "Pazar";
        break;
    }
}

function mainChecker(a) {
    return (a > 9) ? a : "0" + a;
}