class User{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    courseList = []
    getinfo(){
        return {name : this.name, age : this.age}
    }
    enrollcourse(name){
        this.courseList.push(name);
    }

    getCourseList(){
        return this.courseList;
    }
}

var shakir = new User("Abdul Shakir",20)
console.log(shakir.getinfo());

shakir.enrollcourse("ReactJs")
shakir.enrollcourse("Angular")

let courses = shakir.getCourseList();
courses.forEach((element)=>(console.log(element)))