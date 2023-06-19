class Device{ constructor (name,size,power,included){
    this.name=name,
    this.size=size,
    this.power=power,
    this.included=included,
    this.getPower=function(){if(included){
        return power
        } else {return 0}}
    }
}
class Teapot extends Device {constructor (name,size,power,included,volume){
    super(name,size,power,included);
    this.volume=volume
    }
}


class Fridge extends Device {constructor (name,size,power,included,height){
    super(name,size,power,included);
    this.height=height
    }
}


function sumPower(arr){

    let sum=arr.reduce(function(sum,item,index,arroy){
        return sum+item.getPower();
    },0);
    return sum;
}

teapot1= new Teapot("чайник",10,5,true,2);
Fridge1=new Fridge("холодильник",20,100,false,100);





let arrDevice= [teapot1,Fridge1];
console.log(sumPower(arrDevice))
