//challenge 1 - student grade generator
//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

//create a function marksToGrades that <br>
//takes user input <br>
//converts to grade and <br>
//returns the grade

function marksToGrades() {
    //get speed from HTML element with id = "marks"    
        let marks  = document.getElementById("marks").value    
        let grade;
    //for marks above 100 return invalid marks
        if(marks > 100){
            alert ("Please enter valid marks")
            grade = "Invalid";
        }
    //for marks between 79 and 100 indicate a grade "A"
        else if(marks > 79 && marks <= 100) {
            grade = "A";
    //for marks above 60 and below 79 give grade a value of "B"
        } else if(marks >= 60 && marks <= 79) {
            grade = "B";
    //for marks above 50 and below 69 give grade a value of "C"
        }else if(marks >= 50 && marks < 69) {
            grade = "C";
    //for marks above 40 and below 49 give grade a value of "D"
        }else if(marks >= 40 && marks <= 49) {
            grade = "D";
        }else if(marks < 40 && marks >= 0){
    //for marks below 40 and above 0 give grade a value of "E"        
            grade = "E";
        }
        else{
    //for negative marks return "invalid marks" 
        alert ("Please enter valid marks")        
        grade = "Invalid";
        }
        document.getElementById("grade").innerHTML = `Your grade is: ${grade}` ;
    } 
    
    