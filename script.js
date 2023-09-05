const container = document.querySelector(".container");
const fact = document.getElementById("catFact");
const randomizer = document.querySelector(".randomizer");

addEL();

function getRandomCatFact() {
	container.classList.add("shrunk");
	removeEL();
	fetch(`https://catfact.ninja/fact?max_length=140`)
		.then((res) => res.json())
		.then((data) => {
			console.log(data.fact);
			container.classList.remove("shrunk");
			fact.innerText = data.fact;
			addEL();
		});
}

function addEL() {
	randomizer.addEventListener("click", getRandomCatFact);
	document.addEventListener("keyup", keyEnterEvent);
}
function keyEnterEvent(e) {
	if (e.key === "Enter") {
		getRandomCatFact();
	}
}
function removeEL() {
	randomizer.removeEventListener("click", getRandomCatFact);
	document.removeEventListener("keyup", keyEnterEvent);
}
