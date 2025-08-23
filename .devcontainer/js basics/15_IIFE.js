///immediately invoked function expression (IIFE)
///use when we want to execute a function immediately after its creation
///helps in avoiding polluting the global scope

(function chai(){
    console.log('DB connected');
})();

( () =>{
    console.log('DB disconnected');
})();
