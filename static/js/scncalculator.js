function value_pi() {
  document.getElementById("result").value='';
  document.getElementById("result").value = Math.PI;
}
function power_cal_two() {
    var input_val=document.getElementById("result").value;
    if (input_val.length>0){
        document.getElementById("result").value = Math.pow(input_val, 2);
  }
}
function power_cal_three() {
    var input_val=document.getElementById("result").value;
    if (input_val.length>0){
        document.getElementById("result").value = Math.pow(input_val, 3);
  }
}
function sqrt_two(){
  var input_val=document.getElementById("result").value;
  if (input_val.length>0){
      document.getElementById("result").value = Math.sqrt(input_val);
}
}
function sqrt_three(){
  var input_val=document.getElementById("result").value;
  if (input_val.length>0){
      document.getElementById("result").value = Math.cbrt(input_val);
}
}
function value_e(){
    document.getElementById("result").value = Math.E;
}
function mod_x(){
    var input_val = document.getElementById("result").value;
    if (input_val){
        document.getElementById("result").value = Math.abs(input_val);
    }
}
function Factorial() {
  var n = document.getElementById("result").value;
  var i=n;
  var fact_val = 1;
  if (Number.isInteger(eval(n))){
    //pass
  }
  else{
    document.getElementById("capture_val").innerHTML = "Please Enter a Valid Interger";
    return 0
  }
  if (n == 0) {
        document.getElementById("result").value = fact_val;
    }
  else {
      for(i=n;i>0;i--)
        {
            fact_val=fact_val*i;
        }
      document.getElementById("result").value = fact_val;
    }
}
function reverse_val(){
  var n = document.getElementById("result").value;
  var result;
  result = 1/eval(n);
  document.getElementById("result").value = result;
}
function power_x_to_y(){
  // var input_val=document.getElementById("result").value;
  var x = 0;
  x = document.getElementById("result").value;
  if (x == ""){
    x=0;
  }
  document.getElementById("result").value = x + '^';
}

function percentage_cal(){
  per_cal = document.getElementById("result").value;
  document.getElementById("result").value=eval(per_cal)*100;
}
function mod(){
  mod_cal = document.getElementById("result").value;
  document.getElementById("result").value=mod_cal+'%';
  result_val = document.getElementById("result").value;
}
function sin_val() {
  var deg_val = document.getElementById("result").value;
  document.getElementById("result").value = Math.sin(eval(deg_val) * Math.PI / 180);
}
function cosec_val() {
  var deg_val = document.getElementById("result").value;
  let res = Math.sin(eval(deg_val) * Math.PI / 180);
  document.getElementById("result").value = 1/res;
}
function sinh_val() {
  var x = document.getElementById("result").value;
  document.getElementById("result").value = Math.sinh(eval(x));
}
function asin_val() {
  let x = document.getElementById("result").value;
  if (x>1 || x<-1){
    document.getElementById("capture_val").innerHTML = "Range must lie b/w 1 to -1";
    return
  }
  document.getElementById("result").value = Math.asin(eval(x));
}
function cos_val() {
  var deg_val = document.getElementById("result").value;
  document.getElementById("result").value = Math.cos(eval(deg_val) * Math.PI / 180);
}
function sec_val() {
  var deg_val = document.getElementById("result").value;
  let res = Math.cos(eval(deg_val) * Math.PI / 180);
  document.getElementById("result").value = 1/res;
}
function cosh_val() {
  var x = document.getElementById("result").value;
  document.getElementById("result").value = Math.cosh(eval(x));
}
function acos_val() {
  var x = document.getElementById("result").value;
  if (x>1 || x<-1){
    document.getElementById("capture_val").innerHTML = "Range must lie b/w 1 to -1";
    return
  }
  document.getElementById("result").value = Math.acos(eval(x));
}
function tan_val() {
  var deg_val = document.getElementById("result").value;
  document.getElementById("result").value = Math.tan(eval(deg_val) * Math.PI / 180);
}
function cot_val() {
  var deg_val = document.getElementById("result").value;
  let res = Math.tan(eval(deg_val) * Math.PI / 180);
  document.getElementById("result").value = 1/res;
}
function tanh_val() {
  var x = document.getElementById("result").value;
  document.getElementById("result").value = Math.tanh(eval(x));
}
function atan_val() {
  var x = document.getElementById("result").value;
  document.getElementById("result").value = Math.atan(eval(x));
}
function ten_x(){
  let x = document.getElementById("result").value;
  let result = Math.pow(10,eval(x));
  document.getElementById("result").value = result;
}
function log_ten() {
  let x = document.getElementById("result").value;
  let result = Math.log10(eval(x));
  document.getElementById("result").value = result;
}
function ln_two() {
  let result = Math.LN2;
  document.getElementById("result").value = result;
}
function log_x_y() {
  let x = document.getElementById("result").value;
  document.getElementById("result").value = x+" base log "
}
function e_x() {
  let x = document.getElementById("result").value;
  document.getElementById("result").value = Math.pow(Math.E,eval(x));
}
function two_x() {
  let x = document.getElementById("result").value;
  document.getElementById("result").value = Math.pow(2,eval(x));
}
function nth_root() {
  var x;
  x = document.getElementById("result").value;
  if (x == ""){
    x=0;
  }
    document.getElementById("result").value = x+"yroot";
}
function clear_step() {
  document.getElementById("capture_val").innerHTML = "";
  let x = document.getElementById("result").value;
  document.getElementById("result").value = x.slice(0,x.length-1);
}
function frac() {
  let input_val = document.getElementById("result").value;
  let split_input = input_val.split(".");
  if (split_input[0] == ""){
    split_input[0] = 0;
  }
  let convert_split_string = String(split_input[0])+'.('+String(split_input[1])+')'
  alert(convert_split_string);
  var res = Fraction(convert_split_string);
  document.getElementById("result").value = String(res.n)+"/"+String(res.d)
}
