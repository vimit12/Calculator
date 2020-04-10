//function that display value
function dis(val)
{
    document.getElementById("result").value+=val
}

//function that evaluates the digit and return result
function solve()
{
    let x = ""
    x = document.getElementById("result").value;
    var res = x.match(/\^/g);
    var count = (x.match(/\^/g) || []).length;
    if (count > 1){
      document.getElementById("capture_val").innerHTML = "Please provide valid input";
      document.getElementById("result").value = "";
      return}
    if (res){
      var q = x.split("^");
      // if (q.length){
      //   document.getElementById("capture_val").innerHTML = "please enter valid input";
      //   break;}
      let q1 = eval(q[0]);
      let q2 = eval(q[1]);
      let result = Math.pow(q1,q2);
      document.getElementById("result").value = result;
      return
    }
    try{
      let y = eval(x)
      document.getElementById("result").value = y
      if (x == ""){
        document.getElementById("result").value = "";
      }
      return
    }
    catch(err) {
      document.getElementById("capture_val").innerHTML = err.message;
    }
    var res_log = x.match(/base log/g);
    if (res_log){
      let val = document.getElementById("result").value;
      let patt1 = /\d+/g;
      let int_val = val.match(patt1);
      x = eval(int_val[0])
      y = eval(int_val[1])
      let return_val = Math.log(y) / Math.log(x);
      document.getElementById("result").value = return_val;
      document.getElementById("capture_val").innerHTML = "";
    }
  let res_n_root = x.match(/yroot/g);
  if (res_n_root){
    let val = document.getElementById("result").value;
    let patt1 = /\d+/g;
    let int_val = val.match(patt1);
    x = eval(int_val[0])
    if (x == 0){
      document.getElementById("result").value = "0";
      document.getElementById("capture_val").innerHTML = "";
      return
    }
    y = eval(int_val[1])
    let return_val = Math.pow(y,1/x)
    document.getElementById("result").value = return_val;
    document.getElementById("capture_val").innerHTML = "";
  }
}

//function that clear the display
function clr()
{
    document.getElementById("result").value = ""
    document.getElementById("capture_val").innerHTML = "";
}


function memory(val){
  if (val === "M+"){
    x = document.getElementById("result").value;
    y = x.valueOf();
    delete x;
  }
  if (val === "M-"){
    a = document.getElementById("result").value;
    if (a == y){
      delete a;
      delete y;
      document.getElementById("result").value = "";
    }
  }
  if (val === "MR"){
    document.getElementById("result").value = y;
  }
}
