
//X is defined above for the function
function mash(){
    let x = (("You will live in a ") + (getHome()) + (", and you will have ") + (getChildrenCount()) + (" kids")) + ", you will also drive a " + getCar();
    return x
}
console.log(mash());

//Housing + Array
function getHome(){
    let x = process.argv[2];
    const housearray = ["Mansion", "Apartment", "Shack", "House", "Swamp"];
    if(x == undefined){
        random = Math.random();
        randChoice = Math.random()*5;
        FrandChoice = Math.floor(randChoice);
        return housearray[FrandChoice];
    }
    housearray.push(x);
    random = Math.random();
    randoChoice = Math.random()*6;
    FrandoChoice = Math.floor(randoChoice);
    return housearray[FrandoChoice];
    
}
console.log(getHome());
//How many children function
function getChildrenCount(){
    random = Math.random();
    randChoice = Math.random()*100;
    FrandChoice = Math.floor(randChoice);
   return FrandChoice || process.argv[3];
}
console.log(getChildrenCount());

function getCar(){
    const motorarray = ["Lambo", "Patty-Wagon"];
    let x = process.argv[4];
    if(x == undefined){
        random = Math.random();
        randChoice = Math.random()*2;
        FrandChoice = Math.floor(randChoice);
        return motorarray[FrandChoice];
    }
    else{
    motorarray.push(x);
    random = Math.random();
    randChoice = Math.random()*3;
    FrandChoice = Math.floor(randChoice);
    return motorarray[FrandChoice];
}
}
console.log(getCar());