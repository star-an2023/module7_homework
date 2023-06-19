function Device(name,size,power,included){
    this.name=name,
    this.size=size,
    this.power=power,
    this.included=included,
    this.getPower=function(){if(included){
        return power
        } else {return 0}}
}

function Teapot(volume){
    this.volume=volume
}



function Fridge(height){
    this.height=height
}

function sumPower(arr){

    let sum=arr.reduce(function(sum,item,index,arroy){
        return sum+item.getPower();
    },0);
    return sum;
}

Teapot.prototype= new Device("чайник",10,5,true);
Fridge.prototype=new Device("холодильник",20,100,false);



const teapot1= new Teapot(2)
console.log(teapot1)

const Fridge1= new Fridge(100)
console.log(Fridge1)

let arrDevice= [teapot1,Fridge1];
console.log(sumPower(arrDevice))
