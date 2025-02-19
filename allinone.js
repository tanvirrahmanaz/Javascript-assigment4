function calculateVAT(price) {
    if (typeof price !== 'number' || price <= 0) {
        return "Invalid";
    }
    return (price * 7.5 / 100);
}


function validContact(number) {
    if (typeof number !== 'string') {
        return "Invalid";
    }
    if (number.length !== 11) {
        return false;
    }
    if (!number.startsWith('01')) {
        return false;
    }
    if (number.includes(' ')) {
        return false;
    }
    return true;
}


function willSuccess(marks) {
    if (!marks || typeof marks !== "object" || typeof marks.length !== "number") {
        return "Invalid";
    }

    if (marks.length === 0) {
        return false;
    }
    
    let pass = 0;
    let fail = 0;
    
    for (let mark of marks) {
        if (mark >= 50) {
            pass++;
        } else {
            fail++;
        }
    }
    
    return pass > fail;
}

function validProposal(person1, person2) {
    if (typeof person1 !== 'object' || typeof person2 !== 'object' || 
        !person1 || !person2 || person1.constructor !== Object || person2.constructor !== Object) {
        return "Invalid";
    }
    
    if (person1.gender === person2.gender) {
        return false;
    }
    
    const ageDifference = Math.abs(person1.age - person2.age);
    
    return (ageDifference <= 7);
}

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
