

function myscript(){
    let day = parseInt(document.getElementById("count").value);
    
switch (day%7) {
  case 1:
    day = "Sunday";
    document.getElementById("counted").innerHTML = "Today is " + day;
    break;
  case 2:
    day = "Monday";
    document.getElementById("counted").innerHTML = "Today is " + day;
    break;
  case 3:
    day = "Tuesday";
    document.getElementById("counted").innerHTML = "Today is " + day;
    break;
  case 4:
    day = "Wednesday";
    document.getElementById("counted").innerHTML = "Today is " + day;
    break;
  case 5:
    day = "Thursday";
    document.getElementById("counted").innerHTML = "Today is " + day;
    break;
  case 6:
    day = "Friday";
    document.getElementById("counted").innerHTML = "Today is " + day;
    break;
  case  0:
    day = "Saturday";
    document.getElementById("counted").innerHTML = "Today is " + day;
}

}