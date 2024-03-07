let homeScoreEl = document.getElementById("homeScore")

let homeCount = 0;

function homeAdd1() {
    homeCount += 1
    homeScoreEl.textContent = homeCount
    leading()
}


function homeAdd2() {
    homeCount += 2
    homeScoreEl.textContent = homeCount
    leading()
}

function homeAdd3() {
    homeCount += 3
    homeScoreEl.textContent = homeCount
    leading()
}

let guestScoreEl = document.getElementById("guestScore")

let guestCount = 0

function guestAdd1() {
    guestCount += 1
    guestScoreEl.textContent = guestCount
    leading()
}

function guestAdd2() {
    guestCount += 2
    guestScoreEl.textContent = guestCount
    leading()
}

function guestAdd3() {
    guestCount += 3
    guestScoreEl.textContent = guestCount
    leading()
}

function newGame() {
    homeCount = 0
    guestCount = 0
    homeScoreEl.textContent = homeCount
    guestScoreEl.textContent = guestCount
    leading()
}

function leading() {
    if (homeCount > guestCount) {
        document.getElementById("home-title").classList.add("winning")
        document.getElementById("guest-title").classList.remove("winning")
    } else if (homeCount < guestCount) {
        document.getElementById("home-title").classList.remove("winning")
        document.getElementById("guest-title").classList.add("winning")
    } else {
        document.getElementById("home-title").classList.remove("winning")
        document.getElementById("guest-title").classList.remove("winning")
    }
}

function fullTimeout() {
    // Set the date we're counting down to (60 seconds from now)
        var countDownDate = new Date().getTime() + 60000;

        // Update the count down every 1 second
        var x = setInterval(function() {
            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for seconds
            var seconds = Math.floor(distance / 1000);

            // Display the result in the element with id="demo"
            document.getElementById("full-timeout-btn").textContent = seconds + "s";

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("full-timeout-btn").textContent = "EXPIRED";
            }
        }, 1000);
        const myTimeout = setTimeout(resetButton, 61000)
}

function halfTimeout() {
    
    
    // Set the date we're counting down to (60 seconds from now)
        var countDownDate = new Date().getTime() + 30000;

        // Update the count down every 1 second
        var x = setInterval(function() {
            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for seconds
            var seconds = Math.floor(distance / 1000);

            // Display the result in the element with id="demo"
            document.getElementById("half-timeout-btn").textContent = seconds + "s";

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("half-timeout-btn").textContent = "EXPIRED";
            }
        }, 1000);
        const myTimeout = setTimeout(resetButton, 31000)
}

function resetButton() {
        document.getElementById("full-timeout-btn").textContent = "FULL TIMEOUT";
        document.getElementById("half-timeout-btn").textContent = "30 SEC TIMEOUT";
}