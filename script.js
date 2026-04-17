// alert("JS is working!");
function updateClock(){
    const now = new Date();
    const hours = now.getHours();
    
    let message = "Good Night!";
    if(hours < 12) {
        message = "Good Morning!";
     } else if(hours < 17){
            message = "Good Afternoon!";
     }else if(hours < 20){
            message = "Good Evening!";
     }
    document.getElementById("greeting").innerText = message;
    document.getElementById("clock").innerText = now.toLocaleTimeString();
}
    setInterval(updateClock, 1000);
    updateClock();

