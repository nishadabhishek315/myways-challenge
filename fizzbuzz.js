var phone = [];
phone = alert("Enter your phone number");
var output = [];
var count = 1;
var max = 0;
for(var i=0; i<phone.length; i++){

  max = max + i;
}


function fizzbuzz() {
  for (count = 1; count <= max; count++) {

    if (count % 4 === 0 && count % 5 === 0) {
      output.push("fizzbuzz");
    } else if (count % 4 === 0) {
      output.push("fizz");
    } else if (count % 5 === 0) {
      output.push("buzz");
    } else {
      output.push(count);

    }

  }
  console.log(output);
}
fizzbuzz();
