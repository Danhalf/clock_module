const clock = (hourSelector, minuteSelector, secondSelector) => {
   const hourArrow = document.querySelector(hourSelector);
   const minuteArrow = document.querySelector(minuteSelector);
   const secondArrow = document.querySelector(secondSelector);
   const deg = 6;
   const date = new Date();
   let second = date.getSeconds() * deg;
   let minute = date.getMinutes() * deg + second / 60;
   let hour = date.getHours() * 30 + minute / 12;


   const timeUpdate = () => {
      console.log(hour)
      hourArrow.style.transform = `rotateZ(${hour}deg)`
      minuteArrow.style.transform = `rotateZ(${minute}deg)`
      secondArrow.style.transform = `rotateZ(${second}deg)`
      second += deg
      minute += deg / 60
      hour += deg / 3600
   }

   setInterval(timeUpdate, 1000)

}

clock('.hours', '.minutes', '.seconds')