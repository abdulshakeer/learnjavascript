// Knowledge Of Objects will help you in During API 
// Objects is like a Hashing in other languages or dictionary in python Its like a dictionar which consist of keys as well as values 
// Objects Also a Kind of Datastructure like array but Object is consist of unique keys for different values
// Its Very Useful and Helpful Datastructure In the world of Javascript


// Creating an Object In Javascript

var user = {
    firstName: "Abdul",
    lastName: "Shakir",
    role:"admin",
    loginCount:32,
    googleSignedIn:true,
    courseList:[],
    buyCourse:function(coursename){
        this.courseList.push(coursename);
    },
    getCourseCount:function(){
        return `${this.lastName} is Enrolled in total of ${this.courseList.length} Courses `;
    }
};

// Accessing an Object
console.log(user.firstName);
console.log(user["lastName"]);

//Updating the value

user.loginCount = 50
console.log(user);

// Console.table tag

console.table(user)// It Gives the Beautiful table where we can understand objects easily


//Methods In Objects

var courseList  = true;
console.log(user.getCourseCount());
user.buyCourse("ReactJs Course")
user.buyCourse("Angular Course")

console.log(user.getCourseCount());