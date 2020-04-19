function swap_length() {
    var fromInput = document.getElementById("fromunits").value;
    var toInput = document.getElementById("tounits").value;
    document.getElementById("fromunits").value = toInput;
    document.getElementById("tounits").value = fromInput;
}

function swap_weight() {
  var fromInput = document.getElementById("fromweight").value;
  var toInput = document.getElementById("toweight").value;
  document.getElementById("fromweight").value = toInput;
  document.getElementById("toweight").value = fromInput;
}

function lengthConversion() {
  var inputQuantity = document.getElementById('quantity').value;
  var fromInput = document.getElementById("fromunits").value;
  var toInput = document.getElementById("tounits").value;

  if (inputQuantity == "" || fromInput == toInput){
      document.getElementById("error_msg1").innerHTML="Please provide any value";
      document.getElementById("error_msg2").innerHTML="To and from field can't be same";
      document.getElementById("error_msg3").innerHTML="To and from field can't be same";
      return;
  }

// centimeter to all available option
//***************************************************************************************
  if (fromInput == 'cm' && toInput == 'ft'){
    let result = (inputQuantity/30.48).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Feet`;
    }
  else if (fromInput == 'ft' && toInput == 'cm') {
    let result = (inputQuantity*30.48).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Centimetre`;
  }

  if (fromInput == 'cm' && toInput == 'in'){
    let result = (inputQuantity/2.54).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Inch`;
    }
  else if (fromInput == 'in' && toInput == 'cm') {
    let result = (inputQuantity*2.54).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Centimetre`;
  }

  if (fromInput == 'cm' && toInput == 'mt'){
    let result = (inputQuantity/100).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Metre`;
    }
  else if (fromInput == 'mt' && toInput == 'cm') {
    let result = (inputQuantity*100).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Centimetre`;
  }

  if (fromInput == 'cm' && toInput == 'km'){
    let result = (inputQuantity/100000).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Kilometre`;
    }
  else if (fromInput == 'km' && toInput == 'cm') {
    let result = inputQuantity*100000;
    document.getElementById("success_msg1").innerHTML = ` ${result} Centimetre`;
  }

  if (fromInput == 'cm' && toInput == 'ml'){
    let result = (inputQuantity/160934).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Miles`;
    }
  else if (fromInput == 'ml' && toInput == 'cm') {
    let result = (inputQuantity*160934).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Centimetre`;
  }

  if (fromInput == 'cm' && toInput == 'nl'){
    let result = (inputQuantity/185200).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Nautical Miles`;
    }
  else if (fromInput == 'nl' && toInput == 'cm') {
    let result = (inputQuantity*185200).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Centimetre`;
  }

  if (fromInput == 'cm' && toInput == 'yd'){
    let result = (inputQuantity/91.44).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Yard`;
    }
  else if (fromInput == 'yd' && toInput == 'cm') {
    let result = (inputQuantity*91.44).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Centimetre`;
  }

  if (fromInput == 'cm' && toInput == 'mm'){
    let result = (inputQuantity*10).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Millimetre`;
    }
  else if (fromInput == 'mm' && toInput == 'cm') {
    let result = (inputQuantity/10).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Centimetre`;
  }

  if (fromInput == 'cm' && toInput == 'nm'){
    let result = (inputQuantity*10000000 ).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Nanometre`;
    }
  else if (fromInput == 'nm' && toInput == 'cm') {
    let result = (inputQuantity/10000000 ).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Centimetre`;
  }

  if (fromInput == 'cm' && toInput == 'micron'){
    let result = (inputQuantity*10000 ).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Micrometre`;
    }
  else if (fromInput == 'micron' && toInput == 'cm') {
    let result = (inputQuantity/10000 ).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Centimetre`;
  }
//***************************************************************************************
//feet to all available conversion

  if (fromInput == 'ft' && toInput == 'in'){
    let result = (inputQuantity*12).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Inch`;
    }
  else if (fromInput == 'in' && toInput == 'ft') {
  let result = (inputQuantity/12).toFixed(5);
  document.getElementById("success_msg1").innerHTML = ` ${result} Feet`;
}

  if (fromInput == 'ft' && toInput == 'mt'){
    let result = (inputQuantity*3.281).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Metre`;
    }
  else if (fromInput == 'mt' && toInput == 'ft') {
    let result = (inputQuantity/3.281).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Feet`;
  }

  if (fromInput == 'ft' && toInput == 'km'){
    let result = (inputQuantity/3281).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Kilometre`;
    }
  else if (fromInput == 'km' && toInput == 'ft') {
    let result = (inputQuantity*3281).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Feet`;
  }

  if (fromInput == 'ft' && toInput == 'ml'){
    let result = (inputQuantity/5280).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Miles`;
    }
  else if (fromInput == 'ml' && toInput == 'ft') {
    let result = (inputQuantity*5280).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Feet`;
  }

  if (fromInput == 'ft' && toInput == 'nl'){
    let result = (inputQuantity/6076).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Nauticle Miles`;
    }
  else if (fromInput == 'nl' && toInput == 'ft') {
    let result = (inputQuantity*6076).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Feet`;
  }

  if (fromInput == 'ft' && toInput == 'yd'){
    let result = (inputQuantity/3).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Yard`;
    }
  else if (fromInput == 'yd' && toInput == 'ft') {
    let result = (inputQuantity*3).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Feet`;
  }

  if (fromInput == 'ft' && toInput == 'mm'){
    let result = (inputQuantity*304.8).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Millimetre`;
    }
  else if (fromInput == 'mm' && toInput == 'ft') {
    let result = (inputQuantity/304.8).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Feet`;
  }

  if (fromInput == 'ft' && toInput == 'nm'){
    let result = (inputQuantity*304800000 ).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Nanometre`;
    }
  else if (fromInput == 'nm' && toInput == 'ft') {
    let result = (inputQuantity/304800000).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Feet`;
  }

  if (fromInput == 'ft' && toInput == 'micron'){
    let result = (inputQuantity*304800 ).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Micrometre`;
    }
  else if (fromInput == 'micron' && toInput == 'ft') {
    let result = (inputQuantity/304800).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Feet`;
  }

//***************************************************************************************
//Inch to all available conversion
  if (fromInput == 'in' && toInput == 'mt'){
    let result = (inputQuantity/39.37 ).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Metre`;
    }
  else if (fromInput == 'mt' && toInput == 'in') {
    let result = (inputQuantity*39.37).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Inch`;
}

  if (fromInput == 'in' && toInput == 'km'){
    let result = (inputQuantity/39370 ).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Kilometre`;
    }
  else if (fromInput == 'km' && toInput == 'in') {
    let result = (inputQuantity*39370).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Inch`;
}

  if (fromInput == 'in' && toInput == 'ml'){
    let result = (inputQuantity/63360 ).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Miles`;
    }
  else if (fromInput == 'ml' && toInput == 'in') {
    let result = (inputQuantity*63360).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Inch`;
}

  if (fromInput == 'in' && toInput == 'nl'){
    let result = (inputQuantity/72913 ).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Nauticle Miles`;
    }
  else if (fromInput == 'nl' && toInput == 'in') {
    let result = (inputQuantity*72913).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Inch`;
  }

  if (fromInput == 'in' && toInput == 'yd'){
    let result = (inputQuantity/36 ).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Yard`;
    }
  else if (fromInput == 'yd' && toInput == 'in') {
    let result = (inputQuantity*36).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Inch`;
  }

  if (fromInput == 'in' && toInput == 'mm'){
    let result = (inputQuantity*25.4).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Millimetre`;
    }
  else if (fromInput == 'mm' && toInput == 'in') {
    let result = (inputQuantity/25.4).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Inch`;
  }

  if (fromInput == 'in' && toInput == 'nm'){
    let result = (inputQuantity*25400000).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Nanometre`;
    }
  else if (fromInput == 'nm' && toInput == 'in') {
    let result = (inputQuantity/25400000).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Inch`;
  }

  if (fromInput == 'in' && toInput == 'micron'){
    let result = (inputQuantity*25400).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Micrometre`;
    }
  else if (fromInput == 'micron' && toInput == 'in') {
    let result = (inputQuantity/25400).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Inch`;
  }

  //***************************************************************************************
  //Meter to all available conversion

  if (fromInput == 'mt' && toInput == 'km'){
    let result = (inputQuantity/1000).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Kilometre`;
    }
  else if (fromInput == 'km' && toInput == 'mt') {
    let result = (inputQuantity*1000).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Metre`;
  }

  if (fromInput == 'mt' && toInput == 'ml'){
    let result = (inputQuantity/1609).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Miles`;
    }
  else if (fromInput == 'ml' && toInput == 'mt') {
    let result = (inputQuantity*1609).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Metre`;
  }

  if (fromInput == 'mt' && toInput == 'nl'){
    let result = (inputQuantity/1852).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Nauticle Miles`;
    }
  else if (fromInput == 'nl' && toInput == 'mt') {
    let result = (inputQuantity*1852).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Metre`;
  }

  if (fromInput == 'mt' && toInput == 'yd'){
    let result = (inputQuantity*1.094).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Yard`;
    }
  else if (fromInput == 'yd' && toInput == 'mt') {
    let result = (inputQuantity/1.094).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Metre`;
  }

  if (fromInput == 'mt' && toInput == 'mm'){
    let result = (inputQuantity*1000).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Millimetre`;
    }
  else if (fromInput == 'mm' && toInput == 'mt') {
    let result = (inputQuantity/1000).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Metre`;
  }

  if (fromInput == 'mt' && toInput == 'nm'){
    let result = (inputQuantity*1000000000).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Nanometre`;
    }
  else if (fromInput == 'nm' && toInput == 'mt') {
    let result = (inputQuantity/1000000000).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Metre`;
  }

  if (fromInput == 'mt' && toInput == 'micron'){
    let result = (inputQuantity*1000000).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Nanometre`;
    }
  else if (fromInput == 'micron' && toInput == 'mt') {
    let result = (inputQuantity/1000000).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Metre`;
  }

//***************************************************************************************
//Kilometre to all available conversion

  if (fromInput == 'km' && toInput == 'ml'){
    let result = (inputQuantity/1.609).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Miles`;
    }
  else if (fromInput == 'ml' && toInput == 'km') {
    let result = (inputQuantity*1.609).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Kilometre`;
  }

  if (fromInput == 'km' && toInput == 'nl'){
    let result = (inputQuantity/1.852).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Nauticle Miles`;
    }
  else if (fromInput == 'nl' && toInput == 'km') {
    let result = (inputQuantity*1.852).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Kilometre`;
  }

  if (fromInput == 'km' && toInput == 'yd'){
    let result = (inputQuantity*1094).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Yard`;
    }
  else if (fromInput == 'yd' && toInput == 'km') {
    let result = (inputQuantity/1094).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Kilometre`;
  }

  if (fromInput == 'km' && toInput == 'mm'){
    let result = (inputQuantity*1000000).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Millimetre`;
    }
  else if (fromInput == 'mm' && toInput == 'km') {
    let result = (inputQuantity/1000000).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Kilometre`;
  }

  if (fromInput == 'km' && toInput == 'nm'){
    let result = (inputQuantity*1000000000000).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Nanometre`;
    }
  else if (fromInput == 'nm' && toInput == 'km') {
    let result = (inputQuantity/1000000000000).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Kilometre`;
  }

  if (fromInput == 'km' && toInput == 'micron'){
    let result = (inputQuantity*1000000000).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Nanometre`;
    }
  else if (fromInput == 'micron' && toInput == 'km') {
  let result = (inputQuantity/1000000000).toFixed(5);
  document.getElementById("success_msg1").innerHTML = ` ${result} Kilometre`;
}
//***************************************************************************************
//Miles to all available conversion

  if (fromInput == 'ml' && toInput == 'nl'){
    let result = (inputQuantity/1.151).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Nauticle Miles`;
    }
  else if (fromInput == 'nl' && toInput == 'ml') {
    let result = (inputQuantity*1.151).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Miles`;
  }

  if (fromInput == 'ml' && toInput == 'yd'){
    let result = (inputQuantity*1760).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Yard`;
    }
  else if (fromInput == 'yd' && toInput == 'ml') {
    let result = (inputQuantity/1760).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Miles`;
  }

  if (fromInput == 'ml' && toInput == 'mm'){
    let result = (inputQuantity*1609344).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Millimetre`;
    }
  else if (fromInput == 'mm' && toInput == 'ml') {
    let result = (inputQuantity/1609344).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Miles`;
  }

  if (fromInput == 'ml' && toInput == 'nm'){
    let result = (inputQuantity*1609344000000).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Nanometre`;
    }
  else if (fromInput == 'nm' && toInput == 'ml') {
    let result = (inputQuantity/1609344000000).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Miles`;
  }

  if (fromInput == 'ml' && toInput == 'micron'){
    let result = (inputQuantity*1609344000).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Nanometre`;
    }
  else if (fromInput == 'micron' && toInput == 'ml') {
  let result = (inputQuantity/1609344000).toFixed(5);
  document.getElementById("success_msg1").innerHTML = ` ${result} Miles`;
  }

//***************************************************************************************
//Nauticle Miles to all available conversion

  if (fromInput == 'nl' && toInput == 'yd'){
    let result = (inputQuantity*2025).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Yard`;
    }
  else if (fromInput == 'yd' && toInput == 'nl') {
    let result = (inputQuantity/2025).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Nauticle Miles`;
  }

  if (fromInput == 'nl' && toInput == 'mm'){
    let result = (inputQuantity*1852000).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Millimetre`;
    }
  else if (fromInput == 'mm' && toInput == 'nl') {
    let result = (inputQuantity/1852000).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Nauticle Miles`;
  }

  if (fromInput == 'nl' && toInput == 'nm'){
    let result = (inputQuantity*1852000000000).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Nanometre`;
    }
  else if (fromInput == 'nm' && toInput == 'nl') {
    let result = (inputQuantity/1852000000000).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Nauticle Miles`;
  }

  if (fromInput == 'nl' && toInput == 'micron'){
    let result = (inputQuantity*1852000000).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Nanometre`;
    }
  else if (fromInput == 'micron' && toInput == 'nl') {
  let result = (inputQuantity/1852000000).toFixed(5);
  document.getElementById("success_msg1").innerHTML = ` ${result} Nauticle Miles`;
  }

//***************************************************************************************
//Yard to all available conversion

  if (fromInput == 'yd' && toInput == 'mm'){
    let result = (inputQuantity*914.4).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Millimetre`;
    }
  else if (fromInput == 'mm' && toInput == 'yd') {
    let result = (inputQuantity/914.4).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Yard`;
  }

  if (fromInput == 'yd' && toInput == 'nm'){
    let result = (inputQuantity*914400000).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Nanometre`;
    }
  else if (fromInput == 'nm' && toInput == 'yd') {
    let result = (inputQuantity/914400000).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Yard`;
  }

  if (fromInput == 'yd' && toInput == 'micron'){
    let result = (inputQuantity*914400).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Nanometre`;
    }
  else if (fromInput == 'micron' && toInput == 'yd') {
  let result = (inputQuantity/914400).toFixed(5);
  document.getElementById("success_msg1").innerHTML = ` ${result} Yard`;
  }

//***************************************************************************************
//Millimetre to all available conversion

  if (fromInput == 'mm' && toInput == 'nm'){
    let result = (inputQuantity*1000000).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Nanometre`;
    }
  else if (fromInput == 'nm' && toInput == 'mm') {
    let result = (inputQuantity/1000000).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Millimetre`;
  }

  if (fromInput == 'mm' && toInput == 'micron'){
    let result = (inputQuantity*1000).toFixed(5);
    document.getElementById("success_msg1").innerHTML = ` ${result} Nanometre`;
    }
  else if (fromInput == 'micron' && toInput == 'mm') {
  let result = (inputQuantity/1000).toFixed(5);
  document.getElementById("success_msg1").innerHTML = ` ${result} Millimetre`;
  }

//***************************************************************************************
//Nanometre to all available conversion

if (fromInput == 'nm' && toInput == 'micron'){
  let result = (inputQuantity/1000 ).toFixed(5);
  document.getElementById("success_msg1").innerHTML = ` ${result} Nanometre`;
  }
else if (fromInput == 'micron' && toInput == 'nm') {
  let result = (inputQuantity*1000).toFixed(5);
  document.getElementById("success_msg1").innerHTML = ` ${result} Yard`;
}

}

function weightConversion() {

  var inputQuantity = document.getElementById('quantitywt').value;
  var fromInput = document.getElementById("fromweight").value;
  var toInput = document.getElementById("toweight").value;

  if (inputQuantity == "" || fromInput == toInput){
      document.getElementById("error_msg4").innerHTML="Please provide any value";
      document.getElementById("error_msg5").innerHTML="To and from field can't be same";
      document.getElementById("error_msg6").innerHTML="To and from field can't be same";
      return;
  }

//***************************************************************************************
// gram to all available option
  if (fromInput == 'gm' && toInput == 'mg'){
    let result = (inputQuantity*1000).toFixed(5);
    document.getElementById("success_msg2").innerHTML = ` ${result} Milligram`;
    }
  else if (fromInput == 'mg' && toInput == 'gm') {
    let result = (inputQuantity/1000).toFixed(5);
    document.getElementById("success_msg2").innerHTML = ` ${result} Gram`;
  }

  if (fromInput == 'gm' && toInput == 'kg'){
    let result = (inputQuantity/1000).toFixed(5);
    document.getElementById("success_msg2").innerHTML = ` ${result} Kilogram`;
    }
  else if (fromInput == 'kg' && toInput == 'gm') {
    let result = (inputQuantity*1000).toFixed(5);
    document.getElementById("success_msg2").innerHTML = ` ${result} Gram`;
  }

  if (fromInput == 'gm' && toInput == 'tn'){
    let result = (inputQuantity/1000000).toFixed(5);
    document.getElementById("success_msg2").innerHTML = ` ${result} Tons`;
    }
  else if (fromInput == 'tn' && toInput == 'gm') {
    let result = (inputQuantity*1000000).toFixed(5);
    document.getElementById("success_msg2").innerHTML = ` ${result} Gram`;
  }

  if (fromInput == 'gm' && toInput == 'oc'){
    let result = (inputQuantity*0.0352739619 ).toFixed(5);
    document.getElementById("success_msg2").innerHTML = ` ${result} Ounce`;
    }
  else if (fromInput == 'oc' && toInput == 'gm') {
    let result = (inputQuantity/0.0352739619 ).toFixed(5);
    document.getElementById("success_msg2").innerHTML = ` ${result} Gram`;
  }

  if (fromInput == 'gm' && toInput == 'lb'){
    let result = (inputQuantity*0.0022046226).toFixed(5);
    document.getElementById("success_msg2").innerHTML = ` ${result} Pound`;
    }
  else if (fromInput == 'lb' && toInput == 'gm') {
    let result = (inputQuantity/0.0022046226).toFixed(5);
    document.getElementById("success_msg2").innerHTML = ` ${result} Gram`;
  }

  if (fromInput == 'gm' && toInput == 'qn'){
    let result = (inputQuantity/100000).toFixed(5);
    document.getElementById("success_msg2").innerHTML = ` ${result} Quintal`;
    }
  else if (fromInput == 'qn' && toInput == 'gm') {
    let result = (inputQuantity*100000).toFixed(5);
    document.getElementById("success_msg2").innerHTML = ` ${result} Gram`;
  }

//***************************************************************************************
// milligram to all available option

    if (fromInput == 'mg' && toInput == 'kg'){
      let result = (inputQuantity/1000000).toFixed(5);
      document.getElementById("success_msg2").innerHTML = ` ${result} Kilogram`;
      }
    else if (fromInput == 'kg' && toInput == 'mg') {
      let result = (inputQuantity*1000000).toFixed(5);
      document.getElementById("success_msg2").innerHTML = ` ${result} Milligram`;
    }

    if (fromInput == 'mg' && toInput == 'tn'){
      let result = (inputQuantity/1000000000).toFixed(5);
      document.getElementById("success_msg2").innerHTML = ` ${result} Tons`;
      }
    else if (fromInput == 'tn' && toInput == 'mg') {
      let result = (inputQuantity*1000000000).toFixed(5);
      document.getElementById("success_msg2").innerHTML = ` ${result} Milligram`;
    }

    if (fromInput == 'mg' && toInput == 'oc'){
      let result = (inputQuantity/28350).toFixed(5);
      document.getElementById("success_msg2").innerHTML = ` ${result} Ounce`;
      }
    else if (fromInput == 'oc' && toInput == 'mg') {
      let result = (inputQuantity*28350).toFixed(5);
      document.getElementById("success_msg2").innerHTML = ` ${result} Milligram`;
    }

    if (fromInput == 'mg' && toInput == 'lb'){
      let result = (inputQuantity/453592).toFixed(5);
      document.getElementById("success_msg2").innerHTML = ` ${result} Pound`;
      }
    else if (fromInput == 'lb' && toInput == 'mg') {
      let result = (inputQuantity*453592).toFixed(5);
      document.getElementById("success_msg2").innerHTML = ` ${result} Milligram`;
    }

    if (fromInput == 'mg' && toInput == 'qn'){
      let result = (inputQuantity/100000000).toFixed(5);
      document.getElementById("success_msg2").innerHTML = ` ${result} Quintal`;
      }
    else if (fromInput == 'qn' && toInput == 'mg') {
      let result = (inputQuantity*100000000).toFixed(5);
      document.getElementById("success_msg2").innerHTML = ` ${result} Milligram`;
    }

//***************************************************************************************
// Kilogram to all available option

        if (fromInput == 'kg' && toInput == 'tn'){
          let result = (inputQuantity/1000).toFixed(5);
          document.getElementById("success_msg2").innerHTML = ` ${result} Tons`;
          }
        else if (fromInput == 'tn' && toInput == 'kg') {
          let result = (inputQuantity*1000).toFixed(5);
          document.getElementById("success_msg2").innerHTML = ` ${result} Kilogram`;
        }

        if (fromInput == 'kg' && toInput == 'oc'){
          let result = (inputQuantity*35.27396195).toFixed(5);
          document.getElementById("success_msg2").innerHTML = ` ${result} Ounce`;
          }
        else if (fromInput == 'oc' && toInput == 'kg') {
          let result = (inputQuantity/35.27396195).toFixed(5);
          document.getElementById("success_msg2").innerHTML = ` ${result} Kilogram`;
        }

        if (fromInput == 'kg' && toInput == 'lb'){
          let result = (inputQuantity*2.2046226218).toFixed(5);
          document.getElementById("success_msg2").innerHTML = ` ${result} Pound`;
          }
        else if (fromInput == 'lb' && toInput == 'kg') {
          let result = (inputQuantity/2.2046226218).toFixed(5);
          document.getElementById("success_msg2").innerHTML = ` ${result} Kilogram`;
        }

        if (fromInput == 'kg' && toInput == 'qn'){
          let result = (inputQuantity/100).toFixed(5);
          document.getElementById("success_msg2").innerHTML = ` ${result} Quintal`;
          }
        else if (fromInput == 'qn' && toInput == 'kg') {
          let result = (inputQuantity*100).toFixed(5);
          document.getElementById("success_msg2").innerHTML = ` ${result} Kilogram`;
        }

//***************************************************************************************
// Tons to all available option

      if (fromInput == 'tn' && toInput == 'oc'){
        let result = (inputQuantity*35273.96195).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} Ounce`;
        }
      else if (fromInput == 'oc' && toInput == 'tn') {
        let result = (inputQuantity/35273.96195).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} Metric Tons`;
      }

      if (fromInput == 'tn' && toInput == 'lb'){
        let result = (inputQuantity*2204.6226218).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} Pound`;
        }
      else if (fromInput == 'lb' && toInput == 'tn') {
        let result = (inputQuantity/2204.6226218).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} Metric Tons`;
      }

      if (fromInput == 'tn' && toInput == 'qn'){
        let result = (inputQuantity*10).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} Quintal`;
        }
      else if (fromInput == 'qn' && toInput == 'tn') {
        let result = (inputQuantity/10).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} Metric Tons`;
      }

//***************************************************************************************
// Ounce to all available option

    if (fromInput == 'oc' && toInput == 'lb'){
      let result = (inputQuantity*0.0625).toFixed(5);
      document.getElementById("success_msg2").innerHTML = ` ${result} Pound`;
      }
    else if (fromInput == 'lb' && toInput == 'oc') {
      let result = (inputQuantity/0.0625).toFixed(5);
      document.getElementById("success_msg2").innerHTML = ` ${result} Ounce`;
    }

    if (fromInput == 'oc' && toInput == 'qn'){
      let result = (inputQuantity*0.0002834952).toFixed(5);
      document.getElementById("success_msg2").innerHTML = ` ${result} Quintal`;
      }
    else if (fromInput == 'qn' && toInput == 'oc') {
      let result = (inputQuantity/0.0002834952).toFixed(5);
      document.getElementById("success_msg2").innerHTML = ` ${result} Ounce`;
    }

//***************************************************************************************
// Pound to all available option

    if (fromInput == 'lb' && toInput == 'qn'){
      let result = (inputQuantity*0.0045359237).toFixed(5);
      document.getElementById("success_msg2").innerHTML = ` ${result} Quintal`;
      }
    else if (fromInput == 'qn' && toInput == 'lb') {
      let result = (inputQuantity/0.0045359237).toFixed(5);
      document.getElementById("success_msg2").innerHTML = ` ${result} Pound`;
    }


}
