const container = document.querySelector(".container");
const fact = document.getElementById("catFact");
const randomizer = document.querySelector(".randomizer");

randomizer.addEventListener("click", getRandomCatFact);
document.addEventListener("keyup", keyEnterEvent);

let fetching = false;
async function getRandomCatFact() {
	container.classList.add("shrunk");
	if (fetching) return;
	fetching = true;
	const response = await fetch(`https://catfact.ninja/fact?max_length=140`);
	const data = await response.json();
	console.log(data.fact);
	container.classList.remove("shrunk");
	fact.innerText = data.fact;
	fetching = false;
}

function keyEnterEvent(e) {
	if (e.key === "Enter") {
		getRandomCatFact();
	}
}
