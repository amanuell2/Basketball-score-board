
// Starting the game from 0 or set all to 0
function startNew() {
    hCount = 0
    gCount = 0
    pCount = 0
    hFCount = 0
    gFCount = 0
    
    hPt.textContent = hCount
    gPt.textContent = gCount
    pPt.textContent = pCount
    hFPt.textContent = hFCount
    gFPt.textContent = gFCount
    
    hPtColor.style.color = "#F94F6D"
    gPtColor.style.color = "#F94F6D"
    timer = document.getElementById("timer")
    timer.innerHTML = "00:00"
    distance = timer.innerHTML
}

// setInterval(myTimer, 1000);

// function myTimer() {
//   const d = new Date();
//   document.getElementById("timer").innerHTML = d.toLocaleTimeString();
// }


function startTimer() {
    
    var countDownTimer = new Date("Jan 5, 2024 00:10:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
        
    // Find the distance between now and the count down date
    var distance = countDownTimer - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    // Output the result in an element with id="demo"
    document.getElementById("timer").innerHTML = minutes + ":" + seconds;
        
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "TIME'S UP";
    }
    }, 1000);    
}


let hPt = document.getElementById("home-point")
let hCount = 0

// Home adding point functions
function hadd1() {
    hCount += 1
    hPt.textContent = hCount
    whichIsGreater()
}

function hadd2() {
    hCount += 2
    hPt.textContent = hCount
    whichIsGreater()
}

function hadd3() {
    hCount += 3
    hPt.textContent = hCount
    whichIsGreater()
}


let gPt = document.getElementById("guest-point")
let gCount = 0

// Guest adding point functions
function gadd1() {
    gCount += 1
    gPt.textContent = gCount
    whichIsGreater()
}

function gadd2() {
    gCount += 2
    gPt.textContent = gCount
    whichIsGreater()
}

function gadd3() {
    gCount += 3
    gPt.textContent = gCount
    whichIsGreater()
}


let pPt = document.getElementById("period-point")
let hFPt = document.getElementById("home-foul")
let gFPt = document.getElementById("guest-foul")
let pCount = 0
let hFCount = 0
let gFCount = 0

function addPeriod() {
    pCount += 1
    pPt.textContent = pCount
}

function addHomeFoul() {
    hFCount += 1
    hFPt.textContent = hFCount    
}

function addGuestFoul() {
    gFCount += 1
    gFPt.textContent = gFCount
}


const hPtColor = document.getElementById("home-point")
const gPtColor = document.getElementById("guest-point")

// checking which point is greater and highlighting the leader
function whichIsGreater() {
    if (gCount > hCount) {
        gPtColor.style.color = "#00ff00"
        hPtColor.style.color = "#F94F6D"
    }
    else if (hCount > gCount) {
        hPtColor.style.color = "#00ff00"
        gPtColor.style.color = "#F94F6D"
    }
    else {
        hPtColor.style.color = "#F94F6D"
        gPtColor.style.color = "#F94F6D"
    }
}