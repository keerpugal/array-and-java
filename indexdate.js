 function myyear(){
        let month = parseInt(document.getElementById("count").value);
        
    switch (month%12) {
      case 1:
        month = "January";
        document.getElementById("counted").innerHTML = "Today is " + month;
        break;
      case 2:
        month = "Febrauray";
        document.getElementById("counted").innerHTML = "Today is " + month;
        break;
      case 3:
        month = "March";
        document.getElementById("counted").innerHTML = "Today is " + month;
        break;
      case 4:
        month = "April";
        document.getElementById("counted").innerHTML = "Today is " + month;
        break;
      case 5:
        month = "May";
        document.getElementById("counted").innerHTML = "Today is " + month;
        break;
      case 6:
        month = "June";
        document.getElementById("counted").innerHTML = "Today is " + month;
        break;
      case 7:
        month = "July";
        document.getElementById("counted").innerHTML = "Today is " + month;
        case 8:
        month = "August";
        document.getElementById("counted").innerHTML = "Today is " + month;
        case 9:
        month = "September";
        document.getElementById("counted").innerHTML = "Today is " + month;
        case  10:
        month = "October";
        document.getElementById("counted").innerHTML = "Today is " + month;
        case  11:
        month = "November";
        document.getElementById("counted").innerHTML = "Today is " + month;
        case  12:
        month = "December";
        document.getElementById("counted").innerHTML = "Today is " + month;
        
    }
    
    }
// function getTheDays() {

    
//     var dt = new Date(document.getElementById('theDate').value);

   
//     var month = dt.getMonth(),
//         year = dt.getFullYear();

   
//     var getMonth= new Date(year, month);
//     var getFullYear = new Date(year, month);

    
//     var weekday = new Array();
//     weekday[0] = "Sunday";
//     weekday[1] = "Monday";
//     weekday[2] = "Tuesday";
//     weekday[3] = "Wednesday";
//     weekday[4] = "Thursday";
//     weekday[5] = "Friday";
//     weekday[6] = "Saturday";

//     if (typeof weekday[FirstDay.getDay()] != 'undefined') {    
//         document.getElementById('fday').innerHTML = weekday[ getMonth.getDay()] +
//             ' (' + getMonth.toDateString('dd/mon/yyyy') + ')';
//         document.getElementById('lday').innerHTML = weekday[getFullYear.getDay()] +
//             ' (' + getFullYear.toDateString('dd/mon/yyyy') + ')'; 
//     }
//     else {
//         document.getElementById('fday').innerHTML = '';
//         document.getElementById('lday').innerHTML = '';
//     }
// }