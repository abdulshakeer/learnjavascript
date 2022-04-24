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
    login(){
        return "you are logged in"
    }
}


class Subadmin extends User{
    constructor(name,age){
        super(name,age);
    }
    getAdminInfo(){
        return "I am a subadmin"
    }
    login(){
        return "you are Admin logged in"
    }
}

const tom = new Subadmin("marzook",21);
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getinfo());

