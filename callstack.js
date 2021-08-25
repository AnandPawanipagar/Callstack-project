var count = "0";

function pushElement() {
  count++;
  console.log(count);
  var block_name = "";
  var highcount = count;
  for (var i = 0; i < count; i++) {
    highcount--;
    block_name =
      block_name + '<div class="Box">' + Number(highcount + 1) + "</div>";
  }
  console.log(block_name);
  document.getElementById("boxes").innerHTML = block_name;
}

function popElement() {
 
}
