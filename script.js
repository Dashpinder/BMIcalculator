let btn= document.getElementById("btn");

btn.addEventListener("click", function() {
  let wght= document.getElementById("wght").value;
  let hght= document.getElementById("hght").value/100;
  let results= document.getElementById("results");

  if(!wght || !hght) {
    alert("Please enter a value haha");
    return;
  } 

  let bmi = wght/(hght * hght);

  if(bmi < 18.5) {
   results.innerHTML= `your BMI is ${bmi}, kuch kha lia kr underweight h`;
  }

  else if(bmi > 18.5 && bmi <= 24.9)
   results.innerHTML= `Your BMI is ${bmi}, tu thk h bhai moj le normal`;

  else if(bmi > 25 && bmi <= 29.9) {
   results.innerHTML= `Your BMI is ${bmi}, tu km khya kr mote overweight h`;
  }

  else if(bmi >= 30) {
     results.innerHTML= `Your BMI is ${bmi}, tu to bhai rhne de khtm`;
  }
  else {
   results.innerHTML= "Chl chod";

  }


});











