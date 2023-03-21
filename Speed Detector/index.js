//challenge 2 - speed detector


function speedChecker(){
    //get speed from HTML element with id = "speed"    
        let speed = document.getElementById("speed").value
    //convert speed to merit points (5km/h = 1 point)
        let points = Math.floor((speed - 70) / 5)
    //message to display 
        let message;
    //for points less than/equal to 0 i.e speed of 0-70 km/h, display "Ok"
        if(points <= 0) {
            message = "Speed is ok"
            }
    //for points between 1 and 12, display message + points
        else if(points >= 1 && points <=13) {
            message = `You have ${points} demerit points`;
            }
    //for anything else, display "License suspended" and alert
        else  {
            message = "YOUR LICENSE IS SUSPENDED!"
            alert("License suspended!")
            }
    //display points on the  HTML element with id = "message"
        document.getElementById("message").innerHTML = message;
    }