const 
	StarsNum = Math.floor(Math.random() * 120),
	ShootNum = 0, /* Removed this variable on the function as I only want one star to fly by */
	interval = 2000,

	starsNum = document.getElementsByClassName("stars"),
	shootNum = document.getElementsByClassName("shootingstar"),
	skiesBox = document.getElementById("skies");
	emptyBox = document.getElementById("empty-skies"),

setstars = setInterval(function() { copyShoots(0, 100) }, interval);

clearInterval(setstars);
copyStars(StarsNum);		
//copyShoots(ShootNum, 0, 100)
setstars = setInterval(function() { copyShoots(0, 100) }, interval)

function copyShoots(min, max){
	// for (var i = 0; i < maxShoots; i++){
	// 	const shootCopy = shootNum[i].cloneNode(true);
	// 	emptyBox.appendChild(shootCopy);
	// }	
	for (var i = 0; i < shootNum.length; i++){
		const top = Math.floor(Math.random() * (max - min + 1) + min);	
		shootNum[i].style.cssText = `top:${top}%`;
	}
}

function copyStars(maxStars){
	for (var i = 0; i < maxStars; i++){
		const starsCopy = starsNum[i].cloneNode(true);
		skiesBox.appendChild(starsCopy)
	}

	for (var i = 0; i < starsNum.length; i++){
		const top = Math.floor(Math.random() * 100),
			  left = Math.floor(Math.random() * 100);	
		starsNum[i].style.cssText = `top:${top}%;left:${left}%`;
	}
	console.log(`Total number of Stars: ${starsNum.length}`)
}
