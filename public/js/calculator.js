
init()

function init(){
  var number_button = document.getElementsByClassName("number_button")
  var math_button =  document.getElementsByClassName("math_button")
  var calc_display = document.getElementsByClassName("calc_display")[0]
  var num1 = "";
  var num2 = "";
  var sign = "";
  var sign_log = "";

  for (var i = 0; i <= number_button.length; i++) {
    if (number_button[i] != null) {
      number_button[i].addEventListener("click", function(e){

        console.log(this.innerText)
        num1 += this.innerText
        calc_display.innerHTML = num1

      },false)
    }
  }

  for (var i = 0; i <= math_button.length; i++) {
    if (math_button[i] != null) {
      math_button[i].addEventListener("click", function(e){
        sign = $(this).attr("value");

        switch(sign) {
          case "c": 
            num1 = ""
            num2 = ""
            calc_display.innerHTML = ""
            sign = ""
            break;
          case ".":
            if (num1.match(/\./)) {
              console.log(num1)
              num1 = ""
              console.log(num1)
            } else if(num1 == "") {
              num1 += "0."
            }else{
              num1 += "."
            }
            calc_display.innerHTML = num1
            sign = ""
            break;
          case "=":
            switch(sign_log){
              case "+":
                num1 = +num2 + +num1
                break
              case "-":
                num1 = +num2 - +num1
                break
              case "*":
                num1 = +num2 * +num1
                break
              case "/":
                num1 = +num2 / +num1
                break
            }
            calc_display.innerHTML = num1
            num2 = num1
            sign = ""
            break;
          default:
            switch(sign_log){
              case "+":
                num1 = +num2 + +num1
                break
              case "-":
                num1 = +num2 - +num1
                break
              case "*":
                num1 = +num2 * +num1
                break
              case "/":
                num1 = +num2 / +num1
                break
              default:
                break
            }
            calc_display.innerHTML = num1
            num2 = num1
            num1 = ""
            break;
        }

        sign_log = sign

        console.log(sign)
      }, false)
    }
  }

}
