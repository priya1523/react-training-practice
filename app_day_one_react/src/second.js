
export function promisify(fun){
    const promise = new Promise(fun);
    return promise;
}

function bigTask(){
    console.log("Perform the big task ..");
}

const bigTaskPromise = promisify(bigTask);

export const APP_VERSION = "10.0.4";
export const APP_NAME = "Morgan chase";

export default bigTask;