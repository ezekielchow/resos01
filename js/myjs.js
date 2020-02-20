let count = 0;

const increaseCounter = function() {
  count++;
  document.getElementById("titleText").innerHTML = "Hello " + count + "M'ers!";
};
