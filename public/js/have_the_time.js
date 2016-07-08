var hour, minute, second;
var paint = "white"
var red_range, green_range, blue_range, rgb_setting;

window.addEventListener("load", function(){
  setInterval("getToday()",100)
  setInterval("getTime()",100)  
  setInterval("changeframeColor()",500)  
})

function getToday(){
  DD = new Date();
  year = DD.getFullYear()
  month = ("0" + (DD.getMonth() + 1)).slice(-2)
  day = ("0" + DD.getDate()).slice(-2)
  var date = year + "." + month + "." + day
$("#date").text(date)
}
function getTime(){
  DD = new Date();
  hour = ("0"+ DD.getHours()).slice(-2);
  minute = ("0"+ DD.getMinutes()).slice(-2);
  second = ("0" + DD.getSeconds()).slice(-2);

  var time = hour + ":" + minute + ":" + second;
  $("#time").text(time);
}

function changeframeColor(){
  red_range = Math.round(hour / 24 * 255);
  green_range = Math.round(minute / 60 * 255);
  blue_range = Math.round(second / 60 * 255);
  rgb_setting = "rgb(" + red_range + "," + green_range + "," + blue_range + ")";
  $(".clock").css("border-color", rgb_setting);
  console.log($(".clock").css("border-color"));
  console.log(rgb_setting);
}
