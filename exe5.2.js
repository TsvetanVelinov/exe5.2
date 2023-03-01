function demo(input){

    let numberFive = Number (input[0]);

    for(let i=1 ; i<=10 ; i++){
     let result = i * numberFive;
        console.log(`${i} * ${numberFive} = ${result}`);
    }

}


demo (["5"])