function calculateSleepTime(times) {
    if (!times || typeof times !== "object" || typeof times.length !== "number") {
        return "Invalid";
    }
    
    let totalSeconds = 0;
    
    for (let i = 0; i < times.length; i++) {
        if (typeof times[i] !== "number") {
            return "Invalid";
        }
        totalSeconds += times[i];
    }
    
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    return {
        hour: hours,
        minute: minutes,
        second: seconds
    };
}


console.log(calculateSleepTime([1000, 499, 519, 300]))
console.log(calculateSleepTime([1000, 2000, 725]))
console.log(calculateSleepTime([100, 3800]))
console.log(calculateSleepTime([]))
console.log(calculateSleepTime([5600]))
console.log(calculateSleepTime([100, 3800, "90" ]))