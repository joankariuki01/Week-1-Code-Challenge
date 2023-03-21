

//challenge 3 - net salary calculator
function netSalaryCalculator(){
    let basicSalary = document.getElementById("basic-salary").value;
    let benefits = document.getElementById("benefits").value
    let tax = 10%(basicSalary);
    let nhif;
    let nssf = 400;
    let netSalary;

    if(basicSalary < 6000)  {
        nhif = 150
    }
    else if (basicSalary >= 6000 && basicSalary < 8000) {
        nhif = 300
    }
    else if (basicSalary >= 8000 && basicSalary < 12000) {
        nhif = 400
    }
    else if (basicSalary >= 12000 && basicSalary < 15000) {
        nhif = 500
    }
    else if (basicSalary >= 15000 && basicSalary < 20000) {
        nhif = 600
    }
    else if (basicSalary >= 20000 && basicSalary <= 24000) {
        nhif = 750
    }
    else {
        nhif = 850

    }netSalary = (basicSalary + benefits) - (tax + nhif + nssf)
    document.getElementById("net-salary").innerHTML =  `Your net salary is: ${netSalary}`;
}

