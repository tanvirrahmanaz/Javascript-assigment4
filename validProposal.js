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


console.log(validProposal({ name: "Rahul", gender: "male", age: 28 },
    { name: "Joya", gender: "female", age: 21 }
    ))
console.log(validProposal({ name: "milon", gender: "male", age: 20 },
    { name: "sumi", gender: "female", age: 25 }
    
    ))
console.log(validProposal({ name: "shuvo", gender: "male", age: 20 },
    { name: "joy", gender: "male", age: 25 } 
    ))
console.log(validProposal({ name: "toya", gender: "female", age: 20 },
    { name: "kader", gender: "male", age: 25 } 
    
    ))
console.log(validProposal({ name: "toya", gender: "female", age: 24 },
    { name: "bjoy", gender: "male", age: 32 }
    ))
console.log(validProposal("Mizan", { name: "mitu", gender: "male", age: 32 }
    ))
console.log(validProposal({ name: "mitu", gender: "male", age: 32 }, "Mizan"
    ))