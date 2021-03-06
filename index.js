var male = false;
var gender = false;

const waiting = document.getElementById('waiting')
const waitingMale = document.getElementById('waiting-male')
const waitingFemale = document.getElementById('waiting-female')
const happyMale = document.getElementById('happy-male')
const sadMale = document.getElementById('sad-male')
const happyFemale = document.getElementById('happy-female')
const sadFemale = document.getElementById('sad-female')
const resultContainer = document.getElementsByClassName('result-container')[0]
const result = document.getElementById("bmi-result")

const girl = document.getElementById("girl");
const boy = document.getElementById("boy");

waitingMale.style.display = 'none';
waitingFemale.style.display = 'none';

const genderFemale = () => {

male = false;
gender = true;
girl.style.backgroundColor = 'rgb(241, 230, 219)';
girl.style.border = '1px solid #fdad36'
boy.style.backgroundColor = '#ffff'
boy.style.border = 'transparent'


waiting.style.display = 'none';
waitingMale.style.display = 'none';
waitingFemale.style.display = 'block';
}

const genderMale = () => {

male = true;
gender = true; 
boy.style.backgroundColor = 'rgb(241, 230, 219)';
boy.style.border = '1px solid #fdad36'
girl.style.backgroundColor = '#ffff'
girl.style.border = 'transparent'

waiting.style.display = 'none';
waitingFemale.style.display = 'none';
waitingMale.style.display = 'block';
}

function handleForm() {
let height = +(document.getElementById("height").value);
const heightMax = +(document.getElementById("height").max);
const heightMin = +(document.getElementById("height").min);

const weight = +(document.getElementById("weight").value);
const weightMax = +(document.getElementById("weight").max);
const weightMin = +(document.getElementById("weight").min);

const heightAlert = document.getElementById("heightError");
const weightAlert = document.getElementById("weightError");
const genderAlert = document.getElementById("genderError");

girl.disabled = true;
boy.disabled = true;


heightAlert.style.visibility = 'hidden';
weightAlert.style.visibility = 'hidden';


if (height > heightMax || height < heightMin){
     heightAlert.style.visibility = 'visible'    
}

if (weight > weightMax || weight < weightMin){
    weightAlert.style.visibility = 'visible'
}

if (!gender){
    genderAlert.style.visibility = 'visible'
}


if (weightAlert.style.visibility === 'hidden' && heightAlert.style.visibility === 'hidden' && gender === true){
height /= 100
const bmi = weight / (height*height);


const meaning = document.getElementById('bmi-meaning')
resultContainer.style.display = 'block'


result.innerHTML = 'Your BMI is:' + bmi.toFixed(2);

if (bmi < 18.5 || (bmi >= 25 && bmi < 30) || (bmi > 30)){

    if(bmi < 18.5)
    meaning.innerHTML = 'which means you are Underweight'

    if(bmi >= 30 && bmi < 30)
    meaning.innerHTML = 'which means you are a little overweight'

    if(bmi > 30)
    meaning.innerHTML = 'which means you are overweight'


waiting.style.display = 'none';
waitingFemale.style.display = 'none';
waitingMale.style.display = 'none';
happyMale.style.display = 'none';
happyFemale.style.display = 'none';

    if(male){
        sadMale.style.display = 'block';
         sadFemale.style.display = 'none'
    }
    else {
        sadFemale.style.display = 'block';
        sadMale.style.display = 'none';
    }
}

if (bmi >= 18.5 && bmi < 25){
meaning.innerHTML = 'which means you are in good shape!'
waiting.style.display = 'none';
waitingFemale.style.display = 'none';
waitingMale.style.display = 'none';
sadMale.style.display = 'none';
sadFemale.style.display = 'none';

    if(male){
        happyMale.style.display = 'block';
         happyFemale.style.display = 'none';
    }
    else {
        happyFemale.style.display = 'block';
        happyMale.style.display = 'none';
    }
}
}
 }

 function handleReset() {
waiting.style.display = 'block';
waitingFemale.style.display = 'none';
waitingMale.style.display = 'none';
happyMale.style.display = 'none';
happyFemale.style.display = 'none';
sadMale.style.display = 'none';
sadFemale.style.display = 'none';
girl.disabled = false;
boy.disabled = false;
boy.style.backgroundColor = 'white';
boy.style.border = 'transparent';
girl.style.backgroundColor = 'white';
girl.style.border = 'transparent';
resultContainer.style.display = 'none'
const weight = document.getElementById("weight");
weight.value = '';
const height = document.getElementById("height");
height.value = '';

 }

