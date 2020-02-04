
var args = process.argv;

function obfuscate(args) {
  var password = args[2];
  var output = "";

  for (var i = 0; i < password.length; i++){
    var change = password[i];

    if (change == 'a') {
      output += '4';
    } else if (change == 'e') {
      output += '3';
    } else if (change == 'o') {
      output += '0';
    } else if (change == 'l') {
      output += '1';
    } else {
      output += change;
    }
  }
  return output;
}

console.log(obfuscate(args));