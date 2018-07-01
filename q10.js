function prints(){
	
	let start =parseInt(document.getElementById("start").value);
	let stop =parseInt(document.getElementById("stop").value);
	let jump = parseInt(document.getElementById("jump").value)
 	for(let i=start; i<=stop; i+=jump){
 		console.log(i);
 		
}
}