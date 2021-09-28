var student = {
    roll_no: 101,
    name: "Arun",
    course: "BCA",
    total_score: 750
}

//print objects
console.log(student.roll_no);
console.log(student.name);

//update score
console.log(student.total_score = 800);

//check if grrade is present or not
console.log("grade" in student);


//add grade
student["grade"] = "A+"
console.log(student);


//add 20 marks bonus
student.total_score += 50;
console.log(student);