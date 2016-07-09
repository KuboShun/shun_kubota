

window.addEventListener("load", function(){
var second = 0;
var milliSec = 0;
var running;

  displayTime();

  $('#start').on('click', function () {
    running = true;
    countUp();
    $('#start').attr("disabled", true);
  });
  $('#stop').on('click', function () {
    running = false;
    $('#start').attr("disabled", false);
  });
  $('#reset').on('click', function () {
    running = false;
    milliSec = 0;
    second = 0;
    $('#start').attr("disabled", false);
    displayTime();
  });

  function displayTime() {
    makeDigitalTens(second, "tens_sec")
    makeDigitalOnes(second, "ones_sec")
    makeDigitalTens(milliSec, "tens_milsec")
    makeDigitalOnes(milliSec, "ones_milsec")
  }

  function makeDigitalOnes(time, unit) {
    var ones = time % 10;

    makeNum(ones, unit);
  };

  function makeDigitalTens(time, unit) {
    var tens = Math.floor(time/10);

    makeNum(tens, unit);
  };

  /*
                  top_bar
  left_upper_bar          right_upper_bar
                middle_bar
  left_lower_bar          right_lower_bar
                bottom_bar
  */

  function makeNum(num, unit) {
    var unit = '.' + unit + " ";

    switch(num) {
      case 0:
        $(unit + '.bar').show();
        $(unit + '.middle_bar').hide();
        break;
      case 1:
        $(unit + '.bar').hide();
        $(unit + '.right_upper_bar,' + unit + '.right_lower_bar').show();
        break;
      case 2:
        $(unit + '.bar').show();
        $(unit + '.left_upper_bar,' + unit + '.right_lower_bar').hide();
        break;
      case 3:
        $(unit + '.left_lower_bar').hide();
        $(unit + '.right_lower_bar').show();
        break;
      case 4:
        $(unit + '.top_bar,' + unit + '.bottom_bar').hide();
        $(unit + '.left_upper_bar').show();
        break;
      case 5:
        $(unit + '.right_upper_bar').hide();
        $(unit + '.top_bar,' + unit + '.bottom_bar').show();
        break;
      case 6:
        $(unit + '.top_bar').hide();
        $(unit + '.left_lower_bar').show();
        break;
      case 7:
        $(unit + '.middle_bar,' + unit + '.left_lower_bar,' + unit + '.bottom_bar').hide();
        $(unit + '.top_bar,' + unit + '.right_upper_bar').show();
        break;
      case 8:
        $(unit + '.bar').show();
        break;
      case 9:
        $(unit + '.left_lower_bar,' + unit + '.bottom_bar').hide();
        break;
    }
  }



  function countUp() {
    setTimeout(function () {
      if (running) {
        milliSec++;

        if (milliSec == 100) {
          milliSec = 0;
          second += 1;
        }

        if (second == 100) {
          second = 0;
          milliSec = 0;
          running = false;
          $('#start').attr("disabled", false);
        }

        displayTime();
        countUp();
      }
    }, 10);
  };
})