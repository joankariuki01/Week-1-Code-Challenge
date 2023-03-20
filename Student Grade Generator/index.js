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
    //for grades above 79 indicate a grade "A"
        if(marks > 79) {
            grade = "A"
    //for grades above 60 but below 79 give grade a value of "B"
        } else if(marks >= 60 && marks <= 79) {
            grade = "B"
    //for grades above 50 and below 69 give grade a value of "C"
        }else if(marks >= 50 && marks < 69) {
            grade = "C"
    //for grades above 40 and below 49 give grade a value of "D"
        }else if(marks >= 40 && marks <= 49) {
            grade = "D"
        }else {
    //for grades beloe 40 give grade a value of "E"        
            grade = "E"
        }
        document.getElementById("grade").innerHTML = `Your grade is: ${grade}` ;
    } 
    
    