// const number = document.getElementById("number")

// const api = () =>{
//     const url = 'https://ipinfo.io/json?token=605337be2a4436'
// fetch(url)
// .then(response=> response.json())
// .then(result =>{
//     console.log(result.ip, result.country)
//     const country = result.country
//     number.innerHTML = country
// })

// console.log(jsonResponse.ip, jsonResponse.country)
// }

// api()
// const form = document.getElementById("form")  
// const label = document.getElementsByTagName("label")
// const FirstName = document.getElementById("txt") 
// const lastName = document.getElementById("LastName")  
// const country = document.getElementById("country") 
// const phone = document.getElementById("number") 
// const firstLabel = document.getElementById("first")
// const secondLabel = document.getElementById("second")
// const thirdLabel = document.getElementById("third")
// const fourthLabel = document.getElementById("fourth")

//  const arr= [0,1,2,3,4,5,6,7,8,9]
// form.addEventListener('submit', e => {
// 	e.preventDefault();
	
// 	checkInputs();
// });
// function checkInputs(){
//     const name1 = FirstName.value.trim();
//     const name2 = lastName.value.trim();
//     const countries = country.value.trim();
//     const number = country.value.trim();

//     if (name1 == ''){
//         setErrorFor(FirstName,  'not a valid first name')
//     }
// 	else if (name1.length== 2){
// 		setErrorFor(FirstName,  'not a valid first name')
// 	}else{
//         setSuccessFor(name1)
//     }
    	
// 	if(name2 === '') {
// 		setErrorFor(lastName, secondLabel);
// 	} else {
// 		setSuccessFor(name2);
// 	}
	
// 	if(countries  === '') {
// 		setErrorFor(country, thirdLabel);
// 	} else {
// 		setSuccessFor(countries);
// 	}
	
// 	if(number === '') {
// 		setErrorFor(phone, 'Last name cannot be empty ');
// 	}else if (!arr in  number){
//         setErrorFor(phone, 'alphabet and symbols cant be present ');
//     }
//     else{
// 		setSuccessFor(number);
// 	}

// }
// function setErrorFor(input, message) {
// 	const formControl = input.parentElement;
// 	const small = formControl.querySelector('small');
// 	formControl.className = 'form-control error';
// 	small.innerText = message;
// }

// function setSuccessFor(input) {
// 	const formControl = input.parentElement;
// 	formControl.className = 'form-control success';
// }
// checkInputs()
// setErrorFor()
// setSuccessFor()







const form = document.getElementById('form');
const FirstName = document.getElementById('First-Name');
const lastName = document.getElementById('lastName');
// const country = document.getElementById('country');
const number = document.getElementById('number');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() { 

	// trim to remove the whiteSpaces
	const usernameValue = FirstName.value.trim();
	const lastNameValue = lastName.value.trim();
	// const countryValue = country.value.trim();
	const numberValue = number.value.trim();
	const arr = [0,1,2,3,4,5,6,7,8,9];

	if(usernameValue === '') {
		setErrorFor(FirstName, 'Field cannot be empty');
	}
	else if (FirstName.value.length < 4){
		setErrorFor(FirstName, 'Name can not be less than 4');
	}
	 else {
		setSuccessFor(FirstName);
	}
	if(lastNameValue === '') {
		setErrorFor(lastName, 'Field cannot be empty');
	}
	else if (lastName.value.length < 4){
		setErrorFor(lastName, 'Name can not be less than 4');
	}else{
		setSuccessFor(lastName);
	}
	
	// if(countryValue === '') {
	// 	setErrorFor(country, 'Field cannot be empty');
	// } else {
	// 	setSuccessFor(country);
	// }
	
	if(numberValue === '') {
		setErrorFor(number, 'Last name cannot be empty ');
	}  else{
		setSuccessFor(number);
	}
}	

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
function autocomplete(inp, arr) {
	var currentFocus;
	inp.addEventListener("input", function(e) {
		var a, b, i, val = this.value;
		closeAllLists();
		if (!val) { return false;}
		currentFocus = -1;
		
		a = document.createElement("DIV");
		a.setAttribute("id", this.id + "autocomplete-list");
		a.setAttribute("class", "autocomplete-items");
		
		this.parentNode.appendChild(a);
		
		for (i = 0; i < arr.length; i++) {
		  
		  if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
			
			b = document.createElement("DIV");
			
			b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
			b.innerHTML += arr[i].substr(val.length);
			
			b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
			
			b.addEventListener("click", function(e) {
				
				inp.value = this.getElementsByTagName("input")[0].value;
				
				closeAllLists();
			});
			a.appendChild(b);
		  }
		}
	});
	/*execute a function presses a key on the keyboard:*/
	inp.addEventListener("keydown", function(e) {
		var x = document.getElementById(this.id + "autocomplete-list");
		if (x) x = x.getElementsByTagName("div");
		if (e.keyCode == 40) {
		  /*If the arrow DOWN key is pressed,
		  increase the currentFocus variable:*/
		  currentFocus++;
		  /*and and make the current item more visible:*/
		  addActive(x);
		} else if (e.keyCode == 38) { //up
		  /*If the arrow UP key is pressed,
		  decrease the currentFocus variable:*/
		  currentFocus--;
		  /*and and make the current item more visible:*/
		  addActive(x);
		} else if (e.keyCode == 13) {
		  /*If the ENTER key is pressed, prevent the form from being submitted,*/
		  e.preventDefault();
		  if (currentFocus > -1) {
			/*and simulate a click on the "active" item:*/
			if (x) x[currentFocus].click();
		  }
		}
	});

	function addActive(x) {
		/*a function to classify an item as "active":*/
		if (!x) return false;
		/*start by removing the "active" class on all items:*/
		removeActive(x);
		if (currentFocus >= x.length) currentFocus = 0;
		if (currentFocus < 0) currentFocus = (x.length - 1);
		/*add class "autocomplete-active":*/
		x[currentFocus].classList.add("autocomplete-active");
	  }
	  function removeActive(x) {
		/*a function to remove the "active" class from all autocomplete items:*/
		for (var i = 0; i < x.length; i++) {
		  x[i].classList.remove("autocomplete-active");
		}
	  }
	  function closeAllLists(elmnt) {
		/*close all autocomplete lists in the document,
		except the one passed as an argument:*/
		var x = document.getElementsByClassName("autocomplete-items");
		for (var i = 0; i < x.length; i++) {
		  if (elmnt != x[i] && elmnt != inp) {
			x[i].parentNode.removeChild(x[i]);
		  }
		}
	  }
	  /*execute a function when someone clicks in the document:*/
	  document.addEventListener("click", function (e) {
		  closeAllLists(e.target);
	  });
}
var numbers = ["0803","0806","07030","0706","0813","0816","0810","0814","0903","0906",	"024", "054", "055", "059", "025","0802","0902","0808","0908","0812","0701","0901","0907","027", "057", "026", "056","0805","0807","0705","0815","0811","0905","0809","0818","0817","0909","0908","0707"]



 var mtn = [
	"0803","0806","07030","0706","0813","0816","0810","0814","0903","0906",	"024", "054", "055", "059", "025"
 ];
 var airtel =[
	  "0802","0902","0808","0908","0812","0701","0901","0907","027", "057", "026", "056"
   ];
var glo =[
	  "0805","0807","0705","0815","0811","0905"
   ];
var nineMobile =[
	  "0809","0818","0817","0909","0908"
   ];
var	zoom = [ "0707"];

 autocomplete(document.getElementById("number"), numbers);


// changing images based on the phone number

 const image = document.getElementById("mtn")
function numImage(){
if(mtn.indexOf(number.value)>-1){
	document.getElementById('mtn').src="./images/MTN-Logo-1024x576.jpg";
}else if(airtel.indexOf(number.value)>-1){
	document.getElementById('mtn').src="./images/Airtel.png";
}
else if (glo.indexOf(number.value)>-1){
	document.getElementById('mtn').src="./images/Glo_button.png";
}
else if (nineMobile.indexOf(number.value)>-1){
	document.getElementById('mtn').src="./images/9mobile.png";
}
else if (zoom.indexOf(number.value)>-1){
	document.getElementById('mtn').src="./images/zoom.png";

}else{
	console.log("try later")
}
}
numImage()
// function setImageAs(input, image){
// 	const images = img.parentElement;
// 	const small = formControl.querySelector('small');
// 	formControl.className = 'form-control error';
// 	small.innerText = message;
// }






















