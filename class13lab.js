$(document).ready(function () {
    $("button#check").on("click", calculate);
});
$(document).ready(function () {
    $("button#nameReorder").on("click", reOrderByName);
});
$(document).ready(function () {
    $("button#percentReorder").on("click", reOrderByPercent);
});

var students = []; //Create a global variable of students

function calculate() {
    let firstname = $("#firstName").val();

    let lastname = $("#lastName").val();

    let pointsEarned = parseFloat($("#pointsEarned").val());

    let pointsPossible = parseFloat($("#pointsPossible").val());

    let percentageGrade = pointsEarned/pointsPossible;
    let lettergrade = ''; //Assign to empty string to initialize it.

//Now assign it the grade

    if(percentageGrade <= 1 && percentageGrade >= .9){
        lettergrade = "A";
    }
    else if(percentageGrade < .9 && percentageGrade >= .8){
        lettergrade = "B";
    }
    else if(percentageGrade < .8 && percentageGrade >= .7){
        lettergrade = "C";
    }
    else if(percentageGrade < .7 && percentageGrade >= .6){
        lettergrade = "D";
    }
    else if(percentageGrade <.6){
        lettergrade = "F";
    }

//Now we create the 'studentInfo' object that we will use

    let studentInfo = {
        firstName: firstname,
        lastName: lastname,
        percentage:percentageGrade ,
        letterGrade:lettergrade
    };
    students.push(studentInfo);//Add new student object to the array
    //Now change the array so that it displays the full array, not just the one thing
    $("span#fName").text(studentInfo.firstName);
    $("span#lName").text(studentInfo.lastName);
    $("span#finalPercent").text((studentInfo.percentage * 100).toFixed(2)+"%");
    $("span#finalGrade").text(studentInfo.letterGrade);
    //yourContainer.innerHTML = JSON.stringify(lineChartData, null, 4);
    let list = document.getElementById('container');
    list.innerHTML += JSON.stringify(students[students.length-1]);

    $(".output").show();
}
function reOrderByName() {
    students.sort((a, b) => (a.name > b.name) ? 1 : -1)
    let list = document.getElementById('container');
    list.innerHTML = JSON.stringify(students);
}
function reOrderByPercent() {
    students.sort((a, b) => (a.percentage > b.percentage) ? 1 : -1)
    let list = document.getElementById('container');
    list.innerHTML = JSON.stringify(students);
}