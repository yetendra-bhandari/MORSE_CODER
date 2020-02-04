const TEXT_CODE = new Map([
  ["A", ".-"],
  ["B", "-..."],
  ["C", "-.-."],
  ["D", "-.."],
  ["E", "."],
  ["F", "..-."],
  ["G", "--."],
  ["H", "...."],
  ["I", ".."],
  ["J", ".---"],
  ["K", "-.-"],
  ["L", ".-.."],
  ["M", "--"],
  ["N", "-."],
  ["O", "---"],
  ["P", ".--."],
  ["Q", "--.-"],
  ["R", ".-."],
  ["S", "..."],
  ["T", "-"],
  ["U", "..-"],
  ["V", "...-"],
  ["W", ".--"],
  ["X", "-..-"],
  ["Y", "-.--"],
  ["Z", "--.."],
  ["1", ".----"],
  ["2", "..---"],
  ["3", "...--"],
  ["4", "....-"],
  ["5", "....."],
  ["6", "-...."],
  ["7", "--..."],
  ["8", "---.."],
  ["9", "----."],
  ["0", "-----"],
  [",", "--..--"],
  [".", ".-.-.-"],
  ["?", "..--.."],
  ["/", "-..-."],
  ["-", "-....-"],
  ["(", "-.--."],
  [")", "-.--.-"]
]);
const CODE_TEXT = new Map([
  [".-", "A"],
  ["-...", "B"],
  ["-.-.", "C"],
  ["-..", "D"],
  [".", "E"],
  ["..-.", "F"],
  ["--.", "G"],
  ["....", "H"],
  ["..", "I"],
  [".---", "J"],
  ["-.-", "K"],
  [".-..", "L"],
  ["--", "M"],
  ["-.", "N"],
  ["---", "O"],
  [".--.", "P"],
  ["--.-", "Q"],
  [".-.", "R"],
  ["...", "S"],
  ["-", "T"],
  ["..-", "U"],
  ["...-", "V"],
  [".--", "W"],
  ["-..-", "X"],
  ["-.--", "Y"],
  ["--..", "Z"],
  [".----", "1"],
  ["..---", "2"],
  ["...--", "3"],
  ["....-", "4"],
  [".....", "5"],
  ["-....", "6"],
  ["--...", "7"],
  ["---..", "8"],
  ["----.", "9"],
  ["-----", "0"],
  ["--..--", ","],
  [".-.-.-", "."],
  ["..--..", "?"],
  ["-..-.", "/"],
  ["-....-", "-"],
  ["-.--.", "("],
  ["-.--.-", ")"],
  ["", ""]
]);
beep = new Audio("media/beep.mp3");
timers = new Array();
function morse() {
  var text = document.getElementById("inputString").value;
  if (text.length > 0) {
    var ans = "";
    var mode = 1;
    for (var i = 0; i < text.length; i++) {
      var C = text.charAt(i);
      if (C != "-" && C != "." && C != " " && C != "/" && C != "#") {
        mode = 0;
        break;
      }
    }
    switch (mode) {
      case 0: {
        text = text.toUpperCase();
        var words = text.split(/\s+/);
        for (var i = 0; i < words.length; i++) {
          var W = words[i];
          for (var j = 0; j < W.length; j++) {
            if (TEXT_CODE.has(W.charAt(j))) {
              ans += TEXT_CODE.get(W.charAt(j)) + " ";
            } else {
              ans += "#";
            }
          }
          if (i < words.length - 1) {
            ans += "/ ";
          }
        }
        break;
      }
      case 1: {
        var words = text.split(/\/+/);
        for (var i = 0; i < words.length; i++) {
          var letters = words[i].trim().split(/\s+/);
          for (var j = 0; j < letters.length; j++) {
            if (CODE_TEXT.has(letters[j])) {
              ans += CODE_TEXT.get(letters[j]);
            } else {
              ans += "#";
            }
          }
          if (letters.length > 0) {
            ans += " ";
          }
        }
      }
    }
    document.getElementById("outputString").value = ans.trim();
  } else {
    document.getElementById("outputString").value = "";
  }
}
function showControls() {
  var sound = document.getElementById("sound");
  var light = document.getElementById("light");
  var controls = document.getElementById("controls");
  var box = document.getElementById("box");
  if (sound.checked || light.checked) {
    controls.style.display = "block";
  } else {
    controls.style.display = "none";
  }
  if (light.checked) {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
}
function startFlash() {
  stopFlash();
  var txt = document.getElementById("outputString").value;
  if (txt.length == 0) {
    return;
  }
  var sound = document.getElementById("sound").checked;
  var box = document.getElementById("box");
  var total = 200;
  var chr = txt.charAt(0);
  if (chr == ".") {
    timers.push(
      window.setTimeout(function() {
        play(sound);
        box.style.backgroundColor = "#00e676";
      }, total)
    );
    total += 250;
  } else if (chr == "-") {
    timers.push(
      window.setTimeout(function() {
        play(sound);
        box.style.backgroundColor = "#00e676";
      }, total)
    );
    total += 500;
  } else {
    total += 500;
  }
  for (var i = 1; i < txt.length; i++) {
    timers.push(
      window.setTimeout(function() {
        stop(sound);
        box.style.backgroundColor = "#151515";
      }, total)
    );
    total += 100;
    chr = txt.charAt(i);
    if (chr == ".") {
      timers.push(
        window.setTimeout(function() {
          play(sound);
          box.style.backgroundColor = "#00e676";
        }, total)
      );
      total += 250;
    } else if (chr == "-") {
      timers.push(
        window.setTimeout(function() {
          play(sound);
          box.style.backgroundColor = "#00e676";
        }, total)
      );
      total += 500;
    } else {
      timers.push(
        window.setTimeout(function() {
          stop(sound);
          box.style.backgroundColor = "#151515";
        }, total)
      );
      total += 500;
    }
  }
  timers.push(
    window.setTimeout(function() {
      stop(sound);
      box.style.backgroundColor = "#151515";
    }, total)
  );
}
function stopFlash() {
  while (timers.length > 0) {
    clearTimeout(timers.pop());
  }
  document.getElementById("box").style.backgroundColor = "#151515";
}
function play(flag) {
  if (flag) {
    beep.play();
  }
}
function stop(flag) {
  if (flag) {
    beep.pause();
    beep.currentTime = 0;
  }
}
