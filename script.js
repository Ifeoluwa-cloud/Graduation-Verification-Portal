var student = [
    {
        name: "Gbenga Durojaye",
        age: 26,
        gender: "Male",
        level: 600
    },

    {
        name: "Ifeoluwa Gbolahan",
        age: 26,
        gender: "Male",
        level: 700
    },

    {
        name: "Precious Abe",
        age: 21,
        gender: "Female",
        level: 400
    }
];

var levelNumofStudent = [100,200,300,400,500];

var graduateLevel = [600,700,800]

function verifyLevel(level) {
    for(var i = 0; i < levelNumofStudent.length; i++){
        if(level == levelNumofStudent[i]){
            return true;
        }
    }

    return false;
}

function verifyGraduate(level) {
    for(var i = 0; i < graduateLevel.length; i++){
        if(level == graduateLevel[i]){
            return true;
        }
    }

    return false;
}


function studentSignin(name, level) {
    for(i = 0; i < student.length; i++){
        if(student[i].name === name && student[i].level == level){
            return true;
        }
    }

    return false;
}


function graduated(name, level) {
    if(studentSignin(name, level) && verifyLevel(level)){
        alert("Sorry, you are not yet graduated!");
    } else if(studentSignin(name, level) && verifyGraduate(level)){
        alert("Congratulations,you are now graduated!");
    } else {
        alert("Oops, your name or level is not correct!");
    }
}


var namePrompt = prompt("Enter your Full Name. Example:James (first name) Bond (last name)")
var levelPrompt = prompt("Enter Level");

graduated(namePrompt, levelPrompt);

