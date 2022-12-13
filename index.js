function receivesAFunction(callback){
    callback()
    return 25
}

function returnsANamedFunction() {
    return function named(){

    }
}

function returnsAnAnonymousFunction() {
    return function(){
        return
    }
}