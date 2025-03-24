function calculate() {
  let height_meters = parseFloat(document.getElementById("height").value);
  let weight_kilos = parseFloat(document.getElementById("weight").value);

  let height_units = document.getElementById("height_units").value;
  let weight_units = document.getElementById("weight_units").value;

  //   console.log(height + " " + typeof height);
  //   console.log(weight + " " + typeof weight);
  //   console.log(height_units + " " + typeof height_units);
  //   console.log(weight_units + " " + typeof weight_units);
  if (height_units === "cm") {
    height_meters = height_meters / 100;
    //console.log(height_meters);
  }

  if (weight_units === "pounds") {
    weight_kilos = Math.round((weight_kilos / 2.205) * 100) / 100;
    //console.log(weight_kilos);
  }

  let BMI = Math.round(weight_kilos / (height_meters * height_meters));
  //console.log(BMI);

  let result = document.getElementById("result");

  if (BMI < 18.5) {
    result.innerHTML = `Your BMI index is ${BMI} \n Underweight`;
  } else if (BMI >= 18.5 && BMI < 25) {
    result.innerHTML = `Your BMI index is ${BMI} \n Normalweight`;
  } else if (BMI >= 25 && BMI < 30) {
    result.innerHTML = `Your BMI index is ${BMI} \n Overweight`;
  } else if (BMI >= 30) {
    result.innerHTML = `Your BMI index is ${BMI} \n Obesity`;
  }
}
