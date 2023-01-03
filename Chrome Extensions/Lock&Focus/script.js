//display the correct time
function displayTime(){
    var time = new Date();
    if(time.getMinutes()<10){
        var milTime = time.getHours + ":0" + time.getMinutes();
    }else{
        var milTime = time.getHours() + ":" + time.getMinutes();
    }
    document.getElementById("timestamp").innerText = milTime;
    document.getElementById("unix-time").innerText = time.getSeconds();


}

const greet1 = "Good morning";
const greet2 = "Good afternoon";
const greet3 = "Good evening";
const greet4 = "Good night"
var greeting = document.getElementById("greet");
if (today.getHours() > 4 && today.getHours() < 12) {
  greeting.innerHTML = greet1;
}
else if(today.getHours() >= 12 && today.getHours() < 16){
  greeting.innerHTML = greet2;
}
else if(today.getHours() >= 16 && today.getHours() <= 24){
  greeting.innerHTML = greet3;
}
else{
    greeting.innerHTML = greet4;
}

setInterval(displayTime, 10);