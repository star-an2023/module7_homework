function testingObj(myString,myObj){
    return myString in myObj;
}

let testObj={
    a: 2, b: 4
}
console.log(testingObj("a",testObj))