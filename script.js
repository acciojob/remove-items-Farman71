//your JS code here. If required.
let cool=document.getElementById("colorSelect")
let btn=document.getElementById("buton")
btn.addEventListener("click",function(){
	let selectedIndex=cool.selectedIndex
		cool.remove(selectedIndex)	
});