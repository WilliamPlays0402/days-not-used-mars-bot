function updateTimer() {
    let timeElement = document.getElementById("time");
    let countDownDate = new Date("2022-08-06T09:26:00Z").getTime();
    
    setInterval(() => {
        let now = new Date().getTime();
        let timeDiff = countDownDate - now;
    
        let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        timeDiff %= (1000 * 60 * 60 * 24); // simplify with %=
        
        let hours = Math.floor(timeDiff / (1000 * 60 * 60));
        timeDiff %= (1000 * 60 * 60); // simplify with %=
        
        let minutes = Math.floor(timeDiff / (1000 * 60));
        timeDiff %= (1000 * 60); // simplify with %=
        
        let seconds = Math.floor(timeDiff / 1000);
    
        let timeString = days.toString().padStart(2, "0") + "d " 
                        + hours.toString().padStart(2, "0") + "h " 
                        + minutes.toString().padStart(2, "0") + "m " 
                        + seconds.toString().padStart(2, "0") + "s";
                        // use padStart() to format the time values
    
        timeElement.innerHTML = timeString;
    }, 1000);
}

updateTimer();