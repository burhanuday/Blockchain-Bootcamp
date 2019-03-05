let access = (name,age)=>{
    if(age>=13){
        return `Welceome ${name}`;
    }else{
        return `Sorry your age ${age} is below the required age`;
    }
}

let result = access('vidit',12);
console.log(result)