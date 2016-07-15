var year, month, day, bYear, bMonth, bDay
var days_text = document.getElementById("days")
var output_date = document.getElementById("output_date")
var input_day = document.getElementById("input_day")
var firsttime_flag = true

init()


function init() {
  var judge_party = document.getElementsByClassName("judge_party")[0]
  judge_party.addEventListener("click",getBirthday,false)

  var check_aniversary = document.getElementsByClassName("check_aniversary")[0]
  check_aniversary.addEventListener("click", getBirthday,false)
}

function getBirthday() {
  var birthday = document.getElementById("birthday")
  birthday = birthday.value
  birthday = new Date(birthday)
  bYear = birthday.getFullYear()
  bMonth = birthday.getMonth() + 1
  bDate = birthday.getDate()

  var today = new Date()
  year = today.getFullYear()
  month = today.getMonth() + 1
  date = today.getDate()
  
  var dif = getDiff(birthday, today)
  insertDays(dif)

  $(".aniversary_check").css('display', 'block');
  
  var days_count = document.getElementById("days_count")
  days_count = days_count.value
  var milliS_count = days_count * 24 * 60 * 60 * 1000
  var ani_date = aniDate(birthday, milliS_count)

  days_count = document.createTextNode(days_count)
  input_day.innerHTML = ""
  input_day.appendChild(days_count)

}

function aniDate(birthday, milliS_count) {
  var date1 = new Date(birthday)
  console.log("milliS_count: " + milliS_count)
  console.log("date1.getTime() " + date1.getTime())
  var aniversary_mil = date1.getTime() + milliS_count
  var aniversary_date = new Date(aniversary_mil)
  console.log("aniversary_mil: " + aniversary_mil)
  console.log("aniversary_date: " + aniversary_date)

  aYear = aniversary_date.getFullYear()
  aMonth = aniversary_date.getMonth() + 1
  aDate = aniversary_date.getDate()

  aniversary_date = aYear + "." + aMonth + "." + aDate
  aniversary_date = document.createTextNode(aniversary_date)
  output_date.innerHTML = ""
  output_date.appendChild(aniversary_date)

}

function getDiff(birthday, today) {
  var date1 = new Date(birthday)
  var date2 = new Date(today)

  var msDiff = date2.getTime() - date1.getTime()
  var dayDiff = Math.floor(msDiff / (1000 * 60 * 60 * 24))

  return dayDiff + 1
}

function insertDays(dif) {
  if (parseInt(dif) === 1) {
    dif = dif + " day"
  } else {
    dif = dif + " days"    
  }
  var insert_text = document.createTextNode(dif)
  days_text.innerHTML = ""
  days_text.appendChild(insert_text)
  firsttime_flag = false
}

function insertAniversary(birthday) {
  base_day = new Date(birthday)
  var one = document.getElementById("100000_days")
  var one_text = document.createTextNode("Your 100,000 days aniversary: " )
  one.appendChild(one_text)
}