let students = [{name : "Dipesh" , subject : "JS"},
            {name : "Ravi" , subject : "JSS"}]

function enroll(student , callback){
    setTimeout(() => {
        students.push(student);
        console.log("Student enrolled...");
        console.log("calling callback...");
        callback();
    },3000);
}

function getStudents(){
    setTimeout(() => {
        students.forEach((student) => {
           console.log("Student\'s name : "+ student.name + " and subject is : "+ student.subject);
        });ś
    },1000);
}
enroll({name : "Timmy", subject : "JSSS"}, getStudents);