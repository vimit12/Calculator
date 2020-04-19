function date_val() {

      var val1 = document.getElementById("date1").value;
      var date1 = new Date(val1);
      var m1 = date1.getMonth();
      var d1 = date1.getDate();
      var y1 = date1.getFullYear();

      var val2 = document.getElementById("date2").value;
      var date2 = new Date(val2);
      var m2 = date2.getMonth();
      var d2 = date2.getDate();
      var y2 = date2.getFullYear();

      var year_val = 0;
      var month_value = 0;
      var day_value = 0;

      if (y2<y1){
        document.getElementById("error_msg").innerHTML = "Year Must greater than To year";
        document.getElementById("date1").value = ""
        document.getElementById("date2").value = ""
        return;
      }

      if (d2-d1>0 && m2-m1>0 && y2-y1>0)
          {
            var year_val = y2-y1;
            var month_value = m2-m1;
            var day_value = d2-d1;
          }
      else if (d2-d1>0 && m2-m1<0 && y2-y1>0)
        {
          var year_val = (y2-1)-y1;
          var month_value = (m2+12)-m1;
          var day_value = d2-d1;
        }
      else if (d2-d1<0 && m2-m1<0 && y2-y1>0)
        {
          var year_val = (y2-1)-y1;
          var month_value = ((m2-1)+12)-m1;
          var day_value = (d2+31)-d1;
        }

        // console.log("Year Value : ",year_val);
        // console.log("Month Value : ",month_value);
        // console.log("Day Value : ",day_value);
        // !== 'undefined'
        // alert(year_val);
        // alert(month_value);
        // alert(day_value);
        if (year_val != 0  && month_value != 0 && day_value != 0 ){
            document.getElementById("success_msg").innerHTML = ` ${year_val} years ${month_value} months and ${day_value} days `;
            document.getElementById("date1").value = ""
            document.getElementById("date2").value = ""
        }
        else if (month_value != 0 && day_value != 0 ){
            document.getElementById("success_msg").innerHTML = ` ${month_value} months and ${day_value} days `;
            document.getElementById("date1").value = ""
            document.getElementById("date2").value = ""
        }
        else if (day_value != 0 ){
            document.getElementById("success_msg").innerHTML = ` ${day_value} days `;
            document.getElementById("date1").value = ""
            document.getElementById("date2").value = ""
        }
}

function reset() {
  document.getElementById("success_msg").innerHTML = "";
  document.getElementById("error_msg").innerHTML = "";
  document.getElementById("date1").value = ""
  document.getElementById("date2").value = ""
}

function leapyear() {
    document.getElementById("success_msg1").innerHTML =
    document.getElementById("error_msg1").innerHTML = "";
    var year = eval(document.getElementById("leap").value);
    var st_leap = eval(document.getElementById("st_leap").value);
    var end_leap = eval(document.getElementById("end_leap").value);
    var list_year = []
    for (i=st_leap;i<=end_leap;i++){
      if( (0 == i % 4) && (0 != i % 100) || (0 == i % 400) )
      {
        list_year.push(i);
        document.getElementById("st_leap").value = "";
        document.getElementById("end_leap").value = "";
      }
    }
    if (list_year.length>1){
      document.getElementById("textarea").value = `${list_year} is a list of leap years`
      return;
    }
    if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
		{
      // alert(year+" is a leap year");
      document.getElementById("success_msg1").innerHTML = `${year} is a leap year`
      document.getElementById("leap").value = "";
		}
		else
		{
			document.getElementById("error_msg1").innerHTML = `${year} is not a leap year`
      document.getElementById("leap").value = "";
		}
}
function reset_leap_year() {
  document.getElementById("textarea").value ="";
  document.getElementById("success_msg1").innerHTML = "";
  document.getElementById("error_msg1").innerHTML = "";
  document.getElementById("leap").value = "";
}
