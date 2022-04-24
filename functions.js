// Fuctions In Javascript

function sayHello(){
    console.log("Hello Pace Wisdom Solution");
}
function sayHello2(name){
    console.log(`My Name is : ${name} `);
}

sayHello();
sayHello2("Abdul Shakir");


// Return in Fuctions

function sayNamaste(){
    return "Its a Greeting";
}

sayNamaste(); // Its just return the value It will not print in the console
//Inorder to print this into the console we should use the following

console.log(sayNamaste());

// New Example
function getUserRole(name,role){
    switch(role){
        case "admin":
            console.log(`${name} is Get Full Access`);
            break;// This not necessary
        case "subadmin":
            console.log(`${name} is You Get Access create or delete Course`);
            break;
        case "testprep":
            console.log(`${name} is You Get Access create or delete Test`);
            break;
        case "user":
            console.log(`${name} is Ger Access to consume Content`);
            break;
        default:
            console.log(`${name} is Trial User`);
        
    }

}
getUserRole("Abdul Shakir","admin");