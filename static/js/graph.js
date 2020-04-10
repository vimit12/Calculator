function graph_cal() {
  var x = document.getElementById("result").value;
  document.getElementById("error_html").innerHTML = "";
}
function validate(input) {
    var regex = /[^a-z0-9.()]/gi;
    if (input.value.match(regex)){
      input.value = input.value.replace(regex,"");
      document.getElementById("error_html").innerHTML = "Expression should be without special character other than parantheses";
    }
  }
function reset() {
    document.getElementById("result").value = "";
    document.getElementById("error_html").innerHTML = "";
    var ctx = document.getElementById('graph_plot').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: '',
        // The data for our dataset
        data: {},
    });
}
