// DOMcheck
window.addEventListener("DOMContentLoaded", function(){

/* Define each list item variable */

var itemType = document.getElementById("dropList");
var whatName = document.getElementById("itemName");
var numberOf = document.getElementById("howMany");
var notes = document.getElementById("textNotes");
var handyVal;

/* radio button info collector */

function checkValue(){
	var handable = document.getElementById("theForm").handy;
	for (var i=0; i<handable.length; i++){
		if (handable[i].checked){
			handyVal = handable[i].value;
		}
	}
}

/* actual local data storage */

function storeData(){
	checkValue();
/* random keygen and gather data for unique local data */
	var id 			= Math.floor(Math.random()*9001);
	var item		= {};
		item.itype  = ["Item Type", itemType.value];
		item.iname  = ["Item Name", whatName.value];
		item.inumber= ["How Many", numberOf.value];
		item.ihand  = ["Carried By Hand", handyVal];
		item.inotes = ["Notes", notes.value];
	
/* stringify for local storage */
	localStorage.setItem (id, JSON.stringify(item)); 	
	alert("Information Submitted");
}
	
/* extract data for show */
function showYou(){
	var createDiv = document.createElement('div');
	createDiv.setAttribute("id", "items");
	var addList = document.createElement('ul');
	createDiv.appendChild(addList);
	document.body.appendChild(createDiv);
// go through local storage and get data .. loop as necessary
	for (i=0, stori=localStorage.length; i<stori; i++){
		var makeli = document.createElement('li');
		addList.appendChild(makeli);
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
// parse data and begin putting into list elements
		var obj = JSON.parse(value);
		var addSubList = document.createElement('ul');
		makeli.appendChild(addSubList);
// export date in pairs		
		for (var n in obj){
			var addSubli = document.createElement('li');
			addSubList.appendChild(addSubli);
			var optSubText = obj[n][0]+" : "+obj[n][1];
			addSubli.innerHTML = optSubText;
		}
	}
}	
/* important buttons for navigation*/

var emptiness = function (){
	localStorage.clear();
}

cleary.addEventListener("click", emptiness);
submit.addEventListener("click", storeData);
displaya.addEventListener("click", showYou);


//End of DOM check
});
