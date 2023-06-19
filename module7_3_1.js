function myTest(myObj){
    for(let i in myObj){
        console.log("ключ: "+i+" значение "+myObj[i]);
    }
}

let testObj={
    a: 2, b: 4
}
myTest(testObj);