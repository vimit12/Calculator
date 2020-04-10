function area(val) {
      if (val == "Circle"){
          var tri = document.getElementById("show_traingle");
          tri.style.display = "none";
          var rhom = document.getElementById("show_rhombus");
          rhom.style.display = "none";
          var rec = document.getElementById("show_rectangle");
          rec.style.display = "none";
          var sq = document.getElementById("show_square");
          sq.style.display = "none";
          var pr = document.getElementById("show_parr");
          pr.style.display = "none";
          var cir = document.getElementById("show_circle");
          cir.style.display = "block";
      }
      else if (val == "Rectangle") {
          var tri = document.getElementById("show_traingle");
          tri.style.display = "none";
          var rhom = document.getElementById("show_rhombus");
          rhom.style.display = "none";
          var cir = document.getElementById("show_circle");
          cir.style.display = "none";
          var sq = document.getElementById("show_square");
          sq.style.display = "none";
          var pr = document.getElementById("show_parr");
          pr.style.display = "none";
          var rec = document.getElementById("show_rectangle");
          rec.style.display = "block";
        }
      else if (val == "Square") {
          var tri = document.getElementById("show_traingle");
          tri.style.display = "none";
          var rhom = document.getElementById("show_rhombus");
          rhom.style.display = "none";
          var cir = document.getElementById("show_circle");
          cir.style.display = "none";
          var rec = document.getElementById("show_rectangle");
          rec.style.display = "none";
          var pr = document.getElementById("show_parr");
          pr.style.display = "none";
          var sq = document.getElementById("show_square");
          sq.style.display = "block";
        }
      else if (val == "Parallelogram") {
          var tri = document.getElementById("show_traingle");
          tri.style.display = "none";
          var rhom = document.getElementById("show_rhombus");
          rhom.style.display = "none";
          var cir = document.getElementById("show_circle");
          cir.style.display = "none";
          var rec = document.getElementById("show_rectangle");
          rec.style.display = "none";
          var sq = document.getElementById("show_square");
          sq.style.display = "none";
          var pr = document.getElementById("show_parr");
          pr.style.display = "block";
          }
      else if (val == "Rhombus") {
          var tri = document.getElementById("show_traingle");
          tri.style.display = "none";
          var cir = document.getElementById("show_circle");
          cir.style.display = "none";
          var rec = document.getElementById("show_rectangle");
          rec.style.display = "none";
          var sq = document.getElementById("show_square");
          sq.style.display = "none";
          var pr = document.getElementById("show_parr");
          pr.style.display = "none";
          var rhom = document.getElementById("show_rhombus");
          rhom.style.display = "block";
          }
      else if (val == "Traingle") {
              var cir = document.getElementById("show_circle");
              cir.style.display = "none";
              var rec = document.getElementById("show_rectangle");
              rec.style.display = "none";
              var sq = document.getElementById("show_square");
              sq.style.display = "none";
              var pr = document.getElementById("show_parr");
              pr.style.display = "none";
              var rhom = document.getElementById("show_rhombus");
              rhom.style.display = "none";
              var tri = document.getElementById("show_traingle");
              tri.style.display = "block";
          }
  }

function circle_val() {
    var cir = document.getElementById("result1").value;
    var area,perimeter;
    area = (Math.PI*eval(cir)*eval(cir)).toFixed(2);
    perimeter = (2*Math.PI*eval(cir)).toFixed(2);
    document.getElementById("equate_val").innerHTML = `Area of Circle with Radius : ${cir} unit is ${area} sq. unit and Perimeter is ${perimeter} unit `;
    document.getElementById("result1").value="";

    var ctx = document.getElementById('area_plot').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: [0,1,2,3,4],
            datasets: [{
                label: "graph_type",
                backgroundColor: '#000000',
                borderColor: '#000000',
                data: [0,1,2,3,4]
            }]
        },

        // Configuration options go here
        options: {}
    });
}

function rec_val() {
    var l = document.getElementById("result2").value;
    var b = document.getElementById("result3").value;
    var area,perimeter;
    area = (eval(l)*eval(b)).toFixed(2);
    perimeter = (2*(eval(l)+eval(b))).toFixed(2);
    document.getElementById("equate_val").innerHTML = `Area of Rectangle is ${area} sq. unit and Perimeter is ${perimeter} unit `;
    document.getElementById("result2").value="";
    document.getElementById("result3").value="";
}


function sq_val() {
    var l = document.getElementById("result4").value;
    var area,perimeter;
    area = (eval(l)*eval(l)).toFixed(2);
    perimeter = (4*eval(l)).toFixed(2);
    document.getElementById("equate_val").innerHTML = `Area of Square is ${area} sq. unit and Perimeter is ${perimeter} unit `;
    document.getElementById("result4").value="";
}

function parr_val() {
    var h = document.getElementById("result5").value;
    var b = document.getElementById("result6").value;
    var area,perimeter;
    area = (eval(h)*eval(b)).toFixed(2);
    perimeter = (2*(eval(h)+eval(b))).toFixed(2);
    document.getElementById("equate_val").innerHTML = `Area of Parallelogram is ${area} sq. unit and Perimeter is ${perimeter} unit `;
    document.getElementById("result5").value="";
    document.getElementById("result6").value="";
}

function rhom_val() {
    var d1 = document.getElementById("result7").value;
    var d2 = document.getElementById("result8").value;
    var area,perimeter;
    area = 0.5*(eval(d1)*eval(d2)).toFixed(2);
    sum_sq = Math.sqrt(eval(d1)**2)+(eval(d2)**2);
    perimeter = (2*sum_sq).toFixed(2);
    document.getElementById("equate_val").innerHTML = `Area of Rhombus is ${area} sq. unit and Perimeter is ${perimeter} unit `;
    document.getElementById("result7").value="";
    document.getElementById("result8").value="";
}

function tri_val() {
    var h = document.getElementById("result9").value;
    var b = document.getElementById("result10").value;
    var area;
    area = 0.5*(eval(h)*eval(b)).toFixed(2);
    document.getElementById("equate_val").innerHTML = `Area of Traigle is ${area} sq. unit`;
    document.getElementById("result9").value="";
    document.getElementById("result10").value="";
}
