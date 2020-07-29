// Global Function

function checkValue(data) {
    if(data==""){
        return false;
    }else{
        return true;
    }
}

// function checkEmail(data){
//     if(data.match(/@./)){
//         return true
//     } else {
//         return false;
//     }
// }

function checkPhone(data){
    if(data.length==11){
        return true;
    }else {
        return false;
    }
}

// Local Function

function validation() {
   firstname = document.getElementById("firstname").value;
   lastname = document.getElementById("lastname").value;
   email = document.getElementById("email").value;
   phone = document.getElementById("phone").value;
   password = document.getElementById("password").value;
   day = document.getElementById("day").selectedIndex;

   error=0
   

   if(checkValue(firstname)==false){
       error=error+1;
   }

   if(checkValue(lastname)==false){
        error=error+1;
    }
   
     if(checkValue(email) == false /*||checkEmail(email) ==false*/){
        error=error+1;
    }

    
   if(checkValue(phone) == false || checkPhone(phone)==false){
        error=error+1;
    }

    
   if(checkValue(password)==false){
        error=error+1;
    }

    
   if(checkValue(day)==false){
        error=error+1;
    }

console.log(error)

    if(error==0){
        return true
    }else{
        return false
        }
}


// Day Loop

var newDate= new Date();
var firstDay=1;
var lastDay=31;

var autoSelectedDate=newDate.getDate();

for(firstDay; firstDay<=lastDay; firstDay++){
    var date = document.createElement("option");
    date.text=firstDay; //Shortcut

    /* var dateOption = document.createTextNode(firstDay);
    date.appendChild(dateOption);*/ //Details

    document.getElementById("day").options.add(date);
}


// Month Loop

var date=new Date();
var autoSelectMonth=date.getMonth();
var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Ocr','Nov','Dec']; 
for (key in month){
    if(key==month){
        var selectedMonth="selected";

    }
    else{
        selectedMonth=date.getMonth();
    }

    document.getElementById("month").options.add(months);
    // document.write("<option value='"+key+"' "+selectedMonth+">"+month[key]+"</option>");
}

var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var bottomYear = 1905;

for(currentYear; currentYear>=bottomYear; currentYear--){

    var birhtYear = document.createElement("option");
    var yearText = document.createTextNode(birhtYear);
    birhtYear.appendChild(yearText);
    document.getElementById("years").options.add(currentYear);
}