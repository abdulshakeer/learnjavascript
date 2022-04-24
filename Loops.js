//  There are 6 types of loops in javascript namely while,dowhile,for,foreach,forin,forof

// 1.For Loop and Break and continue
const mystates =[
    "Karnataka",
    "Kerala",
    "Tamilnadu",
    1947,
    "Punjab",
    "delhi",
    "Assam"
]

for(let i = 0;i < mystates.length;i++){
    if(typeof mystates[i] != "string") continue;
    console.log(mystates[i]);
}
// Output of the above snippet
// Karnataka
// Kerala   
// Tamilnadu
// Punjab   
// delhi    
// Assam  
for(let i = 0;i < mystates.length;i++){
    if(typeof mystates[i] != "string") break;
    console.log(mystates[i]);
}
// Output Of the above code
// Karnataka
// Kerala
// Tamilnadu


// 2. while loop 

let i = 0;
while(i < mystates.length){
    console.log(mystates[i]);
    i++;
}

// 3. Do-While Loop
let j = 0;
do{
    console.log(mystates[j]);
    j++;
}while(j < mystates.length);


// 4. ForEach Loop
var a = [1,2,4,5,6,7,8,9,4];
a.forEach(element => {
    console.log(element);
});

a.forEach((ele)=>(console.log(ele)))


// 5. ForIn Loop
const names = ["youtube","intagram","whatsapp","facebook","twitter"];
for (const n of names) {
    console.log(n);   
}

// 6. ForOf Loop
var user = {
    firstName: "Abdul",
    lastName: "Shakir",
    role:"admin",
    loginCount:32,
    googleSignedIn:true,
}
for(const n in user){
    console.log(`Key is ${n} and Value is ${user[n]}`);
}