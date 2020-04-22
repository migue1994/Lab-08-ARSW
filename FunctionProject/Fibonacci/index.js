var bigInt = require("big-integer");
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let nth = req.body.nth
    let nth_1 = bigInt.one;
    let nth_2 = bigInt.zero;
    let answer = bigInt.zero;

    if (nth < 0)
        throw 'must be greater than 0'
    else{
        answer=fibonacci(nth)
    }

    context.res={
        body:answer.toString()
    };    
}


mem_values={
    0: bigInt.zero,
    1: bigInt.one
}

function fibonacci(nth){
    if(nth in Object.keys(mem_values)){
        return mem_values[nth];
    }

    else{
        mem_values[nth]=fibonacci(nth-1).add(fibonacci(nth-2));
        return mem_values[nth];
    }
}