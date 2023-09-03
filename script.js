const container = document.querySelector(".container");
const fact = document.getElementById("catFact");
const randomizer = document.querySelector(".randomizer");
getRandomCatFact();
randomizer.addEventListener("click", () => {
	getRandomCatFact();
});
document.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		getRandomCatFact();
	}
});

async function getRandomCatFact() {
	container.classList.add("shrunk");
	fact.innerText = "Nyaw...";
	const response = await fetch(`https://catfact.ninja/fact?max_length=140`);
	const data = await response.json();
	// console.log(data);
	container.classList.remove("shrunk");
	fact.innerText = data.fact;
}
