const entryForm = document.querySelector("form");

const placeEntry = document.querySelector(".placeQ");
const quantityEntry = document.querySelector(".quantityQ");
const productEntry = document.querySelector(".productQ");
const reviewSpace = document.querySelector(".bottom-wrapper");
const reviewsList = document.querySelector(".ulReviews");

entryForm.addEventListener("submit", logResults);

function logResults(e) {
	e.preventDefault();
	let placeA = placeEntry.value;
	let quantityA = quantityEntry.value;
	let productA = productEntry.value;
	let firstReview = document.querySelector(".firstLi");
	let reviewEntry = document.createElement("li");

	console.log(
		`I've eaten at ${placeA} about ${quantityA} times and the ${productA} I was served last night was nothing short of horrendous.`
	);
	let newReview = `"I've eaten at ${placeA} about ${quantityA} times and the ${productA} I was served last night was nothing short of horrendous."`;

	reviewsList.insertBefore(reviewEntry, firstReview);
	reviewEntry.textContent = newReview;
}
