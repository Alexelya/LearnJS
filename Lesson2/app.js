console.log("JS file is ready!");

function clockTimer(){  // тут мы объявляем функцию
    const date = new Date();
    console.log(date);

    let time = [date.getHours(), date.getMinutes(),date.getSeconds()]; // [0] = Hours, [1] = minutes, [2] = seconds
    console.log(time);

    let dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; // Дни недели в массиве
    let days = date.getDay();
    
    let currentDay = dayOfWeek[days];
    console.log(currentDay);


    if (time[0]<10) {
        time[0] = "0" + time[0];
    }  
    if (time[1]<10) {
        time[1] = "0" + time[1];
    }  
    if (time[2]<10) {
        time[2] = "0" + time[2];
    }  
    
    
    let currentTime = time/*[time[0],time[1],time[2]]*/.join(":");// 22:00:00
    console.log(currentTime);
    let clock = document.getElementById("clock");

    clock.innerHTML = currentTime;
   /* setTimeout("clockTimer()",1000)*/ //альтернатива


    /*let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    console.log("Часы: ", hours);
    console.log("Минуты", minutes);
    console.log("Секунды", seconds);*/

}
/*clockTimer();*/ // тут мы вызываем функцию
setInterval(clockTimer(), 1000);
