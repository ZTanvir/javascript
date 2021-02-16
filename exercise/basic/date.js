//Sample Output : Today is : Tuesday
//Current time is : 10 PM : 30 : 38
let dayArr = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday']
let date = new Date()
console.log(date)
let today = date.getDay()
console.log(`Today is:${dayArr[today]}`)
let hour = date.getHours()
let min = date.getMinutes()
let sec = date.getSeconds()
if(hour <=12){
    console.log(`current time is:${hour} AM:${min}:${sec}`)
}else if(hour>12){
    hour = 24-hour
    hour = 12-hour
        console.log(`current time is:${hour} PM:${min}:${sec}`)
   
}

